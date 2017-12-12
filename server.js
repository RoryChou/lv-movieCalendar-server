
var express = require('express');
var app = express();

var calendarData = {
    '2017-12-13': {
        "chineseDate": '十月廿六',
        "title": '南京大屠杀纪念日',
        "time": '1937年12月13日',
        "comment": '战争是什么？就是异族的文化在我们的废墟上舞蹈。',
        "from": '',
        "movie": '南京！南京！',
        "average": '7.4',
        "stars": 4.0
    },
    '2017-12-14': {
        "chineseDate": '十月廿七',
        "title": '物理学家普朗克首次公开介绍量子论',
        "time": '1900年12月14日',
        "comment": '如果你只有一分钟不到的生命，你会怎么做？我会让每秒都过得有意义，我会再吻你一次。',
        "from": '',
        "movie": '源代码',
        "average": '8.3',
        "stars": 4.5
    },
    '2017-12-15': {
        "chineseDate": '十月廿八',
        "title": '迪士尼创始人 华特·迪士尼',
        "time": '（1901.12.5 - 1966.12.15）',
        "comment": '音乐与绘画，是有共通点的，他们的美，都能带给人们愉悦地享受。胡桃夹子、斯特拉文斯基的春之旋律，巴赫的串联、魔法师的徒弟等，都是非常脍炙人口的古典名作，非常值得一看与听的古典乐盛宴。',
        "from": '易璟笙',
        "movie": '幻想曲',
        "average": '8.8',
        "stars": 4.5
    },
    '2017-12-16': {
        "chineseDate": '十月廿九',
        "title": '小说家 简·奥斯汀',
        "time": '（1775.12.16 - 1817.7.18）',
        "comment": '正如李碧华评张爱玲所说：她善写月亮，却并不圆满。',
        "from": 'littletwo',
        "movie": '成为简·奥斯汀',
        "average": '8.2',
        "stars": 4.0
    },
    '2017-12-17': {
        "chineseDate": '十月三十',
        "title": '演员 米拉·乔沃维奇',
        "time": '（1975.12.17 - ）',
        "comment": '游戏改编为电影的经典之作，看票房与续集生命力就可见一斑了；作为系列首部，场景局限在密室之内，也算中规中矩，符合游戏设定。',
        "from": 'Tristan',
        "movie": '生化危机',
        "average": '7.8',
        "stars": 4.0
    },
    '2017-12-18': {
        "chineseDate": '东月初一',
        "title": '导演 斯蒂芬·斯皮尔伯格',
        "time": '（1946.12.18 - ）',
        "comment": '骗子的生活是孤独的，因为你不可能对其他人说真心话。',
        "from": '',
        "movie": '猫鼠游戏',
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