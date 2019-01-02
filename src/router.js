


import React        from 'react'
import { Router, Route, hashHistory } from 'react-router'
import EditElementCommon from './page/pageCommon'
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
			if(location.hash.indexOf('stores') == -1){
				location.href = location.href + `#/stores`; 
			} 
			window.allPages = configData.pageContent; 
			configData.pageContent.map(item=>{
				item.elements = JSON.parse(item.elements)
				return item
			})
			if(this.state.first){
					this.setState({to:true,first:0});
				} 
			window.RYCityName = configData.cityName;
		},100)  
	}        
  render() {
  		return (  
			<div>
				{
					this.state.to ?  
					<Router history={hashHistory}> 
						<Route path="stores" component={EditElementCommon} /> 
					</Router> : null
				}
			</div>  
		)
	}
}
 
