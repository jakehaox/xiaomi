/*
  头部轮播图
*/

var aImg = document.querySelectorAll('.carousel-imgs-item');
	var oLeftArrow = document.querySelector('.left-arrow');
	var oRightArrow = document.querySelector('.right-arrow');
	var aBtn = document.querySelector('.carousel-btn').children;
	var oCarousel = document.querySelector('.carousel');
	var timer = 0;
	//当前图片
	var now = 0;
	
	/*
		切换函数
	*/
	function tab(){
		for(var i = 0;i<aImg.length;i++){
			aImg[i].style.zIndex = '0';
			aBtn[i].className = '';
			aImg[i].style.opacity = '0';
		}
		aImg[now].style.zIndex = '99';
		aImg[now].style.opacity = '1';
		aBtn[now].className = 'active';
	}
	//2.添加下一张事件
	oRightArrow.onclick = function(){
		now++;
		if(now >= aImg.length){
			now = 0;
		}
		tab();
	}
	//3.添加下一张事件
	oLeftArrow.onclick = function(){
		now--;
		if(now < 0){
			now = aImg.length - 1;
		}
		tab();	
	}
	//4.底部指示按钮事件
	for(var i = 0;i<aBtn.length;i++){
		aBtn[i].index = i;
		aBtn[i].onclick = function(){
			now = this.index;
			tab();
		}
	}
	//5.自动播放
	timer = setInterval(oRightArrow.onclick,5000);
	oCarousel.onmouseover = function(){
		clearInterval(timer);
	}
	oCarousel.onmouseout = function(){
		timer = setInterval(oRightArrow.onclick,5000);
	}



	//倒计时

	var oTimer = document.querySelector('.timer-box');
	var aSpan = oTimer.children;
	var endDate = new Date('2018-12-21 16:52:00');
     
    var endTimes = endDate.getTime();

    var timer = 0;
    
     function to2Str(num){
     	return num < 10 ? '0' + num : '' + num ;
     }
	function handleTimer(){
        var allMinSeconds = endTimes - Date.now();
         
         if(allMinSeconds <= 0){
         	allMinSeconds = 0;
         	clearInterval(timer);
         }



	    var allSeconds = parseInt(allMinSeconds / 1000);

	    var iHour = parseInt(allSeconds / 3600);
	    var iMinute = parseInt((allSeconds % 3600) / 60);
	    var iSecond = (allSeconds % 3600) % 60;
	    aSpan[0].innerHTML = to2Str(iHour);
	    aSpan[2].innerHTML = to2Str(iMinute);
	    aSpan[4].innerHTML = to2Str(iSecond);
	    

	}
	timer = setInterval(handleTimer,500);
	handleTimer();