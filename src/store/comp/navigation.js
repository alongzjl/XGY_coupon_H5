/**
 * @Author: Along
 * @Date:   2018-05-05
 
 */
 

// 导航
const data = {
	style:     {
		filterBox: {
			backgroundColor: { type: 'custom', color: '#fff' },
			padding: {
				top:     '0px',
				right:   '52px',
				bottom:  '0px',
				left:    '52px',
			}
		},
		filter:{
			width:  '220px',
			height: '272px',
			borderWidth:  '0px',
			borderStyle: 'solid',
			borderColor: { type: 'auxiliary', color: '#fff' },
			borderRadius:    {
				topLeft:     '0px',
				topRight:    '0px',
				bottomLeft:  '0px',
				bottomRight: '0px'
			},
			margin: {
				top:     '0px',
				right:   '52px',
				bottom:  '80px',
				left:    '52px',
			},
			padding: {
				top:     '0px',
				right:   '0px',
				bottom:  '0px',
				left:    '0px',
			},
			boxShadow: {
				h_shadow:   '0px',
				v_shadow:   '0px',
				blur_dis:   '0px',
				spread_dis: '0px',
				color:      { type: 'custom', color: '#000' }
			} 
		},
		text: {
			display:        'none',
			fontSize:       '24px',
			fontStyle:      'normal',
			fontWeight:     'normal',
			textAlign:      'center',
			textDecoration: 'none',
			color:          { type: 'custom', color: '#000' },
			margin: {
				top:     '0px',
				right:   '0px',
				bottom:  '10px',
				left:    '0px',
			}, 
		}
	},
	layout: {
		position: 'absolute',
		top:      '0px',
		left:     '0px',
		width:    '1080px',
		height:   '660px'
	},
	content: [
		{
			img: { type: 'custom', img: 'http://rongyi.b0.upaiyun.com/commodity/text/201805291307551679.png' },
			title: '导航1',		// 图片标题
			router: {type:'router',url:''},			// 路由
		},
		{
			img: { type: 'custom', img: 'http://rongyi.b0.upaiyun.com/commodity/text/201805291307552591.png' },
			title: '导航2',		// 图片标题
			router: {type:'router',url:''},			// 路由
		},
		{
			img: { type: 'custom', img: 'http://rongyi.b0.upaiyun.com/commodity/text/201805291307553698.png' },
			title: '导航3',		// 图片标题
			router: {type:'router',url:''},			// 路由
		},
		{
			img: { type: 'custom', img: 'http://rongyi.b0.upaiyun.com/commodity/text/201805291307554460.png' },
			title: '导航4',		// 图片标题
			router: {type:'router',url:''},			// 路由
		},{
			img: { type: 'custom', img: 'http://rongyi.b0.upaiyun.com/commodity/text/201805291307555477.png' },
			title: '导航5',		// 图片标题
			router: {type:'router',url:''},			// 路由
		},
		{
			img: { type: 'custom', img: 'http://rongyi.b0.upaiyun.com/commodity/text/201805291307556478.png' },
			title: '导航6',		// 图片标题
			router: {type:'router',url:''},			// 路由
		}
	],
	// 动画设置
	animation: {
		className: '',	// 动画样式
		delay: 1,					// 开始时间
		duration: 1,				// 持续时间
		iterationCount: 1,	// 循环次数
	}
}

module.exports = {
	name: 'navigation',
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
		}],
	},
	// 功能特性
	feature: {
	},
}