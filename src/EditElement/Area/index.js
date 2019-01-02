/**
 * @Author: Liao Hui
 * @Date:   2018-04-21T17:21:39+08:00
 * @Last modified by:   Liao Hui
 * @Last modified time: 2018-04-24T13:47:49+08:00
 */

import React from 'react'
import './index.less'

export default class Area extends React.Component {
	
	render() {
		let { no_show } = this.props,
			filterBox = resImg(cssColorFormat(this.props, 'filterBox'))

		return !no_show
		?
		<div className="e-area" style={filterBox}></div>
		: null
	}
}
//匹配本地图片
function resImg(filterBox){
	let have = filterBox['WebkitMaskImage']
	if(have){
		if(have.indexOf('zhiliang.svg') > -1){
			filterBox['WebkitMaskImage'] = "url('./image/weather/zhiliang.svg')"
		}else if(have.indexOf('feng.svg') > -1){
			filterBox['WebkitMaskImage'] = "url('./image/weather/feng.svg')"
		}else if(have.indexOf('shidu.svg') > -1){
			filterBox['WebkitMaskImage'] = "url('./image/weather/shidu.svg')"
		}
	}
	return filterBox
}