/**
 * @Author: Along
 * @Date:   2018-05-07
 * 2D地图组件
 */

import React from 'react'
import Rymbp from '../../../Ryabp'
import './index.less'
 
class FloorMap extends React.Component {
	state = {
		mapApp:'',
		first:0,
		domId:`map_${parseInt(Math.random()*1e5)}`
	} 
	componentWillReceiveProps(props){
		let { floorIndex,shopNo } = props;
		const num = this.state.first + 1
		this.setState({first:num})
		if(this.state.mapApp){
			if(num > 1){
				this.triggerClick(floorIndex,shopNo)
			}else{
				setTimeout(()=>{this.triggerClick(floorIndex,shopNo)},500)
			}
		}
	} 
	componentDidMount(){ 
		let { facilities,floors,location,data,floorIndex,shopNo } = this.props;
		const themeColor = data.data.content.themeColor;
		const color = themeColor ? themeColor.color : "#666";
		let startFloor = 0;
		facilities = facilities.map(item=>{  
			return item.NAME
		})   
		const floorMap = floors.map((item,index)=>{
			if(item.recordId == location.floorId){
				startFloor = index
			}
			return {bg:'file://'+item.LOCAL_PICTURE,nav:'file://'+item.LOCAL_NAV_PICTURE,name:item.NAME}
		})   
		setTimeout(()=>{
			let mapApp = $(`#${this.state.domId}`).ry2dMap({
		        builds: [{
		             floors:floorMap
		        }],
		        // rootPath: 'file:///mnt/sdcard/myapp',
		        pubs: facilities,
		        themeColor: color,        
		        // 多栋不同城
		        startPoint: {
		            buildIndex: 0,  
		            floorIndex: startFloor || 0,   
		            x: location.x||356,  
		            y: location.y||356  
		        }, 
		        endPoint: { 
		            buildIndex: 0,
		            shopNo: '', 
		            icon: ''  
		        },
		        pubsStyle:2,
		        showBuilds:false,//是否显示多层，默认true
    			showOneBuild:true,//只显示一层，默认false
				 pubsPostion:"bottom",//公共设施位置,top,bottom,默认top
			    wayfindEnabled:false,//是否开启导航功能,默认true
			    pubsClickabled:false//公共设施位置是否可以点击,默认true  
		    });
		    this.setState({mapApp:mapApp})
		},5) 
	} 
	shouldComponentUpdate(nextProps,nextState){
		if(nextState.mapApp == ''){
			return true
		}else{
			return false
		}
	}
	triggerClick = (floorIndex,shopNo) => {
		let mapApp = this.state.mapApp;
		//考虑到0为false 
		String(floorIndex) ? mapApp.trigger('changeFloor',parseInt(floorIndex)) : null;
		if(shopNo){
			if(shopNo.indexOf(',') > -1){
				shopNo = shopNo.split(',')[0]
			}
			mapApp.trigger('setShop',{
			    buildIndex:0,//栋索引
			    shopNo:shopNo//店铺号
			})
		}
	}
	render() {
		let { type,data } = this.props
		let { width,height } = data.data.layout;
		const scaleX = parseFloat(parseInt(width)/1080);
		const scaleY = parseFloat(parseInt(height)/600)  
		let style = cssColorFormat(this.props, 'text') 
		return (   
			<div className="e-floorMap" style={{...style,transform:`scaleX(${scaleX}) scaleY(${scaleY})`}}> 
				<div id={this.state.domId} className="e_map2D"></div>
			</div> 
		)  
	}  
} 
 
export default FloorMap
