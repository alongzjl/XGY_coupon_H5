/**
 * @Author: Along
 * @Date:   2018-05-10
 
 */ 

import React from 'react'
import './index.less'
import RNMsgChannel from 'react-native-webview-messaging'
import Custom from '../Custom'

class StoreInstro extends React.Component {
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
		let { data,query,animate,animateParams } = this.props;
		let shopDetais = query.detail ? JSON.parse(query.detail) : this.state.shopDetais[0];
		if(query.params&&this.state.first == 0){
			return false
		}
		let comp  = data.data.components; 
		let splitComp = comp.filter(item=>item.name == 'splitLine'); 
		let textComp = comp.filter(item=>item.name == 'text');
		let imagesComp = comp.filter(item=>item.name == 'wonderfulActivity');
		//获取店铺详情的轮播
		imagesComp.length>0 ? imagesComp[0].data.content = shopDetais.LOCAL_URL : null;
		//文本组件【0】为店铺介绍 【1】位详情
		if(textComp.length == 1){
			textComp[0].data.content.text = shopDetais.DESCRIPTION;
		}else if(textComp.length > 1){
			textComp[1].data.content.text = shopDetais.DESCRIPTION
		} 
		data.data.components = textComp.concat(imagesComp,splitComp);
		return (   
			<Custom
				data={data}
				animate={animate}
				animateParams={animateParams}
			/>    
		)
	}
}
 
export default StoreInstro
