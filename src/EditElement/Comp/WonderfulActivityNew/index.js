/**
 * @Author: Along
 * @Date:   2018-11-30T17:21:39+08:00
*/

import React from 'react'
import './index.less'
import Custom from '../Custom'

class WonderfulActivityNew extends React.Component {
	
 	state = {
		catgByWon:'',
		activities:[]
	};         
	componentWillMount() {  
		let { activities } = this.props
		this.setState({activities:activities})
	};
	componentDidMount() { 
 		
 	}  
	//筛选       
	ioOuter = catgByWon => {
		let { activities } = this.props
		let activities_new = activities.filter(_=>{
			let { startTime,endTime } = _,now = parseInt(new Date().getTime()/1000),filterA = false
			switch(catgByWon) {
				case 1 : filterA = startTime > now ? true : false;
				break
				case 2 : filterA = now >= startTime && now <= endTime ? true : false;
				break
				case 3 : filterA = now > endTime ? true : false;
				break
				default : filterA = true
				break
			}
			return filterA
		})
		this.setState({catgByWon:catgByWon,activities:activities_new})
	} 
	
	componentWillUnmount(){
		
	}  
	render() {
		let { data,animate,animateParams,page } = this.props
		let activitiesParams = {activities:this.state.activities,catgByWon:this.state.catgByWon}
		return <Custom 
					data={data} 
					animate={animate}
					animateParams={animateParams}
					ioOuter={this.ioOuter}
					page={page}
					activitiesParams={activitiesParams}
				/>
	}  
}

export default WonderfulActivityNew
