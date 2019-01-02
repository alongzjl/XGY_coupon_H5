// 字母排序
const data = {
	layout: {
		position: 'absolute',
		top:  '160px',
		left: '980px',
		width:    '80px',
		height:   '600px'
	},
	style:     {
		filterBox: {
			fontSize:       '16px', 
			fontStyle:      'normal',
			fontWeight:     'normal',
			textDecoration: 'none',
		},
		filter: {
			width:  '50px',
			height: '50px',
			justifyContent: 'center',
			margin: {
				top:     '0px',
				right:   '0px',
				bottom:  '0px',
				left:    '0px',
			},
			borderWidth:  '2px',
			borderStyle: 'solid',
			borderColor: { type: 'auxiliary', color: '#fff' },
			color: { type: 'custom', color: '#666' },
			background: 'center no-repeat',
			backgroundSize: 'contain',
			backgroundImage: { type: 'custom', img: '' },
			backgroundColor: { type: 'custom', color: '#fff' },
			borderRadius:    {
				topLeft:     '40px',
				topRight:    '40px',
				bottomLeft:  '40px',
				bottomRight: '40px'
			},
			boxShadow: {
				h_shadow:   '0px',
				v_shadow:   '0px',
				blur_dis:   '0px',
				spread_dis: '0px',
				color:      { type: 'custom', color: '#000' }
			}
		},
		filterActive: {
			justifyContent: 'center',
			borderWidth: '4px',
			borderStyle: 'solid',
			backgroundImage: { type: 'custom', img: '' },
			borderColor: { type: 'auxiliary', color: '#a240ec' },
			color: { type: 'textHigh', color: '#fff' },
			background: 'center no-repeat',
			backgroundColor: { type: 'main', color: '#a240ec' }
		},
		filterPage: {
			width:  '64px',
			height: '64px',
			justifyContent: 'center',
			borderWidth:  '0px',
			borderStyle: 'solid',
			borderColor: { type: 'custom', color: '#fff' },
			color: { type: 'custom', color: '#666' },
			background: 'center no-repeat',
			backgroundSize: 'contain',
			backgroundColor: { type: 'main', color: '#fff' },
			borderRadius:    {
				topLeft:     '20px',
				topRight:    '20px',
				bottomLeft:  '20px',
				bottomRight: '20px'
			},
			boxShadow: {
				h_shadow:   '0px',
				v_shadow:   '0px',
				blur_dis:   '0px',
				spread_dis: '0px',
				color:      { type: 'custom', color: '#000' }
			}
		},
		PagePrev: {
			backgroundImage: { type: 'custom', img: '' }
		},
		PageNext: {
			backgroundImage: { type: 'custom', img: '' }
		}
	},
	content: {
		size:4
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
	name: 'floor',
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