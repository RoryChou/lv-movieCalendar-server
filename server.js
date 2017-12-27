
var express = require('express');
var app = express();

var calendarData = {
    '2017-12-27': {
        "chineseDate": '冬月初十',
        "title": '中国首支极地探险队在南极登陆',
        "time": '1984年12月27日',
        "comment": '如果你感到生命变得狭窄，就是看这部片的时机。南极科考站中的人，他们为何而来，他们在南极的生活状态，日常工作切面，他们所感兴趣的问题，以及南极这个地理存在本身。导演有广阔的头脑与心灵，才能拍出这样的作品。',
        "from": 'Saloptus',
        "movie": '在世界尽头相遇',
        "average": '8.8',
        "stars": 4.5
    },
    '2017-12-28': {
        "chineseDate": '冬月十一',
        "title": '世界第一部电影诞生',
        "time": '1895年12月28日',
        "comment": '1895年12月28日，梦的开始。',
        "from": '何晓沁',
        "movie": '火车进站',
        "average": '8.9',
        "stars": 4.5
    },
    '2017-12-29': {
        "chineseDate": '冬月十二',
        "title": '导演 安迪·沃卓斯基',
        "time": '（1967.12.29 - ）',
        "comment": '换做你，你会选择蓝色药丸还是红色药丸？',
        "from": '',
        "movie": '黑客帝国',
        "average": '8.8',
        "stars": 4.5
    }
    ,
    '2017-12-30': {
        "chineseDate": '冬月十三',
        "title": '演员 梅艳芳',
        "time": '（1963.10.10 - 2003.12.30）',
        "comment": '女人，总归是要亲眼所见，才会相信到头来这一切不过都如此。',
        "from": '林||我们谈什么都像谈死！',
        "movie": '胭脂扣',
        "average": '8.2',
        "stars": 4
    }
    ,
    '2017-12-31': {
        "chineseDate": '冬月十四',
        "title": '2017年最后一天',
        "time": '明天见',
        "comment": '麦克·李的“人间四季”，透过悲伤的春天、带刺的夏天、浪漫的秋天及死寂的冬天，看到生活中、花园里，外表光鲜但内里开花/枯萎落败两种截然不同的景致。',
        "from": '大奇特（Grinch）',
        "movie": '又一年',
        "average": '7.9',
        "stars": 4
    }
}


app.get('/', function(req, res) {
    res.send(calendarData[req.query.date]);
});

var port = process.env.PORT || 5000;
app.listen(port, function(){
    console.log( 'Express started on http://localhost:' + port + '; 按Ctrl-C退出。' );
});