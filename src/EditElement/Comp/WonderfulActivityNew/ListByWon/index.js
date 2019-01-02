/**
 * @Author: Along
 * @Date:   2018-11-30T17:21:39+08:00
*/
import React from 'react'
import Swiper from 'swiper'
import './index.less'
import 'swiper/dist/css/swiper.css'

class ListByWon extends React.Component {
	state = {
		random:parseInt(Math.random()*1e5),
		realIndex:0
	}
	componentDidMount() {
		let { activities} = this.props
		activities.length > 0 ? this.initSwiper(this.props,this.state.random) : null
	}
	componentWillReceiveProps(nextProps) {
		let { activities} = nextProps
		const number = parseInt(Math.random()*1e5);
		this.setState({random:number},()=>{ activities.length > 0 ? this.initSwiper(nextProps,number) : null })
	} 
	componentWillUnmount(){
		this.myActivitiesSwiper && this.myActivitiesSwiper.destroy(false)
	}  
	initSwiper = (props,random) => {
		const swiperOptions = this.formatObj(props.data.feature.swiperOptions)
		this.myActivitiesSwiper && this.myActivitiesSwiper.destroy(false)
		this.myActivitiesSwiper = new Swiper(`.swiper-container_activities_${random}`, swiperOptions)
	}
	formatObj = obj => {
		let new_obj = {};
		for(var key in obj){ 
			if(key == 'autoplay'&& obj[key]){
				new_obj.autoplay = obj['autoplayOptions']
			}else if(key == 'slideOptions'){
				for(var i in obj['slideOptions']){
					new_obj[i] = obj['slideOptions'][i]
				}  
			}else{ 
				if(key != 'autoplayOptions'){
					new_obj[key] = obj[key];
				}  
			}   
		}  
		new_obj.on = {
			slideChange:()=>{
				 clearInterval(RYTimer);
				funcIn()
				this.myActivitiesSwiper ? this.setState({realIndex:this.myActivitiesSwiper.realIndex}) : null
			}
		}  
		new_obj.watchSlidesProgress = true; 
		new_obj.observer = true;//修改swiper自己或子元素时，自动初始化swiper 
		new_obj.observeParents = true;//修改swiper的父元素时，自动初始化swiper 
		return new_obj
	}
	render() {
		let { activities,type } = this.props
		return ( 
			<section className={`e-list-by-activities ${type}`} style={{height:"100%",width:"100%"}}>
				<ActivitiesContent props={this.props} activities={activities} random={this.state.random} />
				<PageRYWonNew totalPage={activities.length} currentPage={this.state.realIndex} props={this.props} /> 
			</section>
		) 
	}
}
//轮播单独渲染，不重复渲染
class ActivitiesContent extends React.Component {
	shouldComponentUpdate(nextProps,nextState){
		if(nextProps.random === this.props.random){
			return false
		} else{
			return true
 		}
	}
	render() {
		let { random,activities,props } = this.props
		return activities.length>0 ? (<div className={`swiper-container swiper-container_activities_${random}`}>
				<div className="swiper-wrapper"> 
					{   
						activities.map((_, i) => <div className="swiper-slide" key={i} style={cssColorFormat(props, 'swiperImage')}><img src={configData.resourceBasePath+_.localPicture} /></div>)
					}     
				</div>    
			</div>) : (<div className="no_activity"><img src='./image/no_activity.png' /></div>)
	}
} 
//渲染分页显示组件 
function PageRYWonNew({ totalPage,currentPage,props }){
	return (
			<section className="e-page">
				<div className="ep-page">{
					Array.from(new Array(totalPage)).map((_, i) => {
						let cur = i
						let nCss = cssColorFormat(props, 'pageSet')
						if (currentPage === cur) nCss = { ...nCss, ...cssColorFormat(props, 'filterActive') }
						return (
							<div
								key={i}
								style={nCss}
								className={`ep-item${currentPage === cur? ' s-active': ''}`}
							>
							</div>
						)
					})
				}</div>
			</section>
		) 
}

export default ListByWon
