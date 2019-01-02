/**
 * @Author: Along
 * @Date:   2018-05-30
 
 */
 
const common = require('../../../common')
let { deepCopy, extend } = common

const phone = extend(deepCopy(require('./address')), {
	data: { 
		layout: {
			top:  '108px', 
			left: '345px',
			width:'240px'  
		},  
		type:'phone',
		content: { 
			text: '023-64538476',
			img:    { type: 'custom', img: "http://rongyi.b0.upaiyun.com/system/mcp/DEV/app/upload/e49fe7db-78c7-4dc6-9abd-d2198b8b4ffb.png" }
		}  
	}
}) 

module.exports = phone