/**
 * @Author: Along
 * @Date:   2018-05-30
 
 */
 
const common = require('../../../common')
let { deepCopy, extend } = common

const storeWonderful = extend(deepCopy(require('../../wonderfulActivity')), {
	data: {
		layout: {
			top:  '340px',
			left: '60px',  
			width: '960px', 
			height:'572px' 
		},
		style:{
			swiperImage: {
				borderRadius:{
					topLeft:     '40px',
					topRight:    '40px',
					bottomRight: '40px',
					bottomLeft:  '40px'
				}
			}
		}, 
		type:'storeWonderful' 
	}, 
	feature:{ 
		swiperOptions:{
			slideOptions:{
				spaceBetween:30, 
				slidesPerView:2,  
				centeredSlides:true,
			}, 
		} 
	}
})

module.exports = storeWonderful