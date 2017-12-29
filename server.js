
var express = require('express');
var app = express();

var calendarData = {
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
    ,
    '2018-1-1': {
        "chineseDate": '冬月十五',
        "title": '元旦，新年第一天',
        "time": '每年1月1日',
        "comment": '你总是喜欢把事情拖到第二天，你不能再这么拖了，因为有一天，你会有很多事情要做，你的余生都不够用。',
        "from": '',
        "movie": '余生的第一天',
        "average": '8.5',
        "stars": 4.5
    }
    ,
    '2018-1-2': {
        "chineseDate": '冬月十六',
        "title": '多啦A梦配音演员 林保全 逝世',
        "time": '2015年1月2日',
        "comment": '我想一直在你身边，知道你不需要我的时候。',
        "from": '',
        "movie": '多啦A梦',
        "average": '9.4',
        "stars": 4.5
    }
    ,
    '2018-1-3': {
        "chineseDate": '冬月十七',
        "title": '本片导演 梅尔·吉布森 出生',
        "time": '1956年1月3日',
        "comment": '如果我不坚持我的信仰，我不知道该如何活下去。',
        "from": '',
        "movie": '血战钢锯岭',
        "average": '8.7',
        "stars": 4.5
    }
}


app.get('/', function(req, res) {
    res.send(calendarData[req.query.date]);
});

var port = process.env.PORT || 5000;
app.listen(port, function(){
    console.log( 'Express started on http://localhost:' + port + '; 按Ctrl-C退出。' );
});