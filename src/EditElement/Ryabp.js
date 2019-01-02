//数据埋点

const Rymbp = (pageInfo,id,dom) => {
	const element = dom ? dom : undefined;
	const id_element = id&&id != 'all' ? [`id:${id}`] : [];
	let postData =  {
	   "action": 4, //操作目标类型,enum,必填
	   "content": id_element,// 操作元素内容,Array,非必填
	   "custom_page":pageInfo.router,//页面标识,String,必填
	   "custom_pag_name":pageInfo.title,//页面名称,String,必填
	};
	 element ? postData.element = element : null
	 rymbp.upload(postData);
}

export default Rymbp 
