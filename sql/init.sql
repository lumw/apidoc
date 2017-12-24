ALTER USER 'root'@'localhost' IDENTIFIED BY '?Echo!6590';

create databse poseidon;

create user 'app_user'@'%' identified by '?Echo!6590';
grant all on mysql.* to 'app_user'@'%';
grant all on poseidon.* to 'app_user'@'%';

flush privileges;

drop table user;
create table user(
   user_id int UNSIGNED NOT  NULL auto_increment comment  '用户唯一标识',
   user_name VARCHAR(100)  comment  '用户名',
   wechat_id VARCHAR(40) comment  '微信ID',
   wechat_name VARCHAR(40)  comment  '微信昵称',
   wechat_head_img VARCHAR(200)  comment  '用户微信头像url',
   gender int comment  '性别 0-女 1-男',
   birthday DATETIME comment  '生日',
   email VARCHAR(40) comment  '邮箱',
   phone_number VARCHAR(40) comment  '联系电话',
   address VARCHAR(100) comment  '地址',
   province VARCHAR(50) comment  '省份',
   city VARCHAR(50) comment  '城市',
   rec_create_dt_tm DATETIME comment  '用户创建时间',
   rec_upt_dt_tm DATETIME comment  '用户最近一次更新时间',
   last_login_dt_tm DATETIME comment  '用户最近一次登陆时间',
   rec_create_appro int default 1 comment  '用户创建方式  1-微信',
   invitation_code VARCHAR(50)  comment  '邀请码',
   invitation_code_used_cnt int UNSIGNED comment  '邀请码已使用次数',
   doll_count_total int UNSIGNED default 0 comment  '历史总计抓中娃娃次数',
   PRIMARY KEY (user_id),
   key(user_id, wechat_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
alter table user add user_level int UNSIGNED default 0 comment '用户等级';
alter table user add im_private_key VARCHAR(400) comment '用户使用im聊天的私钥';
alter table user add im_private_key_expire_dt_tm DATETIME comment  'im私钥过期时间';


drop table user_doll_wealth;
create table user_doll_wealth(
   user_id int UNSIGNED comment  '用户唯一标识',
   doll_id int UNSIGNED comment  '娃娃编号',
   doll_cnt int UNSIGNED comment  '娃娃个数',
   PRIMARY KEY (user_id, doll_id),
   key(user_id, doll_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

drop table account;
create table account(
   account_id int UNSIGNED NOT NULL auto_increment comment  '账户唯一标识',
   account_type int UNSIGNED NOT NULL comment  '账户类型',
   user_id int UNSIGNED NOT NULL comment  '用户唯一标识',
   balance INT comment  '余额',
   rec_creat_dt_tm DATETIME comment  '账户创建时间',
   rec_upt_dt_tm DATETIME comment  '账户最近一次更新时间',
   status int comment  '账户状态 -1-冻结 1-正常',
   PRIMARY KEY (account_id),
   key(account_id, user_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;


drop table operation;
create table operation(
   operation_id int UNSIGNED  NOT NULL auto_increment comment '每局游戏唯一标识',
   user_id int UNSIGNED  NOT NULL comment '用户唯一标识', 
   account_id int UNSIGNED NOT NULL comment '账户唯一标识',
   ufocatcher_id VARCHAR(4) NOT NULL comment '娃娃机编号',
   doll_id int NOT NULL comment '娃娃编号', 
   action_code VARCHAR(4) NOT NULL comment '操作编码',
   opt_result int NOT NULL comment '游戏结果  0-失败  1-成功  -1-初始状态',
   opt_status int NOT NULL comment '游戏状态  0-初始状态  1-游戏中  2-游戏结束',
   earned_score int default 0 NOT NULL comment '获得的积分',
   losted_curcy int NOT NULL comment '消耗的游戏币',
   rec_create_dt_tm DATETIME comment '游戏开始时间',
   rec_end_dt_tm DATETIME comment '游戏结束时间',
   PRIMARY KEY (operation_id),
   key(operation_id, user_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
ALTER TABLE operation MODIFY rec_create_dt_tm DATETIME(3) comment '游戏开始时间';
ALTER TABLE operation MODIFY rec_end_dt_tm DATETIME(3) comment '游戏结束时间';
alter table operation add result_noti_dt_tm DATETIME(3) comment '获得游戏结果时间';

--仅包含成功记录的view
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

--娃娃列表
drop table doll;
create table doll(
   doll_id  int UNSIGNED NOT NULL auto_increment comment '娃娃编号',
   doll_name VARCHAR(50) NOT NULL comment '娃娃名称',
   doll_img_url VARCHAR(200) NOT NULL comment '娃娃图片url',
   rec_cteate_dt_tm DATETIME comment '数据创建时间',
   status INT comment '娃娃状态 0-不可用  1-可用',
   PRIMARY KEY (doll_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
alter table doll add doll_desc VARCHAR(200) comment '娃娃描述';


--娃娃机列表
drop table ufocatcher;
create table ufocatcher(
   catcher_id VARCHAR(8) NOT NULL comment '娃娃机编号',
   doll_id int UNSIGNED NOT NULL comment '娃娃编号',
   last_login_dt_tm DATETIME comment '娃娃机上次登录时间',
   status INT comment '娃娃机状态',
   game_diff_level INT comment '游戏难度',
   game_score INT comment '每局游戏成功后获取的积分',
   game_curcy INT comment '每局游戏消耗的游戏币个数',
   fornt_camera_url VARCHAR(200) comment '正面摄像头直播url',
   lateral_camera_url VARCHAR(200) comment '侧面摄像头直播url',
   PRIMARY KEY (catcher_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
alter table ufocatcher add chat_group_id VARCHAR(50) comment  '聊天室群组ID';


--收货地址
drop table express_address;
create table express_address(
   user_id INT UNSIGNED  NOT NULL comment  '用户唯一标识',
   consignee_name  	VARCHAR(25) NOT  NULL comment  '收货人姓名',
   consignee_mobi  	VARCHAR(20) comment '收货人联系电话',
   consignee_tel   	VARCHAR(30)  comment   '固定电话',
   consignee_prov 	VARCHAR(50) 	NOT NULL 	comment '省份',
   consignee_city 	VARCHAR(50) NOT NULL 	comment '城市',
   consignee_dist 	VARCHAR(50) NOT NULL 	comment '地区',
   consignee_addr 	VARCHAR(100) 		NOT NULL comment '收货人详细地址',
   consignee_post_cde VARCHAR(50)	comment '邮政编码',
   default_flag INT comment '是否默认地址 1-是 0-否',
   sequence INT NOT NULL comment '地址编号，同一收货人下唯一',
   PRIMARY KEY (user_id, sequence),
   key(user_id, sequence)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;


--积分明细
drop table trade_score;
create table trade_score(
   trade_id INT UNSIGNED  NOT NULL auto_increment comment  '记录id',
   user_id INT UNSIGNED  NOT NULL comment  '用户唯一标识',
   account_id INT UNSIGNED NOT NULL comment  '账户唯一标识',
   previous_score INT NOT NULL comment   '积分变动之前的数值',
   current_score 	INT NOT NULL comment '积分变动之后的数值',
   quantity INT NOT NULL comment '变动的数值',
   change_reason 	VARCHAR(50) NOT NULL 	comment '积分变动原因',
   rec_create_dt_tm DATETIME comment '积分变动时间',
   PRIMARY KEY (trade_id),
   key(trade_id, user_id, account_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;


--游戏币明细
drop table trade_currency;
create table trade_currency(
   trade_id INT UNSIGNED  NOT NULL auto_increment comment  '记录id',
   user_id INT UNSIGNED  NOT NULL comment  '用户唯一标识',
   account_id INT UNSIGNED NOT NULL comment  '账户唯一标识',
   previous_score INT NOT NULL comment   '游戏币变动之前的数值',
   current_score 	INT NOT NULL comment '游戏币变动之后的数值',
   quantity INT NOT NULL comment '变动的数值',
   change_reason 	VARCHAR(50) NOT NULL 	comment '游戏币变动原因',
   rec_create_dt_tm DATETIME comment '游戏币变动时间',
   PRIMARY KEY (trade_id),
   key(trade_id, user_id, account_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;



--充值套餐
drop table top_up_combo;
create table top_up_combo(
   combo_id INT UNSIGNED  NOT NULL auto_increment comment  '套餐ID',
   combo_name VARCHAR(200)  NOT NULL comment  '套餐名称',
   combo_desc VARCHAR(1000) NOT NULL comment  '套餐描述',
   total_fee INT UNSIGNED NOT NULL comment   '充值金额',
   currency  INT UNSIGNED NOT NULL comment '应该获得的游戏币个数',
   addi_currency  INT UNSIGNED NOT NULL comment '额外奖励的游戏币个数',
   rec_create_dt_tm DATETIME comment '套餐创建时间',
   rec_efftive_dt_tm DATETIME comment '套餐生效时间',
   rec_inefftive_dt_tm DATETIME comment '套餐失效时间',
   combo_status INT NOT NULL comment '套餐状态 0-无效 1有效',
   PRIMARY KEY (combo_id),
   key(combo_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;