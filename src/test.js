 const API_url = {
    'dev':{
       "api":"http://192.168.1.206/easy-smart-web/mallShop"
    },
    "qa":{ 
       "api":"http://224.rongyi.com/easy-smart-web/mallShop"//  http://52.internal.rongyi.com  //http://fe1.rongyi.com:8224
    },         
    "v4":{     
      "api":"http://api.v4.rongyi.com/easy-smart-web/mallShop"
    }, 
    "v8":{ 
      "api":"http://api.rongyiguang.com/easy-smart-web/mallShop"
    }
  }
   	//const mallId = '5bf50b84130b38000b969e3b'	// online
   	 //const mallId = "5330fe6521232ffbd500010b"  //v4
	 //const mallId = '5330fe6521232ffbd500010b'	// dev
	const mallId = '5330fe6521232ffbd500010b'	// qa
 window.configData =  {
	"resourceBasePath": "",
	"RYPostUrl":API_url.qa,
 	"mallId":mallId,
 	"pageContent": []
 }

const dataChnage = () => {
	const originData ={
		  "p_1000": {
		    "router": "p_1000",
		    "title": "首页",
		    "elements": [{
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
		          "top": 30,
		          "left": 30,
		          "width": 110,
		          "height": 480,
		          "lockAspectRatio": true
		        },
		        "content": {
		          "img": {
		            "type": "custom",
		            "img": "http://rongyi.b0.upaiyun.com/system/mcp/app/upload/f882d6e2-823b-49d0-b769-b7cf33554408.png"
		          },
		          "router": {
		            "url": "",
		            "param": [{
		              "type": "",
		              "value": ""
		            }]
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
		          "size": 18,
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
		              "top": 26,
		              "left": 201,
		              "width": 718,
		              "height": 50
		            },
		            "style": {
		              "filterFlex": {
		                "flexDirection": "row",
		                "flexWrap": "nowrap"
		              },
		              "filterBox": {
		                "borderWidth": 0,
		                "borderStyle": "solid",
		                "borderColor": {
		                  "type": "custom",
		                  "color": "#fff"
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
		                "width": 100,
		                "height": 50,
		                "margin": {
		                  "top": 0,
		                  "right": 0,
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
		                    "fontSize": 18,
		                    "lineHeight": 40,
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
		                      "color": "rgba(255,255,255,1)",
		                      "rgb": "#ffffff",
		                      "alpha": 100
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
		                      "rgb": "#ffffff",
		                      "alpha": 100
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
		                      "rgb": "#333333"
		                    }
		                  }
		                },
		                "layout": {
		                  "position": "absolute",
		                  "top": 0,
		                  "left": 0,
		                  "width": 100,
		                  "height": 40
		                },
		                "content": {
		                  "bind": "name",
		                  "router": {},
		                  "text": "亲 子"
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
		              "name": "textBind",
		              "type": "base",
		              "data": {
		                "style": {
		                  "text": {
		                    "textAlign": "center",
		                    "fontSize": 18,
		                    "lineHeight": 40,
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
		                      "color": "rgba(255,255,255,0)",
		                      "alpha": 0,
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
		                      "color": "rgba(153,153,153,1)",
		                      "alpha": 100,
		                      "rgb": "#999999"
		                    }
		                  }
		                },
		                "layout": {
		                  "position": "absolute",
		                  "top": 0,
		                  "left": 0,
		                  "width": 100,
		                  "height": 40
		                },
		                "content": {
		                  "bind": "name",
		                  "router": {},
		                  "text": "其他"
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
		                "active": false
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
		                  "top": 43,
		                  "left": 0,
		                  "width": 100,
		                  "height": 2,
		                  "lockAspectRatio": true
		                },
		                "content": {
		                  "img": {
		                    "type": "custom",
		                    "img": "http://rongyi.b0.upaiyun.com/system/smart/test/file/resourcePic/1901021152465008/1901021152464965.png"
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
		                "active": false
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
		                  "top": 42.5,
		                  "left": 0,
		                  "width": 100,
		                  "height": 2.5,
		                  "lockAspectRatio": true
		                },
		                "content": {
		                  "img": {
		                    "type": "custom",
		                    "img": "http://rongyi.b0.upaiyun.com/system/smart/test/file/resourcePic/1901021152465008/1901021152464965.png"
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
		                  "top": 42.5,
		                  "left": 0,
		                  "width": 100,
		                  "height": 7.5,
		                  "lockAspectRatio": true
		                },
		                "content": {
		                  "img": {
		                    "type": "custom",
		                    "img": "http://rongyi.b0.upaiyun.com/system/smart/test/file/resourcePic/1901021144194327/1901021144194307.png"
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
		              "rel": 0,
		              "router": {
		                "param": [{
		                  "type": "",
		                  "value": ""
		                }],
		                "url": ""
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
		              "rel": false,
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
		          "name": "listByStore2",
		          "type": "layout",
		          "data": {
		            "layout": {
		              "position": "absolute",
		              "top": 100,
		              "left": 200,
		              "width": 720,
		              "height": 393
		            },
		            "style": {
		              "filter": {
		                "width": 110,
		                "height": 120,
		                "borderWidth": 0.5,
		                "borderStyle": "solid",
		                "borderColor": {
		                  "type": "custom",
		                  "color": "rgba(226,226,226,1)",
		                  "alpha": 100,
		                  "rgb": "#e2e2e2"
		                },
		                "backgroundColor": {
		                  "type": "custom",
		                  "color": "rgba(250,250,250,1)",
		                  "alpha": 100,
		                  "rgb": "#fafafa"
		                },
		                "margin": {
		                  "top": 0,
		                  "right": 10,
		                  "bottom": 10,
		                  "left": 0
		                },
		                "borderRadius": {
		                  "topLeft": 10,
		                  "topRight": 10,
		                  "bottomLeft": 10,
		                  "bottomRight": 10
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
		                      "topLeft": 90,
		                      "topRight": 90,
		                      "bottomRight": 90,
		                      "bottomLeft": 90
		                    }
		                  }
		                },
		                "layout": {
		                  "position": "absolute",
		                  "top": 15,
		                  "left": 30,
		                  "width": 50,
		                  "height": 50
		                },
		                "content": {
		                  "bind": "logo",
		                  "router": {},
		                  "img": {
		                    "type": "custom",
		                    "img": "http://rongyi.b0.upaiyun.com/commodity/text/201805311433385479.png"
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
		                    "fontSize": 11,
		                    "lineHeight": 15,
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
		                      "color": "rgba(35,24,21,1)",
		                      "alpha": 100,
		                      "rgb": "#231815"
		                    }
		                  }
		                },
		                "layout": {
		                  "position": "absolute",
		                  "top": 74.5,
		                  "left": 10,
		                  "width": 92.5,
		                  "height": 14
		                },
		                "content": {
		                  "bind": "name",
		                  "router": {},
		                  "text": "UNIQLO"
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
		                  "top": 94.5,
		                  "left": 37.5,
		                  "width": 7,
		                  "height": 8,
		                  "lockAspectRatio": true
		                },
		                "content": {
		                  "img": {
		                    "type": "custom",
		                    "img": "http://rongyi.b0.upaiyun.com/system/mcp/app/upload/5c9ab6a7-82db-486d-a235-c4fc78e7158f.png"
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
		            }, {
		              "name": "textBind",
		              "type": "base",
		              "data": {
		                "style": {
		                  "text": {
		                    "textAlign": "left",
		                    "fontSize": 9,
		                    "lineHeight": 12.5,
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
		                      "color": "rgba(35,24,21,1)",
		                      "alpha": 100,
		                      "rgb": "#231815"
		                    }
		                  }
		                },
		                "layout": {
		                  "position": "absolute",
		                  "top": 92.5,
		                  "left": 48,
		                  "width": 55,
		                  "height": 13
		                },
		                "content": {
		                  "bind": "berthNumber",
		                  "router": {},
		                  "text": "F3-37A"
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
		              "name": "text",
		              "type": "base",
		              "data": {
		                "style": {
		                  "text": {
		                    "textAlign": "center",
		                    "fontSize": 12,
		                    "lineHeight": 20,
		                    "transform": {
		                      "rotate": 0
		                    },
		                    "fontStyle": "normal",
		                    "fontWeight": "normal",
		                    "textDecoration": "none",
		                    "textIndent": 0,
		                    "opacity": 1,
		                    "background": "center no-repeat",
		                    "backgroundSize": "cover",
		                    "backgroundColor": {
		                      "type": "custom",
		                      "color": "#fff"
		                    },
		                    "backgroundImage": {
		                      "type": "custom",
		                      "img": "http://rongyi.b0.upaiyun.com/commodity/text/201811271625344267.png"
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
		                      "color": "#fff"
		                    }
		                  }
		                },
		                "layout": {
		                  "position": "absolute",
		                  "top": 0,
		                  "left": 75,
		                  "width": 20,
		                  "height": 20
		                },
		                "content": {
		                  "text": "荐",
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
		                "editStatus": true
		              }
		            }],
		            "content": {
		              "router": {
		                "param": [{
		                  "type": "",
		                  "value": ""
		                }],
		                "url": "",
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
		              "router": true
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
		          "name": "resetByStore2",
		          "type": "layout",
		          "data": {
		            "layout": {
		              "position": "absolute",
		              "top": 45,
		              "left": 45,
		              "width": 80,
		              "height": 30
		            },
		            "style": {
		              "filterBox": {
		                "borderWidth": 0,
		                "borderStyle": "solid",
		                "borderColor": {
		                  "type": "textHigh",
		                  "color": "#fff"
		                },
		                "backgroundColor": {
		                  "type": "custom",
		                  "color": "rgba(255,255,255,0)",
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
		                  "topLeft": 5,
		                  "topRight": 5,
		                  "bottomLeft": 5,
		                  "bottomRight": 5
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
		              "name": "text",
		              "type": "base",
		              "data": {
		                "style": {
		                  "text": {
		                    "textAlign": "center",
		                    "fontSize": 14,
		                    "lineHeight": 27,
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
		                      "color": "rgba(255,255,255,0)",
		                      "rgb": "#ffffff",
		                      "alpha": 0
		                    },
		                    "borderRadius": {
		                      "topLeft": 5,
		                      "topRight": 5,
		                      "bottomRight": 5,
		                      "bottomLeft": 5
		                    },
		                    "borderWidth": 1,
		                    "borderStyle": "solid",
		                    "borderColor": {
		                      "type": "custom",
		                      "color": "rgba(255,255,255,1)",
		                      "rgb": "#ffffff",
		                      "alpha": 100
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
		                  "width": 80,
		                  "height": 30
		                },
		                "content": {
		                  "text": "查看全部",
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
		                "editStatus": true,
		                "active": false
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
		                  "text": false,
		                  "router": false
		                },
		                "animation": {
		                  "className": false,
		                  "direction": false,
		                  "delay": false,
		                  "duration": false,
		                  "iterationCount": false
		                },
		                "fture": {
		                  "editStatus": false
		                }
		              }
		            }, {
		              "name": "text",
		              "type": "base",
		              "data": {
		                "style": {
		                  "text": {
		                    "textAlign": "center",
		                    "fontSize": 14,
		                    "lineHeight": 27,
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
		                      "color": "#fff",
		                      "rgb": "#fff",
		                      "alpha": 100
		                    },
		                    "borderRadius": {
		                      "topLeft": 5,
		                      "topRight": 5,
		                      "bottomRight": 5,
		                      "bottomLeft": 5
		                    },
		                    "borderWidth": 1,
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
		                      "color": "rgba(0,161,233,1)",
		                      "alpha": 100,
		                      "rgb": "#00a1e9"
		                    }
		                  }
		                },
		                "layout": {
		                  "position": "absolute",
		                  "top": 0,
		                  "left": 0,
		                  "width": 80,
		                  "height": 30
		                },
		                "content": {
		                  "text": "查看全部",
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
		                "editStatus": true,
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
		                  "text": false,
		                  "router": false
		                },
		                "animation": {
		                  "className": false,
		                  "direction": false,
		                  "delay": false,
		                  "duration": false,
		                  "iterationCount": false
		                },
		                "fture": {
		                  "editStatus": false
		                }
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
		                "padding": false,
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
		        }, {
		          "name": "floorByStore2",
		          "type": "layout",
		          "data": {
		            "layout": {
		              "position": "absolute",
		              "top": 125,
		              "left": 56.5,
		              "width": 55,
		              "height": 290
		            },
		            "style": {
		              "filterFlex": {
		                "flexDirection": "column",
		                "flexWrap": "nowrap"
		              },
		              "filterBox": {
		                "borderWidth": 0,
		                "borderStyle": "solid",
		                "borderColor": {
		                  "type": "custom",
		                  "color": "#fff"
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
		                "width": 55,
		                "height": 40
		              }
		            },
		            "componentLayout": [{
		              "name": "textBind",
		              "type": "base",
		              "data": {
		                "style": {
		                  "text": {
		                    "textAlign": "center",
		                    "fontSize": 14,
		                    "lineHeight": 40,
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
		                      "color": "#fff"
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
		                  "width": 55,
		                  "height": 40
		                },
		                "content": {
		                  "bind": "name",
		                  "router": {},
		                  "text": "L4"
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
		                "active": false
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
		              "name": "textBind",
		              "type": "base",
		              "data": {
		                "style": {
		                  "text": {
		                    "textAlign": "center",
		                    "fontSize": 14,
		                    "lineHeight": 40,
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
		                      "color": "rgba(255,255,255,1)",
		                      "rgb": "#ffffff",
		                      "alpha": 100
		                    },
		                    "borderRadius": {
		                      "topLeft": 2.5,
		                      "topRight": 2.5,
		                      "bottomRight": 2.5,
		                      "bottomLeft": 2.5
		                    },
		                    "borderWidth": 1,
		                    "borderStyle": "solid",
		                    "borderColor": {
		                      "type": "custom",
		                      "color": "rgba(255,255,255,1)",
		                      "alpha": 100,
		                      "rgb": "#fff"
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
		                      "color": "rgba(0,161,233,1)",
		                      "alpha": 100,
		                      "rgb": "#00a1e9"
		                    }
		                  }
		                },
		                "layout": {
		                  "position": "absolute",
		                  "top": 0,
		                  "left": 0,
		                  "width": 55,
		                  "height": 40
		                },
		                "content": {
		                  "bind": "name",
		                  "router": {},
		                  "text": "L4"
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
		            }],
		            "content": {
		              "rel": 0,
		              "router": {
		                "param": [{
		                  "type": "",
		                  "value": ""
		                }],
		                "url": ""
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
		                "height": false
		              }
		            },
		            "content": {
		              "rel": false,
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
		          "name": "letterByStore2",
		          "type": "layout",
		          "data": {
		            "layout": {
		              "position": "absolute",
		              "top": 36,
		              "left": 163,
		              "width": 18,
		              "height": 468
		            },
		            "style": {
		              "filterFlex": {
		                "flexDirection": "column",
		                "flexWrap": "nowrap"
		              },
		              "filterBox": {
		                "borderWidth": 0,
		                "borderStyle": "solid",
		                "borderColor": {
		                  "type": "custom",
		                  "color": "#fff"
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
		                "width": 18,
		                "height": 18,
		                "margin": {
		                  "top": 0,
		                  "right": 0,
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
		                      "color": "rgba(0, 0, 0, 0)",
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
		                      "color": "#666"
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
		                      "color": "rgba(153,153,153,1)",
		                      "alpha": 100,
		                      "rgb": "#999999"
		                    }
		                  }
		                },
		                "layout": {
		                  "position": "absolute",
		                  "top": 0,
		                  "left": 0,
		                  "width": 18,
		                  "height": 18
		                },
		                "content": {
		                  "bind": "name",
		                  "router": {},
		                  "text": "Z"
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
		                "active": false
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
		              "name": "textBind",
		              "type": "base",
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
		                      "color": "rgba(0,161,233,1)",
		                      "rgb": "#00a1e9",
		                      "alpha": 100
		                    },
		                    "borderRadius": {
		                      "topLeft": 90,
		                      "topRight": 90,
		                      "bottomRight": 90,
		                      "bottomLeft": 90
		                    },
		                    "borderWidth": 1,
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
		                  "top": 0,
		                  "left": 0,
		                  "width": 18,
		                  "height": 18
		                },
		                "content": {
		                  "bind": "name",
		                  "router": {},
		                  "text": "B"
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
		            }],
		            "content": {
		              "rel": 0,
		              "router": {
		                "url": "",
		                "param": [{
		                  "type": "",
		                  "value": ""
		                }]
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
		              "rel": false,
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
		              "top": 493,
		              "left": 199,
		              "width": 722,
		              "height": 20
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
		                  "color": "#fff"
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
		                "width": 5,
		                "height": 5,
		                "margin": {
		                  "top": 0,
		                  "right": 0,
		                  "bottom": 0,
		                  "left": 6
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
		                      "topLeft": 5,
		                      "topRight": 5,
		                      "bottomRight": 5,
		                      "bottomLeft": 5
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
		                      "color": "rgba(0,161,233,1)",
		                      "alpha": 100,
		                      "rgb": "#00a1e9"
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
		              "rel": 0,
		              "router": {
		                "param": [{
		                  "type": "",
		                  "value": ""
		                }],
		                "url": ""
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
		              "rel": false,
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
		  }
		};
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