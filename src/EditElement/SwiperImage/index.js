/**
 * @Author: Along
 * @Date:   2018-05-03

 */


import React from 'react'
import Swiper from 'swiper'
import JumpRouter from '../JumpRouter'
import checkToJump from '../checkToJump'
import 'swiper/dist/css/swiper.css'
import './index.less'

class SwiperImage extends React.Component {
	
	componentDidMount() {
		const number = parseInt(Math.random()*10000)
		this.setState({
			random: number 
		},()=>{this.init(this.props,this.state.random)})
	}   
	state = {
		random: 1,
		realIndex:0
	}
	to = event => { 
		event.preventDefault()
	};
	init = (props,random) => {
		let swiperOptions = props.data.feature.swiperOptions;
		swiperOptions = this.formatObj(swiperOptions,random);
		const type = props.data.feature.layout;
		this.mySwiperImage&&this.mySwiperImage.destory(false);
		this.initSwiper(swiperOptions,random);   
	};       
	 initSwiper = (swiperOptions,random) => {
	 	this.mySwiperImage = new Swiper(`.swiper-container_${random}`, swiperOptions) 
	};  
	formatObj = (obj,random) => { 
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
				this.mySwiperImage ? this.setState({realIndex:this.mySwiperImage.realIndex}) : null
			},
			tap:()=>{
				let { data } = this.props;
				data = data.data; 
				const params = data.content[this.mySwiperImage.realIndex].router;
				this.toPage(params)
			}
		} 
		new_obj.watchSlidesProgress = true;
		new_obj.observer = true;//修改swiper自己或子元素时，自动初始化swiper 
		new_obj.observeParents = true;//修改swiper的父元素时，自动初始化swiper 
		return new_obj 
	};  
	componentWillUnmount() {
		this.mySwiperImage.destroy(false)
	}
	toPage = data => {
		const {animate,animateParams,page} = this.props,
		dataStr = checkToJump('RYRouterSet',data);
	 	JumpRouter(dataStr,animate,animateParams,page);
	};
	render() {
		let { data } = this.props;
		data = data.data;   
		return ( 
			<div className="e-SwiperImage">
				<SwiperContent random={this.state.random} props={this.props} content={data.content} />
				<PageRYSwiper totalPage={data.content.length} currentPage={this.state.realIndex} props={this.props} />
			</div>
		)
	} 
} 
//轮播单独渲染，不重复渲染
class SwiperContent extends React.Component {
	shouldComponentUpdate(nextProps,nextState){
		if(nextProps.random == this.props.random){
			return false
		} else{
			return true
		}
	}
	render() {
		let { random,content,props } = this.props
		return(
			<div className={`swiper-container swiper-container_${random} outer_box`}>
				<div className="swiper-wrapper">
					{
						content.map((item,index) => <div className="swiper-slide" key={index} style={cssColorFormat(props, 'swiperImage')}><div className="text_show" style={cssColorFormat(props, 'text')}>{item.title}</div>{ compImgFormat(props, item.img) ? <img src={configData.resourceBasePath+compImgFormat(props, item.img)} /> : null }</div>)
					} 
				</div>   
			</div>
		)
	}
}
//渲染分页显示组件
function PageRYSwiper({ totalPage,currentPage,props }){
	return (
		<section className="e-page">
			<div className="ep-page">
				{
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
				}
			</div>
		</section>
	)
}
export default SwiperImage
