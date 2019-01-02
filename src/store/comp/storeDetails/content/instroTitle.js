/**
 * @Author: Along
 * @Date:   2018-05-30
 
 */
 
const common = require('../../../common')
let { deepCopy, extend } = common

const instroTitle = extend(deepCopy(require('../../text')), {
	data: {
		layout: {
			top:  '60px', 
			left: '175px'  
		}, 
		style:{
			text:{
				textAlign:'left'
			}
		},   
		content: {
			text: '优衣库/UNIQLO'
		},
		type:'instroTitle'
	} 
}) 

module.exports = instroTitle