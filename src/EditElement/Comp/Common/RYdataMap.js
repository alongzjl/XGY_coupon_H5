//数据映射
export default function RYdataMap(item,type){
	let obj = item;
	if(type == 'NewStore' || type == 'storeDetails'){
		obj.berthNumber = item.EndTime&&item.StartTime ? `有效期: ${item.StartTime.substr(0,10)}-${item.EndTime.substr(0,10)}` : ''
	}
	Object.keys(item).map(val=>{
		switch(val){ 
			case 'logo' : !item[val] ? obj[val]  = './image/no_store.png' : null;break
			case 'categories' : obj['categories'] = getAttr(item[val]) == 'Array' ? item.categories[0].name : '特别推荐';
				!obj['categories'] ? obj['categories'] = '特别推荐' : null;
			break
 			case 'praiseAmount' : !obj['praiseAmount'] ? obj['praiseAmount'] = '0' : null;
 			break
 			case 'RECOMMEND' : obj['recommend'] = item[val];
 			break
		}  
	})
	return obj 
}