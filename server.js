
var express = require('express');
var app = express();

var calendarData = {
        '2017-11-16': {
            "chineseDate": '九月廿八',
            "title": '音乐剧《音乐之声》首次在百老汇上演',
            "time": '1959年11月16日',
            "comment": '人生总会有喜怒哀乐悲欢离合，面对生活中的幸与不幸，我们都可以去歌唱，用音乐去面对和感受',
            "from": '囍病',
            "movie": '音乐之声',
            "average": '8.9',
            "stars": 4.5
        },
        '2017-11-17': {
            "chineseDate": '九月廿九',
            "title": '演员 苏菲·玛索',
            "time": '（1966.11.17- ）',
            "comment": '',
            "from": '',
            "movie": '行动目标希特勒',
            "average": '7.0',
            "stars": 3.5
        },'2017-11-18': {
            "chineseDate": '九月廿七',
            "title": '试图刺杀希特勒的克劳斯·冯·施道芬堡',
            "time": '（1907.11.15-1944.7.20）',
            "comment": '现在我知道还可以做些什么来效忠德国，如果只顾自己，我就是叛国者',
            "from": '',
            "movie": '行动目标希特勒',
            "average": '7.0',
            "stars": 3.5
        },'2017-11-19': {
            "chineseDate": '九月廿七',
            "title": '试图刺杀希特勒的克劳斯·冯·施道芬堡',
            "time": '（1907.11.15-1944.7.20）',
            "comment": '现在我知道还可以做些什么来效忠德国，如果只顾自己，我就是叛国者',
            "from": '',
            "movie": '行动目标希特勒',
            "average": '7.0',
            "stars": 3.5
        },'2017-11-20': {
            "chineseDate": '九月廿七',
            "title": '试图刺杀希特勒的克劳斯·冯·施道芬堡',
            "time": '（1907.11.15-1944.7.20）',
            "comment": '现在我知道还可以做些什么来效忠德国，如果只顾自己，我就是叛国者',
            "from": '',
            "movie": '行动目标希特勒',
            "average": '7.0',
            "stars": 3.5
        },'2017-11-21': {
            "chineseDate": '九月廿七',
            "title": '试图刺杀希特勒的克劳斯·冯·施道芬堡',
            "time": '（1907.11.15-1944.7.20）',
            "comment": '现在我知道还可以做些什么来效忠德国，如果只顾自己，我就是叛国者',
            "from": '',
            "movie": '行动目标希特勒',
            "average": '7.0',
            "stars": 3.5
        },'2017-11-22': {
            "chineseDate": '九月廿七',
            "title": '试图刺杀希特勒的克劳斯·冯·施道芬堡',
            "time": '（1907.11.15-1944.7.20）',
            "comment": '现在我知道还可以做些什么来效忠德国，如果只顾自己，我就是叛国者',
            "from": '',
            "movie": '行动目标希特勒',
            "average": '7.0',
            "stars": 3.5
        },'2017-11-23': {
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
    //res.send('success!');
});

var port = process.env.PORT || 5000;
app.listen(port, function(){
    console.log( 'Express started on http://localhost:' + port + '; 按Ctrl-C退出。' );
});