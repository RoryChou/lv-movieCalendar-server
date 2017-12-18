
var express = require('express');
var app = express();

var calendarData = {
    '2017-12-18': {
        "chineseDate": '东月初一',
        "title": '导演 斯蒂芬·斯皮尔伯格',
        "time": '（1946.12.18 - ）',
        "comment": '骗子的生活是孤独的，因为你不可能对其他人说真心话。',
        "from": '',
        "movie": '猫鼠游戏',
        "average": '8.7',
        "stars": 4.5
    },
    '2017-12-19': {
        "chineseDate": '东月初二',
        "title": '“雨人”原型 金·皮克逝世',
        "time": '2009年12月19日',
        "comment": '没有刻意去煽情，没有非得讲一个撕心裂肺冠冕堂皇的故事，就是一点点儿铺出来，节奏不紧不慢，最后哗一下摊平，大家都哭了。感动吗？感动。为什么感动？鬼知道。每个人都能找到不同的感动点，这才是这个电影牛逼的地方。',
        "from": '烟波人长安',
        "movie": '雨人',
        "average": '8.6',
        "stars": 4.5
    },
    '2017-12-20': {
        "chineseDate": '东月初三',
        "title": '《美丽人生》上映20周年',
        "time": '（1997.12.20 - 2017.12.20）',
        "comment": '如果谎言可以这样美丽，我也情愿生活在谎言之中。',
        "from": '老鸡|扶立',
        "movie": '美丽人生',
        "average": '9.5',
        "stars": 5
    },
    '2017-12-21': {
        "chineseDate": '东月初四',
        "title": '玛雅预言“世界末日”',
        "time": '2012年12月21日',
        "comment": '做到这么极致的灾难片，它就属于那种我们明知道会看到什么，但当你看到的时候还是会感到震惊。',
        "from": '张小北',
        "movie": '2012',
        "average": '7.7',
        "stars": 4
    },
    '2017-12-22': {
        "chineseDate": '东月初五',
        "title": '《毕业生》上映50周年',
        "time": '（1967.12.22 - 2017.12.22）',
        "comment": '霍夫曼给予这部电影一种可爱而笨拙的质感。故事表面上看起来无聊和迷茫，实际上暗流涌动，满怀讽刺却也不失希望，致已然逝去的青春期',
        "from": '徐若风',
        "movie": '毕业生',
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