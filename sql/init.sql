ALTER USER 'root'@'localhost' IDENTIFIED BY '?Echo!6590';

CREATE databse poseidon;

CREATE USER 'app_user'@'%'
  IDENTIFIED BY '?Echo!6590';
GRANT ALL ON mysql.* TO 'app_user'@'%';
GRANT ALL ON poseidon.* TO 'app_user'@'%';

FLUSH PRIVILEGES;

DROP TABLE user;
CREATE TABLE user (
  user_id                  INT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '用户唯一标识',
  user_name                VARCHAR(100) COMMENT '用户名',
  wechat_id                VARCHAR(40) COMMENT '微信ID',
  wechat_name              VARCHAR(40) COMMENT '微信昵称',
  wechat_head_img          VARCHAR(200) COMMENT '用户微信头像url',
  gender                   INT COMMENT '性别 0-女 1-男',
  birthday                 DATETIME COMMENT '生日',
  email                    VARCHAR(40) COMMENT '邮箱',
  phone_number             VARCHAR(40) COMMENT '联系电话',
  address                  VARCHAR(100) COMMENT '地址',
  province                 VARCHAR(50) COMMENT '省份',
  city                     VARCHAR(50) COMMENT '城市',
  rec_create_dt_tm         DATETIME COMMENT '用户创建时间',
  rec_upt_dt_tm            DATETIME COMMENT '用户最近一次更新时间',
  last_login_dt_tm         DATETIME COMMENT '用户最近一次登陆时间',
  rec_create_appro         INT DEFAULT 1 COMMENT '用户创建方式  1-微信',
  invitation_code          VARCHAR(50) COMMENT '邀请码',
  invitation_code_used_cnt INT UNSIGNED COMMENT '邀请码已使用次数',
  doll_count_total         INT UNSIGNED          DEFAULT 0 COMMENT '历史总计抓中娃娃次数',
  PRIMARY KEY (user_id),
  KEY (user_id, wechat_id)
)
ENGINE = InnoDB DEFAULT CHARSET = utf8;
ALTER TABLE user ADD user_level INT UNSIGNED DEFAULT 0 COMMENT '用户等级';
ALTER TABLE user ADD im_private_key VARCHAR(400) COMMENT '用户使用im聊天的私钥';
ALTER TABLE user ADD im_private_key_expire_dt_tm DATETIME COMMENT 'im私钥过期时间';
ALTER TABLE user ADD user_status INT UNSIGNED DEFAULT 1 COMMENT '用户状态';
ALTER TABLE user ADD last_signin_dt_tm DATETIME COMMENT '用户上次签到时间';
##为了处理微信昵称中带有表情符号的问题
ALTER TABLE user
  CHANGE wechat_name wechat_name VARCHAR(100)
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;



DROP TABLE user_doll_wealth;
CREATE TABLE `user_doll_wealth` (
  `user_id`          INT(10) UNSIGNED NOT NULL
  COMMENT '用户唯一标识',
  `doll_id`          INT(10) UNSIGNED NOT NULL
  COMMENT '娃娃编号',
  `doll_cnt`         INT(10) UNSIGNED DEFAULT NULL
  COMMENT '娃娃个数',
  `rec_create_dt_tm` DATETIME         NOT NULL
  COMMENT '记录创建时间',
  `rec_state`        int         DEFAULT NULL
  COMMENT '娃娃状态',
  PRIMARY KEY (`user_id`, `doll_id`, `rec_create_dt_tm`),
  KEY `user_id` (`user_id`, `doll_id`)
)
  ENGINE = InnoDB
  DEFAULT CHARSET = utf8;

DROP TABLE account;
CREATE TABLE account (
  account_id      INT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '账户唯一标识',
  account_type    INT UNSIGNED NOT NULL COMMENT '账户类型',
  user_id         INT UNSIGNED NOT NULL COMMENT '用户唯一标识',
  balance         INT COMMENT '余额',
  rec_creat_dt_tm DATETIME COMMENT '账户创建时间',
  rec_upt_dt_tm   DATETIME COMMENT '账户最近一次更新时间',
  status          INT COMMENT '账户状态 -1-冻结 1-正常',
  PRIMARY KEY (account_id),
  KEY (account_id, user_id)
)
  ENGINE = InnoDB
  DEFAULT CHARSET = utf8;


