/**
 * @Author: Along
 * @Date:   2018-05-30
 
 */
 


// 地址
const data = {
	style:     {
		text: { 
			textAlign:      'left',
			fontSize:       '24px', 
			lineHeight:     '32px',   
			transform:       { rotate: 0 },
			fontStyle:      'normal',
			fontWeight:     'normal',
			textDecoration: 'none',
			opacity:        1,
			textShadow:     {
				h_shadow:   '0px',
				v_shadow:   '0px',
				blur_dis:   '0px',
				color:      { type: 'custom', color: '#f58f8f' }
			},
			color:          { type: 'custom', color: '#333' },
			margin: { 
				top:     '0px',
				right:   '0px',
				bottom:  '0px',
				left:    '0px',
			}, 
			animation:      '0s 0s 1'			// 动画 (0: 开始时间, 1: 持续时间, 2: 循环次数)
		}, 
		image:{
			height:'34px', 
			width:'34px',
			borderRadius:    {
				topLeft:     '12px',
				topRight:    '12px',
				bottomRight:  '12px',
				bottomLeft: '12px'
			},    
			margin: {  
				top:     '0px', 
				right:   '10px',  
				bottom:  '0px',
				left:    '0px',
			}  
		}    
	},  
	layout: {
		position: 'absolute',
		top:      '108px',
		left:     '175px',
		width:    '160px',
		height:   '60px' 
	}, 
	content: {
		img:    { type: 'custom', img: 'http://rongyi.b0.upaiyun.com/commodity/text/201805191128322385.png' },	// 图片url
		text:   'L2  2489',  
		router: {},	// 路由 
	},
	type:'address',
	animation: {
		className: '',	// 动画样式
		direction: '',				// 方向
		delay: 0,					// 开始时间
		duration: 1,				// 持续时间
		iterationCount: 1			// 循环次数
	}
}

module.exports = {
	name: 'address',
	type: 'base',
	// 位置大小
	// 样式管理
	data: JSON.parse(JSON.stringify(data)),
	// 内容管理
	// 样式列表
	styleList: {
		idx:  0,
		list: [{
			name: '样式1',
			img:  '',
			data: JSON.parse(JSON.stringify(data))
		}]
	},
	// 功能特性
	feature: {
	}
}
