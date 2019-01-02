import React from 'react'
import OneNewActive from '../OneNewActive'
import { postJSON } from '../../Common/RYAjax'
import './index.less'


export default class CatgNew extends React.Component {
	constructor(props) {
		super(props)
	}
	state = {
		categories:[],
		update:false
	}
	componentDidMount(){
		let Url=configData.RYPostUrl.api + '/getCategoryList';
		this.postData(Url)
	}
	//筛选店铺
	selectVal = str => {
		let { ioInput, ioOuter } = this.props
		if (ioInput.catg === str) return
		ioInput.catg = str
		ioInput.changePage = false
		ioOuter(ioInput)
	}
	//请求数据
	postData = Url => {
		let { ioInput,ioOuter } = this.props
		let catgFilter = ioInput.catgFilter
		postJSON(Url,{mallId:configData.mallId}).then(res=>{
			if(res.msg == 'success'){
				let dataCatgs = res.data ? res.data.data : []
				if(!catgFilter){
					this.setState({ categories:dataCatgs })
				}else{
					dataCatgs.map(_=>{
						if(_.name == catgFilter || _.name.indexOf(catgFilter) > -1){
							let CatgNew = getAttr(_.childCategory) == 'Array' ? _.childCategory : []
							this.setState({ categories:CatgNew })
							ioInput.catg = storeCatgId = _.id
							ioOuter(ioInput)
						}
					})
				}
			}
		})
	} 
	shouldComponentUpdate(nextProps,nextState){
		if((nextProps.catg == ''&&!nextProps.ioInput.changePage) || nextProps.catg !== this.props.catg || nextState.update){
		 	return true
		}else{
			return false
		}
	}
	componentWillUnmount(){
	
	}
	render() {
		let { data,ioInput } = this.props,
			styleObj = cssColorFormat(this.props, 'filter'),
			filterBox = cssColorFormat(this.props, 'filterBox'),
			filterFlex = cssColorFormat(this.props, 'filterFlex'),
			over = scrollDo(filterFlex);
		let useCatgs = this.state.categories
		let styleFinal = {...filterBox,...over}
		return (
			<section className={`e-catg-by-store2 scrollbar`} style={styleFinal} id="e-catg" >
				<div className="e-catg-by-store2-box" style={filterFlex}>
					{ 
						useCatgs.map((_, i) => {
							return <div key={i} onClick={() => this.selectVal(_.id)}><OneNewActive styleObj={styleObj} ioInput={ioInput} data={data} item={_} type={'CatgNew'} /></div>
						})
					 }
				</div>
			</section>
		)
	}
}
//判断css方向 
function scrollDo(style){
	let dir = {overflowX:'hidden',overflowY:'auto'};
	if(getAttr(style) == 'Object'){
		let c = style.flexDirection;
		if(c=='row'){
			dir = {overflowX:'auto',overflowY:'hidden'}
		} 
	}else{
		return {overflowX:'hidden',overflowY:'hidden'}
	}
	return dir
}

