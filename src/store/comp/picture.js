// 图片
const data = {
	style:     {
		image:{
			transform:       { rotate: 0 },
			borderRadius:    {
				topLeft:     '0px',
				topRight:    '0px',
				bottomRight: '0px',
				bottomLeft:  '0px'
			}
		}
	},
	layout: {
		position: 'absolute',
		top:      '0px',
		left:     '0px',
		width:    '240px',
		height:   '240px'
	},
	content: {
		img:    { type: 'custom', img: '' },	// 图片url
		router: {type:'router',url:''},	// 路由
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
	name: 'picture',
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