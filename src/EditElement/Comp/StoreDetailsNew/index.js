/**
 * @Author: Along
 * @Date:   2018-05-10
 
 */ 

import React from 'react'
import './index.less'
import checkToJump from '../../checkToJump'
import Custom from '../Custom'
import { postJSON } from '../Common/RYAjax'

class StoreDetailsNew extends React.Component {
	state = {
		shopDetais:{}
	}
	componentDidMount(){
		let { query } = this.props;
		if(query&&query.PromotionID){
			let Url=configData.RYPostUrl.api + '/getPreferentialDetail';
			this.postData(Url,query.PromotionID)
		}
	}
	//请求数据
	postData = (Url,PromotionID) => {
		postJSON(Url,{mallId:configData.mallId,promotionId:PromotionID}).then(res=>{
			if(res.msg == 'success'){
				let shopDetais = res.data ? res.data.data : {}
				this.setState({shopDetais:shopDetais})
				
			}
		})
	} 
	render() { 
		let { data } = this.props;
		return (   
			<Custom
				data={data}
				ioInput={this.state.shopDetais}
			/>  
		)
	}
}
 
export default StoreDetailsNew
