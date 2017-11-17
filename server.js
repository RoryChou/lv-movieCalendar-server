
var express = require('express');
var app = express();

var calendarData = {
        '2017-11-17': {
            "chineseDate": '九月廿九',
            "title": '演员 苏菲·玛索',
            "time": '（1966.11.17- ）',
            "comment": '我一直在追你去巴黎的那趟班车，发了神经一样，但是车停下来的时候，我却没有上前，因为我察觉到，五年后我再也不会去追。',
            "from": '大头绿豆',
            "movie": '芳芳',
            "average": '8.1',
            "stars": 4
        },'2017-11-18': {
            "chineseDate": '十月初一',
            "title": '世上第一位“超级名模”吉娅·卡兰芝',
            "time": '（1960.1.29-1986.11.18）',
            "comment": '她喜欢的人势必是温婉宽容柔韧母亲般的女人，而真心喜欢她的人都有一颗温柔宽广的心',
            "from": '',
            "movie": '吉娅',
            "average": '7.9',
            "stars": 4
        },'2017-11-19': {
            "chineseDate": '十月初二',
            "title": '伊朗宣布允许妇女离婚',
            "time": '1995年11月19日',
            "comment": '宗教、阶级、性别、年龄细密交织，情绪之克制，现实之冷峻，丝丝入扣又无言以对，又怎能指望结尾的小姑娘给出答案呢？这是伊朗的故事，也是人类的绝境。',
            "from": '57',
            "movie": '一次别离',
            "average": '8.7',
            "stars": 4.5
        },'2017-11-20': {
            "chineseDate": '十月初三',
            "title": '十六国国际空间站升空',
            "time": '1998年11月20日',
            "comment": '苍茫的宇宙、无边的恐惧最终抵不过最简单原始的情感和信念：棕眼睛的我们，每天在地心引力的制约下日夜活着的我们，何其有幸。',
            "from": 'LORENZO',
            "movie": '地心引力',
            "average": '7.8',
            "stars": 4
        },'2017-11-21': {
            "chineseDate": '十月初四',
            "title": '作家 钱钟书',
            "time": '（1910.11.21-1998.12.19）',
            "comment": '天下就没有偶然，那不过是化了妆的、戴了面具的必然。',
            "from": '',
            "movie": '围城',
            "average": '9.1',
            "stars": 4.5
        },'2017-11-22': {
            "chineseDate": '十月初五',
            "title": '演员 斯嘉丽·约翰逊',
            "time": '（1984.11.22- ）',
            "comment": '并不是文明带来了孤独，只是在繁华拥簇下，它的形状一下变得鲜明可触。',
            "from": '同志亦凡人中文站',
            "movie": '迷失东京',
            "average": '7.7',
            "stars": 4
        },'2017-11-23': {
            "chineseDate": '十月初六',
            "title": '世界上最长的科幻电视系列剧《神秘博士》首播',
            "time": '1963年11月23日',
            "comment": '我们每度过一天，都有千千万万个未曾活过的日子与我们擦肩而过。',
            "from": '',
            "movie": '神秘博士 第一季',
            "average": '8.8',
            "stars": 4.5
        },'2017-11-24': {
            "chineseDate": '十月初七',
            "title": '“死亡医生”被控一级谋杀',
            "time": '1998年11月24日',
            "comment": '去除了生命的自由诚然不是自由，没有自由的生命也不是生命。生命是权利而不是义务。',
            "from": '深海的心',
            "movie": '深海长眠',
            "average": '8.3',
            "stars": 4.5
        },'2017-11-25': {
            "chineseDate": '十月初八',
            "title": '国际消除对妇女的暴力日',
            "time": '每年11月25日',
            "comment": '回头后的生活令人畏惧，她们渴望自由，她们享受着现在那种无拘无束的生活。于是，她们选择飞向死亡，在死亡里飞翔。',
            "from": '有意识的贱民',
            "movie": '末路狂花',
            "average": '8.7',
            "stars": 4.5
        },'2017-11-26': {
            "chineseDate": '十月初九',
            "title": '著名电影《卡萨布兰卡》首映',
            "time": '1942年11月26日',
            "comment": '世界上有那么多的城镇，城镇中有那么多的酒馆，她却偏偏走进了我这家。',
            "from": '',
            "movie": '卡萨布兰卡',
            "average": '8.6',
            "stars": 4.5
        },'2017-11-27': {
            "chineseDate": '十月初十',
            "title": '武术家 李小龙',
            "time": '（1940.11.27 - 1973.7.20）',
            "comment": '“以无法为有法，以无限为有限”——这是李小龙倾空杯子再行注满的一次践行。',
            "from": '水野津波',
            "movie": '猛龙过江',
            "average": '8.2',
            "stars": 4
        },'2017-11-28': {
            "chineseDate": '十月十一',
            "title": '导演 陈可辛',
            "time": '（1962.11.28 - ）',
            "comment": '忘记一个人到底需要多久，如果可以，我宁可选择不遇见你，告别过去，让我们重新开始。',
            "from": '',
            "movie": '如果·爱',
            "average": '7.6',
            "stars": 4
        },'2017-11-29': {
            "chineseDate": '十月十二',
            "title": '导演 乔尔·科恩',
            "time": '（1954.11.29 - ）',
            "comment": '人生是毫无缘由的走向漩涡，疲于奔命却摆脱不得。如果任何事情都必须有个前因后果，我们又怎么可能进化成现在的样子。',
            "from": '嘟嘟熊之父',
            "movie": '老无所依',
            "average": '8.0',
            "stars": 4
        },'2017-11-30': {
            "chineseDate": '十月十三',
            "title": '演员 保罗·沃克',
            "time": '（1973.9.12 - 2013.11.30）',
            "comment": 'For Paul,its never goodbye...',
            "from": '',
            "movie": '速度与激情7',
            "average": '8.3',
            "stars": 4.5
        },'2017-12-1': {
            "chineseDate": '十月十四',
            "title": '导演 伍迪·艾伦',
            "time": '1935.12.1 - ）',
            "comment": '我觉得生活有两种：痛苦的生活与悲惨的生活。让我感到惊异的是，所有的其他人都过着悲惨的生活。所以，你应该对悲惨的生活感恩，因为过着悲惨的生活，其实试衣间十足的幸事。',
            "from": '',
            "movie": '安妮·霍尔',
            "average": '8.5',
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