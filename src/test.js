 const API_url = {
    'dev':{
       "api":"http://192.168.1.206/easy-smart-web/smartPreferential"
    },
    "qa":{ 
       "api":"http://224.rongyi.com/easy-smart-web/smartPreferential"//  http://52.internal.rongyi.com  //http://fe1.rongyi.com:8224
    },         
    "v4":{     
      "api":"http://api.v4.rongyi.com/easy-smart-web/smartPreferential"
    }, 
    "v8":{ 
      "api":"http://api.rongyiguang.com/easy-smart-web/smartPreferential"
    }
  }
   	//const mallId = '5bf50b84130b38000b969e3b'	// online
   	 //const mallId = "5bf50b84130b38000b969e3b"  //v4
	 const mallId = '5bf50b84130b38000b969e3b'	// dev
	//const mallId = '5bf50b84130b38000b969e3b'	// qa
 window.configData =  {
	"resourceBasePath": "",
	"RYPostUrl":API_url.v8,
 	"mallId":mallId,
 	"pageContent": []
 }

const formatMap = {
	margin:       1,
	padding:      1,
	borderRadius: 1,
	boxShadow:    1,
	textShadow:   1,
	transform:    1,
	border:       1,
	borderTop:    1,
	borderRight:  1,
	borderBottom: 1,
	borderLeft:   1
}
const formatPxMap = {
	fontSize:          1,
	width:             1,
	height:            1,
	paddingTop:        1,
	paddingRight:      1,
	paddingBottom:     1,
	paddingLeft:       1,
	top:               1,
	right:             1,
	bottom:            1,
	left:              1,
	marginTop:         1,
	marginRight:       1,
	marginBottom:      1,
	marginLeft:        1,
	borderWidth:       1,
	borderTopWidth:    1,
	borderRightWidth:  1,
	borderBottomWidth: 1,
	borderLeftWidth:   1,
	lineHeight:        1
}
function formatEle(obj) {
	let { type, data } = obj
	if (type === 'base') {
		formatStyle(data)
		delete obj.auth
	} else if (type === 'advanced') {
		data.layout = cssFormatByTerm(data.layout)
		data.components&&data.components.map(_ => formatEle(_))
	} else if (type === 'layout') {
		formatStyle(data)
		data.componentLayout&&data.componentLayout.map(_ => formatEle(_))
	}
}
function formatStyle(data) {
	let { style, layout } = data
	Object.keys(data.style).map(_ => style[_] = cssFormatByTerm(style[_]))
	data.layout = cssFormatByTerm(layout)
}
function cssFormatByTerm(obj) {
	Object.keys(obj).map(p => {
		let v = obj[p]
		if (formatMap[p]) {
			 Object.keys(v).map(_ => {
				let w  = v[_]
				const nowData =  getAttr(w) === 'Number'? (w *2 + 'px'): w
				obj[p][_] = nowData
			})
		}
		else if (formatPxMap[p]) {
			obj[p] = v * 2 + 'px'
		}
	})
	var newO = {}
	var newObj = Object.keys(obj).sort()
	newObj.map(_ => {
		newO[_] = obj[_]
	})
	return newO
}
function formatPage(obj) {
	obj.elements.map(_ => formatEle(_))
}

