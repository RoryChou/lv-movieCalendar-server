
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
}


app.get('/', function(req, res) {
    res.send(calendarData[req.query.date]);
});

var port = process.env.PORT || 5000;
app.listen(port, function(){
    console.log( 'Express started on http://localhost:' + port + '; 按Ctrl-C退出。' );
});