DROP TABLE operation;
CREATE TABLE operation (
  operation_id     INT UNSIGNED  NOT NULL AUTO_INCREMENT COMMENT '每局游戏唯一标识',
  user_id          INT UNSIGNED  NOT NULL COMMENT '用户唯一标识',
  account_id       INT UNSIGNED  NOT NULL COMMENT '账户唯一标识',
  ufocatcher_id    VARCHAR(4)    NOT NULL COMMENT '娃娃机编号',
  doll_id          INT           NOT NULL COMMENT '娃娃编号',
  action_code      VARCHAR(4)    NOT NULL COMMENT '操作编码',
  opt_result       INT           NOT NULL COMMENT '游戏结果  0-失败  1-成功  -1-初始状态',
  opt_status       INT           NOT NULL COMMENT '游戏状态  0-初始状态  1-游戏中  2-游戏结束',
  earned_score     INT DEFAULT 0 NOT NULL COMMENT '获得的积分',
  losted_curcy     INT           NOT NULL COMMENT '消耗的游戏币',
  rec_create_dt_tm DATETIME COMMENT '游戏开始时间',
  rec_end_dt_tm    DATETIME COMMENT '游戏结束时间',
  PRIMARY KEY (operation_id),
  KEY (operation_id, user_id)
)
  ENGINE = InnoDB
  DEFAULT CHARSET = utf8;
ALTER TABLE operation MODIFY rec_create_dt_tm DATETIME(3) COMMENT '游戏开始时间';
ALTER TABLE operation MODIFY rec_end_dt_tm DATETIME(3) COMMENT '游戏结束时间';
ALTER TABLE operation ADD result_noti_dt_tm DATETIME(3) COMMENT '获得游戏结果时间';

##仅包含成功记录的view
DROP VIEW operation_sucess_v;
CREATE VIEW operation_sucess_v AS
  SELECT
    operation_id     AS operation_id,
    user_id          AS user_id,
    account_id       AS account_id,
    ufocatcher_id    AS ufocatcher_id,
    doll_id          AS doll_id,
    earned_score     AS earned_score,
    losted_curcy     AS losted_curcy,
    rec_create_dt_tm AS rec_create_dt_tm,
    rec_end_dt_tm    AS rec_end_dt_tm
  FROM operation
  WHERE operation.opt_result = 1;

##娃娃列表
DROP TABLE doll;
CREATE TABLE doll (
  doll_id          INT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '娃娃编号',
  doll_name        VARCHAR(50)  NOT NULL COMMENT '娃娃名称',
  doll_img_url     VARCHAR(200) NOT NULL COMMENT '娃娃图片url',
  rec_cteate_dt_tm DATETIME COMMENT '数据创建时间',
  status           INT COMMENT '娃娃状态 0-不可用  1-可用',
  PRIMARY KEY (doll_id)
)
  ENGINE = InnoDB
  DEFAULT CHARSET = utf8;
ALTER TABLE doll ADD doll_desc VARCHAR(200) COMMENT '娃娃描述';

##娃娃机列表
DROP TABLE ufocatcher;
CREATE TABLE ufocatcher (
  catcher_id         VARCHAR(8)   NOT NULL COMMENT '娃娃机编号',
  doll_id            INT UNSIGNED NOT NULL COMMENT '娃娃编号',
  last_login_dt_tm   DATETIME COMMENT '娃娃机上次登录时间',
  status             INT COMMENT '娃娃机状态',
  game_diff_level    INT COMMENT '游戏难度',
  game_score         INT COMMENT '每局游戏成功后获取的积分',
  game_curcy         INT COMMENT '每局游戏消耗的游戏币个数',
  fornt_camera_url   VARCHAR(200) COMMENT '正面摄像头直播url',
  lateral_camera_url VARCHAR(200) COMMENT '侧面摄像头直播url',
  PRIMARY KEY (catcher_id)
)
  ENGINE = InnoDB
  DEFAULT CHARSET = utf8;
