
function pageEach(da) {
	da.map((_,index) => {
		let pae = JSON.parse(_.elements)
		pae.map((p, i) => {
			pae[i] = dataPlus(p, RYObjExport[p.name])
		})
		da[index].elements = JSON.stringify(pae)
	})
	return da
}
function dataPlus(da, org, idx1, idx2) {
	if (!org) return da
	if(!da&& org) return da
	Object.keys(org).map(_ => {
		if (_ === 'name') return
		let p1 = da[_]
		let p2 = org[_]
		let t1 = getAttr(p1)
		let t2 = getAttr(p2)
		if (org.styleList) {
			idx1 = da.styleList.idx || 0
			idx2 = org.styleList.idx
		}
		if (idx1 !== undefined && idx2 !== undefined) {
			if (idx1 !== idx2 && (_ === 'content' || _ === 'style')) return
		}
		if (p1 === undefined && p2 !== undefined) {
			da[_] = p2
		}else if (p1 !== undefined && p2 === undefined) {
			da[_] = p1
		} else if (t1 === 'Object' && t2 === 'Object') {
			da[_] = dataPlus(p1, p2, idx1, idx2)
		} else if (t1 === 'Array' && t2 === 'Array') {
			if(_ == 'content'){
				return
			}else if(_ == 'components'){
				p1.map((q,i)=>{
					p2.map((p, index) => {
						if(q.name == p.name){
							da[_][i] = dataPlus(q, p, idx1, idx2)
						}
					})
				})
			}else{
				p2.map((p, i) => {
					try {
						da[_][i] = dataPlus(p, p2[i], idx1, idx2)
					} catch(e) {
						console.log(e)
					}
				})
			}
			
		}
	})
	return da
}

 export default pageEach


