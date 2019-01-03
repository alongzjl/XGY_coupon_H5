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
			//if(res.msg == 'success'){
				let shopDetais = res.data ? res.data.data : {}
				shopDetais = {
					Name:'alongfsf',
					Photo:'http://rongyi.b0.upaiyun.com/system/smart/test/file/resourcePic/1901031616585257/1901031616585234.png',
					EndTime:'2018/12/31 11:28:43',
					StartTime:'2018/12/31 11:28:43',
					SubTitle:'防守打法接收到福建省的路口附近 反倒是减肥is 发不打算减肥',
					Article:'<h1>fsdfsdfsdfsd发送到</h1>'
				}
				this.setState({shopDetais:shopDetais})
				
			//}
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
