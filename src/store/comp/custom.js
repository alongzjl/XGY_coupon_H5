// 自定义
const data = {
	style:     {},
	layout:    {
		position: 'absolute',
		top:      '0px',
		left:     '0px',
		width:    '240px',
		height:   '240px'
	},
	content:   {},
	animation: {
		className: '',	// 动画样式
		direction: '',				// 方向
		delay: 0,					// 开始时间
		duration: 1,				// 持续时间
		iterationCount: 1			// 循环次数
	},
	components: []
}

module.exports = {
	name: 'custom',
	type: 'advanced',
	// 样式管理
	data: JSON.parse(JSON.stringify(data)),
	// 组件管理
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