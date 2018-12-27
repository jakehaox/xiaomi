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
            img:'image/jd1.jpg',
            name:'米家互联网空调一级能效',
        },
        {
            url:'https://www.baidu.com',
            img:'image/jd2.jpg',
            name:'米家互联网空调',
        },
        {
            url:'https://www.baidu.com',
            img:'image/jd3.jpg',
            name:'空气净化器',
        },
        {
            url:'https://www.baidu.com',
            img:'image/jd4.jpg',
            name:'净水器',
        },
    ],// 家电 插线板
    [
        {
            url:'https://www.baidu.com',
            img:'image/chuxing1.jpg',
            name:'手环手表',
        },
        {
            url:'https://www.baidu.com',
            img:'image/chuxing2.jpg',
            name:'平衡车配件',
        },
        {
            url:'https://www.baidu.com',
            img:'image/chuxing3.jpg',
            name:'平衡车配',
        },
        {
            url:'https://www.baidu.com',
            img:'image/chuxing4.jpg',
            name:'滑板车',
        },
        {
            url:'https://www.baidu.com',
            img:'image/chuxing5.jpg',
            name:'自行车',
        },
    ],// 出行 穿戴
    [
        {
            url:'https://www.baidu.com',
            img:'image/zn1.jpg',
            name:'路由器',
        },
        {
            url:'https://www.baidu.com',
            img:'image/zn2.jpg',
            name:'对讲机',
        },
        {
            url:'https://www.baidu.com',
            img:'image/zn3.jpg',
            name:'智能家庭',
        },
        {
            url:'https://www.baidu.com',
            img:'image/zn4.jpg',
            name:'无人机',
        },
    ],// 智能 路由器
    [
        {
            url:'https://www.baidu.com',
            img:'image/dianyuan1.jpg',
            name:'数据线',
        },
        {
            url:'https://www.baidu.com',
            img:'image/dianyuan2.jpg',
            name:'内存卡',
        },
        {
            url:'https://www.baidu.com',
            img:'image/dianyuan3.jpg',
            name:'插盘',
        },
        {
            url:'https://www.baidu.com',
            img:'image/dianyuan4.jpg',
            name:'无线充',
        },
    ],// 电源 配件
    [
        {
            url:'https://www.baidu.com',
            img:'image/jk1.jpg',
            name:'吹风机',
        },
        {
            url:'https://www.baidu.com',
            img:'image/jk2.jpg',
            name:'电子称',
        },
        {
            url:'https://www.baidu.com',
            img:'image/jk3.jpg',
            name:'早教启蒙',
        },
        {
            url:'https://www.baidu.com',
            img:'image/jk4.jpg',
            name:'体重秤',
        },
    ],// 健康 儿童
    [
        {
            url:'https://www.baidu.com',
            img:'image/ej1.jpg',
            name:'线控耳机',
        },
        {
            url:'https://www.baidu.com',
            img:'image/ej2.png',
            name:'蓝牙耳机K歌版',
        },
        {
            url:'https://www.baidu.com',
            img:'image/ej3.jpg',
            name:'蓝牙耳机',
        },
        {
            url:'https://www.baidu.com',
            img:'image/ej4.jpg',
            name:'头戴耳机',
        },
    ],// 耳机 音响
    [
        {
            url:'https://www.baidu.com',
            img:'image/box1.jpg',
            name:'钱包',
        },
        {
            url:'https://www.baidu.com',
            img:'image/box2.jpg',
            name:'收纳包',
        },
        {
            url:'https://www.baidu.com',
            img:'image/box3.png',
            name:'枕头',
        },
        {
            url:'https://www.baidu.com',
            img:'image/box4.jpg',
            name:'运动鞋',
        },
    ],// 生活 箱包

];
var aTabItemData = [
    [
        {
            url:'https://www.baidu.com',
            img:'image/p1.jpg',
            name:'小米6 4GB+64GB 黑色',
            desc:'变焦双摄 4轴防抖 骁龙835处理器',
            price:'2299',
            del:'2599',
            flag:{
            	name:'off-flag',
            	content:'新品',
            },
            view:{
                recommend:'一直想买个小米手机,果然不失所望,大爱 啊哈哈哈哈哈哈哈 I very like',
                author:'17337032832的评价',
            }
        },
        {
            url:'https://www.baidu.com',
            img:'image/p2.jpg',
            name:'小米MIX2 全陶瓷尊享版',
            desc:'全面屏2.0 Unibody全陶瓷',
            price:'3899',
            del:'4699',
            flag:{
            	name:'off-flag',
            	content:'减200元',
            },
            view:{
                recommend:'我要是不催货还不给我发货,我等了一周了就为来了看NB',
                author:'17337032832的评价',
            }
        },
        {
            url:'https://www.baidu.com',
            img:'image/p1.jpg',
            name:'小米6 4GB+64GB 黑色',
            desc:'变焦双摄 4轴防抖 骁龙835处理器',
            price:'2299',
            del:'2599',
            flag:{
            	name:'off-flag',
            	content:'新品',
            },
            view:{
                recommend:'一直想买个小米手机,果然不失所望,大爱 啊哈哈哈哈哈哈哈 I very like',
                author:'17337032832的评价',
            }
        },
        {
            url:'https://www.baidu.com',
            img:'image/p2.jpg',
            name:'小米MIX2 全陶瓷尊享版',
            desc:'全面屏2.0 Unibody全陶瓷',
            price:'3899',
            del:'4699',
            flag:{
            	name:'off-flag',
            	content:'减200元',
            },
            view:{
                recommend:'我要是不催货还不给我发货,我等了一周了就为来了看NB',
                author:'17337032832的评价',
            }
        },
        {
            url:'https://www.baidu.com',
            img:'image/p1.jpg',
            name:'小米6 4GB+64GB 黑色',
            desc:'变焦双摄 4轴防抖 骁龙835处理器',
            price:'2299',
            del:'2599',
            flag:{
            	name:'off-flag',
            	content:'享8折',
            },
            view:{
                recommend:'一直想买个小米手机,果然不失所望,大爱 啊哈哈哈哈哈哈哈 I very like',
                author:'17337032832的评价',
            }
        },
       {
            url:'https://www.baidu.com',
            img:'image/p2.jpg',
            name:'小米MIX2 全陶瓷尊享版',
            desc:'全面屏2.0 Unibody全陶瓷',
            price:'3899',
            del:'4699',
            flag:{
            	name:'off-flag',
            	content:'减200元',
            },
            view:{
                recommend:'我要是不催货还不给我发货,我等了一周了就为来了看NB',
                author:'17337032832的评价',
            }
        },
        {
            url:'https://www.baidu.com',
            img:'image/p1.jpg',
            name:'小米6 4GB+64GB 黑色',
            desc:'变焦双摄 4轴防抖 骁龙835处理器',
            price:'2299',
            del:'2599',
            flag:{
            	name:'off-flag',
            	content:'减100',
            },
            view:{
                recommend:'一直想买个小米手机,果然不失所望,大爱 啊哈哈哈哈哈哈哈 I very like',
                author:'17337032832的评价',
            }
        },
        {
        	top:{
                url:'https://www.baidu.com',
                img:'image/ca.png',
                name:'小白摄像机',
                price:'3899',
        	},
        	bottom:{
                url:'https://www.baidu.com',
                txt:'浏览更多',
                tag:'热门',
                icon:'&#xe615;',
        	}
        }
    ],
    [
        {
            url:'https://www.baidu.com',
            img:'image/p1.jpg',
            name:'小米6 4GB+64GB 黑色',
            desc:'变焦双摄 4轴防抖 骁龙835处理器',
            price:'2299',
            del:'2599',
            flag:{
                name:'off-flag',
                content:'新品',
            },
            view:{
                recommend:'一直想买个小米手机,果然不失所望,大爱 啊哈哈哈哈哈哈哈 I very like',
                author:'17337032832的评价',
            }
        },
        {
            url:'https://www.baidu.com',
            img:'image/p2.jpg',
            name:'小米MIX2 全陶瓷尊享版',
            desc:'全面屏2.0 Unibody全陶瓷',
            price:'3899',
            del:'4699',
            flag:{
                name:'off-flag',
                content:'减200元',
            },
            view:{
                recommend:'我要是不催货还不给我发货,我等了一周了就为来了看NB',
                author:'17337032832的评价',
            }
        },
        {
            url:'https://www.baidu.com',
            img:'image/p1.jpg',
            name:'小米6 4GB+64GB 黑色',
            desc:'变焦双摄 4轴防抖 骁龙835处理器',
            price:'2299',
            del:'2599',
            flag:{
                name:'off-flag',
                content:'新品',
            },
            view:{
                recommend:'一直想买个小米手机,果然不失所望,大爱 啊哈哈哈哈哈哈哈 I very like',
                author:'17337032832的评价',
            }
        },
        {
            url:'https://www.baidu.com',
            img:'image/p2.jpg',
            name:'小米MIX2 全陶瓷尊享版',
            desc:'全面屏2.0 Unibody全陶瓷',
            price:'3899',
            del:'4699',
            flag:{
                name:'off-flag',
                content:'减200元',
            },
            view:{
                recommend:'我要是不催货还不给我发货,我等了一周了就为来了看NB',
                author:'17337032832的评价',
            }
        },
        {
            url:'https://www.baidu.com',
            img:'image/p1.jpg',
            name:'小米6 4GB+64GB 黑色',
            desc:'变焦双摄 4轴防抖 骁龙835处理器',
            price:'2299',
            del:'2599',
            flag:{
                name:'off-flag',
                content:'享8折',
            },
            view:{
                recommend:'一直想买个小米手机,果然不失所望,大爱 啊哈哈哈哈哈哈哈 I very like',
                author:'17337032832的评价',
            }
        },
       {
            url:'https://www.baidu.com',
            img:'image/p2.jpg',
            name:'小米MIX2 全陶瓷尊享版',
            desc:'全面屏2.0 Unibody全陶瓷',
            price:'3899',
            del:'4699',
            flag:{
                name:'off-flag',
                content:'减200元',
            },
            view:{
                recommend:'我要是不催货还不给我发货,我等了一周了就为来了看NB',
                author:'17337032832的评价',
            }
        },
        {
            url:'https://www.baidu.com',
            img:'image/p1.jpg',
            name:'小米6 4GB+64GB 黑色',
            desc:'变焦双摄 4轴防抖 骁龙835处理器',
            price:'2299',
            del:'2599',
            flag:{
                name:'off-flag',
                content:'减100',
            },
            view:{
                recommend:'一直想买个小米手机,果然不失所望,大爱 啊哈哈哈哈哈哈哈 I very like',
                author:'17337032832的评价',
            }
        },
        {
            top:{
                url:'https://www.baidu.com',
                img:'image/ca.png',
                name:'小白摄像机',
                price:'3899',
            },
            bottom:{
                url:'https://www.baidu.com',
                txt:'浏览更多',
                tag:'热门',
                icon:'&#xe615;',
            }
        }
    ],
    [],
    [],

];