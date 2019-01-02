/**
 * @Author: Along
 * @Date:   2018-05-05
 
 */
 

// 导航
const data = {
	style:     {
		filter: {
			width:  '70px',
			height: '70px',
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
				right:   '0px',
				bottom:  '10px',
				left:    '0px',
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
		filterActive: {
			borderWidth:  '0px',
			borderStyle: 'solid',
			borderColor: { type: 'auxiliary', color: '#fff' },
			boxShadow: {
				h_shadow:   '0px',
				v_shadow:   '0px',
				blur_dis:   '0px',
				spread_dis: '0px',
				color:      { type: 'custom', color: '#000' }
			},
			transform:      { scale: 1.1 }
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
			}
		},
		filterPage: {
			width:  "100px",
			height: "100px",
			justifyContent: 'center',
			borderWidth:  '0px',
			borderStyle: 'solid',
			borderColor: { type: 'custom', color: '#fff' },
			color: { type: 'custom', color: '#666' },
			background: 'center no-repeat',
			backgroundSize: 'contain',
			backgroundColor: { type: 'main', color: '#fff' },
			borderRadius:    {
				topLeft:     '30px',
				topRight:    '30px',
				bottomLeft:  '30px',
				bottomRight: '30px'
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
		},
		mainTable: {
			height:'120px',
			width:'120px',
			borderRadius:    {
				topLeft:     '30px',
				topRight:    '30px',
				bottomLeft:  '30px',
				bottomRight: '30px'
			},
			background: 'center no-repeat',
			backgroundSize: 'contain',
			backgroundColor: { type: 'main', color: '#fff' },
			backgroundImage: { type: 'custom', img: '' }
		}
	},
	layout: {
		position: 'absolute',
		top:      '440px',
		left:     0,
		width:    '160px',
		height:   '800px'
	},
	content: [
		{
			img: { type: 'custom', img: 'http://rongyi.b0.upaiyun.com/commodity/text/201805231505013287.png' },
			title: '导航1',		// 图片标题
			highSwitch: false,
			router: {type:'router',url:''},			// 路由
		},
		{
			img: { type: 'custom', img: 'http://rongyi.b0.upaiyun.com/commodity/text/201805231505049273.png' },
			title: '导航2',		// 图片标题
			highSwitch: false,
			router: {type:'router',url:''},			// 路由
		},
		{
			img: { type: 'custom', img: 'http://rongyi.b0.upaiyun.com/commodity/text/201805231505123352.png' },
			title: '导航3',		// 图片标题
			highSwitch: false,
			router: {type:'router',url:''},			// 路由
		}, 
		{
			img: { type: 'custom', img: 'http://rongyi.b0.upaiyun.com/commodity/text/201805231505124540.png' },
			title: '导航4',		// 图片标题
			highSwitch: false,
			router: {type:'router',url:''},			// 路由
		}
	],
	animation: {
		className: '',	// 动画样式
		delay: 1,					// 开始时间
		duration: 1,				// 持续时间
		iterationCount: 1,	// 循环次数
	}
}

module.exports = {
	name: 'navigationFloat',
	type: 'base',
	// 位置大小
	// 样式管理
	data: JSON.parse(JSON.stringify(data)),
	//布局方式的选择
	layout:{
		type:1,
		position:'left',
		size:3
	},
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
	}
}