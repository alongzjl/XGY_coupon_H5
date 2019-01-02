/**
 * @Author: Liao Hui
 * @Date:   2018-04-21T17:21:39+08:00
 * @Last modified by:   Liao Hui
 * @Last modified time: 2018-04-24T13:47:49+08:00
 */
import React from 'react'
import './index.less'
import Custom from '../Custom'
const Fetch     = require('public/Fetch')

class DateWeather extends React.Component {
	state = {
		weather:{
			temp: '',
			type: '',
			iconName: '',
			humidity: null,
			direct: '',
			power: '',
			aqi: '',
			aqiInfo: '' 
		},
		no_show:true
	} 
	componentDidMount() {
		this.interval()
		//this.timer = setInterval(()=>{ this.interval() },600000)
	}
	interval = () => {
		Fetch.default.postJSON('http://api.rongyiguang.com/easy-smart-service/member/newWeather',{city:window.RYCityName}).then(res=>{
			if (res.meta.errno === 0) {
				this.setState({weather:res.result.data,no_show:false});
			}
		}) 
	}
	componentWillUnmount() {
		//clearInterval(this.timer)
	}
	render() {
		let { data } = this.props
		return ( 
			<Custom
				data={data}
				ioInputW={this.state}
			/>
		)
	}
}

export default DateWeather
