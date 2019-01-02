/**
 * @Author: Liao Hui
 * @Date:   2018-04-21T17:21:39+08:00
 * @Last modified by:   Liao Hui
 * @Last modified time: 2018-04-24T13:47:49+08:00
 */

import React from 'react'
import JumpRouter from '../JumpRouter'
import checkToJump from '../checkToJump'
import './index.less'

class Picture extends React.Component {
	state = {
		random:`img_${parseInt(Math.random()*1e5)}`
	}
	toPage = data => {
		const {animate,animateParams,page} = this.props, 
		dataStr = checkToJump('RYRouterSet',data);
	 	JumpRouter(dataStr,animate,animateParams,page);
	}; 
	componentDidMount(){
		let { data } = this.props, 
			img_src = data.data.content.img;
		if(!img_src.type){
			let dom = document.getElementById(this.state.random)
			img_src != 'no_pic' ? dom.appendChild(img_src) : null
		}   
	}   
	render() {
		let { data,name,onLine } = this.props, 
			router = data.data.content.router,
			img_src = data.data.content.img,
			picture = img_src.type ? compImgFormat(this.props, img_src) : '',
			dom = null;
		if(picture){
			if(name){
				dom = <img src={ picture } />
			}else if(onLine){
				dom = <img src={ picture } />
			}else{
				dom = <img src={ configData.resourceBasePath + picture } />
			}
		}
		return (
			<div id={this.state.random} className="e-picture" style={cssColorFormat(this.props, 'image')} onClick={()=>this.toPage(router)} >
				{ dom }
			</div>  
		)
	} 
}   

export default Picture
