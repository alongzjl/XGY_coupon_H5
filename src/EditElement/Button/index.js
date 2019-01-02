/**
 * @Author: Along
 * @Date:   2018-05-07
 
 */
 
import React from 'react'
import JumpRouter from '../JumpRouter'
import checkToJump from '../checkToJump'
import './index.less'

class Button extends React.Component {
	
	 toPage = (data) => { 
	 	const {animate,animateParams,page} = this.props;
	 	if(data.RYDetail){
	 		JumpRouter(data.RYDetail,animate,animateParams,page)
	 	}else{
	 		let dataStr = checkToJump('RYRouterSet',data);
	 		JumpRouter(dataStr,animate,animateParams,page);
	 	}
	}    
	
	render() { 
		let { type,data } = this.props;
		let style = cssColorFormat(this.props, 'text');
		const router = data.data.content.router;
		return (   
			<div className="e_button" style={style} onClick={() => this.toPage(router)}> 
				{data.data.content.text}  
			</div>     
		)   
	} 
}   
 
export default Button
 