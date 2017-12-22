
var express = require('express');
var app = express();

var calendarData = {
    '2017-12-22': {
        "chineseDate": '东月初五',
        "title": '《毕业生》上映50周年',
        "time": '（1967.12.22 - 2017.12.22）',
        "comment": '霍夫曼给予这部电影一种可爱而笨拙的质感。故事表面上看起来无聊和迷茫，实际上暗流涌动，满怀讽刺却也不失希望，致已然逝去的青春期',
        "from": '徐若风',
        "movie": '毕业生',
        "average": '7.9',
        "stars": 4
    },
    '2017-12-23': {
        "chineseDate": '东月初六',
        "title": 'AK47之父拉什尼科夫上将逝世',
        "time": '2013年12月23日',
        "comment": '卖车的会告诉你开车有危险？卖香烟的会告诉你吸烟会死？每年他们的商品比我的害死更多人，我卖的枪至少还带保险栓。',
        "from": '',
        "movie": '战争之王',
        "average": '8.5',
        "stars": 4.5
    },
    '2017-12-24': {
        "chineseDate": '东月初七',
        "title": '平安夜',
        "time": '每年12月24日',
        "comment": '每个人来到这个世界上都或多或少的改变了这个世界。坚持做一个好人，尽管可能活的很苦，但这个世界上必将少了一个流氓。随波逐流，这个世界就因为你更恶心了一点。既然这不可避免，我还是选择做个好人。',
        "from": '文森特',
        "movie": '生活多美好',
        "average": '9.2',
        "stars": 5
    },
    '2017-12-25': {
        "chineseDate": '东月初八',
        "title": '圣诞节',
        "time": '每年12月25日',
        "comment": '最好是找一个爱着你就因为你是朱诺的人。不管你是坏脾气，好脾气，丑的，美的，或者其他什么鬼样子，总之对的那个人会觉得，你放的屁也是香的。',
        "from": '',
        "movie": '朱诺',
        "average": '7.9',
        "stars": 4
    },
    '2017-12-26': {
        "chineseDate": '东月初九',
        "title": '演员 杰瑞德·莱托',
        "time": '（1971.12.26 - ）',
        "comment": '生死之间，太多选择，我们都要经历，只是路只有一条，没有回头，那就是“衰老”。这个沉重却不可回避的存在。这部被基耶和考夫曼附体的电影必将成为经典。',
        "from": '维水泱泱',
        "movie": '无姓之人',
        "average": '8.2',
        "stars": 4
    },
    '2017-12-27': {
        "chineseDate": '东月初十',
        "title": '中国首支极地探险队在南极登陆',
        "time": '1984年12月27日',
        "comment": '如果你感到生命变得狭窄，就是看这部片的时机。南极科考站中的人，他们为何而来，他们在南极的生活状态，日常工作切面，他们所感兴趣的问题，以及南极这个地理存在本身。导演有广阔的头脑与心灵，才能拍出这样的作品。',
        "from": 'Saloptus',
        "movie": '在世界尽头相遇',
        "average": '8.8',
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