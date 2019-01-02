/**
 * @Author: Liao Hui
 * @Date:   2018-04-21T17:21:39+08:00
 * @Last modified by:   Liao Hui
 * @Last modified time: 2018-04-24T13:47:49+08:00
 */
 
import React from 'react'
import EditElementCommon from './pageCommon'

class EditElementFirst extends React.Component {

	shouldComponentUpdate(nextProps,nextState) {
		return false
	}
	render() {  
		const path = this.props.route.path,
			  query = this.props.location.query;
		return ( <EditElementCommon path={path} query={query} /> )
	}
}
 

export default EditElementFirst