ALTER TABLE ufocatcher ADD chat_group_id VARCHAR(50) COMMENT '聊天室群组ID';

##收货地址
DROP TABLE express_address;
CREATE TABLE express_address (
  user_id            INT UNSIGNED NOT NULL COMMENT '用户唯一标识',
  consignee_name     VARCHAR(25)  NOT NULL COMMENT '收货人姓名',
  consignee_mobi     VARCHAR(20) COMMENT '收货人联系电话',
  consignee_tel      VARCHAR(30) COMMENT '固定电话',
  consignee_prov     VARCHAR(50)  NOT NULL COMMENT '省份',
  consignee_city     VARCHAR(50)  NOT NULL COMMENT '城市',
  consignee_dist     VARCHAR(50)  NOT NULL COMMENT '地区',
  consignee_addr     VARCHAR(100) NOT NULL COMMENT '收货人详细地址',
  consignee_post_cde VARCHAR(50) COMMENT '邮政编码',
  default_flag       INT COMMENT '是否默认地址 1-是 0-否',
  sequence           INT          NOT NULL COMMENT '地址编号，同一收货人下唯一',
  PRIMARY KEY (user_id, sequence),
  KEY (user_id, sequence)
)
  ENGINE = InnoDB
  DEFAULT CHARSET = utf8;

##积分明细
DROP TABLE trade_score;
CREATE TABLE trade_score (
  trade_id         INT UNSIGNED NOT NULL AUTO_INCREMENT  COMMENT '记录id',
  user_id          INT UNSIGNED NOT NULL  COMMENT '用户唯一标识',
  account_id       INT UNSIGNED NOT NULL  COMMENT '账户唯一标识',
  previous_score   INT          NOT NULL  COMMENT '积分变动之前的数值',
  current_score    INT          NOT NULL   COMMENT '积分变动之后的数值',
  quantity         INT          NOT NULL  COMMENT '变动的数值',
  change_reason    VARCHAR(50)  NOT NULL  COMMENT '积分变动原因',
  rec_create_dt_tm DATETIME COMMENT '积分变动时间',
  PRIMARY KEY (trade_id),
  KEY (trade_id, user_id, account_id)
)
  ENGINE = InnoDB
  DEFAULT CHARSET = utf8;

##游戏币明细
DROP TABLE trade_currency;
CREATE TABLE trade_currency (
  trade_id         INT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '记录id',
  user_id          INT UNSIGNED NOT NULL COMMENT '用户唯一标识',
  account_id       INT UNSIGNED NOT NULL COMMENT '账户唯一标识',
  previous_score   INT          NOT NULL COMMENT '游戏币变动之前的数值',
  current_score    INT          NOT NULL COMMENT '游戏币变动之后的数值',
  quantity         INT          NOT NULL COMMENT '变动的数值',
  change_reason    VARCHAR(50)  NOT NULL COMMENT '游戏币变动原因',
  rec_create_dt_tm DATETIME COMMENT '游戏币变动时间',
  PRIMARY KEY (trade_id),
  KEY (trade_id, user_id, account_id)
)
  ENGINE = InnoDB
  DEFAULT CHARSET = utf8;

##充值套餐
DROP TABLE top_up_combo;
CREATE TABLE top_up_combo (
  combo_id            INT UNSIGNED  NOT NULL AUTO_INCREMENT COMMENT '套餐ID',
  combo_name          VARCHAR(200)  NOT NULL COMMENT '套餐名称',
  combo_desc          VARCHAR(1000) NOT NULL COMMENT '套餐描述',
  total_fee           INT UNSIGNED  NOT NULL COMMENT '充值金额',
  currency            INT UNSIGNED  NOT NULL COMMENT '应该获得的游戏币个数',
  addi_currency       INT UNSIGNED  NOT NULL COMMENT '额外奖励的游戏币个数',
  rec_create_dt_tm    DATETIME COMMENT '套餐创建时间',
  rec_efftive_dt_tm   DATETIME COMMENT '套餐生效时间',
  rec_inefftive_dt_tm DATETIME COMMENT '套餐失效时间',
  combo_status        INT           NOT NULL COMMENT '套餐状态 0-无效 1有效',
  PRIMARY KEY (combo_id),
  KEY (combo_id)
)
  ENGINE = InnoDB
  DEFAULT CHARSET = utf8;

