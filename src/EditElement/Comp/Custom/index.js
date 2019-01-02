/**
 * @Author: Liao Hui
 * @Date:   2018-04-21T17:21:39+08:00
 * @Last modified by:   Liao Hui
 * @Last modified time: 2018-04-24T13:47:49+08:00
 */

import React from 'react'

//新店铺
import LetterNew       	from '../StoreListNew/LetterNew'
import FloorNew        	from '../StoreListNew/FloorNew'
import CatgNew         	from '../StoreListNew/CatgNew'
import PageNew         	from '../StoreListNew/PageNew'
import ResetNew        	from '../StoreListNew/ResetNew' 
import ListByStoreNew  	from '../StoreListNew/ListByStoreNew'

import addAnimate from '../../../page/animateAdd'

import './index.less'

 

class Custom extends React.Component {
	
	render() {  
		let { data, ioInput, ioOuter,shopsInfo,storeUpdate } = this.props
		let comp  = data.data.components,
			delayTime = data.data.animation.className ? (data.data.animation.delay + data.data.animation.duration) : 0;
		let childNode = comp.map((_, i) => {  
			const noFormatAni = _.data.animation;
			const animateInfo = addAnimate(noFormatAni);
			let compName = _.name,
				layout   = _.data.layout,
				styleIdx = _.styleList.idx,
				aniCls    = animateInfo.name,
				aniSty   = animateInfo.style,
				compCon ;
			aniSty.animationDelay = `${noFormatAni.delay + delayTime}s`;
			switch(compName){
				case 'letterByStore2' : compCon = (<LetterNew data={_} type={`Style${styleIdx + 1}`} ioInput={ioInput} ioOuter={ioOuter} letter={ioInput.letter} />);break
				case 'floorByStore2' : compCon = (<FloorNew data={_} type={`Style${styleIdx + 1}`} ioInput={ioInput} ioOuter={ioOuter} floor={ioInput.floor} />);break
				case 'catgByStore2' :  compCon = (<CatgNew data={_} type={`Style${styleIdx + 1}`} ioInput={ioInput} ioOuter={ioOuter} catg={ioInput.catg} />);break
				case 'pageByStore2' : compCon = (<PageNew data={_} type={`Style${styleIdx + 1}`} ioInput={ioInput} ioOuter={ioOuter} shopsInfo={shopsInfo} />);break
				case 'resetByStore2' :  compCon = (<ResetNew data={_} type={`Style${styleIdx + 1}`} comp={comp} ioInput={ioInput} ioOuter={ioOuter} storeUpdate={storeUpdate} />);break
				case 'listByStore2' : compCon = (<ListByStoreNew data={_} type={`Style${styleIdx + 1}`} ioInput={ioInput} ioOuter={ioOuter} shops={shopsInfo} storeUpdate={storeUpdate} />);break
			}
			return (   
				<div className={`pge-layout ${compName} ${aniCls? aniCls: ''}`} style={{...layout,...aniSty}} key={i}>{ compCon }</div> 
			)   
		})     
		return (
			<section className="pg-custom">
				{ childNode } 
			</section>
		)
	}
}


export default Custom
