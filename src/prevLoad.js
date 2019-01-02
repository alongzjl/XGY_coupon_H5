

export default function preloadimages(arr,resourceBasePath){
		let length = 0,
			postaction=function(){}  //此处增加了一个postaction函数
		arr.map(item=>{
			let elements = JSON.parse(item.elements);
			let newArr = [],index=0;
			elements.map(v=>{
				if(v.name == 'picture'){
					let content = v.data.content.img;
                    content.img ? newArr.push(resourceBasePath+content.img) : newArr.push('no_pic')
					v.data.content.img = index
					index++
				}
			})
			preload(newArr).done(arrImg=>{
				length++
				elements.map(v=>{
					if(v.name == 'picture'){
						let content = v.data.content.img
						v.data.content.img = arrImg[content]
					}
				})
				item.elements = elements
				if(length == arr.length){
					 postaction(arr) 
				}
			})
		})
		return { //此处返回一个空白对象的done方法
	        done:function(f){
	            postaction=f || postaction
	        }
	    }
}

function preload(arr){  
    var newimages=[], loadedimages=0
    var postaction=function(){}  //此处增加了一个postaction函数
	if(arr.length == 0) setTimeout(()=>{postaction(newimages)},5)
    function imageloadpost(){
        loadedimages++
        if (loadedimages==arr.length){
            postaction(newimages) //加载完成用我们调用postaction函数并将newimages数组做为参数传递进去
        }
    }
    for (var i=0; i<arr.length; i++){
        if(arr[i] == 'no_pic'){
            newimages[i] = 'no_pic'   
            setTimeout(()=>{ imageloadpost()},5)
        }else{
            newimages[i] = new Image()
            newimages[i].src=arr[i]
            newimages[i].onload=function(){
                imageloadpost()
            }
            newimages[i].onerror=function(){
                imageloadpost()
            }
        }
    }
    return { //此处返回一个空白对象的done方法
        done:function(f){
            postaction=f || postaction
        }
    }
}

function downloadIamge(src, name) {
    var image = new Image()
    // 解决跨域 Canvas 污染问题
    image.setAttribute('crossOrigin', 'anonymous')
    image.onload = function () {
        var canvas = document.createElement('canvas')
        canvas.width = image.width
        canvas.height = image.height

        var context = canvas.getContext('2d')
        context.drawImage(image, 0, 0, image.width, image.height)
        var url = canvas.toDataURL('image/png')

        // 生成一个a元素
        var a = document.createElement('a')
        // 创建一个单击事件
        var event = new MouseEvent('click')

        // 将a的download属性设置为我们想要下载的图片名称，若name不存在则使用‘下载图片名称’作为默认名称
        a.download = name || '下载图片名称'
        // 将生成的URL设置为a.href属性
        a.href = url

        // 触发a的单击事件
        a.dispatchEvent(event)
    }

    image.src = src
}
