/*

头部导航js

*/

var oNavItemData =[
    [
		{
			url:'https://www.baidu.com',
			img:'image/mix1.png',
			name:'小米MIX 3',
			price:'3299元起',
			tag:'新品',
		},
		{
			url:'https://www.baidu.com',
			img:'image/mix2.png',
			name:'小米8 青春版',
			price:'1399元起',
		},
		{
			url:'https://www.baidu.com',
			img:'image/mix3.png',
			name:'小米8 屏幕指纹版',
			price:'3199元起',
		},
		{
			url:'https://www.baidu.com',
			img:'image/mix4.png',
			name:'小米8',
			price:'2699元起',
		},
		{
			url:'https://www.baidu.com',
			img:'image/mix5.png',
			name:'小米8 SE',
			price:'1799元起',
			tag:'新品',
		},
		{
			url:'https://www.baidu.com',
			img:'image/mix6.png',
			name:'小米8 Max 3',
			price:'1699元起',
		}
		
    ],//小米手机
    [
        {
			url:'https://www.baidu.com',
			img:'image/hongmi1.png',
			name:'红米6 Pro',
			price:'999元',
		},
		{
			url:'https://www.baidu.com',
			img:'image/hongmi2.png',
			name:'红米6',
			price:'799元',
		},
		{
			url:'https://www.baidu.com',
			img:'image/hongmi3.png',
			name:'红米6 A',
			price:'599元',
		},
		{
			url:'https://www.baidu.com',
			img:'image/hongmi4.png',
			name:'红米Note',
			price:'1099元',
		}
    ],//红米手机
    [
        {
			url:'https://www.baidu.com',
			img:'image/dianshi1.png',
			name:'小米电视4S 75英寸',
			price:'7999元',
			tag:'新品',
		},
		{
			url:'https://www.baidu.com',
			img:'image/dianshi2.png',
			name:'小米电视4A 32英寸',
			price:'799元',
			tag:'热卖',
		},
		{
			url:'https://www.baidu.com',
			img:'image/dianshi3.png',
			name:'小米电视4A 43英寸',
			price:'1499元',
			tag:'热卖',
		},
		{
			url:'https://www.baidu.com',
			img:'image/dianshi4.png',
			name:'小米电视4A 50英寸',
			price:'1999元',
			tag:'新品',
		},
		{
			url:'https://www.baidu.com',
			img:'image/dianshi5.jpg',
			name:'小米电视4A 55英寸',
			price:'2399元',
			tag:'新品',
		},
		{
			url:'https://www.baidu.com',
			img:'image/dianshi6.png',
			name:'查看全部 <br>小米电视',
		}
    ],//电视
    [
        {
			url:'https://www.baidu.com',
			img:'image/bjb1.jpg',
			name:'小米笔记本Air 12.5"',
			price:'3599元',
		},
		{
			url:'https://www.baidu.com',
			img:'image/bjb2.jpg',
			name:'小米笔记本Air 13.3"',
			price:'4999元',
		},
		{
			url:'https://www.baidu.com',
			img:'image/bjb3.png',
			name:'小米笔记本 15.6"',
			price:'4199元',
			tag:'新品',
		},
		{
			url:'https://www.baidu.com',
			img:'image/bjb4.png',
			name:'小米笔记本Pro 15.6"',
			price:'5599元',
		},
		{
			url:'https://www.baidu.com',
			img:'image/bjb5.png',
			name:'小米游戏本 ',
			price:'6699元',
			tag:'新品',
		},
		{
			url:'https://www.baidu.com',
			img:'image/bjb6.png',
			name:'小米平板',
			price:'1099元',
		},
    ],//笔记本
    [
        {
			url:'https://www.baidu.com',
			img:'image/jd1.jpg',
			name:'米家互联网空调(一级能效)',
			price:'2499元',
		},
		{
			url:'https://www.baidu.com',
			img:'image/jd2.jpg',
			name:'米家互联网空调',
			price:'1999元',
		},
		{
			url:'https://www.baidu.com',
			img:'image/jd3.jpg',
			name:'小米空气净化器Pro',
			price:'1499元',
		},
		{
			url:'https://www.baidu.com',
			img:'image/jd4.jpg',
			name:'小米净水器',
			price:'1999元',
		},
		{
			url:'https://www.baidu.com',
			img:'image/jd5.jpg',
			name:'米家扫地机器人',
			price:'1699元',
		},
		{
			url:'https://www.baidu.com',
			img:'image/jd6.jpg',
			name:'新风机',
			price:'2499元',
		},
    ],//家电
    [
        {
			url:'https://www.baidu.com',
			img:'image/xp1.png',
			name:'小米8 青春版',
			price:'1399元起',
		},
		{
			url:'https://www.baidu.com',
			img:'image/xp2.png',
			name:'小米8 屏幕指纹版',
			price:'3199元起',
		},
		{
			url:'https://www.baidu.com',
			img:'image/xp3.jpg',
			name:'小米手环3 NFC版',
			price:'199元',
		},
		{
			url:'https://www.baidu.com',
			img:'image/xp4.jpg',
			name:'小米米家小白智能摄像机增强版',
			price:'399元',
		},
		{
			url:'https://www.baidu.com',
			img:'image/xp5.jpg',
			name:'小米小爱智能闹钟',
			price:'149元',
		},
		{
			url:'https://www.baidu.com',
			img:'image/xp6.png',
			name:'小米小爱蓝牙音箱随身版',
			price:'49元',
		},
    ],//新品
    [
        {
			url:'https://www.baidu.com',
			img:'image/lyq1.png',
			name:'小米路由器4',
			price:'169元',
			tag:'双频双核',
		},
		{
			url:'https://www.baidu.com',
			img:'image/lyq2.png',
			name:'小米路由器4 Q',
			price:'79元',
		},
		{
			url:'https://www.baidu.com',
			img:'image/lyq3.png',
			name:'小米路由器 3A',
			price:'98元',
		},
		{
			url:'https://www.baidu.com',
			img:'image/lyq4.png',
			name:'小米路由器 3G',
			price:'179元',
			tag:'双千兆',
		},
		{
			url:'https://www.baidu.com',
			img:'image/lyq5.png',
			name:'小米路由器HD/Pro',
			price:'499元',
			tag:'大容量',
		},
		{
			url:'https://www.baidu.com',
			img:'image/lyq6.png',
			name:'查看全部小米路由器',
		}
    ],//路由器
    [
        {
			url:'https://www.baidu.com',
			img:'image/zhineng1.jpg',
			name:'小米米家智能摄像机云台版',
			price:'199元',
		},
		{
			url:'https://www.baidu.com',
			img:'image/zhineng2.jpg',
			name:'米家智能洗衣机套装',
			price:'79元',
		},
		{
			url:'https://www.baidu.com',
			img:'image/zhineng3.jpg',
			name:'小米蓝牙耳机AirDots青春版',
			price:'199元',
		},
		{
			url:'https://www.baidu.com',
			img:'image/zhineng4.jpg',
			name:'小米小爱音响mini',
			price:'169元',
		},
		{
			url:'https://www.baidu.com',
			img:'image/zhineng5.jpg',
			name:'米家电动剃须刀',
			price:'199元',
		},
		{
			url:'https://www.baidu.com',
			img:'image/zhineng6.jpg',
			name:'查看全部<br>智能硬件',
		}
    ],//智能硬件
];
var aCateItemData = [
    [
        {
            url:'https://www.baidu.com',
            img:'image/aphone1.png',
            name:'小米MIX 3',
        },
        {
            url:'https://www.baidu.com',
            img:'image/aphone2.png',
            name:'小米MaX 3',
        },
        {
            url:'https://www.baidu.com',
            img:'image/aphone3.png',
            name:'红米6A',
        },
        {
            url:'https://www.baidu.com',
            img:'image/aphone4.png',
            name:'手机上门维修',
        },
    ],//手机电话卡
    [
        {
            url:'https://www.baidu.com',
            img:'image/tv1.png',
            name:'米家激光投影电视',
        },
        {
            url:'https://www.baidu.com',
            img:'image/tv2.png',
            name:'小米电视4A 65英寸',
        },
        {
            url:'https://www.baidu.com',
            img:'image/tv3.png',
            name:'小米电视4X 55英寸',
        },
        {
            url:'https://www.baidu.com',
            img:'image/tv4.jpg',
            name:'小米电视4S 55英寸',
        },
    ],// 电视 盒子
    [
        {
            url:'https://www.baidu.com',
            img:'image/ipad1.jpg',
            name:'小米笔记本 15.6"',
        },
        {
            url:'https://www.baidu.com',
            img:'image/ipad2.png',
            name:'小米笔记本 13.3',
        },
        {
            url:'https://www.baidu.com',
            img:'image/ipad3.jpg',
            name:'小米笔记本 12.5',
        },
        {
            url:'https://www.baidu.com',
            img:'image/ipad4.jpg',
            name:'小米游戏本',
        },
    ],// 笔记本 平板
    [
        {
            url:'https://www.baidu.com',
            img:'image/tv1.png',
            name:'米家激光投影电视',
        },
        {
            url:'https://www.baidu.com',
            img:'image/tv2.png',
            name:'小米电视4A 65英寸',
        },
        {
            url:'https://www.baidu.com',
            img:'image/tv3.png',
            name:'小米电视4X 55英寸',
        },
        {
            url:'https://www.baidu.com',
            img:'image/tv4.jpg',
            name:'小米电视4S 55英寸',
        },
    ],// 家电 插线板

    [
        {
            url:'https://www.baidu.com',
            img:'image/jd1.jpg',
            name:'米家激光投影电视',
        },
        {
            url:'https://www.baidu.com',
            img:'image/jd2.jpg',
            name:'小米电视4A 65英寸',
        },
        {
            url:'https://www.baidu.com',
            img:'image/jd3.jpg',
            name:'小米电视4X 55英寸',
        },
        {
            url:'https://www.baidu.com',
            img:'image/jd4.jpg',
            name:'小米电视4S 55英寸',
        },
    ],// 出行 穿戴
    [
        {
            url:'https://www.baidu.com',
            img:'image/tv1.png',
            name:'米家激光投影电视',
        },
        {
            url:'https://www.baidu.com',
            img:'image/tv2.png',
            name:'小米电视4A 65英寸',
        },
        {
            url:'https://www.baidu.com',
            img:'image/tv3.png',
            name:'小米电视4X 55英寸',
        },
        {
            url:'https://www.baidu.com',
            img:'image/tv4.jpg',
            name:'小米电视4S 55英寸',
        },
    ],// 智能 路由器





];