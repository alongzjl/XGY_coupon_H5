import 'core-js/fn/object/assign'
import React        from 'react'
import ReactDOM     from 'react-dom'
import 'url-search-params-polyfill'
import RouterRY from './router'
import tools from './services/tools'
import 'styles/common.less'
import 'styles/animate.less'
import 'animate.css'
tools()

ReactDOM.render((
	<RouterRY></RouterRY>
), document.getElementById('app')) 		 	 	

  