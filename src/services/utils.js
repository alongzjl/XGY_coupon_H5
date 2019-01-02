/**
 * @file 数据埋点
 * @author gaoyang
 * @date 2018-05-24
 */
import 'whatwg-fetch'

//商场建站
window.rymbp=(()=>{
  return {
    //操作
    UserActionEvent:{
      UA_UNKNOWN            : 0,  // 未知
      UA_OTHER              : 1, // 其他
      UA_PLAY               : 2,  // 播放/页面进入
      UA_END                : 3,  // 结束/页面离开
      UA_CLICK              : 4,  // 点击
      UA_TOUCH_SCROLL       : 5,  // 滑动
      UA_TOUCH_DOWN         : 6,  // 长按
      UA_SWIPE_CARD         : 7,  // 会员刷卡
      UA_SWIPE_CARD_SUCCESS : 8,  // 刷卡成功
      UA_WX_SCAN            : 9,  // 微信扫码 (windows only)
      UA_WX_SCAN_SUCCESS    : 10,  // 微信扫码成功
      UA_WX_SCAN_EXCHANGE   : 11, // 扫码积分兑换 (windows only)
      UA_EXCHANGE_SUCCESS   : 12, // 积分兑换成功
      UA_ZOOM_IN            : 13, // 缩小
      UA_ZOOM_OUT           : 14, // 放大
      UA_ROTATE             : 15, // 旋转
    },
    //元素类型
    Element:{
      E_UNKNOWN              : 0,    // 未知
      E_OTHER                : 1,    // 其他
      E_ADVERT_BT_HOME       : 10,   // 全屏广告返回首页
      E_FLOAT_ADVERT         : 50,   // 浮窗广告元素
      E_INDEX_ADVERT         : 100,  // 广告
      E_INDEX_NAVIGATE       : 101,  // 楼层导视
      E_INDEX_BRAND          : 102,  // 品牌导购
      E_INDEX_ACTIVITY       : 103,  // 精彩活动
      E_INDEX_MEMBER         : 104,  // 会员中心
      E_INDEX_COUPON         : 105,  // 优惠券
      E_INDEX_QRCODE         : 106,  // 二维码
      E_INDEX_SHOP           : 107,  // 主力店铺 （CONTENT [ID:<SHOPID>]）
      E_INDEX_SHOP_RECOMMEND : 108, // 推荐店铺
      E_INDEX_CATEGORY       : 109,  // 大类导购（CONTENT [BRAND:<ID>|CUSTOM:<ID>|NAVIGATE|BRAND|ACTIVITY|MEMBER|COUPON|DETAIL]）
      E_INDEX_CUSTOM         : 110,  // 自定义功能
      E_INDEX_MORE           : 111,  // 更多

      E_BRAND_BT_CATEGORY   : 200,  // 业态筛选按钮 (CONTENT [ID:<ID>])
      E_BRAND_BT_LETTER     : 201,  // 字母筛选按钮 (CONTENT [LETTER:<LETTER>])
      E_BRAND_BT_FLOOR      : 202,  // 楼层筛选按钮 (CONTENT [ID:<ID>])
      E_BRAND_BT_BRAND      : 203,  // 店铺 (CONTENT [ID:<ID>])
      E_BRAND_BT_HOME       : 204,  // 返回首页
      E_BRAND_LIST_CATEGORY : 205,  // 业态筛选
      E_BRAND_LIST_LETTER   : 206,  // 字母筛选
      E_BRAND_LIST_FLOOR    : 207,  // 楼层筛选
      E_BRAND_BT_ALL        : 208,  // 全部（安卓）

      E_BRAND_DETAIL_BT_NAVIGATE      : 220,  // 寻路
      E_BRAND_DETAIL_BT_BACK          : 221,  // 返回
      E_BRAND_DETAIL_BT_COUPON        : 222,  // 优惠
      E_BRAND_DETAIL_BT_LINE          : 223,  // 等位信息
      E_BRAND_DETAIL_BT_DESCRIPT      : 224,  // 品牌介绍
      E_BRAND_DETAIL_DETAIL_BT_COUPON : 225,  // 优惠券 (CONTENT [ID:<ID>])
      E_BRAND_DETAIL_BT_DISCOUNT      : 226,  // 优惠信息

      E_FLOOR_BT_FACILITIES       : 300,  // 公共设施按钮
      E_FLOOR_BT_FLOOR            : 301,  // 楼层筛选按钮
      E_FLOOR_BT_SEARCH           : 302,  // 店铺搜索按钮
      E_FLOOR_BT_SEARCH_BACK      : 303,  // 店铺搜索返回
      E_FLOOR_BT_SHOP             : 304,  // 店铺按钮
      E_FLOOR_BT_RECOMMEN         : 305,  // 推荐按钮
      E_FLOOR_BT_NAVIGATE         : 306,  // 导购按钮
      E_FLOOR_BT_DETAIL           : 307,  // 详情按钮
      E_FLOOR_BT_HOME             : 308,  // 返回首页
      E_FLOOR_LIST_SEARCH         : 309,  // 品牌列表筛选
      E_FLOOR_BT_COUPON           : 310,  // 优惠券（安卓） (CONTENT [ID:<ID>])
      E_FLOOR_BT_BACK             : 311,  // 返回
      E_FLOOR_BT_GO               : 312,  // 立即前往

      E_ACTIVITY_BT_LIST          : 400,  // 缩略图
      E_ACTIVITY_BT_DETAIL        : 401,  // 大图
      E_ACTIVITY_BT_DETAIL_NEXT   : 402,  // 右按钮
      E_ACTIVITY_BT_DETAIL_PREV   : 403,  // 左按钮
      E_ACTIVITY_BT_DETAIL_BACK   : 404,  // 详情返回
      E_ACTIVITY_BT_HOME          : 405,  // 返回首页

      E_CUSTOM_BT_DETAIL_NEXT     : 501,  // 右按钮
      E_CUSTOM_BT_DETAIL_PREV     : 502,  // 左按钮
      E_CUSTOM_BT_HOME            : 503,  // 返回首页

      E_MEMBER_POINTS_INQUIRE_BT_BACK           : 580,  // 返回按钮
      E_MEMBER_POINTS_INQUIRE_BT_REGISTER       : 581,  // 注册按钮
      E_MEMBER_POINTS_INQUIRE_BT_PHONE          : 582,  // 手机登录按钮
      E_MEMBER_POINTS_INQUIRE_BT_WECHAT         : 583,  // 微信登录按钮
      E_MEMBER_POINTS_INQUIRE_BT_PHONE_CONFIRM  : 584,  // 确认登录按钮 （BT_PHONE_LOGIN）

      E_MEMBER_POINTS_SELFSERVICE_BT_SCAN               : 590, // 开始扫描
      E_MEMBER_POINTS_SELFSERVICE_BT_CONFIRM_LOGIN_INFO : 591, // 确认登录信息
      E_MEMBER_POINTS_SELFSERVICE_BT_MODIFY_LOGIN_INFO  : 592, // 更改登录信息
      E_MEMBER_POINTS_SELFSERVICE_BT_COMPLETE_SCAN      : 593, // 完成扫描
      E_MEMBER_POINTS_SELFSERVICE_BT_RESCAN             : 594, // 重新扫描
      E_MEMBER_POINTS_SELFSERVICE_BT_RESUME_SCAN        : 595, // 继续扫描
      E_MEMBER_POINTS_SELFSERVICE_BT_LOGOUT             : 596, // 注销
      E_MEMBER_POINTS_SELFSERVICE_BT_REUPLOAD           : 597, // 重新上传

      E_MEMBER_POINTS_BT_MALL            : 610,  // 去积分商城按钮 (安卓:MEMBERINQUIRERESULT.BT_GO_MALL)
      E_MEMBER_POINTS_BT_EXCHANGE        : 611,  // 积分兑换按钮 (安卓:MEMBERINQUIRERESULT.BT_EXCHANGE， WINDOWS:BT-MALL-DETAIL)
      E_MEMBER_POINTS_BT_BACK            : 612,  // 积分兑换返回按钮 (安卓:MEMBERINQUIRERESULT.BT_BACK)

      E_MEMBER_SIGN_BT_SIGN              : 700,  // 会员签到按钮
      E_MEMBER_SIGN_BT_BACK              : 701,  // 返回按钮

      E_MEMBER_RULE_BT_BACK              : 720,  // 返回按钮
      E_MEMBER_RULE_BT_NEXT              : 721,  // 下一页按钮
      E_MEMBER_RULE_BT_PREV              : 722,  // 上一页按钮

      E_MEMBER_EXCHANGE_BT_BACK          : 750,  // 积分兑换列表页返回按钮
      E_MEMBER_EXCHANGE_BT_EXCHANGE      : 751,  // 积分兑换
      E_MEMBER_EXCHANGE_BT_SMS           : 752,  // 手机号领取(BT_PHONE)

      E_MEMBER_EXCHANGE_DETAIL_BT_MALL_TICKET          : 800,  // 实物小票兑换按钮（MALLDETAIL_BT_MALL_TICKET）
      E_MEMBER_EXCHANGE_DETAIL_BT_MALL_SMS             : 801,  // 手机短信兑换按钮
      E_MEMBER_EXCHANGE_DETAIL_BT_MALL_WECHAT          : 802,  // 电子票兑换按钮
      E_MEMBER_EXCHANGE_DETAIL_BT_MALL_SMS_EXCHANGE    : 803,  // 立即兑换按钮
      E_MEMBER_EXCHANGE_DETAIL_BT_MALL_TICKET_EXCHANGE : 804,  // 立即打印按钮
      E_MEMBER_EXCHANGE_DETAIL_BT_BACK                 : 805,  // 积分兑换商品详情返回按钮
      E_MEMBER_EXCHANGE_DETAIL_BT_EXCHAGE              : 806,  // 积分兑换商品详情积分兑换
      E_MEMBER_EXCHANGE_DETAIL_BT_NEXT                 : 807,  // 积分兑换下一页
      E_MEMBER_EXCHANGE_DETAIL_BT_PREV                 : 808,  // 积分兑换上一页

      E_MEMBER_BT_HOME      : 1000,  // 返回首页按钮
      E_MEMBER_BT_REGISTER  : 1001,  // 会员注册按钮
      E_MEMBER_BT_POINTS    : 1002,  // 积分按钮
      E_MEMBER_BT_RULES     : 1003,  // 会员规则按钮
      E_MEMBER_BT_MALL      : 1004,  // 积分商城按钮
      E_MEMBER_BT_PARKING   : 1005,  // 停车券按钮
      E_MEMBER_BT_SIGN      : 1006,  // 会员签到按钮
      E_MEMBER_BT_SELF_HELP : 1007,  // 会员自助积分按钮
      E_MEMBER_BT_CUSTOM    : 1008,  // 会员自定义按钮
      E_MEMBER_BT_NEXT      : 1009,  // 会员下一页按钮
      E_MEMBER_BT_PREV      : 1010,  // 会员上一页按钮

      E_MEMBER_LOGIN_BT_MEMBER_SECURITY_CODE  : 1020,  // 发送验证码按钮
      E_MEMBER_LOGIN_BT_MEMBER_SMS_LOGIN      : 1021,  // 确认登陆按钮
      E_MEMBER_LOGIN_BT_MEMBER_LOGIN_RETYPE   : 1022,  // 重新输入按钮
      E_MEMBER_LOGIN_SWIPE_CARD               : 1023,  // 会员刷卡
      E_MEMBER_LOGIN_SWIPE_CARD_SUCCESS       : 1024,  // 刷卡成功
      E_MEMBER_LOGIN_WX_SCAN_LOGIN            : 1025,  // 微信扫码登录
      E_MEMBER_LOGIN_WX_SCAN_LOGIN_SUCCESS    : 1026,  // 微信扫码登录成功 （安卓：MEMBERINQUIRE.WX_SCAN_LOGIN_SUCCESS）
      E_MEMBER_LOGIN_BT_MEMBER_LOGIN_WECHAT   : 1027,  // 微信登录按钮
      E_MEMBER_LOGIN_BT_MEMBER_LOGIN_SMS      : 1028,  // 手机验证按钮
      E_MEMBER_LOGIN_BT_MEMBER_LOGIN_CARD     : 1029,  // 刷卡验证按钮

      E_MEMBER_ENTRY_BT_MEMBER_HOME   : 1050,  // 返回会员中心首页按钮
      E_MEMBER_ENTRY_BT_REGISTER      : 1051,  // 会员注册按钮
      E_MEMBER_ENTRY_BT_POINTS        : 1052,  // 积分查询按钮
      E_MEMBER_ENTRY_BT_RULES         : 1053,  // 会员规则按钮
      E_MEMBER_ENTRY_BT_MALL          : 1054,  // 积分商城按钮
      E_MEMBER_ENTRY_BT_PARKING       : 1055,  // 停车券按钮
      E_MEMBER_ENTRY_BT_SIGN          : 1056,  // 会员签到按钮
      E_MEMBER_ENTRY_BT_SELF_HELP     : 1057,  // 自助积分按钮
      E_MEMBER_ENTRY_BT_MEMBER_CUSTOM : 1058,  // 自定义会员按钮

      E_MEMBER_REGISTER_BT_BACK          : 1070,  // 会员注册返回按钮
      E_MEMBER_REGISTER_BT_GO_REGISTER   : 1071,  // 去注册按钮
      E_MEMBER_REGISTER_BT_REGISTER      : 1072,  // 注册按钮
      E_MEMBER_REGISTER_BT_GO_SIGN       : 1073,  // 去签到按钮
      E_MEMBER_REGISTER_BT_REREGISTER    : 1074,  // 重新注册按钮
      E_MEMBER_REGISTER_BT_RETYPE        : 1075,  // 重新输入
      E_MEMBER_REGISTER_BT_SECURITY_CODE : 1076,  // 获取验证码按钮

      E_MEMBER_CUSTOM_BT_NEXT            : 1090,  // 会员自定义下一页
      E_MEMBER_CUSTOM_BT_PREV            : 1091,  // 会员自定义上一页

      E_PARKING_DETAIL_BT_PARKING_TICKET          : 1100,  // 实物小票兑换按钮
      E_PARKING_DETAIL_BT_PARKING_SMS             : 1101,  // 手机短信兑换按钮
      E_PARKING_DETAIL_BT_PARKING_WECHAT          : 1102,  // 电子票兑换按钮
      E_PARKING_DETAIL_BT_PARKING_SMS_EXCHANGE    : 1103,  // 立即兑换按钮
      E_PARKING_DETAIL_BT_PARKING_TICKET_EXCHANGE : 1104,  // 立即打印按钮
      E_PARKING_BT_PARKING_DETAIL                 : 1120,  // 积分兑换按钮
      E_PARKING_BT_PARKING_BACK                   : 1125,  // 返回按钮
      E_PARKING_BT_PARKING_BT_NEXT                : 1126,  // 停车券下一页
      E_PARKING_BT_PARKING_BT_PREV                : 1127,  // 停车券上一页

      E_COUPON_BT_HOME               : 1200,  // 返回首页按钮
      E_COUPON_BT_COUPON_CATG_ALL    : 1201,  // 优惠券全部分类按钮
      E_COUPON_BT_COUPON_CATG        : 1202,  // 优惠券各分类按钮，无ID为全部
      E_COUPON_BT_COUPON_MINE        : 1203,  // 我的优惠券按钮
      E_COUPON_BT_COUPON_DETAIL      : 1204,  // 点击优惠券
      E_COUPON_DETAIL_BT_HOME        : 1220,  // 返回首页按钮
      E_COUPON_DETAIL_BT_COUPON      : 1221,  // 返回优惠券列表按钮
      E_COUPON_DETAIL_BT_COUPON_BUY  : 1222,  // 购买优惠券按钮

      E_COUPON_MINE_BT_HOME                   : 1240,  // 返回首页按钮
      E_COUPON_MINE_BT_COUPON                 : 1241,  // 返回优惠券列表按钮
      E_COUPON_MINE_BT_SEND_COUPON_TO_PHONE   : 1242,  // 发送券码至手机按钮
      E_COUPON_USER_LOGIN_BT_LOGIN            : 1260,  // 登录按钮
      E_COUPON_USER_LOGIN_BT_CLOSE            : 1261,  // 右上角关闭按钮
      E_COUPON_USER_LOGIN_BT_SMS              : 1262,  // 发送验证码按钮
      E_COUPON_USER_SEND_BT_CLOSE             : 1270,  // 取消/右上角关闭按钮
      E_COUPON_USER_SEND_BT_SEND              : 1271,  // 发送按钮
      E_COUPON_USER_GET_BT_CLOSE              : 1280,  // 右上角关闭按钮
      E_COUPON_USER_GET_BT_VIEW_OTHER_COUPON  : 1281,  // 去查看别的券按钮
      E_COUPON_USER_GET_BT_VIEW_MY_COUPON     : 1282,  // 去查看我的券按钮
      E_COUPON_USER_GET_BT_SMS                : 1283,  // 发送验证码按钮
      E_COUPON_USER_GET_BT_GET_COUPON         : 1284,  // 领取按钮

      E_MARKETING_COUPON_BT_GET_COUPON_FROM_HOME      : 1290, // 首页领取
      E_MARKETING_COUPON_BT_GET_COUPON_FROM_LIST      : 1291, // 列表页领取
      E_MARKETING_COUPON_BT_SEND_SMS                  : 1292, // 发送短信
      E_MARKETING_COUPON_BT_GET_COUPON_FROM_LOGIN     : 1293, // 登录领取
      E_MARKETING_COUPON_BT_GET_COUPON_FROM_RECOMMEND : 1294, // 猜你喜欢领取
      E_MARKETING_COUPON_BT_FULLSCREEN_COUPON         : 1295, // 全屏漂浮的惠逛入口

      E_POP_BT_DETAIL_NEXT              : 1400, // 大图预览下一张
      E_POP_BT_DETAIL_PREV              : 1401, // 大图预览上一张
      E_POP_BT_DETAIL_MENU              : 1402, // 大图预览返回菜单
      E_POP_BT_DETAIL_CLOSE             : 1403, // 大图预览关闭按钮

      E_S_SERVER_BT_BRAND           : 2000,  // 店铺列表
      E_S_PLAY_BT_ICON              : 3000,  // 点击ICON
      E_S_PLAY_BT_MORE              : 3001,  // 点击更多
      E_S_PLAY_BT_ACTIVITY          : 3002,  // 点击活动名称
      E_S_SHOPING_BT_PREV           : 4000,  // 左边按钮
      E_S_SHOPING_BT_NEXT           : 4001,  // 右边按钮
      E_S_SHOPING_BT_DETAIL         : 4002,  // 查看商品详情
      E_S_SHOPING_DETAIL_BT_BACK    : 4020,  // 返回按钮
      E_S_SHOPING_DETAIL_BT_PREV    : 4021,  // 上一张
      E_S_SHOPING_DETAIL_BT_NEXT    : 4022,  // 下一张
      E_S_SHOPING_DETAIL_BT_DESC    : 4023,  // 商品详情
      E_S_SHOPING_DETAIL_BT_SERVICE : 4024,  // 服务详情
    },
    //操作元素所在区块
    Block: {
      BLOCK_UNKNOWN  : 0,
      BLOCK_OTHER    : 1,
      BLOCK_A        : 2,
      BLOCK_B        : 3,
      BLOCK_C        : 4,
      BLOCK_D        : 5
    },
    //用户渠道
    UserChannel: {
      USER_CHANNEL_UNKNOWN              : 0,
      USER_CHANNEL_OTHER                : 1,
      USER_CHANNEL_WECHAT               : 2,
      USER_CHANNEL_PHONE                : 3,
      USER_CHANNEL_MALL_LIFE            : 4,
      USER_CHANNEL_INTERACTIVE_SCREEN   : 5
    },
    //数据
    data:{
      config:{
      }
    },
    /**
     * 获取唯一值
     * @return {undefined}
     */
    uuid:()=>{
      var guid = "a";
      for (var i = 1; i <= 31; i++) {
        var n = Math.floor(Math.random() * 16).toString(16);
        guid += n;
        if ((i == 8) || (i == 12) || (i == 16) || (i == 20)) {
          guid += "";
        }
      }
      guid += "";
      return guid;
    },
    /**
     * 配置
     * @return {undefined}
     */
    config:function (config){
        this.data.config = config;
    },
    /**
     * 上传数据
     * @return {undefined}
     */
    upload:function(params){
      let uploadParams = {};
      uploadParams.id=this.uuid();
      //时间戳
      uploadParams.timestamp=new Date().getTime();
      //消息名称
      uploadParams.message_name="rongyi.terminal.log.TerminalEventInfo";

      params = params || {};
      let api;
      let env = this.data.config.env;
      //环境
      switch(env){
          case 'dev':{
              api = "http://192.168.10.194:28082/terminal_log";
              break;
          };
          case 'test':{
              api = "http://192.168.10.194:28082/terminal_log";
              break;
          };
          case 'online':{
              api = "http://logreport.rongyi.com/terminal_log";
              break;
          };
          default :api = "http://logreport.rongyi.com/terminal_log";
      }
      
      //消息主体
      let message_data = {...this.data.config,...params};
      message_data.layout=1000;
      message_data.id=this.uuid();
      //时间戳
      message_data.timestamp=new Date().getTime();
      if(message_data.env){
        delete message_data.env;
      }
      uploadParams.message_data = [message_data];
      //验证消息主体
      this.checkParams(message_data).then(()=>{
        // 验证成功，上传数据
        fetch(api, {
            method: 'POST',
            body: JSON.stringify(uploadParams),
            headers: {
              'Content-Type': 'application/json'
            }
          }).then(result => {
            console.log(result)
            console.log("success:","上报成功");
          }).catch(error => {
          console.error("faild:","上报失败");
        })
      }).catch(error => {
        //验证失败
        console.log("error:",error);
      })
    },
    /**
     * 是否包含值
     * @return {undefined}
     */
    containValue:function(obj,value){
      let vs = [];
      for(let key in obj){
        if(obj[key]===value){
          return true;
        }
      }
      return false;
    },
    /**
     * 验证参数
     * @return {Promise}
     */
    checkParams:function(params){
      return new Promise((resolve,reject)=>{
        if(!params.mall_id){
          return reject("商场编号必传.");
        }
        if(!params.terminal_id){
          return reject("设备点位必传.");
        }
        if(!params.terminal_mac){
          return reject("设备MAC必传.");
        }
        if(!params.layout_id){
          return reject("模版id必传.");
        }
        if(!params.action){
          return reject("操作目标类型必传.");
        }
        if(!params.custom_page){
          return reject("页面标识必传.");
        }
        if(!params.custom_pag_name){
          return reject("页面名称必传.");
        }

        //验证用户渠道
        if(typeof(params.channel)!=="undefined"){
          if(!(this.containValue(this.UserChannel,params.channel))){
            return reject("非法的用户渠道");
          }
        }

        //操作目标类型
        if(typeof(params.action)!=="undefined"){
          if(!(this.containValue(this.UserActionEvent,params.action))){
            return reject("非法的操作目标类型");
          }
        }

        //操作元素类型
        if(typeof(params.element)!=="undefined"){
          if(!(this.containValue(this.Element,params.element))){
            return reject("非法的操作元素类型");
          }
        }

        return resolve();
      });
    }
  }
})();
export default rymbp
