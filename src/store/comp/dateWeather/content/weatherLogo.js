/**
 * @Author: Along
 * @Date:   2018-05-30
 
 */
 
const common = require('../../../common')
let { deepCopy, extend } = common

const weatherLogo = extend(deepCopy(require('../../picture')), {
	data: {
		layout: {
			top:    '40px',
			left:   '780px',
			width:  '260px',
			height: '120px'
		},
		style: {
			image:{
				borderRadius: {
					topLeft:     '0px',
					topRight:    '0px',
					bottomRight: '0px',
					bottomLeft:  '0px'
				}
			}
		},
		type:"weatherLogo",
		content: {
			img: { type: 'logo', img: '' }
		}
	}
}) 

module.exports = weatherLogo