var express = require('express');
var app = express();

var calendarData = {
  '2018-1-17': {
    "chineseDate": '腊月初一',
    "title": '本片主演 山口百惠 出生',
    "time": '1959年1月17日',
    "comment": '当我拥有你，无论是在百货公司买领带，还是在厨房收拾一尾鱼，我都觉得幸福。当我失去你，即便面对鸟与花香我也兴味索然。失去了恋人是悲伤的，更让人难过的是迷失了一颗心。',
    "from": '',
    "movie": '伊豆的舞女',
    "average": '8.5',
    "stars": 4.5
  },
  '2018-1-18': {
    "chineseDate": '腊月初二',
    "title": '本片导演/主演 北野武 出生',
    "time": '1947年1月18日',
    "comment": '男主角北野武加起来不到20句台词，女主角没有台词。久石让配乐，有好几个地方故意用了静音，效果反而更好。北野武式的温柔和浪漫，还有一点点惯有的小玩笑。有些血腥，姑娘们慎重。',
    "from": '豆友：大头绿豆',
    "movie": '花火',
    "average": '8.5',
    "stars": 4.5
  },
  '2018-1-19': {
    "chineseDate": '腊月初三',
    "title": '本片上映（日本）',
    "time": '2013年1月19日',
    "comment": '沉默的寂寞，最刺痛人心。在以为是“家”的地方无家可归，最是心酸。',
    "from": '豆友：爱永',
    "movie": '伊豆的舞女',
    "average": '8.7',
    "stars": 4.5
  },
  '2018-1-20': {
    "chineseDate": '腊月初四',
    "title": '本片主演 奥黛丽·赫本 逝世',
    "time": '1993年1月20日',
    "comment": '在上校眼中我是一个淑女，因为他待我像淑女。在教授眼中我是一个卖花女，因为他待我像卖花女。',
    "from": '',
    "movie": '窈窕淑女',
    "average": '8.0',
    "stars": 4.0
  },
  '2018-1-21': {
    "chineseDate": '腊月初五',
    "title": '本片上映（泰国）',
    "time": '2003年1月21日',
    "comment": '如果看腻了小鲜肉玄幻剧里的花把势，不如来部泰拳。保证你血脉喷张，肾上腺素狂飙到爽。',
    "from": '豆友：毛裤',
    "movie": '拳霸',
    "average": '7.8',
    "stars": 4
  },
  '2018-1-22': {
    "chineseDate": '腊月初六',
    "title": '本片主演 希斯·莱杰 逝世',
    "time": '2008年1月22日',
    "comment": '这世上最哀伤的事情，莫过于你花痴了一个已经不存在的明星。',
    "from": '',
    "movie": '我恨你的十件事',
    "average": '7.7',
    "stars": 4
  }
}


app.get('/', function (req, res) {
  res.send(calendarData[req.query.date]);
});

var port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log('Express started on http://localhost:' + port + '; 按Ctrl-C退出。');
});