const dataChnage = () => {
	const originData ={
		  "p_1000": {
			    "router": "p_1000",
			    "title": "首页",
			    "elements": [{
			      "name": "storeList2",
			      "type": "advanced",
			      "data": {
			        "layout": {
			          "position": "absolute",
			          "top": 0,
			          "left": 0,
			          "width": 960,
			          "height": 540
			        },
			        "style": {},
			        "content": {
			          "size": 9,
			          "dataSource": "base"
			        },
			        "animation": {
			          "className": "",
			          "direction": "",
			          "delay": 0,
			          "duration": 1,
			          "iterationCount": 1
			        },
			        "components": [{
			          "name": "catgByStore2",
			          "type": "layout",
			          "data": {
			            "layout": {
			              "position": "absolute",
			              "top": 30,
			              "left": 30,
			              "width": 900,
			              "height": 70
			            },
			            "style": {
			              "filterFlex": {
			                "display":"flex",
			                "justifyContent":"center"
			              },
			              "filterBox": {
			                "background": 'center no-repeat',
							"backgroundSize": 'cover',
							"backgroundImage": { 
								"type": 'custom', 
								"img": "http://rongyi.b0.upaiyun.com/system/smart/test/file/resourcePic/1901031616585257/1901031616585234.png"
							}
			              },
			              "filter": {
			                "width": 52,
			                "height": 70,
			                "margin": {
			                  "top": 0,
			                  "right": 25,
			                  "bottom": 0,
			                  "left": 0
			                }
			              }
			            },
			            "componentLayout": [{
			              "name": "textBind",
			              "type": "base",
			              "data": {
			                "style": {
			                  "text": {
			                    "textAlign": "center",
			                    "fontSize": 13,
			                    "lineHeight": 50,
			                    "transform": {
			                      "rotate": 0
			                    },
			                    "fontStyle": "normal",
			                    "fontWeight": "bold",
			                    "textDecoration": "none",
			                    "textIndent": 0,
			                    "opacity": 1,
			                    "backgroundColor": {
			                      "type": "custom",
			                      "color": "rgba(0, 0, 0, 0)",
			                      "rgb": "#000",
			                      "alpha": 0
			                    },
			                    "borderRadius": {
			                      "topLeft": 20,
			                      "topRight": 20,
			                      "bottomRight": 20,
			                      "bottomLeft": 20
			                    },
			                    "borderWidth": 0,
			                    "borderStyle": "solid",
			                    "borderColor": {
			                      "type": "custom",
			                      "color": "rgba(0, 0, 0, 0)",
			                      "rgb": "#000",
			                      "alpha": 0
			                    },
			                    "padding": {
			                      "top": 0,
			                      "right": 0,
			                      "bottom": 0,
			                      "left": 0
			                    },
			                    "textShadow": {
			                      "h_shadow": 0,
			                      "v_shadow": 0,
			                      "blur_dis": 0,
			                      "color": {
			                        "type": "custom",
			                        "color": "rgba(0,0,0,0)",
			                        "rgb": "#000",
			                        "alpha": 0
			                      }
			                    },
			                    "color": {
			                      "type": "custom",
			                      "color": "rgba(255,255,255,1)",
			                      "alpha": 100,
			                      "rgb": "#ffffff"
			                    }
			                  }
			                },
			                "layout": {
			                  "position": "absolute",
			                  "top": 0,
			                  "left": 0,
			                  "width": 52,
			                  "height": 70
			                },
			                "content": {
			                  "bind": "name",
			                  "router": {}
			                },
			                "type": "normal",
			                "animation": {
			                  "className": "",
			                  "direction": "",
			                  "delay": 0,
			                  "duration": 1,
			                  "iterationCount": 1
			                }
			              },
			              "styleList": {
			                "idx": 0
			              },
			              "feature": {},
			              "auth": {
			                "style": {
			                  "text": {
			                    "textAlign": false,
			                    "fontSize": false,
			                    "lineHeight": false,
			                    "transform": false,
			                    "fontStyle": false,
			                    "fontWeight": false,
			                    "textDecoration": false,
			                    "textIndent": false,
			                    "opacity": false,
			                    "backgroundColor": false,
			                    "borderRadius": false,
			                    "borderWidth": false,
			                    "borderStyle": false,
			                    "borderColor": false,
			                    "padding": false,
			                    "textShadow": false,
			                    "color": false
			                  }
			                },
			                "content": {
			                  "bind": false,
			                  "router": false
			                },
			                "animation": {
			                  "className": false,
			                  "direction": false,
			                  "delay": false,
			                  "duration": false,
			                  "iterationCount": false
			                },
			                "fture": {}
			              }
			            }, {
			              "name": "textBind",
			              "type": "base",
			              "data": {
			                "style": {
			                  "text": {
			                    "textAlign": "center",
			                    "fontSize": 13,
			                    "lineHeight": 50,
			                    "transform": {
			                      "rotate": 0
			                    },
			                    "fontStyle": "normal",
			                    "fontWeight": "bold",
			                    "textDecoration": "none",
			                    "textIndent": 0,
			                    "opacity": 1,
			                    "backgroundColor": {
			                      "type": "custom",
			                      "color": "rgba(255,255,255,0)",
			                      "rgb": "#ffffff",
			                      "alpha": 0
			                    },
			                    "borderRadius": {
			                      "topLeft": 0,
			                      "topRight": 0,
			                      "bottomRight": 0,
			                      "bottomLeft": 0
			                    },
			                    "borderWidth": 0,
			                    "borderStyle": "solid",
			                    "borderColor": {
			                      "type": "custom",
			                      "color": "rgba(255,255,255,1)",
			                      "alpha": 100,
			                      "rgb": "#ffffff"
			                    },
			                    "padding": {
			                      "top": 0,
			                      "right": 0,
			                      "bottom": 0,
			                      "left": 0
			                    },
			                    "textShadow": {
			                      "h_shadow": 0,
			                      "v_shadow": 0,
			                      "blur_dis": 0,
			                      "color": {
			                        "type": "custom",
			                        "color": "rgba(0,0,0,0)",
			                        "rgb": "#000",
			                        "alpha": 0
			                      }
			                    },
			                    "color": {
			                      "type": "custom",
			                      "color": "rgba(255,255,255,1)",
			                      "alpha": 100,
			                      "rgb": "#fff"
			                    }
			                  }
			                },
			                "layout": {
			                  "position": "absolute",
			                  "top": 0,
			                  "left": 0,
			                  "width": 52,
			                  "height": 70
			                },
			                "content": {
			                  "bind": "name",
			                  "router": {}
			                },
			                "type": "normal",
			                "animation": {
			                  "className": "",
			                  "direction": "",
			                  "delay": 0,
			                  "duration": 1,
			                  "iterationCount": 1
			                }
			              },
			              "styleList": {
			                "idx": 0
			              },
			              "feature": {
			                "active": true
			              },
			              "auth": {
			                "style": {
			                  "text": {
			                    "textAlign": false,
			                    "fontSize": false,
			                    "lineHeight": false,
			                    "transform": false,
			                    "fontStyle": false,
			                    "fontWeight": false,
			                    "textDecoration": false,
			                    "textIndent": false,
			                    "opacity": false,
			                    "backgroundColor": false,
			                    "borderRadius": false,
			                    "borderWidth": false,
			                    "borderStyle": false,
			                    "borderColor": false,
			                    "padding": false,
			                    "textShadow": false,
			                    "color": false
			                  }
			                },
			                "content": {
			                  "bind": false,
			                  "router": false
			                },
			                "animation": {
			                  "className": false,
			                  "direction": false,
			                  "delay": false,
			                  "duration": false,
			                  "iterationCount": false
			                },
			                "fture": {}
			              }
			            }, {
			              "name": "picture",
			              "type": "base",
			              "data": {
			                "style": {
			                  "image": {
			                    "transform": {
			                      "rotate": 0
			                    },
			                    "opacity": 1,
			                    "borderRadius": {
			                      "topLeft": 0,
			                      "topRight": 0,
			                      "bottomRight": 0,
			                      "bottomLeft": 0
			                    }
			                  }
			                },
			                "layout": {
			                  "position": "absolute",
			                  "top": 46.5,
			                  "left": 0,
			                  "width": 51,
			                  "height": 2,
			                  "lockAspectRatio": true
			                },
			                "content": {
			                  "img": {
			                    "type": "custom",
			                    "img": "http://rongyi.b0.upaiyun.com/system/smart/test/file/resourcePic/1901031429225759/1901031429225741.png"
			                  },
			                  "router": {}
			                },
			                "animation": {
			                  "className": "",
			                  "direction": "",
			                  "delay": 0,
			                  "duration": 1,
			                  "iterationCount": 1
			                }
			              },
			              "styleList": {
			                "idx": 0,
			                "list": [{
			                  "name": "样式1",
			                  "img": "",
			                  "data": {
			                    "style": {
			                      "image": {
			                        "transform": {
			                          "rotate": 0
			                        },
			                        "opacity": 1,
			                        "borderRadius": {
			                          "topLeft": 0,
			                          "topRight": 0,
			                          "bottomRight": 0,
			                          "bottomLeft": 0
			                        }
			                      }
			                    },
			                    "layout": {
			                      "position": "absolute",
			                      "top": 0,
			                      "left": 0,
			                      "width": 120,
			                      "height": 120,
			                      "lockAspectRatio": true
			                    },
			                    "content": {
			                      "img": {
			                        "type": "custom",
			                        "img": ""
			                      },
			                      "router": {}
			                    },
			                    "animation": {
			                      "className": "",
			                      "direction": "",
			                      "delay": 0,
			                      "duration": 1,
			                      "iterationCount": 1
			                    }
			                  }
			                }]
			              },
			              "feature": {
			                "active": true
			              },
			              "auth": {
			                "style": {
			                  "image": {
			                    "transform": false,
			                    "opacity": false,
			                    "borderRadius": false
			                  }
			                },
			                "content": {
			                  "img": false,
			                  "router": false
			                },
			                "animation": {
			                  "className": false,
			                  "direction": false,
			                  "delay": false,
			                  "duration": false,
			                  "iterationCount": false
			                },
			                "fture": {}
			              }
			            }],
			            "content": {
			              "rel": 0
			            },
			            "animation": {
			              "className": "",
			              "direction": "",
			              "delay": 0,
			              "duration": 1,
			              "iterationCount": 1
			            }
			          },
			          "styleList": {
			            "idx": 0
			          },
			          "feature": {},
			          "auth": {
			            "style": {
			              "filterFlex": {
			                "flexDirection": false,
			                "flexWrap": false
			              },
			              "filterBox": {
			                "borderWidth": false,
			                "borderStyle": false,
			                "borderColor": false,
			                "backgroundColor": false,
			                "padding": false,
			                "borderRadius": false,
			                "boxShadow": false
			              },
			              "filter": {
			                "width": false,
			                "height": false,
			                "margin": false
			              }
			            },
			            "content": {
			              "rel": false
			            },
			            "animation": {
			              "className": false,
			              "direction": false,
			              "delay": false,
			              "duration": false,
			              "iterationCount": false
			            },
			            "fture": {}
			          }
			        }, {
			          "name": "listByStore2",
			          "type": "layout",
			          "data": {
			            "layout": {
			              "position": "absolute",
			              "top": 109.5,
			              "left": 105,
			              "width": 750,
			              "height": 336
			            },
			            "style": {
			              "filter": {
			                "width": 250,
			                "height": 112,
			                "margin": {
			                  "top": 0,
			                  "right": 0,
			                  "bottom": 0,
			                  "left": 0
			                },
			                "background": 'center no-repeat',
							"backgroundSize": 'cover',
							"backgroundImage": { 
								"type": 'custom', 
								"img": "http://rongyi.b0.upaiyun.com/system/smart/test/file/resourcePic/1901031044158888/1901031044158866.png"
							}
			              }
			            },
			            "componentLayout": [{
			              "name": "pictureBind",
			              "type": "base",
			              "data": {
			                "style": {
			                  "image": {
			                    "transform": {
			                      "rotate": 0
			                    },
			                    "opacity": 1,
			                    "margin": {
			                      "top": 0,
			                      "right": 0,
			                      "bottom": 0,
			                      "left": 0
			                    },
			                    "borderRadius": {
			                      "topLeft": 0,
			                      "topRight": 0,
			                      "bottomRight": 0,
			                      "bottomLeft": 0
			                    }
			                  }
			                },
			                "layout": {
			                  "position": "absolute",
			                  "top": 52.5,
			                  "left": 19,
			                  "width": 50,
			                  "height": 37.5
			                },
			                "content": {
			                  "bind": "Photo",
			                  "router": {}
			                },
			                "animation": {
			                  "className": "",
			                  "direction": "",
			                  "delay": 0,
			                  "duration": 1,
			                  "iterationCount": 1
			                }
			              },
			              "styleList": {
			                "idx": 0
			              },
			              "feature": {},
			              "auth": {
			                "style": {
			                  "image": {
			                    "transform": false,
			                    "opacity": false,
			                    "margin": false,
			                    "borderRadius": false
			                  }
			                },
			                "content": {
			                  "bind": false,
			                  "router": false
			                },
			                "animation": {
			                  "className": false,
			                  "direction": false,
			                  "delay": false,
			                  "duration": false,
			                  "iterationCount": false
			                },
			                "fture": {}
			              }
			            }, {
			              "name": "textBind",
			              "type": "base",
			              "data": {
			                "style": {
			                  "text": {
			                    "textAlign": "center",
			                    "fontSize": 13,
			                    "lineHeight": 19,
			                    "transform": {
			                      "rotate": 0
			                    },
			                    "fontStyle": "normal",
			                    "fontWeight": "bold",
			                    "textDecoration": "none",
			                    "textIndent": 0,
			                    "opacity": 1,
			                    "backgroundColor": {
			                      "type": "custom",
			                      "color": "rgba(255,255,255,0)",
			                      "rgb": "#ffffff",
			                      "alpha": 0
			                    },
			                    "borderRadius": {
			                      "topLeft": 0,
			                      "topRight": 0,
			                      "bottomRight": 0,
			                      "bottomLeft": 0
			                    },
			                    "borderWidth": 0,
			                    "borderStyle": "solid",
			                    "borderColor": {
			                      "type": "custom",
			                      "color": "rgba(255,255,255,1)",
			                      "alpha": 100,
			                      "rgb": "#ffffff"
			                    },
			                    "padding": {
			                      "top": 0,
			                      "right": 0,
			                      "bottom": 0,
			                      "left": 0
			                    },
			                    "textShadow": {
			                      "h_shadow": 0,
			                      "v_shadow": 0,
			                      "blur_dis": 0,
			                      "color": {
			                        "type": "custom",
			                        "color": "rgba(0,0,0,0)",
			                        "rgb": "#000",
			                        "alpha": 0
			                      }
			                    },
			                    "color": {
			                      "type": "custom",
			                      "color": "rgba(255,255,255,1)",
			                      "alpha": 100,
			                      "rgb": "#ffffff"
			                    }
			                  }
			                },
			                "layout": {
			                  "position": "absolute",
			                  "top": 14,
			                  "left": 11,
			                  "width": 229,
			                  "height": 19
			                },
			                "content": {
			                  "bind": "Name",
			                  "router": {}
			                },
			                "type": "normal",
			                "animation": {
			                  "className": "",
			                  "direction": "",
			                  "delay": 0,
			                  "duration": 1,
			                  "iterationCount": 1
			                }
			              },
			              "styleList": {
			                "idx": 0
			              },
			              "feature": {},
			              "auth": {
			                "style": {
			                  "text": {
			                    "textAlign": false,
			                    "fontSize": false,
			                    "lineHeight": false,
			                    "transform": false,
			                    "fontStyle": false,
			                    "fontWeight": false,
			                    "textDecoration": false,
			                    "textIndent": false,
			                    "opacity": false,
			                    "backgroundColor": false,
			                    "borderRadius": false,
			                    "borderWidth": false,
			                    "borderStyle": false,
			                    "borderColor": false,
			                    "padding": false,
			                    "textShadow": false,
			                    "color": false
			                  }
			                },
			                "content": {
			                  "bind": false,
			                  "router": false
			                },
			                "animation": {
			                  "className": false,
			                  "direction": false,
			                  "delay": false,
			                  "duration": false,
			                  "iterationCount": false
			                },
			                "fture": {}
			              }
			            }, {
			              "name": "textBind",
			              "type": "base",
			              "data": {
			                "style": {
			                  "text": {
			                    "textAlign": "left",
			                    "fontSize": 8,
			                    "lineHeight": 9,
			                    "transform": {
			                      "rotate": 0
			                    },
			                    "fontStyle": "normal",
			                    "fontWeight": "normal",
			                    "textDecoration": "none",
			                    "textIndent": 0,
			                    "opacity": 1,
			                    "backgroundColor": {
			                      "type": "custom",
			                      "color": "rgba(0,0,0,0)",
			                      "rgb": "#000",
			                      "alpha": 0
			                    },
			                    "borderRadius": {
			                      "topLeft": 0,
			                      "topRight": 0,
			                      "bottomRight": 0,
			                      "bottomLeft": 0
			                    },
			                    "borderWidth": 0,
			                    "borderStyle": "solid",
			                    "borderColor": {
			                      "type": "custom",
			                      "color": "#333"
			                    },
			                    "padding": {
			                      "top": 0,
			                      "right": 0,
			                      "bottom": 0,
			                      "left": 0
			                    },
			                    "textShadow": {
			                      "h_shadow": 0,
			                      "v_shadow": 0,
			                      "blur_dis": 0,
			                      "color": {
			                        "type": "custom",
			                        "color": "rgba(0,0,0,0)",
			                        "rgb": "#000",
			                        "alpha": 0
			                      }
			                    },
			                    "color": {
			                      "type": "custom",
			                      "color": "rgba(51,51,51,0.6)",
			                      "alpha": 60,
			                      "rgb": "#333333"
			                    }
			                  }
			                },
			                "layout": {
			                  "position": "absolute",
			                  "top": 85,
			                  "left": 87,
			                  "width": 200,
			                  "height": 9
			                 },
			                "content": {
			                  "bind": "berthNumber",
			                  "router": {}
			                },
			                "type": "normal",
			                "animation": {
			                  "className": "",
			                  "direction": "",
			                  "delay": 0,
			                  "duration": 1,
			                  "iterationCount": 1
			                }
			              },
			              "styleList": {
			                "idx": 0
			              },
			              "feature": {},
			              "auth": {
			                "style": {
			                  "text": {
			                    "textAlign": false,
			                    "fontSize": false,
			                    "lineHeight": false,
			                    "transform": false,
			                    "fontStyle": false,
			                    "fontWeight": false,
			                    "textDecoration": false,
			                    "textIndent": false,
			                    "opacity": false,
			                    "backgroundColor": false,
			                    "borderRadius": false,
			                    "borderWidth": false,
			                    "borderStyle": false,
			                    "borderColor": false,
			                    "padding": false,
			                    "textShadow": false,
			                    "color": false
			                  }
			                },
			                "content": {
			                  "bind": false,
			                  "router": false
			                },
			                "animation": {
			                  "className": false,
			                  "direction": false,
			                  "delay": false,
			                  "duration": false,
			                  "iterationCount": false
			                },
			                "fture": {}
			              }
			            }, {
			              "name": "textBind",
			              "type": "base",
			              "data": {
			                "style": {
			                  "text": {
			                    "textAlign": "center",
			                    "fontSize": 10,
			                    "lineHeight": 9,
			                    "transform": {
			                      "rotate": 0
			                    },
			                    "fontStyle": "normal",
			                    "fontWeight": "normal",
			                    "textDecoration": "none",
			                    "textIndent": 0,
			                    "opacity": 1,
			                    "backgroundColor": {
			                      "type": "custom",
			                      "color": "rgba(0,0,0,0)",
			                      "rgb": "#000",
			                      "alpha": 0
			                    },
			                    "WebkitLineClamp": 2,
			                     "whiteSpace": "inherit",
			                     "WebkitBoxOrient": "vertical",
    							"display": "-webkit-box",
			                    "borderRadius": {
			                      "topLeft": 0,
			                      "topRight": 0,
			                      "bottomRight": 0,
			                      "bottomLeft": 0
			                    },
			                    "borderWidth": 0,
			                    "borderStyle": "solid",
			                    "borderColor": {
			                      "type": "custom",
			                      "color": "rgba(255,255,255,1)",
			                      "alpha": 100,
			                      "rgb": "#ffffff"
			                    },
			                    "padding": {
			                      "top": 0,
			                      "right": 0,
			                      "bottom": 0,
			                      "left": 0
			                    },
			                    "textShadow": {
			                      "h_shadow": 0,
			                      "v_shadow": 0,
			                      "blur_dis": 0,
			                      "color": {
			                        "type": "custom",
			                        "color": "rgba(0,0,0,0)",
			                        "rgb": "#000",
			                        "alpha": 0
			                      }
			                    },
			                    "color": {
			                      "type": "custom",
			                      "color": "rgba(51,51,51,0.8)",
			                      "alpha": 80,
			                      "rgb": "#333333"
			                    }
			                  }
			                },
			                "layout": {
			                  "position": "absolute",
			                  "top": 50.5,
			                  "left": 87,
			                  "width": 146,
			                  "height": 18
			                },
			                "content": {
			                  "bind": "SubTitle",
			                  "router": {}
			                },
			                "type": "normal",
			                "animation": {
			                  "className": "",
			                  "direction": "",
			                  "delay": 0,
			                  "duration": 1,
			                  "iterationCount": 1
			                }
			              },
			              "styleList": {
			                "idx": 0,
			                "list": [{
			                  "name": "样式1",
			                  "img": "",
			                  "data": {
			                    "style": {
			                      "text": {
			                        "textAlign": "center",
			                        "fontSize": 12,
			                        "lineHeight": 18,
			                        "transform": {
			                          "rotate": 0
			                        },
			                        "fontStyle": "normal",
			                        "fontWeight": "normal",
			                        "textDecoration": "none",
			                        "textIndent": 0,
			                        "opacity": 1,
			                        "backgroundColor": {
			                          "type": "custom",
			                          "color": "rgba(0,0,0,0)",
			                          "rgb": "#000",
			                          "alpha": 0
			                        },
			                        "borderRadius": {
			                          "topLeft": 0,
			                          "topRight": 0,
			                          "bottomRight": 0,
			                          "bottomLeft": 0
			                        },
			                        "borderWidth": 0,
			                        "borderStyle": "solid",
			                        "borderColor": {
			                          "type": "custom",
			                          "color": "#333"
			                        },
			                        "padding": {
			                          "top": 0,
			                          "right": 0,
			                          "bottom": 0,
			                          "left": 0
			                        },
			                        "textShadow": {
			                          "h_shadow": 0,
			                          "v_shadow": 0,
			                          "blur_dis": 0,
			                          "color": {
			                            "type": "custom",
			                            "color": "rgba(0,0,0,0)",
			                            "rgb": "#000",
			                            "alpha": 0
			                          }
			                        },
			                        "color": {
			                          "type": "custom",
			                          "color": "#333"
			                        }
			                      }
			                    },
			                    "layout": {
			                      "position": "absolute",
			                      "top": 0,
			                      "left": 0,
			                      "width": 120,
			                      "height": 30
			                    },
			                    "content": {
			                      "bind": "",
			                      "router": {}
			                    },
			                    "type": "normal",
			                    "animation": {
			                      "className": "",
			                      "direction": "",
			                      "delay": 0,
			                      "duration": 1,
			                      "iterationCount": 1
			                    }
			                  }
			                }]
			              },
			              "feature": {},
			              "auth": {
			                "style": {
			                  "text": {
			                    "textAlign": false,
			                    "fontSize": false,
			                    "lineHeight": false,
			                    "transform": false,
			                    "fontStyle": false,
			                    "fontWeight": false,
			                    "textDecoration": false,
			                    "textIndent": false,
			                    "opacity": false,
			                    "backgroundColor": false,
			                    "borderRadius": false,
			                    "borderWidth": false,
			                    "borderStyle": false,
			                    "borderColor": false,
			                    "padding": false,
			                    "textShadow": false,
			                    "color": false
			                  }
			                },
			                "content": {
			                  "bind": false,
			                  "router": false
			                },
			                "animation": {
			                  "className": false,
			                  "direction": false,
			                  "delay": false,
			                  "duration": false,
			                  "iterationCount": false
			                },
			                "fture": {}
			              }
			            }],
			            "content": {
			              "router": {
			                "param": [{
			                  "type": "",
			                  "value": ""
			                }],
			                "url": "p_1001",
			                "type": "router"
			              }
			            },
			            "animation": {
			              "className": "",
			              "direction": "",
			              "delay": 0,
			              "duration": 1,
			              "iterationCount": 1
			            }
			          },
			          "styleList": {
			            "idx": 0
			          },
			          "feature": {},
			          "auth": {
			            "style": {
			              "filter": {
			                "width": false,
			                "height": false,
			                "borderWidth": false,
			                "borderStyle": false,
			                "borderColor": false,
			                "backgroundColor": false,
			                "margin": false,
			                "borderRadius": false,
			                "boxShadow": false
			              }
			            },
			            "content": {
			              "router": false
			            },
			            "animation": {
			              "className": false,
			              "direction": false,
			              "delay": false,
			              "duration": false,
			              "iterationCount": false
			            },
			            "fture": {}
			          }
			        }, {
			          "name": "pageByStore2",
			          "type": "layout",
			          "data": {
			            "layout": {
			              "position": "absolute",
			              "top": 460.5,
			              "left": 105.5,
			              "width": 749,
			              "height": 18
			            },
			            "style": {
			              "filterFlex": {
			                "justifyContent": "center",
			                "flexDirection": "row",
			                "flexWrap": "nowrap"
			              },
			              "filterBox": {
			                "borderWidth": 0,
			                "borderStyle": "solid",
			                "borderColor": {
			                  "type": "custom",
			                  "color": "rgba(255,255,255,1)",
			                  "alpha": 100,
			                  "rgb": "#ffffff"
			                },
			                "backgroundColor": {
			                  "type": "custom",
			                  "color": "rgba(255, 255, 255, 0)",
			                  "rgb": "#fff",
			                  "alpha": 0
			                },
			                "padding": {
			                  "top": 0,
			                  "right": 0,
			                  "bottom": 0,
			                  "left": 0
			                },
			                "borderRadius": {
			                  "topLeft": 0,
			                  "topRight": 0,
			                  "bottomLeft": 0,
			                  "bottomRight": 0
			                },
			                "boxShadow": {
			                  "h_shadow": 0,
			                  "v_shadow": 0,
			                  "blur_dis": 0,
			                  "spread_dis": 0,
			                  "color": {
			                    "type": "custom",
			                    "color": "#000"
			                  }
			                }
			              },
			              "filter": {
			                "width": 8,
			                "height": 8,
			                "margin": {
			                  "top": 0,
			                  "right": 6,
			                  "bottom": 0,
			                  "left": 0
			                }
			              }
			            },
			            "componentLayout": [{
			              "name": "area",
			              "type": "base",
			              "data": {
			                "style": {
			                  "filterBox": {
			                    "transform": {
			                      "rotate": 0
			                    },
			                    "opacity": 1,
			                    "borderRadius": { 
			                      "topLeft": "50%",
			                      "topRight": "50%",
			                      "bottomRight": "50%",
			                      "bottomLeft": "50%"
			                    },
			                    "backgroundColor": {
			                      "type": "custom",
			                      "color": "rgba(225,225,225,1)",
			                      "alpha": 100,
			                      "rgb": "#e1e1e1"
			                    }
			                  }
			                },
			                "layout": {
			                  "position": "absolute",
			                  "top": 0,
			                  "left": 0,
			                  "width": 5,
			                  "height": 5
			                },
			                "content": {},
			                "animation": {
			                  "className": "",
			                  "direction": "",
			                  "delay": 0,
			                  "duration": 1,
			                  "iterationCount": 1
			                }
			              },
			              "styleList": {
			                "idx": 0
			              },
			              "feature": {},
			              "auth": {
			                "style": {
			                  "filterBox": {
			                    "transform": false,
			                    "opacity": false,
			                    "borderRadius": false,
			                    "backgroundColor": false
			                  }
			                },
			                "content": {},
			                "animation": {
			                  "className": false,
			                  "direction": false,
			                  "delay": false,
			                  "duration": false,
			                  "iterationCount": false
			                },
			                "fture": {}
			              }
			            }, {
			              "name": "area",
			              "type": "base",
			              "data": {
			                "style": {
			                  "filterBox": {
			                    "transform": {
			                      "rotate": 0
			                    },
			                    "opacity": 1,
			                    "borderRadius": {
			                      "topLeft": 5,
			                      "topRight": 5,
			                      "bottomRight": 5,
			                      "bottomLeft": 5
			                    },
			                    "backgroundColor": {
			                      "type": "custom",
			                      "color": "rgba(233,82,120,1)",
			                      "alpha": 100,
			                      "rgb": "#e95278"
			                    }
			                  }
			                },
			                "layout": {
			                  "position": "absolute",
			                  "top": 0,
			                  "left": 0,
			                  "width": 5,
			                  "height": 5
			                },
			                "content": {},
			                "animation": {
			                  "className": "",
			                  "direction": "",
			                  "delay": 0,
			                  "duration": 1,
			                  "iterationCount": 1
			                }
			              },
			              "styleList": {
			                "idx": 0
			              },
			              "feature": {
			                "active": true
			              },
			              "auth": {
			                "style": {
			                  "filterBox": {
			                    "transform": false,
			                    "opacity": false,
			                    "borderRadius": false,
			                    "backgroundColor": false
			                  }
			                },
			                "content": {},
			                "animation": {
			                  "className": false,
			                  "direction": false,
			                  "delay": false,
			                  "duration": false,
			                  "iterationCount": false
			                },
			                "fture": {}
			              }
			            }],
			            "content": {
			              "rel": 0
			            },
			            "animation": {
			              "className": "",
			              "direction": "",
			              "delay": 0,
			              "duration": 1,
			              "iterationCount": 1
			            }
			          },
			          "styleList": {
			            "idx": 0
			          },
			          "feature": {},
			          "auth": {
			            "style": {
			              "filterFlex": {
			                "justifyContent": false,
			                "flexDirection": false,
			                "flexWrap": false
			              },
			              "filterBox": {
			                "borderWidth": false,
			                "borderStyle": false,
			                "borderColor": false,
			                "backgroundColor": false,
			                "padding": false,
			                "borderRadius": false,
			                "boxShadow": false
			              },
			              "filter": {
			                "width": false,
			                "height": false,
			                "margin": false
			              }
			            },
			            "content": {
			              "rel": false
			            },
			            "animation": {
			              "className": false,
			              "direction": false,
			              "delay": false,
			              "duration": false,
			              "iterationCount": false
			            },
			            "fture": {}
			          }
			        }]
			      },
			      "styleList": {
			        "idx": 0
			      },
			      "feature": {
			        "body": {
			          "page": 1,
			          "size": 6,
			          "total": 0
			        }
			      },
			      "auth": {
			        "style": {},
			        "content": {
			          "size": false,
			          "dataSource": true
			        },
			        "animation": {
			          "className": false,
			          "direction": false,
			          "delay": false,
			          "duration": false,
			          "iterationCount": false
			        },
			        "fture": {
			          "body": false
			        }
			      }
			    },{
			      "name": "picture",
			      "type": "base",
			      "data": {
			        "style": {
			          "image": {
			            "transform": {
			              "rotate": 0
			            },
			            "opacity": 1,
			            "borderRadius": {
			              "topLeft": 0,
			              "topRight": 0,
			              "bottomRight": 0,
			              "bottomLeft": 0
			            }
			          }
			        },
			        "layout": {
			          "position": "absolute",
			          "top": 460,
			          "left": 50,
			          "width": 140,
			          "height": 50,
			          "lockAspectRatio": true
			        },
			        "content": {
			          "img": {
			            "type": "custom",
			            "img": "http://rongyi.b0.upaiyun.com/system/smart/test/file/resourcePic/1901031044151854/1901031044151834.png"
			          },
			          "router": "mall"
			        },
			        "animation": {
			          "className": "",
			          "direction": "",
			          "delay": 0,
			          "duration": 1,
			          "iterationCount": 1
			        }
			      },
			      "styleList": {
			        "idx": 0
			      },
			      "feature": {},
			      "auth": {
			        "style": {
			          "image": {
			            "transform": false,
			            "opacity": false,
			            "borderRadius": false
			          }
			        },
			        "content": {
			          "img": false,
			          "router": false
			        },
			        "animation": {
			          "className": false,
			          "direction": false,
			          "delay": false,
			          "duration": false,
			          "iterationCount": false
			        },
			        "fture": {}
			      }
			    }],
			    "topNav": {},
			    "bottomNav": {},
			    "feature": {
			      "homeTime": 30,
			      "backgroundColor": {
			        "type": "custom",
			        "color": "#fff"
			      }
			    },
			    "animation": {
			      "in": {
			        "className": "",
			        "direction": "",
			        "delay": 0,
			        "duration": 1,
			        "iterationCount": 1
			      },
			      "out": {
			        "className": "",
			        "direction": "",
			        "delay": 0,
			        "duration": 1,
			        "iterationCount": 1
			      },
			      "interval": 0
			    }
		  },
		  "p_1001": {
			    "router": "p_1001",
			    "title": "页面2",
			    "elements": [{
			      "name": "storeDetails2",
			      "type": "advanced",
			      "data": {
			        "style": {},
			        "layout": {
			          "position": "absolute",
			          "top": 0,
			          "left": 0,
			          "width": 960,
			          "height": 540
			        },
			        "content": {
			          "dataSource": "base"
			        },
			        "animation": {
			          "className": "",
			          "direction": "",
			          "delay": 0,
			          "duration": 1,
			          "iterationCount": 1
			        },
			        "components": [{
			          "name": "storeBlock",
			          "type": "layout",
			          "data": {
			            "layout": {
			              "position": "absolute",
			              "top": 0.5,
			              "left": 0,
			              "width": 960,
			              "height": 539
			            },
			            "style": {
			              "filterBox": {
			                "borderWidth": 0,
			                "borderStyle": "solid",
			                "borderColor": {
			                  "type": "custom",
			                  "color": "#cfad81"
			                },
			                "backgroundColor": {
			                  "type": "custom",
			                  "color": "#fff"
			                },
			                "borderRadius": {
			                  "topLeft": 6,
			                  "topRight": 6,
			                  "bottomLeft": 6,
			                  "bottomRight": 6
			                },
			                "boxShadow": {
			                  "h_shadow": 0,
			                  "v_shadow": 0,
			                  "blur_dis": 0,
			                  "spread_dis": 0,
			                  "color": {
			                    "type": "custom",
			                    "color": "#000"
			                  }
			                }
			              }
			            },
			            "componentLayout": [{
			              "name": "picture",
			              "type": "base",
			              "data": {
			                "style": {
			                  "image": {
			                    "transform": {
			                      "rotate": 0
			                    },
			                    "opacity": 1,
			                    "borderRadius": {
			                      "topLeft": 0,
			                      "topRight": 0,
			                      "bottomRight": 0,
			                      "bottomLeft": 0
			                    }
			                  }
			                },
			                "layout": {
			                  "position": "absolute",
			                  "top": 0,
			                  "left": 0,
			                  "width": 960,
			                  "height": 540,
			                  "lockAspectRatio": true
			                },
			                "content": {
			                  "img": {
			                    "type": "custom",
			                    "img": "http://rongyi.b0.upaiyun.com/system/smart/test/file/resourcePic/1901031044162418/1901031044162357.png"
			                  },
			                  "router": {}
			                },
			                "animation": {
			                  "className": "",
			                  "direction": "",
			                  "delay": 0,
			                  "duration": 1,
			                  "iterationCount": 1
			                }
			              },
			              "styleList": {
			                "idx": 0,
			                "list": [{
			                  "name": "样式1",
			                  "img": "",
			                  "data": {
			                    "style": {
			                      "image": {
			                        "transform": {
			                          "rotate": 0
			                        },
			                        "opacity": 1,
			                        "borderRadius": {
			                          "topLeft": 0,
			                          "topRight": 0,
			                          "bottomRight": 0,
			                          "bottomLeft": 0
			                        }
			                      }
			                    },
			                    "layout": {
			                      "position": "absolute",
			                      "top": 0,
			                      "left": 0,
			                      "width": 120,
			                      "height": 120,
			                      "lockAspectRatio": true
			                    },
			                    "content": {
			                      "img": {
			                        "type": "custom",
			                        "img": ""
			                      },
			                      "router": {}
			                    },
			                    "animation": {
			                      "className": "",
			                      "direction": "",
			                      "delay": 0,
			                      "duration": 1,
			                      "iterationCount": 1
			                    }
			                  }
			                }]
			              },
			              "feature": {},
			              "auth": {
			                "style": {
			                  "image": {
			                    "transform": false,
			                    "opacity": false,
			                    "borderRadius": false
			                  }
			                },
			                "content": {
			                  "img": false,
			                  "router": false
			                },
			                "animation": {
			                  "className": false,
			                  "direction": false,
			                  "delay": false,
			                  "duration": false,
			                  "iterationCount": false
			                },
			                "fture": {}
			              }
			            }, {
			              "name": "textBind",
			              "type": "base",
			              "data": {
			                "style": {
			                  "text": {
			                    "textAlign": "left",
			                    "fontSize": 28,
			                    "lineHeight": 32,
			                    "transform": {
			                      "rotate": 0
			                    },
			                    "fontStyle": "normal",
			                    "fontWeight": "bold",
			                    "textDecoration": "none",
			                    "textIndent": 0,
			                    "opacity": 1,
			                    "backgroundColor": {
			                      "type": "custom",
			                      "color": "rgba(0,0,0,0)",
			                      "rgb": "#000",
			                      "alpha": 0
			                    },
			                    "borderRadius": {
			                      "topLeft": 0,
			                      "topRight": 0,
			                      "bottomRight": 0,
			                      "bottomLeft": 0
			                    },
			                    "borderWidth": 0,
			                    "borderStyle": "solid",
			                    "borderColor": {
			                      "type": "custom",
			                      "color": "rgba(255,255,255,1)",
			                      "alpha": 100,
			                      "rgb": "#ffffff"
			                    },
			                    "padding": {
			                      "top": 0,
			                      "right": 0,
			                      "bottom": 0,
			                      "left": 0
			                    },
			                    "textShadow": {
			                      "h_shadow": 0,
			                      "v_shadow": 0,
			                      "blur_dis": 0,
			                      "color": {
			                        "type": "custom",
			                        "color": "rgba(0,0,0,0)",
			                        "rgb": "#000",
			                        "alpha": 0
			                      }
			                    },
			                    "color": {
			                      "type": "custom",
			                      "color": "rgba(233,82,120,1)",
			                      "alpha": 100,
			                      "rgb": "#e95278"
			                    }
			                  }
			                },
			                "layout": {
			                  "position": "absolute",
			                  "top": 100,
			                  "left": 50,
			                  "width": 500,
			                  "height": 32
			                },
			                "content": {
			                  "bind": "Name",
			                  "router": {}
			                },
			                "type": "normal",
			                "animation": {
			                  "className": "",
			                  "direction": "",
			                  "delay": 0,
			                  "duration": 1,
			                  "iterationCount": 1
			                }
			              },
			              "styleList": {
			                "idx": 0,
			                "list": [{
			                  "name": "样式1",
			                  "img": "",
			                  "data": {
			                    "style": {
			                      "text": {
			                        "textAlign": "center",
			                        "fontSize": 12,
			                        "lineHeight": 18,
			                        "transform": {
			                          "rotate": 0
			                        },
			                        "fontStyle": "normal",
			                        "fontWeight": "normal",
			                        "textDecoration": "none",
			                        "textIndent": 0,
			                        "opacity": 1,
			                        "backgroundColor": {
			                          "type": "custom",
			                          "color": "rgba(0,0,0,0)",
			                          "rgb": "#000",
			                          "alpha": 0
			                        },
			                        "borderRadius": {
			                          "topLeft": 0,
			                          "topRight": 0,
			                          "bottomRight": 0,
			                          "bottomLeft": 0
			                        },
			                        "borderWidth": 0,
			                        "borderStyle": "solid",
			                        "borderColor": {
			                          "type": "custom",
			                          "color": "#333"
			                        },
			                        "padding": {
			                          "top": 0,
			                          "right": 0,
			                          "bottom": 0,
			                          "left": 0
			                        },
			                        "textShadow": {
			                          "h_shadow": 0,
			                          "v_shadow": 0,
			                          "blur_dis": 0,
			                          "color": {
			                            "type": "custom",
			                            "color": "rgba(0,0,0,0)",
			                            "rgb": "#000",
			                            "alpha": 0
			                          }
			                        },
			                        "color": {
			                          "type": "custom",
			                          "color": "#333"
			                        }
			                      }
			                    },
			                    "layout": {
			                      "position": "absolute",
			                      "top": 0,
			                      "left": 0,
			                      "width": 120,
			                      "height": 30
			                    },
			                    "content": {
			                      "bind": "",
			                      "router": {}
			                    },
			                    "type": "normal",
			                    "animation": {
			                      "className": "",
			                      "direction": "",
			                      "delay": 0,
			                      "duration": 1,
			                      "iterationCount": 1
			                    }
			                  }
			                }]
			              },
			              "feature": {},
			              "auth": {
			                "style": {
			                  "text": {
			                    "textAlign": false,
			                    "fontSize": false,
			                    "lineHeight": false,
			                    "transform": false,
			                    "fontStyle": false,
			                    "fontWeight": false,
			                    "textDecoration": false,
			                    "textIndent": false,
			                    "opacity": false,
			                    "backgroundColor": false,
			                    "borderRadius": false,
			                    "borderWidth": false,
			                    "borderStyle": false,
			                    "borderColor": false,
			                    "padding": false,
			                    "textShadow": false,
			                    "color": false
			                  }
			                },
			                "content": {
			                  "bind": false,
			                  "router": false
			                },
			                "animation": {
			                  "className": false,
			                  "direction": false,
			                  "delay": false,
			                  "duration": false,
			                  "iterationCount": false
			                },
			                "fture": {}
			              }
			            }, {
			              "name": "textBind",
			              "type": "base",
			              "data": {
			                "style": {
			                  "text": {
			                    /*"textAlign": "left",
			                    "fontSize": 12,
			                    "lineHeight": 18,
			                    "transform": {
			                      "rotate": 0
			                    },
			                    "fontStyle": "normal",
			                    "fontWeight": "normal",
			                    "textDecoration": "none",
			                    "textIndent": 0,
			                    "opacity": 1,
			                    "backgroundColor": {
			                      "type": "custom",
			                      "color": "rgba(0,0,0,0)",
			                      "rgb": "#000",
			                      "alpha": 0
			                    },
			                    "borderRadius": {
			                      "topLeft": 0,
			                      "topRight": 0,
			                      "bottomRight": 0,
			                      "bottomLeft": 0
			                    },
			                    "borderWidth": 0,
			                    "borderStyle": "solid",
			                    "borderColor": {
			                      "type": "custom",
			                      "color": "#333"
			                    },
			                    "padding": {
			                      "top": 0,
			                      "right": 0,
			                      "bottom": 0,
			                      "left": 0
			                    },
			                    "textShadow": {
			                      "h_shadow": 0,
			                      "v_shadow": 0,
			                      "blur_dis": 0,
			                      "color": {
			                        "type": "custom",
			                        "color": "rgba(0,0,0,0)",
			                        "rgb": "#000",
			                        "alpha": 0
			                      }
			                    },
			                    "color": {
			                      "type": "custom",
			                      "color": "#333"
			                    }*/
			                  }
			                },
			                "layout": {
			                  "position": "absolute",
			                  "top": 179,
			                  "left": 50,
			                  "width": 500,
			                  "height": 200
			                },
			                "content": {
			                  "bind": "Article",
			                  "router": {}
			                },
			                "type": "normal",
			                "animation": {
			                  "className": "",
			                  "direction": "",
			                  "delay": 0,
			                  "duration": 1,
			                  "iterationCount": 1
			                }
			              },
			              "styleList": {
			                "idx": 0,
			                "list": [{
			                  "name": "样式1",
			                  "img": "",
			                  "data": {
			                    "style": {
			                      "text": {
			                        "textAlign": "center",
			                        "fontSize": 12,
			                        "lineHeight": 18,
			                        "transform": {
			                          "rotate": 0
			                        },
			                        "fontStyle": "normal",
			                        "fontWeight": "normal",
			                        "textDecoration": "none",
			                        "textIndent": 0,
			                        "opacity": 1,
			                        "backgroundColor": {
			                          "type": "custom",
			                          "color": "rgba(0,0,0,0)",
			                          "rgb": "#000",
			                          "alpha": 0
			                        },
			                        "borderRadius": {
			                          "topLeft": 0,
			                          "topRight": 0,
			                          "bottomRight": 0,
			                          "bottomLeft": 0
			                        },
			                        "borderWidth": 0,
			                        "borderStyle": "solid",
			                        "borderColor": {
			                          "type": "custom",
			                          "color": "#333"
			                        },
			                        "padding": {
			                          "top": 0,
			                          "right": 0,
			                          "bottom": 0,
			                          "left": 0
			                        },
			                        "textShadow": {
			                          "h_shadow": 0,
			                          "v_shadow": 0,
			                          "blur_dis": 0,
			                          "color": {
			                            "type": "custom",
			                            "color": "rgba(0,0,0,0)",
			                            "rgb": "#000",
			                            "alpha": 0
			                          }
			                        },
			                        "color": {
			                          "type": "custom",
			                          "color": "#333"
			                        }
			                      }
			                    },
			                    "layout": {
			                      "position": "absolute",
			                      "top": 0,
			                      "left": 0,
			                      "width": 120,
			                      "height": 30
			                    },
			                    "content": {
			                      "bind": "",
			                      "router": {}
			                    },
			                    "type": "normal",
			                    "animation": {
			                      "className": "",
			                      "direction": "",
			                      "delay": 0,
			                      "duration": 1,
			                      "iterationCount": 1
			                    }
			                  }
			                }]
			              },
			              "feature": {},
			              "auth": {
			                "style": {
			                  "text": {
			                    "textAlign": false,
			                    "fontSize": false,
			                    "lineHeight": false,
			                    "transform": false,
			                    "fontStyle": false,
			                    "fontWeight": false,
			                    "textDecoration": false,
			                    "textIndent": false,
			                    "opacity": false,
			                    "backgroundColor": false,
			                    "borderRadius": false,
			                    "borderWidth": false,
			                    "borderStyle": false,
			                    "borderColor": false,
			                    "padding": false,
			                    "textShadow": false,
			                    "color": false
			                  }
			                },
			                "content": {
			                  "bind": false,
			                  "router": false
			                },
			                "animation": {
			                  "className": false,
			                  "direction": false,
			                  "delay": false,
			                  "duration": false,
			                  "iterationCount": false
			                },
			                "fture": {}
			              }
			            }, {
			              "name": "textBind",
			              "type": "base",
			              "data": {
			                "style": {
			                  "text": {
			                    "textAlign": "left",
			                    "fontSize": 14,
			                    "lineHeight": 14,
			                    "transform": {
			                      "rotate": 0
			                    },
			                    "fontStyle": "normal",
			                    "fontWeight": "normal",
			                    "textDecoration": "none",
			                    "textIndent": 0,
			                    "opacity": 1,
			                    "backgroundColor": {
			                      "type": "custom",
			                      "color": "rgba(0,0,0,0)",
			                      "rgb": "#000",
			                      "alpha": 0
			                    },
			                    "borderRadius": {
			                      "topLeft": 0,
			                      "topRight": 0,
			                      "bottomRight": 0,
			                      "bottomLeft": 0
			                    },
			                    "borderWidth": 0,
			                    "borderStyle": "solid",
			                    "borderColor": {
			                      "type": "custom",
			                      "color": "#333"
			                    },
			                    "padding": {
			                      "top": 0,
			                      "right": 0,
			                      "bottom": 0,
			                      "left": 0
			                    },
			                    "textShadow": {
			                      "h_shadow": 0,
			                      "v_shadow": 0,
			                      "blur_dis": 0,
			                      "color": {
			                        "type": "custom",
			                        "color": "rgba(0,0,0,0)",
			                        "rgb": "#000",
			                        "alpha": 0
			                      }
			                    },
			                    "color": {
			                      "type": "custom",
			                      "color": "rgba(51,51,51,1)",
			                      "alpha": 100,
			                      "rgb": "#333"
			                    }
			                  }
			                },
			                "layout": {
			                  "position": "absolute",
			                  "top": 142,
			                  "left": 51,
			                  "width": 500,
			                  "height": 14
			                },
			                "content": {
			                  "bind": "berthNumber",
			                  "router": {}
			                },
			                "type": "normal",
			                "animation": {
			                  "className": "",
			                  "direction": "",
			                  "delay": 0,
			                  "duration": 1,
			                  "iterationCount": 1
			                }
			              },
			              "styleList": {
			                "idx": 0,
			                "list": [{
			                  "name": "样式1",
			                  "img": "",
			                  "data": {
			                    "style": {
			                      "text": {
			                        "textAlign": "center",
			                        "fontSize": 12,
			                        "lineHeight": 18,
			                        "transform": {
			                          "rotate": 0
			                        },
			                        "fontStyle": "normal",
			                        "fontWeight": "normal",
			                        "textDecoration": "none",
			                        "textIndent": 0,
			                        "opacity": 1,
			                        "backgroundColor": {
			                          "type": "custom",
			                          "color": "rgba(0,0,0,0)",
			                          "rgb": "#000",
			                          "alpha": 0
			                        },
			                        "borderRadius": {
			                          "topLeft": 0,
			                          "topRight": 0,
			                          "bottomRight": 0,
			                          "bottomLeft": 0
			                        },
			                        "borderWidth": 0,
			                        "borderStyle": "solid",
			                        "borderColor": {
			                          "type": "custom",
			                          "color": "#333"
			                        },
			                        "padding": {
			                          "top": 0,
			                          "right": 0,
			                          "bottom": 0,
			                          "left": 0
			                        },
			                        "textShadow": {
			                          "h_shadow": 0,
			                          "v_shadow": 0,
			                          "blur_dis": 0,
			                          "color": {
			                            "type": "custom",
			                            "color": "rgba(0,0,0,0)",
			                            "rgb": "#000",
			                            "alpha": 0
			                          }
			                        },
			                        "color": {
			                          "type": "custom",
			                          "color": "#333"
			                        }
			                      }
			                    },
			                    "layout": {
			                      "position": "absolute",
			                      "top": 0,
			                      "left": 0,
			                      "width": 120,
			                      "height": 30
			                    },
			                    "content": {
			                      "bind": "",
			                      "router": {}
			                    },
			                    "type": "normal",
			                    "animation": {
			                      "className": "",
			                      "direction": "",
			                      "delay": 0,
			                      "duration": 1,
			                      "iterationCount": 1
			                    }
			                  }
			                }]
			              },
			              "feature": {},
			              "auth": {
			                "style": {
			                  "text": {
			                    "textAlign": false,
			                    "fontSize": false,
			                    "lineHeight": false,
			                    "transform": false,
			                    "fontStyle": false,
			                    "fontWeight": false,
			                    "textDecoration": false,
			                    "textIndent": false,
			                    "opacity": false,
			                    "backgroundColor": false,
			                    "borderRadius": false,
			                    "borderWidth": false,
			                    "borderStyle": false,
			                    "borderColor": false,
			                    "padding": false,
			                    "textShadow": false,
			                    "color": false
			                  }
			                },
			                "content": {
			                  "bind": false,
			                  "router": false
			                },
			                "animation": {
			                  "className": false,
			                  "direction": false,
			                  "delay": false,
			                  "duration": false,
			                  "iterationCount": false
			                },
			                "fture": {}
			              }
			            }, {
			              "name": "pictureBind",
			              "type": "base",
			              "data": {
			                "style": {
			                  "image": {
			                    "transform": {
			                      "rotate": 0
			                    },
			                    "opacity": 1,
			                    "margin": {
			                      "top": 0,
			                      "right": 0,
			                      "bottom": 0,
			                      "left": 0
			                    },
			                    "borderRadius": {
			                      "topLeft": 0,
			                      "topRight": 0,
			                      "bottomRight": 0,
			                      "bottomLeft": 0
			                    }
			                  }
			                },
			                "layout": {
			                  "position": "absolute",
			                  "top": 157.5,
			                  "left": 611,
			                  "width": 300,
			                  "height": 225
			                },
			                "content": {
			                  "bind": "Photo",
			                  "router": {}
			                },
			                "animation": {
			                  "className": "",
			                  "direction": "",
			                  "delay": 0,
			                  "duration": 1,
			                  "iterationCount": 1
			                }
			              },
			              "styleList": {
			                "idx": 0,
			                "list": [{
			                  "name": "样式1",
			                  "img": "",
			                  "data": {
			                    "style": {
			                      "image": {
			                        "transform": {
			                          "rotate": 0
			                        },
			                        "opacity": 1,
			                        "margin": {
			                          "top": 0,
			                          "right": 0,
			                          "bottom": 0,
			                          "left": 0
			                        },
			                        "borderRadius": {
			                          "topLeft": 0,
			                          "topRight": 0,
			                          "bottomRight": 0,
			                          "bottomLeft": 0
			                        }
			                      }
			                    },
			                    "layout": {
			                      "position": "absolute",
			                      "top": 0,
			                      "left": 0,
			                      "width": 120,
			                      "height": 120
			                    },
			                    "content": {
			                      "bind": "",
			                      "router": {}
			                    },
			                    "animation": {
			                      "className": "",
			                      "direction": "",
			                      "delay": 0,
			                      "duration": 1,
			                      "iterationCount": 1
			                    }
			                  }
			                }]
			              },
			              "feature": {},
			              "auth": {
			                "style": {
			                  "image": {
			                    "transform": false,
			                    "opacity": false,
			                    "margin": false,
			                    "borderRadius": false
			                  }
			                },
			                "content": {
			                  "bind": false,
			                  "router": false
			                },
			                "animation": {
			                  "className": false,
			                  "direction": false,
			                  "delay": false,
			                  "duration": false,
			                  "iterationCount": false
			                },
			                "fture": {}
			              }
			            }],
			            "content": {},
			            "animation": {
			              "className": "",
			              "direction": "",
			              "delay": 0,
			              "duration": 1,
			              "iterationCount": 1
			            }
			          },
			          "styleList": {
			            "idx": 0
			          },
			          "feature": {},
			          "auth": {
			            "style": {
			              "filterBox": {
			                "borderWidth": false,
			                "borderStyle": false,
			                "borderColor": false,
			                "backgroundColor": false,
			                "borderRadius": false,
			                "boxShadow": false
			              }
			            },
			            "content": {},
			            "animation": {
			              "className": false,
			              "direction": false,
			              "delay": false,
			              "duration": false,
			              "iterationCount": false
			            },
			            "fture": {}
			          }
			        }]
			      },
			      "styleList": {
			        "idx": 0
			      },
			      "feature": {},
			      "auth": {
			        "style": {},
			        "content": {
			          "dataSource": true
			        },
			        "animation": {
			          "className": false,
			          "direction": false,
			          "delay": false,
			          "duration": false,
			          "iterationCount": false
			        },
			        "fture": {}
			      }
			    }, {
			      "name": "picture",
			      "type": "base",
			      "data": {
			        "style": {
			          "image": {
			            "transform": {
			              "rotate": 0
			            },
			            "opacity": 1,
			            "borderRadius": {
			              "topLeft": 0,
			              "topRight": 0,
			              "bottomRight": 0,
			              "bottomLeft": 0
			            }
			          }
			        },
			        "layout": {
			          "position": "absolute",
			          "top": 410,
			          "left": 50,
			          "width": 140,
			          "height": 50,
			          "lockAspectRatio": true
			        },
			        "content": {
			          "img": {
			            "type": "custom",
			            "img": "http://rongyi.b0.upaiyun.com/system/smart/test/file/resourcePic/1901031044151854/1901031044151834.png"
			          },
			           "router": "coupon"
			        },
			        "animation": {
			          "className": "",
			          "direction": "",
			          "delay": 0,
			          "duration": 1,
			          "iterationCount": 1
			        }
			      },
			      "styleList": {
			        "idx": 0
			      },
			      "feature": {},
			      "auth": {
			        "style": {
			          "image": {
			            "transform": false,
			            "opacity": false,
			            "borderRadius": false
			          }
			        },
			        "content": {
			          "img": false,
			          "router": false
			        },
			        "animation": {
			          "className": false,
			          "direction": false,
			          "delay": false,
			          "duration": false,
			          "iterationCount": false
			        },
			        "fture": {}
			      }
			    }],
			    "topNav": {},
			    "bottomNav": {},
			    "feature": {
			      "homeTime": 30,
			      "backgroundColor": {
			        "type": "custom",
			        "color": "rgba(255,255,255,1)",
			        "alpha": 100,
			        "rgb": "#fff"
			      }
			    },
			    "animation": {
			      "in": {
			        "className": "",
			        "direction": "",
			        "delay": 0,
			        "duration": 1,
			        "iterationCount": 1
			      },
			      "out": {
			        "className": "",
			        "direction": "",
			        "delay": 0,
			        "duration": 1,
			        "iterationCount": 1
			      },
			      "interval": 0
			    }
		  }
		};
	Object.keys(originData).map(_ => formatPage(originData[_]))
	let newArr = [];
	Object.keys(originData).map(item=>{
		const obj = originData[item];
		Object.keys(obj).map(val=>{
			if(getAttr(obj[val]) !== 'String'){
				obj[val] = JSON.stringify(obj[val])
			}
		})
		newArr.push(obj)
	})
		//debugger 
	configData.pageContent = newArr
}
export default dataChnage