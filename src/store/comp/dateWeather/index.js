const common = require('../../common')
let { authInit, deepCopy, extend,styleIdxChange } = common
const p = authInit(require('./content/weatherLogo'))
const t = authInit(require('./content/time'))
const w = authInit(require('./content/weather'))

const time     = extend(styleIdxChange(1, deepCopy(t)), {
	data: {
		layout: {
			top:  '36px',
			left: '52px',
			width:  '220px',
			height: '84px'
		},
		style: {
			text: {
				fontSize:   '80px', 
				lineHeight: '84px',
			}
		}
	}
})
const time2    = extend(styleIdxChange(2, deepCopy(t)), {
	data: {
		layout: {
			top:    '120px',
			left:   '40px',
			width:  '152px',
			height: '48px'
		},
		style: {
			text: {
				fontSize:   '28px', 
				lineHeight: '48px',
			},
			split: {
				fontSize:   '28px', 
				lineHeight: '28px',
			}
		},
		content: {
			split: '.'
		}
	}
})
const time3    = extend(styleIdxChange(4, deepCopy(t)), {
	data: {
		layout: {
			top:    '120px',
			left:   '190px',
			width:  '100px',
			height: '48px'
		},
		style: {
			text: {
				fontSize:     '28px', 
				lineHeight:   '48px',
			}
		}
	}
})
const weather  = extend(deepCopy(w), {
	data: {
		layout: {
			top:    '60px',
			left:   '400px',
			width:  '120px',
			height: '56px'
		},
		style: {
			text: {
				textAlign:  'right',
				fontSize:   '48px', 
				lineHeight: '56px'
			}
		}
	}
})
const weather2 = extend(styleIdxChange(3, deepCopy(w)), {
	data: {
		layout: {
			top:    '112px',
			left:   '400px',
			width:  '120px',
			height: '48px'
		},
		style: {
			text: {
				textAlign:  'right',
				fontSize:   '28px', 
				lineHeight: '48px'
			}
		}
	}
})
const weather3 = extend(styleIdxChange(7, deepCopy(w)), {
	data: {
		layout: {
			top:    '60px',
			left:   '520px',
			width:  '104px',
			height: '104px'
		}
	}
})

// 店铺列表
const data = {
	layout: {
		position: 'absolute',
		top:      '0px',
		left:     '0px',
		width:    '1080px',
		height:   '200px'
	},
	style: {
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
	components: [
		time,
		time2,
		time3,
		weather,
		weather2,
		weather3,
		p
	]
}

module.exports = {
	name: 'dateWeather',
	type: 'advanced',
	data: deepCopy(data),
	// 动画设置
	styleList: {
		idx:  0,
		list: [{
			name: '样式1',
			img:  '',
			data: deepCopy(data)
		}]
	},
	// 功能特性
	feature: {
	}
}