##充值历史记录表
DROP TABLE payment_trade;
CREATE TABLE payment_trade (
  trade_id            VARCHAR(100) NOT NULL
  COMMENT '交易流水(系统内部流水)',
  user_id             INT UNSIGNED NOT NULL  NOT NULL
  COMMENT '用户ID',
  account_id          INT UNSIGNED NOT NULL  NOT NULL
  COMMENT '账户ID',
  total_fee           INT UNSIGNED NOT NULL
  COMMENT '充值金额',
  payment_type VARCHAR(100) NOT NULL
  COMMENT '充值类型',
  payment_channel VARCHAR(100) NOT NULL
  COMMENT '充值渠道',
  combo_id            INT UNSIGNED COMMENT '套餐ID',
  currency            INT UNSIGNED NOT NULL
  COMMENT '应该获得的游戏币个数',
  addi_currency       INT UNSIGNED NOT NULL
  COMMENT '额外奖励的游戏币个数',
  rec_create_dt_tm    DATETIME NOT NULL COMMENT '交易创建时间',
  rec_end_dt_tm       DATETIME COMMENT '交易结束时间',
  trade_status        VARCHAR(50)  NOT NULL DEFAULT 'NOTPAY'
  COMMENT '交易状态',
  payment_platform_id VARCHAR(100) COMMENT '支付平台交易流水',
  PRIMARY KEY (trade_id),
  KEY (trade_id, user_id, payment_platform_id)
)
  ENGINE = InnoDB
  DEFAULT CHARSET = utf8;

##系统参数配置
DROP TABLE sys_param;
CREATE TABLE sys_param (
  sys_param_id         VARCHAR(200)  NOT NULL  COMMENT '参数名称',
  combo_name           VARCHAR(200)  NOT NULL  COMMENT '参数值',
  rec_create_dt_tm    DATETIME COMMENT '创建时间',
  PRIMARY KEY (sys_param_id),
  KEY (sys_param_id)
)
  ENGINE = InnoDB
  DEFAULT CHARSET = utf8;


##快递信息表
DROP TABLE express_service;
CREATE TABLE express_service (
  sequence            VARCHAR(100) NOT NULL  COMMENT '交易流水(系统内部流水)',
  user_id             INT UNSIGNED NOT NULL  COMMENT '用户ID',
  type                 VARCHAR(100)  NOT NULL  COMMENT '邮寄内容类型',
  company_name        VARCHAR(100)  COMMENT '快递公司名称',
  express_fee         INT UNSIGNED NOT NULL DEFAULT 0  COMMENT '快递费用',
  doll_detail         VARCHAR(1024) NOT NULL COMMENT '邮寄的娃娃信息',
  express_address    VARCHAR(1024)  COMMENT '快递地址信息',
  express_status      INT UNSIGNED NOT NULL DEFAULT 1 COMMENT '快递状态',
  express_number      VARCHAR(200) NOT NULL COMMENT '快递单号',
  rec_create_dt_tm    DATETIME     NOT NULL  COMMENT '创建时间',
  PRIMARY KEY (sequence),
  KEY (sequence, user_id)
)
  ENGINE = InnoDB
  DEFAULT CHARSET = utf8;

ALTER TABLE express_service
  MODIFY express_number VARCHAR(200) COMMENT '快递单号';
ALTER TABLE express_service
  MODIFY sequence INT UNSIGNED NOT NULL AUTO_INCREMENT
  COMMENT '交易流水(系统内部流水)';
ALTER TABLE express_service
  MODIFY doll_detail TEXT  COMMENT '邮寄的娃娃信息';