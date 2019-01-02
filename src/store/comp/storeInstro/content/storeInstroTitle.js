/**
 * @Author: Along
 * @Date:   2018-05-30
 
 */
 
const common = require('../../../common')
let { deepCopy, extend } = common

const storeInstroTitle = extend(deepCopy(require('../../text')), {
	data: {
		layout: {
			top:  '24px', 
			left: '80px',
			width:'200px'   
		}, 
		style:{
			text:{
				textAlign:'left'
			}
		},    
		type:'storeInstroTitle',   
		content: {
			text: '店铺介绍'
		} 
	}  
})

module.exports = storeInstroTitle