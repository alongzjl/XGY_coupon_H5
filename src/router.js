


import React        from 'react'
import { Router, Route, hashHistory } from 'react-router'
import EditElementFirst from './page/page_1'
import EditElementSecond from './page/page_2'
import dataChange from './test'

window.RY_interent = true;

export default class RouterRY extends React.Component {
	state = {
		to:false,
		first:1
	} 
	 componentWillMount() {
	 	    
		setTimeout(()=>{
			dataChange() 
			configData.pageContent.map(item=>{
				item.elements = JSON.parse(item.elements)
				return item
			})
			if(this.state.first){
					this.setState({to:true,first:0});
				} 
		},100)  
	}        
  render() {
  		return (  
			<div>
				{
					this.state.to ?  
					<Router history={hashHistory}> 
						<Route path="coupon" component={EditElementFirst} />
						<Route path="details" component={EditElementSecond} /> 
					</Router> : null
				}
			</div>  
		)
	}
}
 
