
var express = require('express');
var app = express();

var calendarData = {
    '2018-1-9': {
        "chineseDate": '冬月廿三',
        "title": '《无耻之徒（美版）》（第一季）首播（美国）',
        "time": '2011年1月9日',
        "comment": '男人永远都是错的。女人的存在就是要为你们这些混蛋着想。',
        "from": '',
        "movie": '无耻之徒（美版）',
        "average": '9.1',
        "stars": 4.5
    },
    '2018-1-10': {
        "chineseDate": '冬月廿四',
        "title": '可可·香奈儿 逝世',
        "time": '1971年1月10日',
        "comment": '-应该在何处擦香水？-只要是你想被亲吻的地方。',
        "from": '',
        "movie": '香奈儿',
        "average": '8.0',
        "stars": 4
    },
    '2018-1-11': {
        "chineseDate": '冬月廿五',
        "title": '《追风筝的人》上映（美国）',
        "time": '2008年1月11日',
        "comment": '为你，千千万万遍。',
        "from": '',
        "movie": '追风筝的人',
        "average": '8.2',
        "stars": 4
    },
    '2018-1-12': {
        "chineseDate": '冬月廿六',
        "title": '本片主演 桥本爱 出生',
        "time": '1996年1月12日',
        "comment": '也许，人生是个“螺旋”，在同一个地方兜兜转转，每次却都有不同，或上或下或横着延展出去。所以不管是失败还是成功，都不在是原点。想到这里，觉得自己还是应该再努力一把。',
        "from": '',
        "movie": '小森林 冬春篇',
        "average": '8.9',
        "stars": 4.5
    },
    '2018-1-13': {
        "chineseDate": '冬月廿七',
        "title": '本片主演 帕特里克·德姆西 出生',
        "time": '1966年1月13日',
        "comment": '每个人都说拥有金钱不代表拥有幸福，但是却没有人真的这么认为。',
        "from": '',
        "movie": '捕蝇纸',
        "average": '7.8',
        "stars": 4
    },
    '2018-1-14': {
        "chineseDate": '冬月廿八',
        "title": '本片主演 亨弗莱·鲍嘉 逝世',
        "time": '1957年1月14日',
        "comment": '现在我真是地告诉你，任何物质上的财富，都抵不上长时间分离的痛苦。你还年轻，还有足够的时间发三四次财。',
        "from": '',
        "movie": '碧血金沙',
        "average": '8.6',
        "stars": 4.5
    },
    '2018-1-15': {
        "chineseDate": '冬月廿九',
        "title": '全美航空公司1549号航班成功迫降',
        "time": '2009年1月15日',
        "comment": '我在40年的飞行生涯中运送了数百万的乘客，最后我却因为208秒被审判...是我的一生，让我把飞机安全地降落在了哈德逊河上。',
        "from": '',
        "movie": '萨利机长',
        "average": '8.3',
        "stars": 4
    },
    '2018-1-16': {
        "chineseDate": '冬月三十',
        "title": '本片上映（法国）',
        "time": '1998年1月16日',
        "comment": '当你有一天开上属于自己的车时，我希望你能记得，我是第一个教你握方向盘的人。',
        "from": '',
        "movie": '中央车站',
        "average": '8.7',
        "stars": 4.5
    },
    '2018-1-17': {
        "chineseDate": '腊月初一',
        "title": '本片主演 山口百惠 出生',
        "time": '1959年1月17日',
        "comment": '当我拥有你，无论是在百货公司买领带，还是在厨房收拾一尾鱼，我都觉得幸福。当我失去你，即便面对鸟与花香我也兴味索然。失去了恋人是悲伤的，更让人难过的是迷失了一颗心。',
        "from": '',
        "movie": '伊豆的舞女',
        "average": '8.5',
        "stars": 4.5
    },
}


app.get('/', function(req, res) {
    res.send(calendarData[req.query.date]);
});

var port = process.env.PORT || 5000;
app.listen(port, function(){
    console.log( 'Express started on http://localhost:' + port + '; 按Ctrl-C退出。' );
});