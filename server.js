
var express = require('express');
var app = express();

var calendarData = {
    '2017-12-11': {
        "chineseDate": '十月廿四',
        "title": '联合国儿童基金会（UNICEF）成立',
        "time": '1946年2月11日',
        "comment": '我们中间一直都有那样的人，想要改变世界运行的规律，因为世界在他们眼中是另外一个样子。他们想法很独特，并不是所有人都能理解他们，他们被孤立了，但是他们中间出现了最后的赢家，于是世界被感动了。',
        "from": '',
        "movie": '地球上的星星',
        "average": '8.8',
        "stars": 4.5
    },
    '2017-12-12': {
        "chineseDate": '十月廿五',
        "title": '导演 小津安二郎',
        "time": '（1903.12.12 - 1963.12.12）',
        "comment": '这个世界这么大，一不小心走散了，可能一辈子都见不到了。',
        "from": '',
        "movie": '东京物语',
        "average": '9.2',
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