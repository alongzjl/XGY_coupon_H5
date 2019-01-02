// 字母排序
const data = {
	layout: {
		position: 'absolute',
		top:  '72px',
		left: '80px',
		width:    '120px',
		height:   '48px'
	},
	style:     {
		filter: {
			width:  '120px',
			height: '48px',
			lineHeight: '40px',
			textAlign:       'center',
			fontSize:       '16px', 
			fontStyle:      'normal',
			fontWeight:     'normal',
			textDecoration: 'none',
			borderWidth:     '4px',
			borderStyle:     'solid',
			borderColor:     { type: 'custom', color: 'rgba(0, 0, 0, 0)', rgb: '#000', alpha: 0 },
			color:           { type: 'text', color: '#666' },
			background:      'center no-repeat',
			backgroundSize:  'contain',
			backgroundImage: { type: 'custom', img: '' },
			backgroundColor: { type: 'custom', color: 'rgba(0, 0, 0, 0)', rgb: '#000', alpha: 0 },
			padding: {
				top:     '0px',
				right:   '0px',
				bottom:  '0px',
				left:    '0px',
			},
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
		}
	},
	content: {
		text: '全部店铺'
	},
	animation: {
		className: '',				// 动画样式
		delay: 1,					// 开始时间
		duration: 1,				// 持续时间
		iterationCount: 'infinite'	// 循环次数
	}
}
var style = {
}

module.exports = {
	name: 'reset',
	type: 'base',
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