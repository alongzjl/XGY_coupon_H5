
/**
 * @Author: Along
 * @Date:   2018-04-21T17:21:39+08:00
 * @Last modified by:   Liao Hui
 * @Last modified time: 2018-04-24T13:47:49+08:00
 */
 
import React from 'react'

import StoreListNew   from '../EditElement/Comp/StoreListNew'
import Picture   from '../EditElement/Picture'

import addAnimate from './animateAdd'
import './index.less'

class EditElementCommon extends React.Component {
  state = {
  	name:'',
  	page:''
  }
  componentWillMount() {
  		let toPage =  configData.pageContent;
  		if(!toPage[0].animation){
	  		const animationStr = {
	  			in:{className: '',direction: '',delay: 0,duration: 1,iterationCount: 1},
	  			out:{className: '',direction: '',delay: 0,duration: 1,iterationCount: 1}
	  		}
	  		toPage[0].animation = JSON.stringify(animationStr)
	  	}
	  	this.setState({page:toPage[0]})
	}
  	leaveAnimate = () => {
  		const objAn = JSON.parse(this.state.page.animation);
		const animateOut = objAn.out
		const pageAnimateOut = addAnimate(animateOut);
     	this.setState({name:pageAnimateOut.name})
	}
	render() { 
		 let page  =this.state.page,    
			eles   = page.elements.length > 0 ? page.elements : [],
			feature = JSON.parse(page.feature),   
			color  = feature.backgroundColor, 
			query = this.props.location.query,
			animateParams   =   JSON.parse(page.animation);
		let bgStyle   = { backgroundColor: color.color };
 		const pageInAnimate = addAnimate(animateParams.in);
 		const pageOutAnimate = addAnimate(animateParams.out);
 		const pageInAnimateDelay = animateParams.in.className ? (animateParams.in.delay + animateParams.in.duration) : 0;
 		const pageParams = {router:page.router,title:page.title};
 		let childNode = eles.map((element, i) => { 
 							const noFormatAni = element.data.animation;
							const animateInfo = addAnimate(noFormatAni);
							let layout    = element.data.layout, 
								  styleIdx  = element.styleList.idx,
								  aniCls    = animateInfo.name,
				                  aniSty    = animateInfo.style,
				                  compCon;
				                 aniSty.animationDelay = `${noFormatAni.delay + pageInAnimateDelay}s`;
				              switch (element.name) {
				              	case "picture" : compCon = (<Picture data={element} type={`Style${styleIdx + 1}`} />); break
							 	case "storeList2" : compCon = (<StoreListNew data={element} type={`Style${styleIdx + 1}`} query={query} />); break
							 	default: ; break
						 }
						 return (
							<div className={`pge-layout ${aniCls? aniCls: ''}`} style={{...layout,...aniSty}} key={i}>{ compCon }</div>
						 )
					  })
 		return ( 
			<div className={`pg-element-parent ${this.state.name}`} style={pageOutAnimate.style}> 
				<section className={`pg-element ${pageInAnimate.name}`} style={{...bgStyle,...pageInAnimate.style}}>{ childNode }</section>
			</div>
		)
	}
}
 

export default EditElementCommon
