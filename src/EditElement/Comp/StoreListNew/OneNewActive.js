//单个组件--新店铺列表中单个元素
import React from 'react'
import Layout from '../Layout'

export default function OneNewActive({ ioInput,data,item,styleObj,type }){
	let { componentLayout } = data.data,
		{ catg,floor,letter,currentPage,catgByWon } = ioInput,
		cl = [],everyId,isAV;
	switch(type){
		case 'CatgNew'  :  everyId = item.id;isAV = everyId == catg;break
		case 'CatgByWon'  :  everyId = item.id;isAV = everyId == catgByWon;break
		case 'FloorNew' :  everyId = item.id;isAV = everyId == floor;break
		case 'LetterNew':  everyId = item.name;isAV = everyId == letter;break
		case 'PageNew'  :  everyId = item.name;isAV = everyId == currentPage;break
	}
	componentLayout.map(_ => {
		let { active } = _.feature
		if ((isAV && active) || (!isAV && !active)) {
			cl.push(_)
		}
	})
	let dataNew = JSON.parse(JSON.stringify(data))
	dataNew.data.componentLayout = cl
	return (
			<div className="oneClick" >
				<Layout itemList={item} data={dataNew} styleObj={styleObj} refresh={true} type={type} />
			</div>
		)
}
