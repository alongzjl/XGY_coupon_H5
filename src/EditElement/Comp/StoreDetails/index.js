/**
 * @Author: Along
 * @Date:   2018-05-10
 
 */ 

import React from 'react'
import './index.less'
import RNMsgChannel from 'react-native-webview-messaging'
import checkToJump from '../../checkToJump'
import Custom from '../Custom'

class StoreDetails extends React.Component {
	state = {
		shopDetais:[{NAME:'',LOCAL_LOGO:'',BERTH_NUMBER:'',CONTACT:'',LOCAL_URL:[{LOCAL_URL:''}],DESCRIPTION:''}],
		first:0
	}
	componentWillMount() {
		let { query } = this.props;
		if(query.params){
			const params = JSON.parse(query.params)
			params['store'] ? RNMsgChannel.emit('RY_shopParams',{id:params['store'],currentPage:1}) : null;
		}
	}
	componentDidMount(){
		let { query } = this.props;
		if(query.params){
			const params = JSON.parse(query.params)
			RNMsgChannel.on('RY_shops', data => {
				const first = this.state.first + 1
				first<=2&&params['store'] ? this.setState({
					shopDetais:data.data[0],
					first:first
				}) : null
			});
		}
	}
	shouldComponentUpdate(nextProps,nextState){
		let { query } = nextProps;
		if(query.params){
			return nextState.first == 1 ? true : false
		}else{
			return true
		}
	}
	render() { 
		let { data, query,animate,animateParams,page } = this.props;
		let shopDetais = query.detail ? JSON.parse(query.detail) : this.state.shopDetais[0];
		if(query.params&&this.state.first == 0){
			return false
		}
		let comp  = data.data.components;  
		let textComp = comp.filter(item=>item.name == 'text');
		textComp.length>0 ? textComp[0].data.content.text = shopDetais.NAME : null; 
		let imageComp = comp.filter(item=>item.name == 'picture');
		imageComp.length>0 ? imageComp[0].data.content.img.img = shopDetais.LOCAL_LOGO : null;
		let addressComp = comp.filter(item=>item.name == 'address');   
		//获取楼层和电话
		addressComp = addressComp.map(item=>{
			if(item.data.type == 'address'){
				item.data.content.text = shopDetais.BERTH_NUMBER;
			}else if(item.data.type == 'phone'){
				item.data.content.text = shopDetais.CONTACT;
			} 
			return item
		})  
		let buttonComp = comp.filter(item=>item.name == 'button');
		//跳转页面  
		if(buttonComp.length>0){
			let queryData = checkToJump(shopDetais,buttonComp[0].data.content.router.url)
			buttonComp[0].data.content.router.RYDetail = queryData
		}
		data.data.components = textComp.concat(imageComp,addressComp,buttonComp); 
		return (   
			<Custom
				data={data}
				animate={animate}
				animateParams={animateParams}
				page={page}
			/>  
		)
	}
}
 
export default StoreDetails
