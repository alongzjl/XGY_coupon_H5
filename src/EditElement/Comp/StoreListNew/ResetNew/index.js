/**
 * @Author: Liao Hui
 * @Date:   2018-04-21T17:21:39+08:00
 * @Last modified by:   Liao Hui
 * @Last modified time: 2018-04-24T13:47:49+08:00
 */

import React from 'react'
import checkToJump from '../../../checkToJump'
import JumpRouter from '../../../JumpRouter'
import Layout from '../../Layout'
import './index.less'

window.storeCatgId = '';
const compMap = {
	catgByStore2:'catg',
	letterByStore2:'letter',
	floorByStore2:'floor'
}

class ResetNew extends React.Component {
	state = {
		click:false
	}
	shouldComponentUpdate(nextProps,nextState){
		return !nextProps.storeUpdate
	}
	selectVal = () => { 
		let { ioInput, ioOuter,page,comp } = this.props
		const initMap = {
			currentPage:   1,
			loading:false,
			changePage : false
		} 
		comp.map(_=>{
			if(compMap[_.name]){
				initMap[compMap[_.name]] = _.name === 'catgByStore2' ? storeCatgId : ''
			}
		})
		for (let p in ioInput) {
			let im = initMap[p]
			if (im !== undefined) ioInput[p] = im
		}
		ioOuter(ioInput) 
	}
	render() {
		let { data, ioInput,comp } = this.props,
			{ componentLayout } = data.data,
			filterBox = cssColorFormat(this.props, 'filterBox'),
			cl = []
		componentLayout.map(_ => {
			var { active } = _.feature
			if(active){
				let all = true
				comp.map(v=>{
					if(!compMap[v.name]) return
					if(v.name === 'catgByStore2'){
						if(storeCatgId != ioInput['catg']){
							all = false
						}
					}else{
						if(ioInput[compMap[v.name]] != '') { all = false }
					}
				})
				all ? cl.push(_) : null
			}else{
				let all = false
				comp.map(v=>{
					if(!compMap[v.name]) return
					if(ioInput[compMap[v.name]] != '') { all = true }
					return 
				})
				all ? cl.push(_) : null
			}
		})
		let dataNew = JSON.parse(JSON.stringify(data))
		dataNew.data.componentLayout = cl
		return (
			<section
				className={`e-reset-by-store2`}
				style={filterBox}
				onClick={() => {this.selectVal()}}
			>
				<Layout data={dataNew} refresh={true} />
			</section>
		)
	}
}
export default ResetNew
