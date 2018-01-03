
var express = require('express');
var app = express();

var calendarData = {
    '2018-1-3': {
        "chineseDate": '冬月十七',
        "title": '本片导演 梅尔·吉布森 出生',
        "time": '1956年1月3日',
        "comment": '如果我不坚持我的信仰，我不知道该如何活下去。',
        "from": '',
        "movie": '血战钢锯岭',
        "average": '8.7',
        "stars": 4.5
    },
    '2018-1-4': {
        "chineseDate": '冬月十八',
        "title": '《交响情人梦之欧洲特别篇》上映（日本）',
        "time": '2008年1月4日',
        "comment": '我们总幻想着彼此的未来，却也总惦记着对方的过去。',
        "from": '',
        "movie": '交响情人梦之欧洲特别篇',
        "average": '8.9',
        "stars": 4.5
    },
    '2018-1-5': {
        "chineseDate": '冬月十九',
        "title": '动画大师 宫崎骏 出生',
        "time": '1941年1月5日',
        "comment": '细致的观察力与对生命的敬畏感，正是宫崎骏与其他创作者的云泥之别。',
        "from": 'Sherlock',
        "movie": '不了神话 宫崎骏',
        "average": '9.1',
        "stars": 4.5
    },
    '2018-1-6': {
        "chineseDate": '冬月二十',
        "title": '《马戏团》上映（美国）',
        "time": '1928年1月6日',
        "comment": '就让我为你做最后一出戏，假装不爱你。',
        "from": '撒野',
        "movie": '马戏团',
        "average": '9.1',
        "stars": 4.5
    },
    '2018-1-7': {
        "chineseDate": '冬月廿一',
        "title": 'TVB创始人 邵逸夫 逝世',
        "time": '2014年1月7日',
        "comment": '-她有什么好，我哪里比不上她？你老是想着她忘不了她？-你样样都好，样样都比她强，你只有一个缺点，你不是她...',
        "from": '',
        "movie": '天龙八部',
        "average": '8.7',
        "stars": 4.5
    },
    '2018-1-8': {
        "chineseDate": '冬月廿二',
        "title": '“猫王”埃尔维斯·普雷斯利 出生',
        "time": '1935年1月8日',
        "comment": '生活就像一盒巧克力，你永远不知道下一块会是什么味道。',
        "from": '',
        "movie": '阿甘正传',
        "average": '9.4',
        "stars": 4.5
    },
    '2018-1-9': {
        "chineseDate": '冬月廿三',
        "title": '《无耻之徒（美版）》（第一季）首播（美国）',
        "time": '2011年1月9日',
        "comment": '男人永远都是错的。女人的存在就是要为你们这些混蛋着想。',
        "from": '',
        "movie": '无耻之徒（美版）',
        "average": '9.1',
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