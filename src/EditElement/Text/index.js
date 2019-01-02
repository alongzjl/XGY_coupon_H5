/**
 * @Author: Along
 * @Date:   2018-04-27
 
 */

import React from 'react'
import JumpRouter from '../JumpRouter'
import checkToJump from '../checkToJump'
import './index.less'

class Text extends React.Component {
	
	toPage = data => {
		const {animate,animateParams,page} = this.props,
		dataStr = checkToJump('RYRouterSet',data);
	 	JumpRouter(dataStr,animate,animateParams,page);
	}
	renderStyle1(props, style,recommendReason,typeParent) {
		let { data } = props,
		 	text = data.data.content.text,
		 	styleObj = cssColorFormat(props, style), 
		 	styleAlign = {textAlign:styleObj.textAlign};
		text = text ? String(text).replace(/\\n/g,'<br/>') : ''
		if(typeParent&& typeParent == 'storeDetails'){
			styleObj = {...styleObj,overflowY:'auto'};
		}   
		if(!text) return null 
		if(recommendReason) return (<div style={styleAlign} ><span style={styleObj} dangerouslySetInnerHTML={{__html: textBreak(text)}}></span></div>)
		return ( 
			<div style={styleObj} dangerouslySetInnerHTML={{__html: textBreak(text)}}></div>
		)
	}
	
	render() {
		let { type,data,recommendReason,typeParent } = this.props
		let render   = this[`render${type}`]? this[`render${type}`]: this.renderStyle1
		let dom      = render(this.props, 'text',recommendReason,typeParent)
		const router = data.data.content.router
		return (
			<div className={`e-text ${type}`} onClick={() => this.toPage(router)} > 
				{ dom }
			</div>
		)
	}
}

export default Text
