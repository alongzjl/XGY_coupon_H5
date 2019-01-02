import React from 'react'
import OneNewActive from '../OneNewActive'
import { postJSON } from '../../Common/RYAjax'
import './index.less'


export default class FloorNew extends React.Component {
	state = {
		floors:[],
		update:false,
		ioInput:this.props.ioInput
	} 
	componentDidMount(){
		let Url=configData.RYPostUrl.api + '/getFloorList';
		this.postData(Url);
	}
	componentWillReceiveProps(props){
		this.setState({ ioInput: props.ioInput })
	}
	//筛选店铺
	selectVal = (str,index) => {
		let { ioInput, ioOuter } = this.props
		if (ioInput.floor === str) return
		ioInput.floor = str
		ioInput.changePage = false
		ioOuter(ioInput)
	}  
	//请求数据
	postData = Url => {
		let { ioOuter } = this.props
		let ioInput = this.state.ioInput
		postJSON(Url,{mallId:configData.mallId}).then(res=>{
			if(res.msg == 'success'){
				let dataFloors = res.data ? res.data.data : []
				if(ioInput.floor){
					for(let i=0;i<dataFloors.length;i++){
						if(dataFloors[i].name == ioInput.floor || dataFloors[i].name.indexOf(ioInput.floor) > -1){
							ioInput.floor = dataFloors[i].id;
							ioOuter(ioInput)
							this.setState({ ioInput:ioInput,update:true })
							break
						}
					}
				}
				this.setState({ 
					floors:dataFloors
				})
			}
		})
	} 
	 shouldComponentUpdate(nextProps,nextState){
		if((nextProps.floor == ''&&!nextProps.ioInput.changePage) || nextProps.floor !== this.props.floor || nextState.update){
		 	return true
		}else{ 
			return false
		}
	}
	componentWillUnmount(){
		
	}
	render() {
		let { data } = this.props,
			styleObj = cssColorFormat(this.props, 'filter'),
			filterBox = cssColorFormat(this.props, 'filterBox'),
			filterFlex = cssColorFormat(this.props, 'filterFlex'),
			over = scrollDo(filterFlex);
		let useFloors = this.state.floors
		let styleFinal = {...filterBox,...over}
		return (
			<section className={`e-floor-by-store2 scrollbar`} style={styleFinal}>
				<div className="e-floor-by-store2-box" style={filterFlex}>
					{ 
						useFloors.map((_, i) => { 
							return <div key={i} onClick={() => this.selectVal(_.id,i)}><OneNewActive type="FloorNew" styleObj={styleObj} ioInput={this.state.ioInput} data={data} item={_} /></div>
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

