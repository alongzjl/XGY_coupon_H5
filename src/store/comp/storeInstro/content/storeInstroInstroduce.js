/**
 * @Author: Along
 * @Date:   2018-05-30
 
 */
 
const common = require('../../../common')
let { deepCopy, extend } = common

const storeInstroInstroduce = extend(deepCopy(require('../../text')), {
	data: {
		layout: {  
			top:  '120px',
			left: '60px',
			width: '960px',
			height:'222px'
		}, 
		type:'storeInstroInstroduce',  
		content:{
			text:'    UNIQLO（日文假名发音：ユニクロ），日本服装品牌，由日本迅销公司建立于1963年，当年是一家销售西服的小服装店，现已成为国际知名服装品牌。优衣库现任董事长兼总经理柳井正在日本首次引进了大卖场式的服装销售方式，通过独特的商品策划、开发和销售体系来实现店铺运作的低成本化，由此引发了优衣库的'
		}
	} 
})

module.exports = storeInstroInstroduce