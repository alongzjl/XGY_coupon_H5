/**
 * @Author: Along
 * @Date:   2018-05-08
 
 */ 

// 视频
const data = {
	style:     {},
	layout: {
		position: 'absolute',
		top:      '0px',
		left:     '0px',
		width:    '1080px',
		height:   '300px'
	}, 
	// 内容管理
	content: { 
		video:    { type: 'custom', video: '' },
	},  
	// 动画设置 
	animation: {
		className: '',	// 动画样式
		delay: 1,					// 开始时间
		duration: 1,				// 持续时间
		iterationCount: 1,	// 循环次数
	}
}

module.exports = {
	name: 'video',
	type: 'base',
	// 样式管理
	data: JSON.parse(JSON.stringify(data)),
	// 组件样式
	// 样式列表
	styleList: {
		idx:  0,
		list: [{
			name: '样式1',
			img:  '',
			data: JSON.parse(JSON.stringify(data))
		}],
	}, 
	// 功能特性
	feature: {
	},
}