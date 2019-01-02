// 字母排序
const data = {
	layout: {
		position: 'absolute',
		top:  '72px',
		left: '208px',
		width: '720px',
		height:   '48px'
	},
	style: {
		filterBox: {
			fontSize:       '16px', 
			fontStyle:      'normal',
			fontWeight:     'normal',
			textDecoration: 'none',
		},
		filter: {
			height:     '48px',
			lineHeight: '48px',
			justifyContent: 'center',
			margin: {
				top:     '0px',
				right:   '0px',
				bottom:  '0px',
				left:    '0px',
			},
			padding: {
				top:     '0px',
				right:   '30px',
				bottom:  '0px',
				left:    '30px',
			},
			borderWidth:   '4px',
			borderStyle:  'solid',
			borderColor:  { type: 'custom', color: 'rgba(0, 0, 0, 0)', rgb: '#000', alpha: 0 },
			color: { type: 'custom', color: '#666' },
			background: 'center no-repeat',
			backgroundSize: 'contain',
			backgroundImage: { type: 'custom', img: '' },
			backgroundColor: { type: 'custom', color: 'rgba(0, 0, 0, 0)', rgb: '#000', alpha: 0 },
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
		size:5
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
	name: 'catg',
	type: 'base',
	data: JSON.parse(JSON.stringify(data)),
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