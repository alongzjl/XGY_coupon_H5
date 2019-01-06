/**
 * @Author: Liao Hui
 * @Date:   2018-04-21T17:21:39+08:00
 * @Last modified by:   Liao Hui
 * @Last modified time: 2018-04-24T13:47:49+08:00
 */

import React from 'react'
import {
    hashHistory
} from 'react-router'
import './index.less'

class Picture extends React.Component {
	state = {
		random:`img_${parseInt(Math.random()*1e5)}`
	}
	toPage = () => {
		let { data } = this.props, 
			router = data.data.content.router
		if(router == 'coupon'){
			 hashHistory.push({
                pathname: `/coupon`,
                query:{router:routerTo}
            }); 
		}else if(router == 'mall'){
			if (window.parent && window.postMessage) {
				window.parent.postMessage({
					type:  'toDetails',
					value: {router:routerTo,details:'coupon'}
				}, '*')
			}
		}	
		 
	}; 
	   
	render() {
		let { data,name,onLine } = this.props, 
			img_src = data.data.content.img,
			picture = img_src.type ? compImgFormat(this.props, img_src) : ''
			
		return (
			<div id={this.state.random} className="e-picture" style={cssColorFormat(this.props, 'image')} onClick={this.toPage} >
				{
					picture ? <img src={ picture } /> : null
				}
			</div>  
		)
	} 
}   

export default Picture
