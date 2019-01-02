//数据映射
export default function RYdataMap(item){
	let obj = item;
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