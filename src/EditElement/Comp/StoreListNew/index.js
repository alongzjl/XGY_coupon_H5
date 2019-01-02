

import React from 'react'
import './index.less'
import Custom from '../Custom'
const Fetch     = require('public/Fetch')
class StoreListNew extends React.Component {
	
 	state = {
		paramsData:{
			currentPage:1,
			floor:  '',
			letter: '', 
			catg:   '',
			changePage:false,
			clickStore:false,
			router:undefined,
			catgFilter:''
		}, 
		internet:true,
		first:true,
		Update:false,
		shopsInfo:{
			data:[[1,2,3,4,5,6,7,8,9,10,11,12]],
			page:{totalPage:1}
		} 
	};         
	componentWillMount() {  
		let { data,query } = this.props,
			content = data.data.content,
			size = data.data.content.size || 12;
		this.state.paramsData.size = size 
		let paramsData = this.state.paramsData
		if(query){
			const floor = query['floor'] ? query['floor'] : '',
				  catgFilter = query['type'] ? query['type'] : '',
				  router = query['router'];
			if(floor || catgFilter || router){
				paramsData.floor = floor
				paramsData.catgFilter = catgFilter
				paramsData.router = router
				this.setState({paramsData:paramsData},()=>{
					this.getDataPost(paramsData,size);
				})
			}else{ 
				this.getDataPost(paramsData,size);
			} 
		}else{ 
			this.getDataPost(paramsData,size);
		}
	};
	componentDidMount() { 
 		let { data } = this.props,
 		content = data.data.content;
 		let size = content.size || 12;
 	}      
	//请求在线数据
	getDataPost = (paramsData,size) => {
		this.changeShops(paramsData,size)
	} 
	//切换筛选时拉数据
	changeShops = (paramsData,size) => {
		storeListMake(paramsData,size).then(res=>{
			if(res.msg == 'success'){
					this.setState({
						shopsInfo:{
							data:res.data,
							page:{totalPage:res.data.length}
						},  
						Update:true,
						paramsData:paramsData
					})
			}
		});
	} 
	//筛选       
	ioOuter = (ipt,params) => {
		let { data } = this.props;
		const size = data.data.content.size;
		if(!ipt.changePage){
			ipt.currentPage = 1;
		}
		params ? (ipt.mapParams[params.type] = params.value) : null 
		ipt.clickStore = false
		this.changeData(ipt,size)
		
	} 
	//筛选店铺
	changeData = (ipt,size) => {
		let { data } = this.props,
 		content = data.data.content;
 		this.setState({paramsData:ipt,Update:false},()=>{
 			this.getDataPost(ipt,size);
		});
	}
	componentWillUnmount(){
		
	}  
	render() {
		let { data,animate,animateParams } = this.props
		return (<div style={{height:"100%"}}>
				<Custom 
						data={data} 
						animate={animate}
						animateParams={animateParams}
						shopsInfo={this.state.shopsInfo}
						ioInput={this.state.paramsData}
						ioOuter={this.ioOuter}
						storeUpdate={this.state.Update}
					/>
			</div>)
	}  
}

//在线店铺数据处理
function storeListMake(paramsData,size){
	let Url=configData.RYPostUrl.api + '/getShopList';
	return new Promise((resolve, reject) => {
		Fetch.default.postJSON(Url,{
			mallId:configData.mallId,
			categoryId:paramsData.catg,
			floorId:paramsData.floor,
			currentPage:paramsData.currentPage,
			pageSize:size,
			mallNameFirstLetter:paramsData.letter
		}).then(res=>{
			if (res.meta.errno == 0) {
				const list = res.result ? res.result.data : [];
				let page = res.result ? res.result.page : {totalPage:1,totalCount:1};
				let newArr = ArrMake(size,page,paramsData,list);
				resolve({msg:'success',data:newArr}) 
			}else{
				resolve({msg:'fail',data:''})  
			}
		}).catch(error=>{
			resolve({msg:'error',data:''})
		}); 
	})
}
//重组数组 
function ArrMake(size,page,paramsData,list){
	let { totalPage = 1,totalCount = 1 } = page
	let oneObj =  Array.from(new Array(size), (_,i) => i)
	let newArr =  Array.from(new Array(totalPage), (_,i) => {
		let item = 0; 
		if(paramsData.currentPage-1 == i){
			item = list;
		}else if(paramsData.currentPage-2 == i || paramsData.currentPage == i){
			if(i == totalPage - 1){
				let num = size-(size*totalPage-totalCount);
				let lastObj =  Array.from(new Array(num), (_,i) => i);
				item = lastObj; 
			}else{ 
				item = oneObj;
			} 
		}
		return item
	})   
	return newArr
}
export default StoreListNew
