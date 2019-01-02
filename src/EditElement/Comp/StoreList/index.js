/**
 * @Author: Liao Hui
 * @Date:   2018-04-21T17:21:39+08:00
 * @Last modified by:   Liao Hui
 * @Last modified time: 2018-04-24T13:47:49+08:00
 */

import React from 'react'
import './index.less'
import RNMsgChannel from 'react-native-webview-messaging'
import Custom from '../Custom'

class StoreList extends React.Component {
	
 	state = {
		paramsData:{
			currentPage:1,
			floor:  '',
			letter: '', 
			catg:   '',
			loading:false,
			changePage:false,
			haveFloorMap:false,
			mapParams:{floor:0,shopNo:''},
			clickStore:false
		},
		first:true,
		Update:false,
		shopsInfo:{
			/*data:[[{
				"address": "新开路71号",
				"berthNumber": "F3-37A",
				"categories": [{
					"id": "59b66730b80a814b4659aae9",
					"name": "娱乐"
				}, {
					"id": "59b66763b80a814b4659aaed",
					"name": "游泳"
				}],
				"contact": "022-26575555",
				"description": "长沙非茶不可餐饮管理有限责任公司（以下简称“非茶不可”）旗下品牌“非茶不可创意饮品连锁品牌”的全新品牌形象由香港snyc设计团队精心打造，将台式饮品和港式甜品文化与专属创意设计完美融合。缔造了首家“HAPPY TEA”概念的创意饮品、甜品机构。",
				"enName": "",
				"enNamePrefix": "",
				"floorId": "5331402521232f996c000061",
				"id": "59b78596b80a8107d7174ec4",
				"localLogo": "resource/picture/201511142356315138.png",
				"localPictures": ["resource/picture/201709131753075830.jpg"],
				"locationDec": "F3-37A",
				"locationX": 259,
				"locationY": 268,
				"logo": "http://rongyi.b0.upaiyun.com/system/brand/icon/531694c121232f4fc100366c/201511142356315138.png",
				"name": "非茶不可2",
				"namePrefix": "F",
				"pictures": ["http://rongyi.b0.upaiyun.com/shop/logo/original/201709131753075830.jpg"],
				"sort": 1
				}, {
					"address": "新开路71号",
					"berthNumber": "123a",
					"categories": [],
					"contact": "15837878181",
					"description": ".vvv",
					"enName": "",
					"enNamePrefix": "",
					"floorId": "59ba2129b80a8123aa3891da",
					"id": "5964801a2e35a617c44eaf6a",
					"localLogo": "resource/picture/201412011348316140.png",
					"localPictures": ["resource/picture/201709121442584561.jpg"],
					"locationDec": "123a",
					"locationX": 241,
					"locationY": 375,
					"logo": "http://rongyi.b0.upaiyun.com/system/brand/icon/5459a184e4b0b8334544f2e8/201412011348316140.png",
					"name": "益康养生所",
					"namePrefix": "Y",
					"pictures": ["http://rongyi.b0.upaiyun.com/shop/logo/original/201709121442584561.jpg"],
					"sort": 0
				}, {
					"address": "新开路71号",
					"berthNumber": "1102",
					"categories": [{
						"id": "59b9f4b0b80a8123aa3891d6",
						"name": "服装服饰"
					}, {
						"id": "59b9f4e3b80a8123aa3891d7",
						"name": "衣服"
					}],
					"contact": "",
					"description": "Bottega Veneta品牌创始人是意大利莫尔泰杜(Moltedo)家族，他们于1966年在意大利Vicenza设立总部，取名为Bottega Veneta。莫尔泰杜(Moltedo)家族独家的皮革梭织法，使得该品牌在70年代发光发热，成为知名的顶级名牌。被称作“意大利爱马仕”之称的Bottega Veneta，其品牌编制手袋常出现在名媛和好莱坞明星的手上，整块的梭织皮革，展露出绝顶的好手感。其 “The Knot”活结手包更是手包设计中的经典，是明星红毯秀必带的手包之一。",
					"enName": "",
					"enNamePrefix": "",
					"floorId": "59ba2129b80a8123aa3891da",
					"id": "59ba2488b80a812f1ce23ecc",
					"localLogo": "resource/picture/201412231145345502.png",
					"localPictures": ["resource/picture/201709141440546631.jpg", "resource/picture/201709141441008588.jpg", "resource/picture/201709141441073608.jpg"],
					"locationDec": "1102",
					"locationX": 222,
					"locationY": 122,
					"logo": "http://rongyi.b0.upaiyun.com/system/brand/icon/51f9d9e131d65584ab000a17/201412231145345502.png",
					"name": "衣服专卖",
					"namePrefix": "Y",
					"pictures": ["http://rongyi.b0.upaiyun.com/shop/logo/original/201709141440546631.jpg", "http://rongyi.b0.upaiyun.com/shop/logo/original/201709141441008588.jpg", "http://rongyi.b0.upaiyun.com/shop/logo/original/201709141441073608.jpg"],
					"sort": 0
				}, {
					"address": "新开路71号",
					"berthNumber": "B1-43",
					"categories": [{
						"id": "59b9f4b0b80a8123aa3891d6",
						"name": "服装服饰"
					}, {
						"id": "59b9f4e3b80a8123aa3891d7",
						"name": "衣服"
					}],
					"contact": "",
					"description": "成功品牌背后，总有默默无闻的制造商\n有一批默默无闻的中国制造商\n拥有自主知识产权\n设计出舒适而实用的商品\n被国际名牌看中，“贴牌”高价销往国内\n消费者却只记住海外品牌，觉得物有所值\n\n严选为你直连制造商，摒弃品牌溢价\n严选熟知你所不知道的品牌制造商\n摒弃品牌溢价\n让你不花冤枉钱，只为品质买单\n\n严选原材料，品质至上\n严选商品原材料\n全线采用天然原材料\n控制甲醛低量无害\n采用进口工艺\n国际生产线不断优化\n食材保证核心原产地新鲜直供\n让你享受品质生活",
					"enName": "",
					"enNamePrefix": "",
					"floorId": "59ba2129b80a8123aa3891da",
					"id": "5964801a2e35a617c44eaf6f",
					"localLogo": "resource/picture/201412161444407536.png",
					"localPictures": ["resource/picture/201709141121516470.jpg", "resource/picture/201709141122074195.jpg"],
					"locationDec": "B1-43",
					"locationX": 173,
					"locationY": 346,
					"logo": "http://rongyi.b0.upaiyun.com/system/brand/icon/54757793e4b097f0b2f2b0b0/201412161444407536.png",
					"name": "巧手改衣馆",
					"namePrefix": "Q",
					"pictures": ["http://rongyi.b0.upaiyun.com/shop/logo/original/201709141121516470.jpg", "http://rongyi.b0.upaiyun.com/shop/logo/original/201709141122074195.jpg"],
					"sort": 0
				}, {
					"address": "新开路71号",
					"berthNumber": "F1-19",
					"categories": [{
						"id": "59b66723b80a814b4659aae8",
						"name": "美食"
					}, {
						"id": "59b6673cb80a814b4659aaea",
						"name": "菜"
					}, {
						"id": "59b66744b80a814b4659aaeb",
						"name": "肉"
					}],
					"contact": "022-26575555",
					"description": "汉堡王，全球大型连锁快餐企业， 1954年，詹姆士?麦克拉摩(James Mclamore)及大卫?艾杰敦(David Edgerton)在美国佛罗里达州迈阿密共同经营创设第一家“汉堡王”(Burger King)餐厅。两位“汉堡王”创办人始终保持着要提供给顾客合理的价格、高品质的产品、快速的服务以及干净的环境的理念。经过无数次的失败和教训，终于将一家寒酸的小店变为拥有上千家分店，资产达数十亿美元的商业帝国，成为流行文化不可或缺的一部分。",
					"enName": "",
					"enNamePrefix": "",
					"floorId": "59ba2129b80a8123aa3891da",
					"id": "59b78595b80a8107d7174ebc",
					"localLogo": "resource/picture/201505291128355126.png",
					"localPictures": ["resource/picture/201709141132293450.jpg", "resource/picture/201709141443170120.jpg"],
					"locationDec": "F1-19",
					"locationX": 781,
					"locationY": 236,
					"logo": "http://rongyi.b0.upaiyun.com/system/brand/icon/51f9d9e631d65584ab000d4f/201505291128355126.png",
					"name": "汉堡王2",
					"namePrefix": "H",
					"pictures": ["http://rongyi.b0.upaiyun.com/shop/logo/original/201709141132293450.jpg", "http://rongyi.b0.upaiyun.com/shop/logo/original/201709141443170120.jpg"],
					"sort": 0
				}, {
					"address": "新开路71号",
					"berthNumber": "F1-02",
					"categories": [{
						"id": "59b9f4b0b80a8123aa3891d6",
						"name": "服装服饰"
					}, {
						"id": "59b9f4e3b80a8123aa3891d7",
						"name": "衣服"
					}],
					"contact": "022-26575555",
					"description": "江南布衣 (JNBY)品牌设计定位于这种生活方式或崇尚这种生活方式的都市知识女性，心态年龄在20－35岁之间，并从这个群体的生活样态为依据，设计开发服装、服饰品、居艺用品，设计风格浪漫、丰富、自然色系与色彩沉稳、雅致，不盲从流行但始终时尚，材质多用不同肌理、风格的纯天然面料，如棉、麻、毛、丝等。\n",
					"enName": "",
					"enNamePrefix": "",
					"floorId": "59ba2129b80a8123aa3891da",
					"id": "59b78596b80a8107d7174ebe",
					"localLogo": "resource/picture/201603300955547260.png",
					"localPictures": ["resource/picture/201709141120407562.jpg"],
					"locationDec": "F1-02",
					"locationX": 250,
					"locationY": 212,
					"logo": "http://rongyi.b0.upaiyun.com/system/brand/icon/51f9d9e431d65584ab000c28/201603300955547260.png",
					"name": "江南布衣2",
					"namePrefix": "J",
					"pictures": ["http://rongyi.b0.upaiyun.com/shop/logo/original/201709141120407562.jpg"],
					"sort": 0
				}, {
				"address": "新开路71号",
				"berthNumber": "B1-44",
				"categories": [{
					"id": "59b66730b80a814b4659aae9",
					"name": "娱乐"
				}, {
					"id": "59b66763b80a814b4659aaed",
					"name": "游泳"
				}],
				"contact": "",
				"description": "在售商品涵盖母婴儿童、美容彩妆、服饰鞋包、家居生活、营养保健、数码家电、环球美食、户外运动、水果生鲜等众多品类。网易考拉海购以自营直采模式为主，在美国、德国、意大利、澳大利亚、日本、韩国、香港、台湾设有分公司和办事处，由专业采购团队深入商品原产地，与全球数百个一线品牌和顶级供应商建立深度合作。通过自营模式，网易考拉海购能够有效把控供应链，从源头确保商品品质。借助供应链、资金和规模等优势不断压缩采购成本，同时，网易考拉海购高度自主的定价权，则可以持续提供给消费者持续优惠的价格。目前，网易考拉海购在杭州、宁波、郑州、重庆、深圳等地拥有近30万平方米的保税仓，位列行业第一，海外仓现有布局已经辐射东亚、东南亚、北美洲、欧洲和大洋洲,同时网易考拉海购还与中外运、顺丰等国内外顶级仓储物流服务提供商建立战略合作。最终，网易考拉海购为中国消费者提供高品质、高性价比、便捷高效的海外商品购买渠道。网易考拉海购是国内最大的跨境电商平台，在杭州、宁波等多个保税区的日均出单量稳居榜首。艾媒咨询的报告显示，网易考拉海购在销售份额、正品信赖度和用户满意度等多个维度均位居行业第一。",
				"enName": "",
				"enNamePrefix": "",
				"floorId": "53313ff821232ff1c700005f",
				"id": "5964801a2e35a617c44eaf6e",
				"localLogo": "resource/picture/201707141616582417.png",
				"localPictures": ["resource/picture/201709141156556204.jpg"],
				"locationDec": "B1-44",
				"locationX": 225,
				"locationY": 343,
				"logo": "http://rongyi.b0.upaiyun.com/system/brand/icon/596478cbe4b0486a4f6a36f6/201707141616582417.png",
				"name": "乐朗琴行",
				"namePrefix": "L",
				"pictures": ["http://rongyi.b0.upaiyun.com/shop/logo/original/201709141156556204.jpg"],
				"sort": 0
			}],[{
				"address": "新开路71号",
				"berthNumber": "F3-37A",
				"categories": [{
					"id": "59b66730b80a814b4659aae9",
					"name": "娱乐"
				}, {
					"id": "59b66763b80a814b4659aaed",
					"name": "游泳"
				}],
				"contact": "022-26575555",
				"description": "长沙非茶不可餐饮管理有限责任公司（以下简称“非茶不可”）旗下品牌“非茶不可创意饮品连锁品牌”的全新品牌形象由香港snyc设计团队精心打造，将台式饮品和港式甜品文化与专属创意设计完美融合。缔造了首家“HAPPY TEA”概念的创意饮品、甜品机构。",
				"enName": "",
				"enNamePrefix": "",
				"floorId": "5331402521232f996c000061",
				"id": "59b78596b80a8107d7174ec4",
				"localLogo": "resource/picture/201511142356315138.png",
				"localPictures": ["resource/picture/201709131753075830.jpg"],
				"locationDec": "F3-37A",
				"locationX": 259,
				"locationY": 268,
				"logo": "http://rongyi.b0.upaiyun.com/system/brand/icon/531694c121232f4fc100366c/201511142356315138.png",
				"name": "非茶不可2",
				"namePrefix": "F",
				"pictures": ["http://rongyi.b0.upaiyun.com/shop/logo/original/201709131753075830.jpg"],
				"sort": 1
				}, {
					"address": "新开路71号",
					"berthNumber": "123a",
					"categories": [],
					"contact": "15837878181",
					"description": ".vvv",
					"enName": "",
					"enNamePrefix": "",
					"floorId": "59ba2129b80a8123aa3891da",
					"id": "5964801a2e35a617c44eaf6a",
					"localLogo": "resource/picture/201412011348316140.png",
					"localPictures": ["resource/picture/201709121442584561.jpg"],
					"locationDec": "123a",
					"locationX": 241,
					"locationY": 375,
					"logo": "http://rongyi.b0.upaiyun.com/system/brand/icon/5459a184e4b0b8334544f2e8/201412011348316140.png",
					"name": "益康养生所",
					"namePrefix": "Y",
					"pictures": ["http://rongyi.b0.upaiyun.com/shop/logo/original/201709121442584561.jpg"],
					"sort": 0
				}, {
					"address": "新开路71号",
					"berthNumber": "1102",
					"categories": [{
						"id": "59b9f4b0b80a8123aa3891d6",
						"name": "服装服饰"
					}, {
						"id": "59b9f4e3b80a8123aa3891d7",
						"name": "衣服"
					}],
					"contact": "",
					"description": "Bottega Veneta品牌创始人是意大利莫尔泰杜(Moltedo)家族，他们于1966年在意大利Vicenza设立总部，取名为Bottega Veneta。莫尔泰杜(Moltedo)家族独家的皮革梭织法，使得该品牌在70年代发光发热，成为知名的顶级名牌。被称作“意大利爱马仕”之称的Bottega Veneta，其品牌编制手袋常出现在名媛和好莱坞明星的手上，整块的梭织皮革，展露出绝顶的好手感。其 “The Knot”活结手包更是手包设计中的经典，是明星红毯秀必带的手包之一。",
					"enName": "",
					"enNamePrefix": "",
					"floorId": "59ba2129b80a8123aa3891da",
					"id": "59ba2488b80a812f1ce23ecc",
					"localLogo": "resource/picture/201412231145345502.png",
					"localPictures": ["resource/picture/201709141440546631.jpg", "resource/picture/201709141441008588.jpg", "resource/picture/201709141441073608.jpg"],
					"locationDec": "1102",
					"locationX": 222,
					"locationY": 122,
					"logo": "http://rongyi.b0.upaiyun.com/system/brand/icon/51f9d9e131d65584ab000a17/201412231145345502.png",
					"name": "衣服专卖",
					"namePrefix": "Y",
					"pictures": ["http://rongyi.b0.upaiyun.com/shop/logo/original/201709141440546631.jpg", "http://rongyi.b0.upaiyun.com/shop/logo/original/201709141441008588.jpg", "http://rongyi.b0.upaiyun.com/shop/logo/original/201709141441073608.jpg"],
					"sort": 0
				}, {
					"address": "新开路71号",
					"berthNumber": "B1-43",
					"categories": [{
						"id": "59b9f4b0b80a8123aa3891d6",
						"name": "服装服饰"
					}, {
						"id": "59b9f4e3b80a8123aa3891d7",
						"name": "衣服"
					}],
					"contact": "",
					"description": "成功品牌背后，总有默默无闻的制造商\n有一批默默无闻的中国制造商\n拥有自主知识产权\n设计出舒适而实用的商品\n被国际名牌看中，“贴牌”高价销往国内\n消费者却只记住海外品牌，觉得物有所值\n\n严选为你直连制造商，摒弃品牌溢价\n严选熟知你所不知道的品牌制造商\n摒弃品牌溢价\n让你不花冤枉钱，只为品质买单\n\n严选原材料，品质至上\n严选商品原材料\n全线采用天然原材料\n控制甲醛低量无害\n采用进口工艺\n国际生产线不断优化\n食材保证核心原产地新鲜直供\n让你享受品质生活",
					"enName": "",
					"enNamePrefix": "",
					"floorId": "59ba2129b80a8123aa3891da",
					"id": "5964801a2e35a617c44eaf6f",
					"localLogo": "resource/picture/201412161444407536.png",
					"localPictures": ["resource/picture/201709141121516470.jpg", "resource/picture/201709141122074195.jpg"],
					"locationDec": "B1-43",
					"locationX": 173,
					"locationY": 346,
					"logo": "http://rongyi.b0.upaiyun.com/system/brand/icon/54757793e4b097f0b2f2b0b0/201412161444407536.png",
					"name": "巧手改衣馆",
					"namePrefix": "Q",
					"pictures": ["http://rongyi.b0.upaiyun.com/shop/logo/original/201709141121516470.jpg", "http://rongyi.b0.upaiyun.com/shop/logo/original/201709141122074195.jpg"],
					"sort": 0
				}, {
					"address": "新开路71号",
					"berthNumber": "F1-19",
					"categories": [{
						"id": "59b66723b80a814b4659aae8",
						"name": "美食"
					}, {
						"id": "59b6673cb80a814b4659aaea",
						"name": "菜"
					}, {
						"id": "59b66744b80a814b4659aaeb",
						"name": "肉"
					}],
					"contact": "022-26575555",
					"description": "汉堡王，全球大型连锁快餐企业， 1954年，詹姆士?麦克拉摩(James Mclamore)及大卫?艾杰敦(David Edgerton)在美国佛罗里达州迈阿密共同经营创设第一家“汉堡王”(Burger King)餐厅。两位“汉堡王”创办人始终保持着要提供给顾客合理的价格、高品质的产品、快速的服务以及干净的环境的理念。经过无数次的失败和教训，终于将一家寒酸的小店变为拥有上千家分店，资产达数十亿美元的商业帝国，成为流行文化不可或缺的一部分。",
					"enName": "",
					"enNamePrefix": "",
					"floorId": "59ba2129b80a8123aa3891da",
					"id": "59b78595b80a8107d7174ebc",
					"localLogo": "resource/picture/201505291128355126.png",
					"localPictures": ["resource/picture/201709141132293450.jpg", "resource/picture/201709141443170120.jpg"],
					"locationDec": "F1-19",
					"locationX": 781,
					"locationY": 236,
					"logo": "http://rongyi.b0.upaiyun.com/system/brand/icon/51f9d9e631d65584ab000d4f/201505291128355126.png",
					"name": "汉堡王2",
					"namePrefix": "H",
					"pictures": ["http://rongyi.b0.upaiyun.com/shop/logo/original/201709141132293450.jpg", "http://rongyi.b0.upaiyun.com/shop/logo/original/201709141443170120.jpg"],
					"sort": 0
				}, {
					"address": "新开路71号",
					"berthNumber": "F1-02",
					"categories": [{
						"id": "59b9f4b0b80a8123aa3891d6",
						"name": "服装服饰"
					}, {
						"id": "59b9f4e3b80a8123aa3891d7",
						"name": "衣服"
					}],
					"contact": "022-26575555",
					"description": "江南布衣 (JNBY)品牌设计定位于这种生活方式或崇尚这种生活方式的都市知识女性，心态年龄在20－35岁之间，并从这个群体的生活样态为依据，设计开发服装、服饰品、居艺用品，设计风格浪漫、丰富、自然色系与色彩沉稳、雅致，不盲从流行但始终时尚，材质多用不同肌理、风格的纯天然面料，如棉、麻、毛、丝等。\n",
					"enName": "",
					"enNamePrefix": "",
					"floorId": "59ba2129b80a8123aa3891da",
					"id": "59b78596b80a8107d7174ebe",
					"localLogo": "resource/picture/201603300955547260.png",
					"localPictures": ["resource/picture/201709141120407562.jpg"],
					"locationDec": "F1-02",
					"locationX": 250,
					"locationY": 212,
					"logo": "http://rongyi.b0.upaiyun.com/system/brand/icon/51f9d9e431d65584ab000c28/201603300955547260.png",
					"name": "江南布衣2",
					"namePrefix": "J",
					"pictures": ["http://rongyi.b0.upaiyun.com/shop/logo/original/201709141120407562.jpg"],
					"sort": 0
				}, {
				"address": "新开路71号",
				"berthNumber": "B1-44",
				"categories": [{
					"id": "59b66730b80a814b4659aae9",
					"name": "娱乐"
				}, {
					"id": "59b66763b80a814b4659aaed",
					"name": "游泳"
				}],
				"contact": "",
				"description": "在售商品涵盖母婴儿童、美容彩妆、服饰鞋包、家居生活、营养保健、数码家电、环球美食、户外运动、水果生鲜等众多品类。网易考拉海购以自营直采模式为主，在美国、德国、意大利、澳大利亚、日本、韩国、香港、台湾设有分公司和办事处，由专业采购团队深入商品原产地，与全球数百个一线品牌和顶级供应商建立深度合作。通过自营模式，网易考拉海购能够有效把控供应链，从源头确保商品品质。借助供应链、资金和规模等优势不断压缩采购成本，同时，网易考拉海购高度自主的定价权，则可以持续提供给消费者持续优惠的价格。目前，网易考拉海购在杭州、宁波、郑州、重庆、深圳等地拥有近30万平方米的保税仓，位列行业第一，海外仓现有布局已经辐射东亚、东南亚、北美洲、欧洲和大洋洲,同时网易考拉海购还与中外运、顺丰等国内外顶级仓储物流服务提供商建立战略合作。最终，网易考拉海购为中国消费者提供高品质、高性价比、便捷高效的海外商品购买渠道。网易考拉海购是国内最大的跨境电商平台，在杭州、宁波等多个保税区的日均出单量稳居榜首。艾媒咨询的报告显示，网易考拉海购在销售份额、正品信赖度和用户满意度等多个维度均位居行业第一。",
				"enName": "",
				"enNamePrefix": "",
				"floorId": "53313ff821232ff1c700005f",
				"id": "5964801a2e35a617c44eaf6e",
				"localLogo": "resource/picture/201707141616582417.png",
				"localPictures": ["resource/picture/201709141156556204.jpg"],
				"locationDec": "B1-44",
				"locationX": 225,
				"locationY": 343,
				"logo": "http://rongyi.b0.upaiyun.com/system/brand/icon/596478cbe4b0486a4f6a36f6/201707141616582417.png",
				"name": "乐朗琴行",
				"namePrefix": "L",
				"pictures": ["http://rongyi.b0.upaiyun.com/shop/logo/original/201709141156556204.jpg"],
				"sort": 0
			}],0,0],
			page:{total:35,currentPage:1,totalPage:10}*/
		} 
	};       
	componentWillMount() {
		let { data,query,floors } = this.props
		const size = data.data.content.size
		this.state.paramsData.size = size
		let paramsData = this.state.paramsData
		let comp  = data.data.components
		comp = comp.filter(item=>item.name == 'floorMap')
		if(query.params){
			const params = JSON.parse(query.params),
				  floor = params['floor'],
				  catg = params['catg'];
			if(floor || catg){
				paramsData.floor = floor
				paramsData.catg = comp.length == 0 ? catg : ''
				if(comp.length > 0){
					let index = 0
					floors.map((item,i)=>{
						if(item.recordId == floor){
							index = i
						}
					})
					paramsData.mapParams.floor = index
				}
				this.setState({paramsData:paramsData},()=>{
					RNMsgChannel.emit('RY_shopParams',this.state.paramsData);
				})
			}else{
				this.do_not_params(comp,floors,paramsData);
			}
		}else{
			this.do_not_params(comp,floors,paramsData);
		}
	};
	//无传楼层路由参数时
	do_not_params = (comp,floors,paramsData) => {
		if(comp.length>0){
			const floor = floors[0].recordId
			paramsData.floor = floor
			this.setState({paramsData:paramsData},()=>{
				RNMsgChannel.emit('RY_shopParams',this.state.paramsData);
			})
		}else{ 
			RNMsgChannel.emit('RY_shopParams',this.state.paramsData);
		}
	}      
 	componentDidMount() { 
 		RNMsgChannel.on('RY_shops', data => {
			let paramsData = this.state.paramsData;
			paramsData.loading = true;
			data.type == 'list' ? this.setState({ 
				shopsInfo:data, 
				paramsData:paramsData,
				Update:true
			}) : null
		}); 
		/*setTimeout(()=>{
			let paramsData = this.state.paramsData;
			paramsData.loading = true;
			this.setState({ 
				paramsData:paramsData,
				Update:true
			})
		},1000)*/ 
	}         
	ioOuter = (ipt,params) => {
		let { data } = this.props;
		const size = data.data.content.size;
		if(!ipt.changePage){
			ipt.currentPage = 1;
			ipt.loading = false;
		}
		params ? (ipt.mapParams[params.type] = params.value) : null 
		if(params&&params.type == 'shopNo'){
			ipt.clickStore = true
			ipt.loading = true
			this.setState({paramsData:ipt})
		}else{
			ipt.clickStore = false
			this.changeData(ipt,size)
		}
	} 
	changeData = (ipt,size) => {
		this.setState({paramsData:ipt,Update:false},()=>{
			const postData = {currentPage:ipt.currentPage,floor:ipt.floor,letter:ipt.letter,catg:ipt.catg,size:size};
			RNMsgChannel.emit('RY_shopParams',postData);
		});
	}
	render() {
		let { data,categories,floors,animate,animateParams,page,facilities,location } = this.props
		let comp  = data.data.components,haveFloorMap = false
		comp = comp.filter(item=>item.name == 'floorMap')
		if(comp.length > 0){
			haveFloorMap = true
		}
		this.state.paramsData.haveFloorMap = haveFloorMap
		return (  
			<div style={{height:"100%"}}>
				<Custom 
					data={data}
					animate={animate}
					animateParams={animateParams}
					shopsInfo={this.state.shopsInfo}
					floors={floors}
					categories={categories}
					ioInput={this.state.paramsData}
					ioOuter={this.ioOuter}
					page={page}
					storeUpdate={this.state.Update}
					facilities={facilities}
					location={location}
				/> 
			</div>
			 
		)
	} 
}

export default StoreList
