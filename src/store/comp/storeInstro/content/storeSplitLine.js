/**
 * @Author: Along
 * @Date:   2018-05-30
 
 */
 
const common = require('../../../common')
let { deepCopy, extend } = common

const storeSplitLine = extend(deepCopy(require('../../splitLine')), {
	data: {
		layout: {
			top:  '10px',
			left: '60px',
			width:'100px' 
		}, 
		 style:{
		 	line:{
		 		height: '24px',  
			 	width:'0px',  
				borderLeft: {
					width: '2px',  
					style: 'solid',
					color: { type: 'custom', color: '#CFAD81' }
				}  
		 	} 
		 },
		 type:'storeSplitLine'
	}  
})

module.exports = storeSplitLine