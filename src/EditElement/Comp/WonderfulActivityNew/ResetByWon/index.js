/**
 * @Author: Along
 * @Date:   2018-11-30T17:21:39+08:00
*/

import React from 'react'
import checkToJump from '../../../checkToJump'
import JumpRouter from '../../../JumpRouter'
import Layout from '../../Layout'
import './index.less'

class ResetByWon extends React.Component {
	state = {
		click:false
	}
	shouldComponentUpdate(nextProps,nextState){
		return true
	}
	selectVal = () => { 
		let { ioOuter,page,catgByWon } = this.props
		if(catgByWon === '') return
		const dataStr = checkToJump('activitiesFilter','activities','all',208);
		JumpRouter(dataStr,'','',page)
		ioOuter('') 
	}
	render() {
		let { data, catgByWon } = this.props,
			{ componentLayout } = data.data,
			filterBox = cssColorFormat(this.props, 'filterBox'),
			cl = []
		componentLayout.map(_ => {
			var { active } = _.feature
			if(active&&!catgByWon || !active&&catgByWon){
				cl.push(_)
			}
		})
		let dataNew = JSON.parse(JSON.stringify(data))
		dataNew.data.componentLayout = cl
		return (
			<section
				className={`e-reset-by-activities`}
				style={filterBox}
				onClick={() => {this.selectVal()}}
			>
				<Layout data={dataNew} refresh={true} />
			</section>
		)
	}
}
export default ResetByWon
