/**
 * @Author: Along
 * @Date:   2018-05-07
 * 2D地图组件
 */

import React from 'react'
import Rymbp from '../Ryabp'
import RNMsgChannel from 'react-native-webview-messaging'
import './index.less'

class Map2D extends React.Component {
	state = {
		shopDetais:[],
		first:0
	}
	componentWillMount() {
		let { query } = this.props;
		if(query.params){
			const params = JSON.parse(query.params)
			params['store'] ? RNMsgChannel.emit('RY_shopParams',{id:params['store'],currentPage:1}) : null;
		}
	}
	componentDidMount(){ 
		let { query,facilities,floors,location,page,data } = this.props;
		if(query.params){
			const params = JSON.parse(query.params)
			RNMsgChannel.on('RY_shops', data => {
				const first = this.state.first + 1
				first<=2&&params['store'] ? this.setState({
					shopDetais:data.data[0],
					first:first
				},()=>{
					this.mapConfig()
				}) : null
			});
		}else{
			this.mapConfig()
		}
		//埋点方法
		window.AndroidWebAppInterface = {
	        recordReport: function(type, val) {
	           switch (type) {
	           		case "changeFloor" : Rymbp(page,'',301);
	           		case "floorPub" : Rymbp(page,'',300);
	           		case "floorGoto" : Rymbp(page,'',312);
	           }
	        }
	    }
	} 
	shouldComponentUpdate(nextProps,nextState){
		let { query } = nextProps;
		if(query.params){
			return nextState.first == 1 ? true : false
		}else{
			return true
		}
	}
	mapConfig = () => {
		let { query,facilities,floors,location,page,data } = this.props;
		const themeColor = data.data.content.themeColor;
		const color = themeColor ? themeColor.color : "red";
		let shopNo = '', icon = '',shopDetais={BERTH_NUMBER:'',LOCAL_LOGO:''}; 
		if(query.detail){
			shopDetais = JSON.parse(query.detail);
		}else if(this.state.shopDetais.length>0){
			shopDetais = this.state.shopDetais[0]
		}
		shopNo = shopDetais.BERTH_NUMBER;
		if(shopNo && shopNo.indexOf(',') > -1){
			shopNo = shopNo.split(',')[0]
		}
		icon = 'file://'+shopDetais.LOCAL_LOGO;
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
			$('#e_map2D').ry2dMap({
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
		            shopNo: shopNo, 
		            icon: icon  
		        }   
		    }); 
		},5) 
	}
	render() {
		let { type,data } = this.props
		let { width,height } = data.data.layout;
		const scaleX = parseFloat(parseInt(width)/1080);
		const scaleY = parseFloat(parseInt(height)/1080)  
		let style = cssColorFormat(this.props, 'text') 
		return (   
			<div className="e-map2d" style={{...style,transform:`scaleX(${scaleX}) scaleY(${scaleY})`}}> 
				<div id="e_map2D" className="e_map2D"></div>
			</div>
		)  
	}  
} 
 
export default Map2D
