/**
 * @Author: Along
 * @Date:   2018-11-30T17:21:39+08:00
*/

import React from 'react'
import checkToJump from '../../../checkToJump'
import JumpRouter from '../../../JumpRouter'
import OneNewActive from '../../StoreListNew/OneNewActive'
import RYAjax from '../../Common/RYAjax'
import './index.less'


export default class CatgByWon extends React.Component {
	constructor(props) {
		super(props)
	}
	state = {
		categories:[{name:'未开始',id:1},{name:'进行中',id:2},{name:"已过期",id:3}]
	}
	componentDidMount(){
		
	}
	//筛选店铺
	selectVal = str => {
		let { catgByWon, ioOuter,page } = this.props
		if (catgByWon === str) return
		const dataStr = checkToJump('activitiesFilter','activities',str,200);
		JumpRouter(dataStr,'','',page)
		ioOuter(str)
	}
	shouldComponentUpdate(nextProps,nextState){
		return true
	}
	
	render() {
		let { catgByWon,data } = this.props,
			styleObj = cssColorFormat(this.props, 'filter'),
			filterBox = cssColorFormat(this.props, 'filterBox'),
			filterFlex = cssColorFormat(this.props, 'filterFlex');
		return (
			<section className={`e-catg-by-activities scrollbar`} style={filterBox}>
				<div className="e-catg-by-activities-box" style={filterFlex}>
					{ 
						this.state.categories.map((_, i) => {
							return <div key={i} onClick={() => this.selectVal(_.id)}><OneNewActive styleObj={styleObj} ioInput={{catgByWon:catgByWon}} data={data} item={_} type={'CatgByWon'} /></div>
						})
					 }
				</div>
			</section>
		)
	}
}
