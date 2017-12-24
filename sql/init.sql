ALTER USER 'root'@'localhost' IDENTIFIED BY '?Echo!6590';

create databse poseidon;

create user 'app_user'@'%' identified by '?Echo!6590';
grant all on mysql.* to 'app_user'@'%';
grant all on poseidon.* to 'app_user'@'%';

flush privileges;

drop table user;
create table user(
   user_id int UNSIGNED NOT  NULL auto_increment comment  '�û�Ψһ��ʶ',
   user_name VARCHAR(100)  comment  '�û���',
   wechat_id VARCHAR(40) comment  '΢��ID',
   wechat_name VARCHAR(40)  comment  '΢���ǳ�',
   wechat_head_img VARCHAR(200)  comment  '�û�΢��ͷ��url',
   gender int comment  '�Ա� 0-Ů 1-��',
   birthday DATETIME comment  '����',
   email VARCHAR(40) comment  '����',
   phone_number VARCHAR(40) comment  '��ϵ�绰',
   address VARCHAR(100) comment  '��ַ',
   province VARCHAR(50) comment  'ʡ��',
   city VARCHAR(50) comment  '����',
   rec_create_dt_tm DATETIME comment  '�û�����ʱ��',
   rec_upt_dt_tm DATETIME comment  '�û����һ�θ���ʱ��',
   last_login_dt_tm DATETIME comment  '�û����һ�ε�½ʱ��',
   rec_create_appro int default 1 comment  '�û�������ʽ  1-΢��',
   invitation_code VARCHAR(50)  comment  '������',
   invitation_code_used_cnt int UNSIGNED comment  '��������ʹ�ô���',
   doll_count_total int UNSIGNED default 0 comment  '��ʷ�ܼ�ץ�����޴���',
   PRIMARY KEY (user_id),
   key(user_id, wechat_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
alter table user add user_level int UNSIGNED default 0 comment '�û��ȼ�';
alter table user add im_private_key VARCHAR(400) comment '�û�ʹ��im�����˽Կ';
alter table user add im_private_key_expire_dt_tm DATETIME comment  'im˽Կ����ʱ��';


drop table user_doll_wealth;
create table user_doll_wealth(
   user_id int UNSIGNED comment  '�û�Ψһ��ʶ',
   doll_id int UNSIGNED comment  '���ޱ��',
   doll_cnt int UNSIGNED comment  '���޸���',
   PRIMARY KEY (user_id, doll_id),
   key(user_id, doll_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

drop table account;
create table account(
   account_id int UNSIGNED NOT NULL auto_increment comment  '�˻�Ψһ��ʶ',
   account_type int UNSIGNED NOT NULL comment  '�˻�����',
   user_id int UNSIGNED NOT NULL comment  '�û�Ψһ��ʶ',
   balance INT comment  '���',
   rec_creat_dt_tm DATETIME comment  '�˻�����ʱ��',
   rec_upt_dt_tm DATETIME comment  '�˻����һ�θ���ʱ��',
   status int comment  '�˻�״̬ -1-���� 1-����',
   PRIMARY KEY (account_id),
   key(account_id, user_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;


drop table operation;
create table operation(
   operation_id int UNSIGNED  NOT NULL auto_increment comment 'ÿ����ϷΨһ��ʶ',
   user_id int UNSIGNED  NOT NULL comment '�û�Ψһ��ʶ', 
   account_id int UNSIGNED NOT NULL comment '�˻�Ψһ��ʶ',
   ufocatcher_id VARCHAR(4) NOT NULL comment '���޻����',
   doll_id int NOT NULL comment '���ޱ��', 
   action_code VARCHAR(4) NOT NULL comment '��������',
   opt_result int NOT NULL comment '��Ϸ���  0-ʧ��  1-�ɹ�  -1-��ʼ״̬',
   opt_status int NOT NULL comment '��Ϸ״̬  0-��ʼ״̬  1-��Ϸ��  2-��Ϸ����',
   earned_score int default 0 NOT NULL comment '��õĻ���',
   losted_curcy int NOT NULL comment '���ĵ���Ϸ��',
   rec_create_dt_tm DATETIME comment '��Ϸ��ʼʱ��',
   rec_end_dt_tm DATETIME comment '��Ϸ����ʱ��',
   PRIMARY KEY (operation_id),
   key(operation_id, user_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
ALTER TABLE operation MODIFY rec_create_dt_tm DATETIME(3) comment '��Ϸ��ʼʱ��';
ALTER TABLE operation MODIFY rec_end_dt_tm DATETIME(3) comment '��Ϸ����ʱ��';
alter table operation add result_noti_dt_tm DATETIME(3) comment '�����Ϸ���ʱ��';

--�������ɹ���¼��view
drop view operation_sucess_v;
create view operation_sucess_v as 
	select 
		operation_id as operation_id, 
		user_id as user_id, 
		account_id as account_id, 
		ufocatcher_id as ufocatcher_id,
		doll_id as doll_id,
		earned_score as earned_score,
		losted_curcy as losted_curcy,
		rec_create_dt_tm as rec_create_dt_tm,
		rec_end_dt_tm as rec_end_dt_tm 
	from operation
		where operation.opt_result = 1;

--�����б�
drop table doll;
create table doll(
   doll_id  int UNSIGNED NOT NULL auto_increment comment '���ޱ��',
   doll_name VARCHAR(50) NOT NULL comment '��������',
   doll_img_url VARCHAR(200) NOT NULL comment '����ͼƬurl',
   rec_cteate_dt_tm DATETIME comment '���ݴ���ʱ��',
   status INT comment '����״̬ 0-������  1-����',
   PRIMARY KEY (doll_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
alter table doll add doll_desc VARCHAR(200) comment '��������';


--���޻��б�
drop table ufocatcher;
create table ufocatcher(
   catcher_id VARCHAR(8) NOT NULL comment '���޻����',
   doll_id int UNSIGNED NOT NULL comment '���ޱ��',
   last_login_dt_tm DATETIME comment '���޻��ϴε�¼ʱ��',
   status INT comment '���޻�״̬',
   game_diff_level INT comment '��Ϸ�Ѷ�',
   game_score INT comment 'ÿ����Ϸ�ɹ����ȡ�Ļ���',
   game_curcy INT comment 'ÿ����Ϸ���ĵ���Ϸ�Ҹ���',
   fornt_camera_url VARCHAR(200) comment '��������ͷֱ��url',
   lateral_camera_url VARCHAR(200) comment '��������ͷֱ��url',
   PRIMARY KEY (catcher_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
alter table ufocatcher add chat_group_id VARCHAR(50) comment  '������Ⱥ��ID';


--�ջ���ַ
drop table express_address;
create table express_address(
   user_id INT UNSIGNED  NOT NULL comment  '�û�Ψһ��ʶ',
   consignee_name  	VARCHAR(25) NOT  NULL comment  '�ջ�������',
   consignee_mobi  	VARCHAR(20) comment '�ջ�����ϵ�绰',
   consignee_tel   	VARCHAR(30)  comment   '�̶��绰',
   consignee_prov 	VARCHAR(50) 	NOT NULL 	comment 'ʡ��',
   consignee_city 	VARCHAR(50) NOT NULL 	comment '����',
   consignee_dist 	VARCHAR(50) NOT NULL 	comment '����',
   consignee_addr 	VARCHAR(100) 		NOT NULL comment '�ջ�����ϸ��ַ',
   consignee_post_cde VARCHAR(50)	comment '��������',
   default_flag INT comment '�Ƿ�Ĭ�ϵ�ַ 1-�� 0-��',
   sequence INT NOT NULL comment '��ַ��ţ�ͬһ�ջ�����Ψһ',
   PRIMARY KEY (user_id, sequence),
   key(user_id, sequence)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;


--������ϸ
drop table trade_score;
create table trade_score(
   trade_id INT UNSIGNED  NOT NULL auto_increment comment  '��¼id',
   user_id INT UNSIGNED  NOT NULL comment  '�û�Ψһ��ʶ',
   account_id INT UNSIGNED NOT NULL comment  '�˻�Ψһ��ʶ',
   previous_score INT NOT NULL comment   '���ֱ䶯֮ǰ����ֵ',
   current_score 	INT NOT NULL comment '���ֱ䶯֮�����ֵ',
   quantity INT NOT NULL comment '�䶯����ֵ',
   change_reason 	VARCHAR(50) NOT NULL 	comment '���ֱ䶯ԭ��',
   rec_create_dt_tm DATETIME comment '���ֱ䶯ʱ��',
   PRIMARY KEY (trade_id),
   key(trade_id, user_id, account_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;


--��Ϸ����ϸ
drop table trade_currency;
create table trade_currency(
   trade_id INT UNSIGNED  NOT NULL auto_increment comment  '��¼id',
   user_id INT UNSIGNED  NOT NULL comment  '�û�Ψһ��ʶ',
   account_id INT UNSIGNED NOT NULL comment  '�˻�Ψһ��ʶ',
   previous_score INT NOT NULL comment   '��Ϸ�ұ䶯֮ǰ����ֵ',
   current_score 	INT NOT NULL comment '��Ϸ�ұ䶯֮�����ֵ',
   quantity INT NOT NULL comment '�䶯����ֵ',
   change_reason 	VARCHAR(50) NOT NULL 	comment '��Ϸ�ұ䶯ԭ��',
   rec_create_dt_tm DATETIME comment '��Ϸ�ұ䶯ʱ��',
   PRIMARY KEY (trade_id),
   key(trade_id, user_id, account_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;



--��ֵ�ײ�
drop table top_up_combo;
create table top_up_combo(
   combo_id INT UNSIGNED  NOT NULL auto_increment comment  '�ײ�ID',
   combo_name VARCHAR(200)  NOT NULL comment  '�ײ�����',
   combo_desc VARCHAR(1000) NOT NULL comment  '�ײ�����',
   total_fee INT UNSIGNED NOT NULL comment   '��ֵ���',
   currency  INT UNSIGNED NOT NULL comment 'Ӧ�û�õ���Ϸ�Ҹ���',
   addi_currency  INT UNSIGNED NOT NULL comment '���⽱������Ϸ�Ҹ���',
   rec_create_dt_tm DATETIME comment '�ײʹ���ʱ��',
   rec_efftive_dt_tm DATETIME comment '�ײ���Чʱ��',
   rec_inefftive_dt_tm DATETIME comment '�ײ�ʧЧʱ��',
   combo_status INT NOT NULL comment '�ײ�״̬ 0-��Ч 1��Ч',
   PRIMARY KEY (combo_id),
   key(combo_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;