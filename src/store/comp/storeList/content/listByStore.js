// 字母排序
const data = {
	layout: {
		position: 'absolute',
		top:  '150px',
		left: '80px',
		width:    '880px',
		height:   '600px'
	},
	style:     {
		image: {
			width:  '80px',
			height: '80px'
		},
		posIcon: {
			width:  '16px',
			height: '16px',
			marginRight: '4px',
			background: 'center no-repeat',
			backgroundSize: 'contain',
			backgroundImage: { type: 'custom', img: 'http://rongyi.b0.upaiyun.com/commodity/text/201805191128322385.png' },
			backgroundColor: { type: 'custom', color: 'rgba(0, 0, 0, 0)', rgb: '#000' },
		},
		title: {
			color: { type: 'title', color: '#333' },
		},
		text: {
			color: { type: 'main', color: '#333' },
		},
		filterBox: {
			fontSize:       '16px',
			fontStyle:      'normal',
			fontWeight:     'normal',
			textDecoration: 'none',
		},
		filter: {
			width:  '200px',
			height: '180px',
			justifyContent: 'center',
			borderWidth:  '2px',
			borderStyle: 'solid',
			borderColor: { type: 'main', color: '#fff' },
			color: { type: 'text', color: '#666' },
			background: 'center no-repeat',
			backgroundSize: 'contain',
			backgroundColor: { type: 'custom', color: 'rgba(0, 0, 0, 0)', rgb: '#000' },
			margin: {
				top:     '0px',
				right:   '20px',
				bottom:  '20px',
				left:    '0px',
			},
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
		}
	},
	content: {
	},
	animation: {
		className: '',	// 动画样式
		direction: '',				// 方向
		delay: 0,					// 开始时间
		duration: 1,				// 持续时间
		iterationCount: 1			// 循环次数
	},
}

module.exports = {
	name: 'listByStore',
	type: 'base',
	// 位置大小
	data: JSON.parse(JSON.stringify(data)),
	// 样式列表
	styleList: {
		idx:  0,
		list: [{
			name: '样式1',
			img:  '',
			data: JSON.parse(JSON.stringify(data))
		}, {
			name: '样式2',
			img:  '',
			data: JSON.parse(JSON.stringify(data))
		}, {
			name: '样式3',
			img:  '',
			data: JSON.parse(JSON.stringify(data))
		}]
	},
	// 功能特性
	feature: {
	}
}