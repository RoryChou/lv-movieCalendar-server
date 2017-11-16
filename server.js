
var express = require('express');
var app = express();

var calendarData = {
        '2017-11-15': {
            "chineseDate": '九月廿七',
            "title": '试图刺杀希特勒的克劳斯·冯·施道芬堡',
            "time": '（1907.11.15-1944.7.20）',
            "comment": '现在我知道还可以做些什么来效忠德国，如果只顾自己，我就是叛国者',
            "from": '',
            "movie": '行动目标希特勒',
            "average": '7.0',
            "stars": 3.5
        }
    }


app.get('/', function(req, res) {
    res.send(calendarData[req.query.date]);
});

var port = process.env.PORT || 80;
app.listen(port, function(){
    console.log( 'Express started on http://localhost:' + port + '; 按Ctrl-C退出。' );
});