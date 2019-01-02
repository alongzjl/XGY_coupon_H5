import { hashHistory } from 'react-router'

const windowHeight = $(window).height(),
　　$body = $("body");
　　$body.css("height", windowHeight); //重要代码

export default function backHome(homepage){

	window.funcIn = () => {
		let RYBackHome = 0;
		window.RYTimer = setInterval(()=>{
			RYBackHome+=1;
			if(RYBackHome == backHomeTime){
				clearInterval(RYTimer);
				window.RY_navigation_have = false;
				hashHistory.push(`/${homepage.homepage}`)
			} 
		},1000)
	}
	funcIn()
	document.addEventListener('click',function(){
		clearInterval(RYTimer);
		funcIn()
	})  
	$body.off("touchend").on("touchend", function(e) {
		clearInterval(RYTimer); 
		funcIn() 
	});   
}  