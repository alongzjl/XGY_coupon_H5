/**
 * @Author: Along
 * @Date:   2018-05-07

 */

// 按钮
const data = {
	layout: {
		position: 'absolute',
		top:      '0px',
		left:     '0px',
		width:    '200px',
		height:   '80px'
	},
	style: {
		text: {
			textAlign:       'center',
			fontSize:        '32px',
			lineHeight:      '72px',
			fontStyle:       'normal',
			fontWeight:      'normal',
			textDecoration:  'none',
			transform:       { rotate: 0 },
			opacity:         1, 
			color:           { type: 'custom', color: '#000' },
			background: 'center no-repeat',
			backgroundSize: 'cover',
			backgroundColor: { type: 'custom', color: '#F58F8F' },
			backgroundImage: { type: 'custom', img: '' },
			borderRadius:    {
				topLeft:     '0px',
				topRight:    '0px',
				bottomRight: '0px',
				bottomLeft:  '0px'
			},
			borderWidth:     '2px',
			borderStyle:     'solid',  
			borderColor: 	 { type: 'custom', color: '#333' },
			boxShadow:       {
				h_shadow:    '0px',
				v_shadow:    '0px',
				blur_dis:    '0px',
				spread_dis:  '0px',
				color:       { type: 'custom', color: '#333' }
			},
			textShadow:      {
				h_shadow:    '0px',
				v_shadow:    '0px',
				blur_dis:    '0px',
				color:       { type: 'custom', color: '#333' }
			},
		}
	},
	content: {
		text:   '按钮',	// 文字内容
		router: {type:'router',url:''} 			// 路由
	},	
	animation: {
		className: '',	// 动画样式
		direction: '',				// 方向
		delay: 0,					// 开始时间
		duration: 1,				// 持续时间
		iterationCount: 1			// 循环次数
	}
}

module.exports = {
	name: 'button',
	type: 'base',
	data: JSON.parse(JSON.stringify(data)),
	// 样式列表
	styleList: {
		idx:  0,
		list: [{
			name:  '样式1',
			img:   '',
			data:  JSON.parse(JSON.stringify(data))
		}]
	},
	// 功能特性
	feature: {
	}
}