/*小米官网js部分*/



handleCart();
handleNav();
handleCarousel();
handleCart();
handleChange()

//处理购物车
function handleCart(){
	//1.获取元素
	var oCart = document.querySelector('.top .cart');
	var oCartLink = document.querySelector('.top .cart .cart-box a');
	var oCartContent = document.querySelector('.top .cart .cart-content');
	var oLoader = oCartContent.querySelector('.loader');
	var oEmptyCart = oCartContent.querySelector('.empty-cart');
	oCart.onmouseenter = function(){
		//1.改变购物车图标的背景色和字体颜色
	    oCartLink.style.background = '#fff';
	    oCartLink.style.color = '#ff6700';
	    //2.加载loading图标
	    oLoader.style.display = 'block';
	    //3.显示购物车内容,假设购物车完全显示就获取到了购物车数据
	    animate(oCartContent,{height:100},true,function(){
	    	oLoader.style.display = 'none';
	    	//此处会根据请求结果显示
	    	oEmptyCart.style.display = 'block';
	    });
	}
	oCart.onmouseleave = function(){
		//1.改变购物车图标的背景色和字体颜色
		oCartLink.style.background = '#424242';
		oCartLink.style.color = '#b0b0b0';
	    //2.隐藏购物车内容
	    animate(oCartContent,{height:0},true,function(){
	        //隐藏购物车数据和loading图标
	        oLoader.style.display = 'none';
	        oEmptyCart.style.display = 'none';
	    });
	}   
}
//处理导航
function handleNav(){
	//1.获取导航列表
	var oNavItem = document.querySelectorAll('.header-nav-item');
	var oNavContent = document.querySelector('.header-nav-content');
	var oNavContentContainer = oNavContent.querySelector('.container');
	var hideTimer = 0;
	var lodeTimer = 0;
	//2.批量监听导航列表事件
	for(var i=0;i<oNavItem.length-2;i++){
		oNavItem[i].index = i;
		oNavItem[i].onmouseenter = function(){
			clearTimeout(hideTimer);
			oNavContent.style.borderTop = '1px solid #ccc';
			oNavContentContainer.innerHTML = '<div class="loader"></div>';
			animate(oNavContent,{'height':200},true,function(){
				oNavContent.style.overflow = 'visible';
			});
			index = this.index;
			clearTimeout(lodeTimer);
			lodeTimer = setTimeout(function(){
				loadData(index);
			},500)
			
		}
		//2.2鼠标移出事件
		oNavItem[i].onmouseleave = function(){
			hideNavContent();
		}
	}
	oNavContent.onmouseenter = function(){
		clearTimeout(hideTimer);
	}
	oNavContent.onmouseleave = function(){
        hideNavContent();
	}
	function hideNavContent(){
		hideTimer = setTimeout(function(){
				oNavContent.style.overflow = 'hidden';
			    animate(oNavContent,{'height':0},true,function(){
			        oNavContent.style.borderTop = 'none';
			});
		},500)
	}
	//如何动态的获取下拉框列表里的元素
	function loadData(index){
		var data = oNavItemData[index];
		var html = '<ul>';
		for(var i = 0;i<data.length;i++){
			html += '<li>';
			html += '    <div class="img-box">';
			html += '        <a href="'+data[i].url+'">';
			html += '            <img src="'+data[i].img+'" alt="">';
			html += '        </a>';
			html += '    </div>	';
			html += '    <p class="product-name">'+data[i].name+'</p>';
			if(data[i].price){
				html += '    <p class="product-price">'+data[i].price+'</p>';
			}
			if(data[i].tag){
				html += '    <span class="tag">'+data[i].tag+'</span>';
			}
			html += '</li>';
		}
		html += '</ul>';
		
		oNavContentContainer.innerHTML = html;
	}
}
//处理首页轮播
function handleCarousel(){
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
}
//处理左边分类面板
function handleCart(){
	var aCateItem = document.querySelectorAll('.home .banner .cate .cate-item');
	var aCateContent = document.querySelector('.home .banner .cart-content');
	var aCateBox = document.querySelector('.home .banner .cart-box');
	for(var i = 0;i<aCateItem.length;i++){
		aCateItem[i].index = i; 
		aCateItem[i].onmouseenter = function(){
			for(var j =0;j<aCateItem.length;j++){
				aCateItem[j].className = 'cate-item';
			}
            aCateContent.style.display = 'block';
            this.className = 'cate-item active';
            //加载数据
            loadData(this.index);
		}
	}
	    aCateBox.onmouseleave = function(){
	    	aCateContent.style.display = 'none';
	    	for(var j =0;j<aCateItem.length;j++){
				aCateItem[j].className = 'cate-item';
			}
	    }
	    function loadData(index){
		var data = aCateItemData[index];
		var html = '<ul>';
		for(var i = 0;i<data.length;i++){
			html += '<li>';
			html += '   <a href="'+data[i].url+'">';
			html += '       <img src="'+data[i].img+'" alt="">';
			html += '       <span>'+data[i].name+'</span>';
			html += '   </a>';
			html += '</li>';
		}
		html += '</ul>';
		
		aCateContent.innerHTML = html;
	}
}
    
//家电部分切换
function handleChange(){

}
