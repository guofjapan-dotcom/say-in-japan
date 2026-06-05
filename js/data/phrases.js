var JPSP_PHRASES = 

[
  {
    "id": "tr_001",
    "scene": "transport",
    "subscene": "enter",
    "cn": "车站在哪里？",
    "jp": "すみません、駅はどこですか？",
    "icon": "station",
    "priority": 1,
    "tags": [
      "问路",
      "高频"
    ],
    "intent": "location_inquiry",
    "phonetic": "斯米马塞恩诶 ki 哈多扣得斯卡"
  },
  {
    "id": "tr_002",
    "scene": "transport",
    "subscene": "enter",
    "cn": "最近的车站在哪？",
    "jp": "ここから一番近い駅はどこですか？",
    "icon": "station",
    "priority": 1,
    "tags": [
      "问路",
      "高频"
    ],
    "intent": "location_inquiry",
    "phonetic": "扣扣卡拉一七巴恩七卡一诶 ki 哈多扣得斯卡"
  },
  {
    "id": "tr_003",
    "scene": "transport",
    "subscene": "enter",
    "cn": "这个方向对吗？",
    "jp": "この方向で合ってますか？",
    "icon": "direction",
    "priority": 1,
    "tags": [
      "问路"
    ],
    "intent": "direction_request",
    "phonetic": "扣诺霍乌扣乌得阿忒马斯卡"
  },
  {
    "id": "tr_004",
    "scene": "transport",
    "subscene": "enter",
    "cn": "走路要多久？",
    "jp": "歩いてどのくらいですか？",
    "icon": "walk",
    "priority": 1,
    "tags": [
      "问路"
    ],
    "intent": "direction_request",
    "phonetic": "阿鲁一忒多诺库拉一得斯卡"
  },
  {
    "id": "tr_005",
    "scene": "transport",
    "subscene": "enter",
    "cn": "这条路能到吗？",
    "jp": "この道で行けますか？",
    "icon": "direction",
    "priority": 1,
    "tags": [
      "问路"
    ],
    "intent": "direction_request",
    "phonetic": "扣诺米七得一开马斯卡"
  },
  {
    "id": "tr_006",
    "scene": "transport",
    "subscene": "enter",
    "cn": "○○在哪里？",
    "jp": "〇〇はどこですか？",
    "icon": "location",
    "priority": 1,
    "tags": [
      "问路",
      "万能"
    ],
    "intent": "location_inquiry",
    "phonetic": "〇〇哈多扣得斯卡"
  },
  {
    "id": "tr_007",
    "scene": "transport",
    "subscene": "enter",
    "cn": "地图上可以指一下吗？",
    "jp": "地図で指してもらえますか？",
    "icon": "map",
    "priority": 2,
    "tags": [
      "问路"
    ],
    "intent": "direction_request",
    "phonetic": "七资得撒西忒莫拉诶马斯卡"
  },
  {
    "id": "tr_008",
    "scene": "transport",
    "subscene": "enter",
    "cn": "这里叫什么？",
    "jp": "ここって何て言うんですか？",
    "icon": "location",
    "priority": 2,
    "tags": [
      "问路"
    ],
    "intent": "direction_request",
    "phonetic": "扣扣忒那尼忒一乌恩得斯卡"
  },
  {
    "id": "tr_009",
    "scene": "transport",
    "subscene": "enter",
    "cn": "这附近有便利店吗？",
    "jp": "この辺にコンビニありますか？",
    "icon": "shop",
    "priority": 2,
    "tags": [
      "问路"
    ],
    "intent": "direction_request",
    "phonetic": "扣诺阿塔里尼扣恩 bi 尼阿里马斯卡"
  },
  {
    "id": "tr_010",
    "scene": "transport",
    "subscene": "enter",
    "cn": "厕所在哪里？",
    "jp": "すみません、トイレどこですか？",
    "icon": "toilet",
    "priority": 1,
    "tags": [
      "问路",
      "高频"
    ],
    "intent": "direction_request",
    "phonetic": "斯米马塞恩托一咧多扣得斯卡"
  },
  {
    "id": "tr_011",
    "scene": "transport",
    "subscene": "enter",
    "cn": "出口在哪边？",
    "jp": "出口はどっちですか？",
    "icon": "exit",
    "priority": 1,
    "tags": [
      "问路"
    ],
    "intent": "direction_request",
    "phonetic": "得古七哈多七得斯卡"
  },
  {
    "id": "tr_012",
    "scene": "transport",
    "subscene": "enter",
    "cn": "检票口在哪？",
    "jp": "改札口はどこですか？",
    "icon": "gate",
    "priority": 1,
    "tags": [
      "问路"
    ],
    "intent": "direction_request",
    "phonetic": "卡一撒次古七哈多扣得斯卡"
  },
  {
    "id": "tr_013",
    "scene": "transport",
    "subscene": "enter",
    "cn": "哪边是正确的出口？",
    "jp": "どの出口が正しいですか？",
    "icon": "exit",
    "priority": 2,
    "tags": [
      "问路"
    ],
    "intent": "direction_request",
    "phonetic": "多诺得古七嘎塔达西一得斯卡"
  },
  {
    "id": "tr_014",
    "scene": "transport",
    "subscene": "enter",
    "cn": "○号出口怎么走？",
    "jp": "〇番出口はどう行けばいいですか？",
    "icon": "exit",
    "priority": 1,
    "tags": [
      "问路"
    ],
    "intent": "direction_request",
    "phonetic": "〇巴恩得古七哈多乌一开巴一一得斯卡"
  },
  {
    "id": "tr_015",
    "scene": "transport",
    "subscene": "enter",
    "cn": "对面怎么走？",
    "jp": "向こう側へはどうやって行きますか？",
    "icon": "direction",
    "priority": 2,
    "tags": [
      "问路"
    ],
    "intent": "direction_request",
    "phonetic": "木扣乌嘎哇嘿哈多乌亚忒一 ki 马斯卡"
  },
  {
    "id": "tr_016",
    "scene": "transport",
    "subscene": "enter",
    "cn": "有地图吗？",
    "jp": "地図ありますか？",
    "icon": "map",
    "priority": 2,
    "tags": [
      "问路"
    ],
    "intent": "direction_request",
    "phonetic": "七资阿里马斯卡"
  },
  {
    "id": "tr_017",
    "scene": "transport",
    "subscene": "enter",
    "cn": "大概还要走多久？",
    "jp": "だいたいあとどのくらいですか？",
    "icon": "walk",
    "priority": 2,
    "tags": [
      "问路"
    ],
    "intent": "direction_request",
    "phonetic": "达一塔一阿托多诺库拉一得斯卡"
  },
  {
    "id": "tr_018",
    "scene": "transport",
    "subscene": "enter",
    "cn": "远吗？",
    "jp": "遠いですか？",
    "icon": "walk",
    "priority": 2,
    "tags": [
      "问路"
    ],
    "intent": "direction_request",
    "phonetic": "托哦一得斯卡"
  },
  {
    "id": "tr_019",
    "scene": "transport",
    "subscene": "enter",
    "cn": "这条路对吗？",
    "jp": "この道であってますか？",
    "icon": "direction",
    "priority": 1,
    "tags": [
      "问路"
    ],
    "intent": "direction_request",
    "phonetic": "扣诺米七得阿忒马斯卡"
  },
  {
    "id": "tr_020",
    "scene": "transport",
    "subscene": "enter",
    "cn": "能帮我看看地图吗？",
    "jp": "地図を見てもらえますか？",
    "icon": "map",
    "priority": 2,
    "tags": [
      "问路"
    ],
    "intent": "direction_request",
    "phonetic": "七资哦米忒莫拉诶马斯卡"
  },
  {
    "id": "tr_021",
    "scene": "transport",
    "subscene": "confirm",
    "cn": "这个站台去○○吗？",
    "jp": "このホームで〇〇行きですか？",
    "icon": "platform",
    "priority": 1,
    "tags": [
      "车站",
      "高频"
    ],
    "intent": "location_inquiry",
    "phonetic": "扣诺霍～木得〇〇一 ki 得斯卡"
  },
  {
    "id": "tr_022",
    "scene": "transport",
    "subscene": "confirm",
    "cn": "这是哪个站？",
    "jp": "ここは何駅ですか？",
    "icon": "station",
    "priority": 1,
    "tags": [
      "车站"
    ],
    "intent": "location_inquiry",
    "phonetic": "扣扣哈那尼诶 ki 得斯卡"
  },
  {
    "id": "tr_023",
    "scene": "transport",
    "subscene": "confirm",
    "cn": "下一站是哪里？",
    "jp": "次の駅はどこですか？",
    "icon": "station",
    "priority": 1,
    "tags": [
      "车站",
      "高频"
    ],
    "intent": "location_inquiry",
    "phonetic": "次 gi 诺诶 ki 哈多扣得斯卡"
  },
  {
    "id": "tr_024",
    "scene": "transport",
    "subscene": "confirm",
    "cn": "我该在哪里下车？",
    "jp": "どこで降りたらいいですか？",
    "icon": "exit",
    "priority": 1,
    "tags": [
      "车站"
    ],
    "intent": "location_inquiry",
    "phonetic": "多扣得哦里塔拉一一得斯卡"
  },
  {
    "id": "tr_025",
    "scene": "transport",
    "subscene": "confirm",
    "cn": "是哪个方向的站台？",
    "jp": "どっち方面のホームですか？",
    "icon": "platform",
    "priority": 1,
    "tags": [
      "车站"
    ],
    "intent": "location_inquiry",
    "phonetic": "多七霍乌妹恩诺霍～木得斯卡"
  },
  {
    "id": "tr_026",
    "scene": "transport",
    "subscene": "confirm",
    "cn": "到站了请告诉我。",
    "jp": "着いたら教えてもらえますか？",
    "icon": "bell",
    "priority": 1,
    "tags": [
      "车站"
    ],
    "intent": "location_inquiry",
    "phonetic": "次一塔拉哦西诶忒莫拉诶马斯卡"
  },
  {
    "id": "tr_027",
    "scene": "transport",
    "subscene": "confirm",
    "cn": "这趟车快车还是慢车？",
    "jp": "これ急行ですか？各停ですか？",
    "icon": "train",
    "priority": 2,
    "tags": [
      "车站"
    ],
    "intent": "location_inquiry",
    "phonetic": "扣咧 kiu 乌扣乌得斯卡卡库托马得斯卡"
  },
  {
    "id": "tr_028",
    "scene": "transport",
    "subscene": "confirm",
    "cn": "快车在这一站停吗？",
    "jp": "急行はこの駅に止まりますか？",
    "icon": "train",
    "priority": 2,
    "tags": [
      "车站"
    ],
    "intent": "location_inquiry",
    "phonetic": "kiu 乌扣乌哈扣诺诶 ki 尼托马里马斯卡"
  },
  {
    "id": "tr_029",
    "scene": "transport",
    "subscene": "confirm",
    "cn": "站台对不对？",
    "jp": "このホームで合ってますか？",
    "icon": "platform",
    "priority": 1,
    "tags": [
      "车站"
    ],
    "intent": "location_inquiry",
    "phonetic": "扣诺霍～木得阿忒马斯卡"
  },
  {
    "id": "tr_030",
    "scene": "transport",
    "subscene": "confirm",
    "cn": "我需要去几号站台？",
    "jp": "何番ホームに行けばいいですか？",
    "icon": "platform",
    "priority": 1,
    "tags": [
      "车站"
    ],
    "intent": "location_inquiry",
    "phonetic": "那恩巴恩霍～木尼一开巴一一得斯卡"
  },
  {
    "id": "tr_031",
    "scene": "transport",
    "subscene": "end",
    "cn": "换乘怎么走？",
    "jp": "乗り換えはどう行けばいいですか？",
    "icon": "transfer",
    "priority": 1,
    "tags": [
      "车站",
      "高频"
    ],
    "intent": "location_inquiry",
    "phonetic": "诺里卡诶哈多乌一开巴一一得斯卡"
  },
  {
    "id": "tr_032",
    "scene": "transport",
    "subscene": "end",
    "cn": "需要换乘吗？",
    "jp": "乗り換えは必要ですか？",
    "icon": "transfer",
    "priority": 1,
    "tags": [
      "车站"
    ],
    "intent": "location_inquiry",
    "phonetic": "诺里卡诶哈 hi 次哟乌得斯卡"
  },
  {
    "id": "tr_033",
    "scene": "transport",
    "subscene": "confirm",
    "cn": "这个站可以换乘吗？",
    "jp": "この駅で乗り換えできますか？",
    "icon": "transfer",
    "priority": 1,
    "tags": [
      "车站"
    ],
    "intent": "location_inquiry",
    "phonetic": "扣诺诶 ki 得诺里卡诶得 ki 马斯卡"
  },
  {
    "id": "tr_034",
    "scene": "transport",
    "subscene": "confirm",
    "cn": "换乘要出站吗？",
    "jp": "乗り換えは改札を出ますか？",
    "icon": "transfer",
    "priority": 2,
    "tags": [
      "车站"
    ],
    "intent": "location_inquiry",
    "phonetic": "诺里卡诶哈卡一撒次哦得马斯卡"
  },
  {
    "id": "tr_035",
    "scene": "transport",
    "subscene": "confirm",
    "cn": "有通道可以直接过去吗？",
    "jp": "連絡通路ありますか？",
    "icon": "transfer",
    "priority": 2,
    "tags": [
      "车站"
    ],
    "intent": "location_inquiry",
    "phonetic": "咧恩拉库次乌罗阿里马斯卡"
  },
  {
    "id": "tr_036",
    "scene": "transport",
    "subscene": "end",
    "cn": "南口怎么走？",
    "jp": "南口はどっちですか？",
    "icon": "exit",
    "priority": 2,
    "tags": [
      "车站"
    ],
    "intent": "location_inquiry",
    "phonetic": "米那米古七哈多七得斯卡"
  },
  {
    "id": "tr_037",
    "scene": "transport",
    "subscene": "problem",
    "cn": "我好像走错了。",
    "jp": "なんか間違えたみたいです。",
    "icon": "alert",
    "priority": 1,
    "tags": [
      "车站"
    ],
    "intent": "location_inquiry",
    "phonetic": "那恩卡马七嘎诶塔米塔一得斯"
  },
  {
    "id": "tr_038",
    "scene": "transport",
    "subscene": "end",
    "cn": "售票机在哪里？",
    "jp": "券売機はどこですか？",
    "icon": "ticket",
    "priority": 1,
    "tags": [
      "车站"
    ],
    "intent": "location_inquiry",
    "phonetic": "开恩巴一 ki 哈多扣得斯卡"
  },
  {
    "id": "tr_039",
    "scene": "transport",
    "subscene": "confirm",
    "cn": "哪边是JR？",
    "jp": "JRはどっちですか？",
    "icon": "train",
    "priority": 2,
    "tags": [
      "车站"
    ],
    "intent": "location_inquiry",
    "phonetic": "JR 哈多七得斯卡"
  },
  {
    "id": "tr_040",
    "scene": "transport",
    "subscene": "end",
    "cn": "有wifi吗？",
    "jp": "WiFiありますか？",
    "icon": "wifi",
    "priority": 2,
    "tags": [
      "车站"
    ],
    "intent": "location_inquiry",
    "phonetic": "WiFi 阿里马斯卡"
  },
  {
    "id": "tr_041",
    "scene": "transport",
    "subscene": "core",
    "cn": "这趟车去○○吗？",
    "jp": "これ、〇〇行きますか？",
    "icon": "train",
    "priority": 1,
    "tags": [
      "乘车",
      "高频"
    ],
    "intent": "direction_request",
    "phonetic": "扣咧〇〇一 ki 马斯卡"
  },
  {
    "id": "tr_042",
    "scene": "transport",
    "subscene": "core",
    "cn": "这趟车是去○○的吗？",
    "jp": "この電車、〇〇方面ですか？",
    "icon": "train",
    "priority": 1,
    "tags": [
      "乘车"
    ],
    "intent": "direction_request",
    "phonetic": "扣诺得恩下〇〇霍乌妹恩得斯卡"
  },
  {
    "id": "tr_043",
    "scene": "transport",
    "subscene": "core",
    "cn": "终点站是哪里？",
    "jp": "終点はどこですか？",
    "icon": "train",
    "priority": 2,
    "tags": [
      "乘车"
    ],
    "intent": "direction_request",
    "phonetic": "修乌忒恩哈多扣得斯卡"
  },
  {
    "id": "tr_044",
    "scene": "transport",
    "subscene": "core",
    "cn": "这是反方向吗？",
    "jp": "これ逆方向ですか？",
    "icon": "direction",
    "priority": 1,
    "tags": [
      "乘车"
    ],
    "intent": "direction_request",
    "phonetic": "扣咧 gia 库霍乌扣乌得斯卡"
  },
  {
    "id": "tr_045",
    "scene": "transport",
    "subscene": "core",
    "cn": "我坐对了吗？",
    "jp": "合ってますか？",
    "icon": "train",
    "priority": 1,
    "tags": [
      "乘车"
    ],
    "intent": "direction_request",
    "phonetic": "阿忒马斯卡"
  },
  {
    "id": "tr_046",
    "scene": "transport",
    "subscene": "core",
    "cn": "还有多远？",
    "jp": "あとどれくらいですか？",
    "icon": "clock",
    "priority": 2,
    "tags": [
      "乘车"
    ],
    "intent": "direction_request",
    "phonetic": "阿托多咧库拉一得斯卡"
  },
  {
    "id": "tr_047",
    "scene": "transport",
    "subscene": "core",
    "cn": "下一班车是几点？",
    "jp": "次は何時ですか？",
    "icon": "clock",
    "priority": 1,
    "tags": [
      "乘车"
    ],
    "intent": "direction_request",
    "phonetic": "次 gi 哈那恩机得斯卡"
  },
  {
    "id": "tr_048",
    "scene": "transport",
    "subscene": "core",
    "cn": "末班车是几点？",
    "jp": "終電は何時ですか？",
    "icon": "clock",
    "priority": 1,
    "tags": [
      "乘车",
      "高频"
    ],
    "intent": "direction_request",
    "phonetic": "修乌得恩哈那恩机得斯卡"
  },
  {
    "id": "tr_049",
    "scene": "transport",
    "subscene": "core",
    "cn": "能赶上末班车吗？",
    "jp": "終電に間に合いますか？",
    "icon": "clock",
    "priority": 1,
    "tags": [
      "乘车"
    ],
    "intent": "direction_request",
    "phonetic": "修乌得恩尼马尼阿一马斯卡"
  },
  {
    "id": "tr_050",
    "scene": "transport",
    "subscene": "core",
    "cn": "在哪里上车？",
    "jp": "どこから乗りますか？",
    "icon": "train",
    "priority": 1,
    "tags": [
      "乘车"
    ],
    "intent": "direction_request",
    "phonetic": "多扣卡拉诺里马斯卡"
  },
  {
    "id": "tr_051",
    "scene": "transport",
    "subscene": "core",
    "cn": "哪里下车？",
    "jp": "どこで降りますか？",
    "icon": "exit",
    "priority": 1,
    "tags": [
      "乘车"
    ],
    "intent": "direction_request",
    "phonetic": "多扣得哦里马斯卡"
  },
  {
    "id": "tr_052",
    "scene": "transport",
    "subscene": "problem",
    "cn": "我坐过站了。",
    "jp": "乗り過ごしちゃいました。",
    "icon": "alert",
    "priority": 1,
    "tags": [
      "乘车"
    ],
    "intent": "direction_request",
    "phonetic": "诺里斯狗西加一马西塔"
  },
  {
    "id": "tr_053",
    "scene": "transport",
    "subscene": "problem",
    "cn": "我坐错了。",
    "jp": "乗り間違えました。",
    "icon": "alert",
    "priority": 1,
    "tags": [
      "乘车"
    ],
    "intent": "direction_request",
    "phonetic": "诺里马七嘎诶马西塔"
  },
  {
    "id": "tr_054",
    "scene": "transport",
    "subscene": "confirm",
    "cn": "下一站是什么？",
    "jp": "次の駅、何ですか？",
    "icon": "station",
    "priority": 1,
    "tags": [
      "乘车"
    ],
    "intent": "direction_request",
    "phonetic": "次 gi 诺诶 ki 那尼得斯卡"
  },
  {
    "id": "tr_055",
    "scene": "transport",
    "subscene": "confirm",
    "cn": "这趟车中间停几站？",
    "jp": "途中何駅くらい停まりますか？",
    "icon": "train",
    "priority": 2,
    "tags": [
      "乘车"
    ],
    "intent": "direction_request",
    "phonetic": "托秋乌那恩诶 ki 库拉一托马马里马斯卡"
  },
  {
    "id": "tr_056",
    "scene": "transport",
    "subscene": "core",
    "cn": "这个座位有人吗？",
    "jp": "ここ空いてますか？",
    "icon": "seat",
    "priority": 1,
    "tags": [
      "乘车"
    ],
    "intent": "direction_request",
    "phonetic": "扣扣阿一忒马斯卡"
  },
  {
    "id": "tr_057",
    "scene": "transport",
    "subscene": "core",
    "cn": "可以坐这里吗？",
    "jp": "ここ座ってもいいですか？",
    "icon": "seat",
    "priority": 2,
    "tags": [
      "乘车"
    ],
    "intent": "direction_request",
    "phonetic": "扣扣斯哇忒莫一一得斯卡"
  },
  {
    "id": "tr_058",
    "scene": "transport",
    "subscene": "core",
    "cn": "请让我过一下。",
    "jp": "すみません、通ります。",
    "icon": "walk",
    "priority": 2,
    "tags": [
      "乘车"
    ],
    "intent": "direction_request",
    "phonetic": "斯米马塞恩托哦里马斯"
  },
  {
    "id": "tr_059",
    "scene": "transport",
    "subscene": "core",
    "cn": "在这里下。",
    "jp": "ここで降ります。",
    "icon": "exit",
    "priority": 1,
    "tags": [
      "乘车"
    ],
    "intent": "direction_request",
    "phonetic": "扣扣得哦里马斯"
  },
  {
    "id": "tr_060",
    "scene": "transport",
    "subscene": "core",
    "cn": "这个电车今天走吗？",
    "jp": "この電車、今日動いてますか？",
    "icon": "train",
    "priority": 2,
    "tags": [
      "乘车"
    ],
    "intent": "direction_request",
    "phonetic": "扣诺得恩下 kio 乌乌狗一忒马斯卡"
  },
  {
    "id": "tr_061",
    "scene": "transport",
    "subscene": "core",
    "cn": "请给我到○○的票。",
    "jp": "〇〇までお願いします。",
    "icon": "ticket",
    "priority": 1,
    "tags": [
      "票务",
      "高频"
    ],
    "intent": "payment_inquiry",
    "phonetic": "〇〇马得哦内嘎一西马斯"
  },
  {
    "id": "tr_062",
    "scene": "transport",
    "subscene": "core",
    "cn": "买票怎么做？",
    "jp": "切符ってどうやって買うんですか？",
    "icon": "ticket",
    "priority": 1,
    "tags": [
      "票务"
    ],
    "intent": "payment_inquiry",
    "phonetic": "ki 普忒多乌亚忒卡乌恩得斯卡"
  },
  {
    "id": "tr_063",
    "scene": "transport",
    "subscene": "core",
    "cn": "可以用IC卡吗？",
    "jp": "ICカード使えますか？",
    "icon": "card",
    "priority": 1,
    "tags": [
      "票务",
      "高频"
    ],
    "intent": "payment_inquiry",
    "phonetic": "IC 卡～多次卡诶马斯卡"
  },
  {
    "id": "tr_064",
    "scene": "transport",
    "subscene": "core",
    "cn": "IC卡没钱了怎么办？",
    "jp": "ICカード、チャージしたいんですけど。",
    "icon": "card",
    "priority": 1,
    "tags": [
      "票务"
    ],
    "intent": "payment_inquiry",
    "phonetic": "IC 卡～多加～机西塔一恩得斯开多"
  },
  {
    "id": "tr_065",
    "scene": "transport",
    "subscene": "core",
    "cn": "哪里可以充值？",
    "jp": "どこでチャージできますか？",
    "icon": "card",
    "priority": 1,
    "tags": [
      "票务"
    ],
    "intent": "payment_inquiry",
    "phonetic": "多扣得加～机得 ki 马斯卡"
  },
  {
    "id": "tr_066",
    "scene": "transport",
    "subscene": "core",
    "cn": "一日票要多少钱？",
    "jp": "一日乗車券っていくらですか？",
    "icon": "ticket",
    "priority": 2,
    "tags": [
      "票务"
    ],
    "intent": "payment_inquiry",
    "phonetic": "一七尼七叫乌下开恩忒一库拉得斯卡"
  },
  {
    "id": "tr_067",
    "scene": "transport",
    "subscene": "core",
    "cn": "请给我充值1000日元。",
    "jp": "千円チャージお願いします。",
    "icon": "card",
    "priority": 2,
    "tags": [
      "票务"
    ],
    "intent": "payment_inquiry",
    "phonetic": "塞恩诶恩加～机哦内嘎一西马斯"
  },
  {
    "id": "tr_068",
    "scene": "transport",
    "subscene": "core",
    "cn": "这是售价多少的票？",
    "jp": "これっていくらの切符ですか？",
    "icon": "ticket",
    "priority": 2,
    "tags": [
      "票务"
    ],
    "intent": "payment_inquiry",
    "phonetic": "扣咧忒一库拉诺 ki 普得斯卡"
  },
  {
    "id": "tr_069",
    "scene": "transport",
    "subscene": "core",
    "cn": "精算机在哪里？",
    "jp": "精算機はどこですか？",
    "icon": "ticket",
    "priority": 2,
    "tags": [
      "票务"
    ],
    "intent": "payment_inquiry",
    "phonetic": "塞一撒恩 ki 哈多扣得斯卡"
  },
  {
    "id": "tr_070",
    "scene": "transport",
    "subscene": "core",
    "cn": "是不是买错票了？",
    "jp": "切符間違えたかもしれません。",
    "icon": "ticket",
    "priority": 2,
    "tags": [
      "票务"
    ],
    "intent": "payment_inquiry",
    "phonetic": "ki 普马七嘎诶塔卡莫西咧马塞恩"
  },
  {
    "id": "sh_001",
    "scene": "shop",
    "subscene": "confirm",
    "cn": "这个多少钱？",
    "jp": "これ、いくらですか？",
    "icon": "price",
    "priority": 1,
    "tags": [
      "价格",
      "高频"
    ],
    "intent": "price_inquiry",
    "phonetic": "扣咧一库拉得斯卡"
  },
  {
    "id": "sh_002",
    "scene": "shop",
    "subscene": "confirm",
    "cn": "还便宜一点吗？",
    "jp": "もうちょっと安くなりますか？",
    "icon": "price",
    "priority": 1,
    "tags": [
      "价格"
    ],
    "intent": "price_inquiry",
    "phonetic": "莫乌乔托亚斯库那里马斯卡"
  },
  {
    "id": "sh_003",
    "scene": "shop",
    "subscene": "confirm",
    "cn": "有便宜点的吗？",
    "jp": "もっと安いのありますか？",
    "icon": "price",
    "priority": 2,
    "tags": [
      "价格"
    ],
    "intent": "price_inquiry",
    "phonetic": "莫托亚斯一诺阿里马斯卡"
  },
  {
    "id": "sh_004",
    "scene": "shop",
    "subscene": "core",
    "cn": "这个是什么？",
    "jp": "これ何ですか？",
    "icon": "question",
    "priority": 1,
    "tags": [
      "询问"
    ],
    "intent": "location_inquiry",
    "phonetic": "扣咧那尼得斯卡"
  },
  {
    "id": "sh_005",
    "scene": "shop",
    "subscene": "confirm",
    "cn": "有别的颜色吗？",
    "jp": "他の色ありますか？",
    "icon": "color",
    "priority": 1,
    "tags": [
      "颜色"
    ],
    "intent": "help_request",
    "phonetic": "塔诺一罗阿里马斯卡"
  },
  {
    "id": "sh_006",
    "scene": "shop",
    "subscene": "confirm",
    "cn": "这个卖完了吗？",
    "jp": "これ、もう売り切れですか？",
    "icon": "stock",
    "priority": 2,
    "tags": [
      "库存"
    ],
    "intent": "help_request",
    "phonetic": "扣咧莫乌乌里 ki 咧得斯卡"
  },
  {
    "id": "sh_007",
    "scene": "shop",
    "subscene": "core",
    "cn": "可以帮我找一下吗？",
    "jp": "ちょっと探してもらえますか？",
    "icon": "search",
    "priority": 2,
    "tags": [
      "询问"
    ],
    "intent": "location_inquiry",
    "phonetic": "乔托撒嘎西忒莫拉诶马斯卡"
  },
  {
    "id": "sh_008",
    "scene": "shop",
    "subscene": "core",
    "cn": "在哪里能找到？",
    "jp": "どこにありますか？",
    "icon": "location",
    "priority": 1,
    "tags": [
      "询问"
    ],
    "intent": "location_inquiry",
    "phonetic": "多扣尼阿里马斯卡"
  },
  {
    "id": "sh_009",
    "scene": "shop",
    "subscene": "core",
    "cn": "这附近有更好的店吗？",
    "jp": "この辺にもっといいお店ありますか？",
    "icon": "shop",
    "priority": 2,
    "tags": [
      "询问"
    ],
    "intent": "location_inquiry",
    "phonetic": "扣诺阿塔里尼莫托一一哦米塞阿里马斯卡"
  },
  {
    "id": "sh_010",
    "scene": "shop",
    "subscene": "core",
    "cn": "这是什么牌子？",
    "jp": "これ、どこのブランドですか？",
    "icon": "tag",
    "priority": 2,
    "tags": [
      "询问"
    ],
    "intent": "location_inquiry",
    "phonetic": "扣咧多扣诺不拉恩多得斯卡"
  },
  {
    "id": "sh_011",
    "scene": "shop",
    "subscene": "core",
    "cn": "这个多重？",
    "jp": "これ、重さどのくらいですか？",
    "icon": "weight",
    "priority": 2,
    "tags": [
      "询问"
    ],
    "intent": "location_inquiry",
    "phonetic": "扣咧哦莫撒多诺库拉一得斯卡"
  },
  {
    "id": "sh_012",
    "scene": "shop",
    "subscene": "core",
    "cn": "这个容易碎吗？",
    "jp": "これ、割れやすいですか？",
    "icon": "fragile",
    "priority": 2,
    "tags": [
      "询问"
    ],
    "intent": "location_inquiry",
    "phonetic": "扣咧哇咧亚斯一得斯卡"
  },
  {
    "id": "sh_013",
    "scene": "shop",
    "subscene": "enter",
    "cn": "能帮我拿一个吗？",
    "jp": "取ってもらえますか？",
    "icon": "hand",
    "priority": 2,
    "tags": [
      "询问"
    ],
    "intent": "location_inquiry",
    "phonetic": "托忒莫拉诶马斯卡"
  },
  {
    "id": "sh_014",
    "scene": "shop",
    "subscene": "enter",
    "cn": "请让我看看这个。",
    "jp": "これ見せてもらえますか？",
    "icon": "eye",
    "priority": 2,
    "tags": [
      "询问"
    ],
    "intent": "location_inquiry",
    "phonetic": "扣咧米塞忒莫拉诶马斯卡"
  },
  {
    "id": "sh_015",
    "scene": "shop",
    "subscene": "confirm",
    "cn": "有保质期吗？",
    "jp": "賞味期限っていつですか？",
    "icon": "calendar",
    "priority": 2,
    "tags": [
      "询问"
    ],
    "intent": "location_inquiry",
    "phonetic": "消乌米 ki 卡 gi 忒一次得斯卡"
  },
  {
    "id": "sh_016",
    "scene": "shop",
    "subscene": "problem",
    "cn": "可以免税吗？",
    "jp": "免税できますか？",
    "icon": "taxfree",
    "priority": 1,
    "tags": [
      "免税",
      "高频"
    ],
    "intent": "tax_free",
    "phonetic": "妹恩在一得 ki 马斯卡"
  },
  {
    "id": "sh_017",
    "scene": "shop",
    "subscene": "problem",
    "cn": "这个可以免税吗？",
    "jp": "これ免税の対象ですか？",
    "icon": "taxfree",
    "priority": 1,
    "tags": [
      "免税",
      "高频"
    ],
    "intent": "tax_free",
    "phonetic": "扣咧妹恩在一诺塔一消乌得斯卡"
  },
  {
    "id": "sh_018",
    "scene": "shop",
    "subscene": "problem",
    "cn": "需要护照吗？",
    "jp": "パスポート要りますか？",
    "icon": "passport",
    "priority": 1,
    "tags": [
      "免税",
      "高频"
    ],
    "intent": "tax_free",
    "phonetic": "帕斯坡～托一里马斯卡"
  },
  {
    "id": "sh_019",
    "scene": "shop",
    "subscene": "problem",
    "cn": "请帮我办免税。",
    "jp": "免税手続きお願いします。",
    "icon": "taxfree",
    "priority": 1,
    "tags": [
      "免税",
      "高频"
    ],
    "intent": "tax_free",
    "phonetic": "妹恩在一忒次资 ki 哦内嘎一西马斯"
  },
  {
    "id": "sh_020",
    "scene": "shop",
    "subscene": "problem",
    "cn": "免税柜台在哪里？",
    "jp": "免税カウンターはどこですか？",
    "icon": "taxfree",
    "priority": 1,
    "tags": [
      "免税"
    ],
    "intent": "tax_free",
    "phonetic": "妹恩在一卡乌恩塔～哈多扣得斯卡"
  },
  {
    "id": "sh_021",
    "scene": "shop",
    "subscene": "problem",
    "cn": "退税要怎么做？",
    "jp": "税金の還付ってどうやるんですか？",
    "icon": "taxfree",
    "priority": 1,
    "tags": [
      "免税"
    ],
    "intent": "tax_free",
    "phonetic": "在一 ki 恩诺卡恩普忒多乌亚鲁恩得斯卡"
  },
  {
    "id": "sh_022",
    "scene": "shop",
    "subscene": "problem",
    "cn": "满多少才能免税？",
    "jp": "いくらから免税になりますか？",
    "icon": "taxfree",
    "priority": 1,
    "tags": [
      "免税"
    ],
    "intent": "tax_free",
    "phonetic": "一库拉卡拉妹恩在一尼那里马斯卡"
  },
  {
    "id": "sh_023",
    "scene": "shop",
    "subscene": "problem",
    "cn": "可以退税吗？",
    "jp": "税金の還付できますか？",
    "icon": "taxfree",
    "priority": 1,
    "tags": [
      "免税"
    ],
    "intent": "tax_free",
    "phonetic": "在一 ki 恩诺卡恩普得 ki 马斯卡"
  },
  {
    "id": "sh_024",
    "scene": "shop",
    "subscene": "problem",
    "cn": "这个是免税的吗？",
    "jp": "これって免税品ですか？",
    "icon": "taxfree",
    "priority": 1,
    "tags": [
      "免税"
    ],
    "intent": "tax_free",
    "phonetic": "扣咧忒妹恩在一 hi 恩得斯卡"
  },
  {
    "id": "sh_025",
    "scene": "shop",
    "subscene": "problem",
    "cn": "部分可以免税吗？",
    "jp": "一部だけ免税できますか？",
    "icon": "taxfree",
    "priority": 2,
    "tags": [
      "免税"
    ],
    "intent": "tax_free",
    "phonetic": "一七不达开妹恩在一得 ki 马斯卡"
  },
  {
    "id": "sh_026",
    "scene": "shop",
    "subscene": "confirm",
    "cn": "有M码吗？",
    "jp": "Mサイズありますか？",
    "icon": "size",
    "priority": 1,
    "tags": [
      "尺寸"
    ],
    "intent": "help_request",
    "phonetic": "M 撒一资阿里马斯卡"
  },
  {
    "id": "sh_027",
    "scene": "shop",
    "subscene": "confirm",
    "cn": "大码的有吗？",
    "jp": "大きいサイズありますか？",
    "icon": "size",
    "priority": 1,
    "tags": [
      "尺寸"
    ],
    "intent": "help_request",
    "phonetic": "哦哦 ki 一撒一资阿里马斯卡"
  },
  {
    "id": "sh_028",
    "scene": "shop",
    "subscene": "confirm",
    "cn": "可以试一下吗？",
    "jp": "試着してもいいですか？",
    "icon": "try",
    "priority": 1,
    "tags": [
      "试穿",
      "高频"
    ],
    "intent": "help_request",
    "phonetic": "試加库西忒莫一一得斯卡"
  },
  {
    "id": "sh_029",
    "scene": "shop",
    "subscene": "confirm",
    "cn": "这双有其他尺寸吗？",
    "jp": "これ、他のサイズありますか？",
    "icon": "size",
    "priority": 2,
    "tags": [
      "尺寸"
    ],
    "intent": "help_request",
    "phonetic": "扣咧塔诺撒一资阿里马斯卡"
  },
  {
    "id": "sh_030",
    "scene": "shop",
    "subscene": "confirm",
    "cn": "有小一号的吗？",
    "jp": "ワンサイズ下ありますか？",
    "icon": "size",
    "priority": 1,
    "tags": [
      "尺寸"
    ],
    "intent": "help_request",
    "phonetic": "哇恩撒一资卡阿里马斯卡"
  },
  {
    "id": "sh_031",
    "scene": "shop",
    "subscene": "confirm",
    "cn": "这个适合我吗？",
    "jp": "これ、私に合いますか？",
    "icon": "fit",
    "priority": 2,
    "tags": [
      "尺寸"
    ],
    "intent": "help_request",
    "phonetic": "扣咧哇塔西尼阿一马斯卡"
  },
  {
    "id": "sh_032",
    "scene": "shop",
    "subscene": "confirm",
    "cn": "有什么颜色？",
    "jp": "色は何がありますか？",
    "icon": "color",
    "priority": 2,
    "tags": [
      "颜色"
    ],
    "intent": "help_request",
    "phonetic": "一罗哈那尼嘎阿里马斯卡"
  },
  {
    "id": "sh_033",
    "scene": "shop",
    "subscene": "confirm",
    "cn": "这个是日本制吗？",
    "jp": "これ、日本製ですか？",
    "icon": "japan",
    "priority": 2,
    "tags": [
      "产地"
    ],
    "intent": "help_request",
    "phonetic": "扣咧尼坡恩塞一得斯卡"
  },
  {
    "id": "sh_034",
    "scene": "shop",
    "subscene": "confirm",
    "cn": "这东西当时什么价格？",
    "jp": "元々いくらだったんですか？",
    "icon": "price",
    "priority": 2,
    "tags": [
      "价格"
    ],
    "intent": "price_inquiry",
    "phonetic": "莫托莫托一库拉达塔恩得斯卡"
  },
  {
    "id": "sh_035",
    "scene": "shop",
    "subscene": "confirm",
    "cn": "有库存吗？",
    "jp": "在庫ありますか？",
    "icon": "stock",
    "priority": 1,
    "tags": [
      "库存"
    ],
    "intent": "help_request",
    "phonetic": "扎一扣阿里马斯卡"
  },
  {
    "id": "sh_036",
    "scene": "shop",
    "subscene": "core",
    "cn": "可以对比一下吗？",
    "jp": "ちょっと比べてもいいですか？",
    "icon": "compare",
    "priority": 2,
    "tags": [
      "询问"
    ],
    "intent": "location_inquiry",
    "phonetic": "乔托库拉贝忒莫一一得斯卡"
  },
  {
    "id": "sh_037",
    "scene": "shop",
    "subscene": "core",
    "cn": "这个最受欢迎吗？",
    "jp": "これ、一番人気ですか？",
    "icon": "popular",
    "priority": 2,
    "tags": [
      "询问"
    ],
    "intent": "location_inquiry",
    "phonetic": "扣咧一七巴恩尼恩 ki 得斯卡"
  },
  {
    "id": "sh_038",
    "scene": "shop",
    "subscene": "core",
    "cn": "有最新款吗？",
    "jp": "最新のやつありますか？",
    "icon": "new",
    "priority": 2,
    "tags": [
      "询问"
    ],
    "intent": "location_inquiry",
    "phonetic": "撒一西恩诺亚次阿里马斯卡"
  },
  {
    "id": "sh_039",
    "scene": "shop",
    "subscene": "confirm",
    "cn": "折扣价对吗？",
    "jp": "割引価格で合ってますか？",
    "icon": "price",
    "priority": 2,
    "tags": [
      "价格"
    ],
    "intent": "price_inquiry",
    "phonetic": "哇里 biki 卡卡库得阿忒马斯卡"
  },
  {
    "id": "sh_040",
    "scene": "shop",
    "subscene": "confirm",
    "cn": "这个为什么这么贵？",
    "jp": "これ、なんでこんなに高いんですか？",
    "icon": "price",
    "priority": 2,
    "tags": [
      "价格"
    ],
    "intent": "price_inquiry",
    "phonetic": "扣咧那恩得扣恩那尼塔卡一恩得斯卡"
  },
  {
    "id": "sh_041",
    "scene": "shop",
    "subscene": "end",
    "cn": "请给我这个。",
    "jp": "これください。",
    "icon": "cart",
    "priority": 1,
    "tags": [
      "购买",
      "高频"
    ],
    "intent": "payment_inquiry",
    "phonetic": "扣咧库达撒一"
  },
  {
    "id": "sh_042",
    "scene": "shop",
    "subscene": "end",
    "cn": "可以刷卡吗？",
    "jp": "カード使えますか？",
    "icon": "card",
    "priority": 1,
    "tags": [
      "支付",
      "高频"
    ],
    "intent": "payment_inquiry",
    "phonetic": "卡～多次卡诶马斯卡"
  },
  {
    "id": "sh_043",
    "scene": "shop",
    "subscene": "end",
    "cn": "可以用现金吗？",
    "jp": "現金でもいいですか？",
    "icon": "cash",
    "priority": 1,
    "tags": [
      "支付"
    ],
    "intent": "payment_inquiry",
    "phonetic": "给恩 ki 恩得莫一一得斯卡"
  },
  {
    "id": "sh_044",
    "scene": "shop",
    "subscene": "end",
    "cn": "可以支付宝/微信吗？",
    "jp": "アリペイかウィーチャット使えますか？",
    "icon": "mobile",
    "priority": 1,
    "tags": [
      "支付",
      "高频"
    ],
    "intent": "payment_inquiry",
    "phonetic": "阿里佩一卡乌ィ～加托次卡诶马斯卡"
  },
  {
    "id": "sh_045",
    "scene": "shop",
    "subscene": "problem",
    "cn": "可以退货吗？",
    "jp": "返品ってできますか？",
    "icon": "return",
    "priority": 1,
    "tags": [
      "退换货"
    ],
    "intent": "help_request",
    "phonetic": "嘿恩 pi 恩忒得 ki 马斯卡"
  },
  {
    "id": "sh_046",
    "scene": "shop",
    "subscene": "problem",
    "cn": "可以换吗？",
    "jp": "交換してもらえますか？",
    "icon": "exchange",
    "priority": 1,
    "tags": [
      "退换货"
    ],
    "intent": "help_request",
    "phonetic": "扣乌卡恩西忒莫拉诶马斯卡"
  },
  {
    "id": "sh_047",
    "scene": "shop",
    "subscene": "end",
    "cn": "有小票吗？",
    "jp": "レシートもらえますか？",
    "icon": "receipt",
    "priority": 1,
    "tags": [
      "支付"
    ],
    "intent": "payment_inquiry",
    "phonetic": "咧西～托莫拉诶马斯卡"
  },
  {
    "id": "sh_048",
    "scene": "shop",
    "subscene": "end",
    "cn": "请给我袋子。",
    "jp": "袋もらえますか？",
    "icon": "bag",
    "priority": 1,
    "tags": [
      "购买"
    ],
    "intent": "payment_inquiry",
    "phonetic": "夫库罗莫拉诶马斯卡"
  },
  {
    "id": "sh_049",
    "scene": "shop",
    "subscene": "end",
    "cn": "不要袋子。",
    "jp": "袋、大丈夫です。",
    "icon": "bag",
    "priority": 2,
    "tags": [
      "购买"
    ],
    "intent": "payment_inquiry",
    "phonetic": "夫库罗达一叫乌不得斯"
  },
  {
    "id": "sh_050",
    "scene": "shop",
    "subscene": "end",
    "cn": "能帮我分开装吗？",
    "jp": "分けて入れてもらえますか？",
    "icon": "bag",
    "priority": 2,
    "tags": [
      "购买"
    ],
    "intent": "payment_inquiry",
    "phonetic": "哇开忒一咧忒莫拉诶马斯卡"
  },
  {
    "id": "sh_051",
    "scene": "shop",
    "subscene": "problem",
    "cn": "这个可以取消吗？",
    "jp": "これ、キャンセルできますか？",
    "icon": "cancel",
    "priority": 2,
    "tags": [
      "退换货"
    ],
    "intent": "help_request",
    "phonetic": "扣咧 kia 恩塞鲁得 ki 马斯卡"
  },
  {
    "id": "sh_052",
    "scene": "shop",
    "subscene": "problem",
    "cn": "我拿错了。",
    "jp": "間違えて取りました。",
    "icon": "exchange",
    "priority": 2,
    "tags": [
      "退换货"
    ],
    "intent": "help_request",
    "phonetic": "马七嘎诶忒托里马西塔"
  },
  {
    "id": "sh_053",
    "scene": "shop",
    "subscene": "core",
    "cn": "这个怎么用？",
    "jp": "これ、使い方教えてもらえますか？",
    "icon": "help",
    "priority": 2,
    "tags": [
      "询问"
    ],
    "intent": "location_inquiry",
    "phonetic": "扣咧次卡一卡塔哦西诶忒莫拉诶马斯卡"
  },
  {
    "id": "sh_054",
    "scene": "shop",
    "subscene": "end",
    "cn": "只收现金吗？",
    "jp": "現金のみですか？",
    "icon": "cash",
    "priority": 2,
    "tags": [
      "支付"
    ],
    "intent": "payment_inquiry",
    "phonetic": "给恩 ki 恩诺米得斯卡"
  },
  {
    "id": "sh_055",
    "scene": "shop",
    "subscene": "end",
    "cn": "能分开结账吗？",
    "jp": "別々で会計できますか？",
    "icon": "split",
    "priority": 2,
    "tags": [
      "支付"
    ],
    "intent": "payment_inquiry",
    "phonetic": "贝次贝次得卡一开一得 ki 马斯卡"
  },
  {
    "id": "fd_001",
    "scene": "food",
    "subscene": "core",
    "cn": "请给我这个。",
    "jp": "これください。",
    "icon": "point",
    "priority": 1,
    "tags": [
      "点餐",
      "高频"
    ],
    "intent": "help_request",
    "phonetic": "扣咧库达撒一"
  },
  {
    "id": "fd_002",
    "scene": "food",
    "subscene": "core",
    "cn": "菜单请给我。",
    "jp": "メニューください。",
    "icon": "menu",
    "priority": 1,
    "tags": [
      "点餐",
      "高频"
    ],
    "intent": "help_request",
    "phonetic": "妹 niu～库达撒一"
  },
  {
    "id": "fd_003",
    "scene": "food",
    "subscene": "core",
    "cn": "有什么推荐的？",
    "jp": "おすすめ何ですか？",
    "icon": "recommend",
    "priority": 1,
    "tags": [
      "点餐",
      "高频"
    ],
    "intent": "help_request",
    "phonetic": "哦斯斯妹那恩得斯卡"
  },
  {
    "id": "fd_004",
    "scene": "food",
    "subscene": "core",
    "cn": "有图片的菜单吗？",
    "jp": "写真付きのメニューありますか？",
    "icon": "photo",
    "priority": 1,
    "tags": [
      "点餐",
      "高频"
    ],
    "intent": "help_request",
    "phonetic": "下西恩次 ki 诺妹 niu～阿里马斯卡"
  },
  {
    "id": "fd_005",
    "scene": "food",
    "subscene": "core",
    "cn": "有中文菜单吗？",
    "jp": "中国語のメニューありますか？",
    "icon": "menu",
    "priority": 1,
    "tags": [
      "点餐"
    ],
    "intent": "help_request",
    "phonetic": "秋乌狗库狗诺妹 niu～阿里马斯卡"
  },
  {
    "id": "fd_006",
    "scene": "food",
    "subscene": "confirm",
    "cn": "这个是什么？",
    "jp": "これ何ですか？",
    "icon": "question",
    "priority": 2,
    "tags": [
      "点餐"
    ],
    "intent": "help_request",
    "phonetic": "扣咧那尼得斯卡"
  },
  {
    "id": "fd_007",
    "scene": "food",
    "subscene": "core",
    "cn": "和那个一样的。",
    "jp": "あれと同じのください。",
    "icon": "point",
    "priority": 1,
    "tags": [
      "点餐",
      "高频"
    ],
    "intent": "help_request",
    "phonetic": "阿咧托哦那机诺库达撒一"
  },
  {
    "id": "fd_008",
    "scene": "food",
    "subscene": "enter",
    "cn": "一个人用餐。",
    "jp": "一人です。",
    "icon": "person",
    "priority": 1,
    "tags": [
      "点餐",
      "高频"
    ],
    "intent": "help_request",
    "phonetic": "一七尼恩得斯"
  },
  {
    "id": "fd_009",
    "scene": "food",
    "subscene": "enter",
    "cn": "有座位吗？",
    "jp": "席空いてますか？",
    "icon": "seat",
    "priority": 1,
    "tags": [
      "点餐",
      "高频"
    ],
    "intent": "help_request",
    "phonetic": "塞 ki 阿一忒马斯卡"
  },
  {
    "id": "fd_010",
    "scene": "food",
    "subscene": "enter",
    "cn": "要等多久？",
    "jp": "どのくらい待ちますか？",
    "icon": "clock",
    "priority": 1,
    "tags": [
      "点餐"
    ],
    "intent": "help_request",
    "phonetic": "多诺库拉一马七马斯卡"
  },
  {
    "id": "fd_011",
    "scene": "food",
    "subscene": "enter",
    "cn": "人很多，要排队吗？",
    "jp": "混んでますけど、並びますか？",
    "icon": "line",
    "priority": 2,
    "tags": [
      "点餐"
    ],
    "intent": "help_request",
    "phonetic": "扣恩得马斯开多那拉 bi 马斯卡"
  },
  {
    "id": "fd_012",
    "scene": "food",
    "subscene": "core",
    "cn": "可以加吗？",
    "jp": "おかわりできますか？",
    "icon": "add",
    "priority": 1,
    "tags": [
      "点餐"
    ],
    "intent": "help_request",
    "phonetic": "哦卡哇里得 ki 马斯卡"
  },
  {
    "id": "fd_013",
    "scene": "food",
    "subscene": "core",
    "cn": "米饭大份可以吗？",
    "jp": "ご飯大盛りにできますか？",
    "icon": "rice",
    "priority": 1,
    "tags": [
      "点餐"
    ],
    "intent": "help_request",
    "phonetic": "狗哈恩哦哦莫里尼得 ki 马斯卡"
  },
  {
    "id": "fd_014",
    "scene": "food",
    "subscene": "core",
    "cn": "请给我水。",
    "jp": "お水ください。",
    "icon": "water",
    "priority": 1,
    "tags": [
      "点餐",
      "高频"
    ],
    "intent": "help_request",
    "phonetic": "哦米资库达撒一"
  },
  {
    "id": "fd_015",
    "scene": "food",
    "subscene": "core",
    "cn": "有水吗？",
    "jp": "お冷やありますか？",
    "icon": "water",
    "priority": 2,
    "tags": [
      "点餐"
    ],
    "intent": "help_request",
    "phonetic": "哦 hi 亚阿里马斯卡"
  },
  {
    "id": "fd_016",
    "scene": "food",
    "subscene": "confirm",
    "cn": "这个这个销售吗？",
    "jp": "これ、ありますか？",
    "icon": "question",
    "priority": 1,
    "tags": [
      "点餐"
    ],
    "intent": "help_request",
    "phonetic": "扣咧阿里马斯卡"
  },
  {
    "id": "fd_017",
    "scene": "food",
    "subscene": "confirm",
    "cn": "这个多大？",
    "jp": "これ、どのくらいの量ですか？",
    "icon": "size",
    "priority": 2,
    "tags": [
      "点餐"
    ],
    "intent": "help_request",
    "phonetic": "扣咧多诺库拉一诺料乌得斯卡"
  },
  {
    "id": "fd_018",
    "scene": "food",
    "subscene": "confirm",
    "cn": "这个多少？",
    "jp": "これ、何人前ですか？",
    "icon": "serving",
    "priority": 2,
    "tags": [
      "点餐"
    ],
    "intent": "help_request",
    "phonetic": "扣咧那恩尼恩马诶得斯卡"
  },
  {
    "id": "fd_019",
    "scene": "food",
    "subscene": "core",
    "cn": "请给我小碗。",
    "jp": "小さいお皿もらえますか？",
    "icon": "plate",
    "priority": 2,
    "tags": [
      "点餐"
    ],
    "intent": "help_request",
    "phonetic": "七一撒一哦撒拉莫拉诶马斯卡"
  },
  {
    "id": "fd_020",
    "scene": "food",
    "subscene": "core",
    "cn": "筷子掉了。",
    "jp": "お箸落としちゃいました。",
    "icon": "chopsticks",
    "priority": 2,
    "tags": [
      "点餐"
    ],
    "intent": "help_request",
    "phonetic": "哦哈西哦托西加一马西塔"
  },
  {
    "id": "fd_021",
    "scene": "food",
    "subscene": "end",
    "cn": "太好吃了！",
    "jp": "めっちゃ美味しいです！",
    "icon": "delicious",
    "priority": 1,
    "tags": [
      "点餐"
    ],
    "intent": "help_request",
    "phonetic": "妹加哦一西一得斯"
  },
  {
    "id": "fd_022",
    "scene": "food",
    "subscene": "end",
    "cn": "这个味道真好。",
    "jp": "これ、すごく美味しいです。",
    "icon": "delicious",
    "priority": 2,
    "tags": [
      "点餐"
    ],
    "intent": "help_request",
    "phonetic": "扣咧斯狗库哦一西一得斯"
  },
  {
    "id": "fd_023",
    "scene": "food",
    "subscene": "core",
    "cn": "再来一份。",
    "jp": "もう一つください。",
    "icon": "add",
    "priority": 1,
    "tags": [
      "点餐"
    ],
    "intent": "help_request",
    "phonetic": "莫乌 hi 托次库达撒一"
  },
  {
    "id": "fd_024",
    "scene": "food",
    "subscene": "core",
    "cn": "请帮我加热一下。",
    "jp": "温めてもらえますか？",
    "icon": "heat",
    "priority": 2,
    "tags": [
      "点餐"
    ],
    "intent": "help_request",
    "phonetic": "阿塔塔妹忒莫拉诶马斯卡"
  },
  {
    "id": "fd_025",
    "scene": "food",
    "subscene": "enter",
    "cn": "有烟区吗？",
    "jp": "喫煙席ありますか？",
    "icon": "smoke",
    "priority": 2,
    "tags": [
      "点餐"
    ],
    "intent": "help_request",
    "phonetic": "ki 次诶恩塞 ki 阿里马斯卡"
  },
  {
    "id": "fd_026",
    "scene": "food",
    "subscene": "problem",
    "cn": "这个辣吗？",
    "jp": "これ辛いですか？",
    "icon": "spicy",
    "priority": 1,
    "tags": [
      "饮食限制",
      "高频"
    ],
    "intent": "help_request",
    "phonetic": "扣咧次拉一得斯卡"
  },
  {
    "id": "fd_027",
    "scene": "food",
    "subscene": "problem",
    "cn": "不要太辣。",
    "jp": "辛さ控えめでお願いします。",
    "icon": "spicy",
    "priority": 1,
    "tags": [
      "饮食限制"
    ],
    "intent": "help_request",
    "phonetic": "次拉撒 hi 卡诶妹得哦内嘎一西马斯"
  },
  {
    "id": "fd_028",
    "scene": "food",
    "subscene": "problem",
    "cn": "不放辣。",
    "jp": "辛いの抜きでお願いします。",
    "icon": "spicy",
    "priority": 1,
    "tags": [
      "饮食限制"
    ],
    "intent": "help_request",
    "phonetic": "次拉一诺努 ki 得哦内嘎一西马斯"
  },
  {
    "id": "fd_029",
    "scene": "food",
    "subscene": "problem",
    "cn": "我对○○过敏。",
    "jp": "〇〇のアレルギーがあります。",
    "icon": "allergy",
    "priority": 1,
    "tags": [
      "饮食限制",
      "高频"
    ],
    "intent": "help_request",
    "phonetic": "〇〇诺阿咧鲁 gi～嘎阿里马斯"
  },
  {
    "id": "fd_030",
    "scene": "food",
    "subscene": "confirm",
    "cn": "这是什么肉？",
    "jp": "これ、何の肉ですか？",
    "icon": "meat",
    "priority": 1,
    "tags": [
      "饮食限制"
    ],
    "intent": "help_request",
    "phonetic": "扣咧那尼诺尼库得斯卡"
  },
  {
    "id": "fd_031",
    "scene": "food",
    "subscene": "problem",
    "cn": "不要肉。",
    "jp": "お肉抜きでお願いします。",
    "icon": "meat",
    "priority": 1,
    "tags": [
      "饮食限制"
    ],
    "intent": "help_request",
    "phonetic": "哦尼库努 ki 得哦内嘎一西马斯"
  },
  {
    "id": "fd_032",
    "scene": "food",
    "subscene": "problem",
    "cn": "我是素食者。",
    "jp": "ベジタリアンなんですけど。",
    "icon": "vegetable",
    "priority": 1,
    "tags": [
      "饮食限制"
    ],
    "intent": "help_request",
    "phonetic": "贝机塔里阿恩那恩得斯开多"
  },
  {
    "id": "fd_033",
    "scene": "food",
    "subscene": "problem",
    "cn": "不能吃猪肉。",
    "jp": "豚肉食べられないんです。",
    "icon": "pork",
    "priority": 1,
    "tags": [
      "饮食限制"
    ],
    "intent": "help_request",
    "phonetic": "不塔尼库塔贝拉咧那一恩得斯"
  },
  {
    "id": "fd_034",
    "scene": "food",
    "subscene": "problem",
    "cn": "不能喝酒。",
    "jp": "お酒飲めないんです。",
    "icon": "alcohol",
    "priority": 2,
    "tags": [
      "饮食限制"
    ],
    "intent": "help_request",
    "phonetic": "哦撒开诺妹那一恩得斯"
  },
  {
    "id": "fd_035",
    "scene": "food",
    "subscene": "problem",
    "cn": "这个有什么过敏原？",
    "jp": "これ、アレルギー成分何か入ってますか？",
    "icon": "allergy",
    "priority": 2,
    "tags": [
      "饮食限制"
    ],
    "intent": "help_request",
    "phonetic": "扣咧阿咧鲁 gi～塞一不恩那尼卡哈一忒马斯卡"
  },
  {
    "id": "fd_036",
    "scene": "food",
    "subscene": "problem",
    "cn": "不要洋葱。",
    "jp": "玉ねぎ抜きでお願いします。",
    "icon": "onion",
    "priority": 2,
    "tags": [
      "饮食限制"
    ],
    "intent": "help_request",
    "phonetic": "塔马内 gi 努 ki 得哦内嘎一西马斯"
  },
  {
    "id": "fd_037",
    "scene": "food",
    "subscene": "problem",
    "cn": "半熟可以吗？",
    "jp": "半熟でも大丈夫ですか？",
    "icon": "egg",
    "priority": 2,
    "tags": [
      "饮食限制"
    ],
    "intent": "help_request",
    "phonetic": "哈恩就库得莫达一叫乌不得斯卡"
  },
  {
    "id": "fd_038",
    "scene": "food",
    "subscene": "problem",
    "cn": "不要芥末。",
    "jp": "わさび抜きでお願いします。",
    "icon": "wasabi",
    "priority": 1,
    "tags": [
      "饮食限制"
    ],
    "intent": "help_request",
    "phonetic": "哇撒 bi 努 ki 得哦内嘎一西马斯"
  },
  {
    "id": "fd_039",
    "scene": "food",
    "subscene": "problem",
    "cn": "少盐。",
    "jp": "塩少なめでお願いします。",
    "icon": "salt",
    "priority": 2,
    "tags": [
      "饮食限制"
    ],
    "intent": "help_request",
    "phonetic": "西哦斯库那妹得哦内嘎一西马斯"
  },
  {
    "id": "fd_040",
    "scene": "food",
    "subscene": "problem",
    "cn": "这个不要放糖。",
    "jp": "砂糖抜きでお願いします。",
    "icon": "sugar",
    "priority": 2,
    "tags": [
      "饮食限制"
    ],
    "intent": "help_request",
    "phonetic": "撒托乌努 ki 得哦内嘎一西马斯"
  },
  {
    "id": "fd_041",
    "scene": "food",
    "subscene": "problem",
    "cn": "不要太咸。",
    "jp": "しょっぱくしないでください。",
    "icon": "salt",
    "priority": 2,
    "tags": [
      "饮食限制"
    ],
    "intent": "help_request",
    "phonetic": "消帕库西那一得库达撒一"
  },
  {
    "id": "fd_042",
    "scene": "food",
    "subscene": "problem",
    "cn": "有候补吗？",
    "jp": "代わりになるものありますか？",
    "icon": "replace",
    "priority": 2,
    "tags": [
      "饮食限制"
    ],
    "intent": "help_request",
    "phonetic": "卡哇里尼那鲁莫诺阿里马斯卡"
  },
  {
    "id": "fd_043",
    "scene": "food",
    "subscene": "problem",
    "cn": "这个可以不加○○吗？",
    "jp": "〇〇抜きにできますか？",
    "icon": "remove",
    "priority": 1,
    "tags": [
      "饮食限制",
      "万能"
    ],
    "intent": "help_request",
    "phonetic": "〇〇努 ki 尼得 ki 马斯卡"
  },
  {
    "id": "fd_044",
    "scene": "food",
    "subscene": "problem",
    "cn": "尽量少放。",
    "jp": "なるべく少なめで。",
    "icon": "less",
    "priority": 2,
    "tags": [
      "饮食限制"
    ],
    "intent": "help_request",
    "phonetic": "那鲁贝库斯库那妹得"
  },
  {
    "id": "fd_045",
    "scene": "food",
    "subscene": "problem",
    "cn": "不太舒服，不要太油的。",
    "jp": "ちょっと胃が…あっさりしたのありますか？",
    "icon": "health",
    "priority": 2,
    "tags": [
      "饮食限制"
    ],
    "intent": "help_request",
    "phonetic": "乔托一嘎…阿撒里西塔诺阿里马斯卡"
  },
  {
    "id": "fd_046",
    "scene": "food",
    "subscene": "end",
    "cn": "请结账。",
    "jp": "お会計お願いします。",
    "icon": "bill",
    "priority": 1,
    "tags": [
      "结账",
      "高频"
    ],
    "intent": "payment_inquiry",
    "phonetic": "哦卡一开一哦内嘎一西马斯"
  },
  {
    "id": "fd_047",
    "scene": "food",
    "subscene": "end",
    "cn": "一共多少钱？",
    "jp": "全部でいくらですか？",
    "icon": "bill",
    "priority": 1,
    "tags": [
      "结账"
    ],
    "intent": "payment_inquiry",
    "phonetic": "在恩不得一库拉得斯卡"
  },
  {
    "id": "fd_048",
    "scene": "food",
    "subscene": "end",
    "cn": "请分开算。",
    "jp": "別々でお願いします。",
    "icon": "split",
    "priority": 1,
    "tags": [
      "结账",
      "高频"
    ],
    "intent": "payment_inquiry",
    "phonetic": "贝次贝次得哦内嘎一西马斯"
  },
  {
    "id": "fd_049",
    "scene": "food",
    "subscene": "end",
    "cn": "可以打包吗？",
    "jp": "持ち帰りできますか？",
    "icon": "takeout",
    "priority": 1,
    "tags": [
      "打包",
      "高频"
    ],
    "intent": "help_request",
    "phonetic": "莫七卡诶里得 ki 马斯卡"
  },
  {
    "id": "fd_050",
    "scene": "food",
    "subscene": "end",
    "cn": "吃不完，能打包吗？",
    "jp": "食べきれないので、持ち帰ってもいいですか？",
    "icon": "takeout",
    "priority": 2,
    "tags": [
      "打包"
    ],
    "intent": "help_request",
    "phonetic": "塔贝 ki 咧那一诺得莫七卡诶忒莫一一得斯卡"
  },
  {
    "id": "fd_051",
    "scene": "food",
    "subscene": "end",
    "cn": "收信用卡吗？",
    "jp": "カードで払えますか？",
    "icon": "card",
    "priority": 1,
    "tags": [
      "结账"
    ],
    "intent": "payment_inquiry",
    "phonetic": "卡～多得哈拉诶马斯卡"
  },
  {
    "id": "fd_052",
    "scene": "food",
    "subscene": "end",
    "cn": "现金可以吗？",
    "jp": "現金でもいいですか？",
    "icon": "cash",
    "priority": 2,
    "tags": [
      "结账"
    ],
    "intent": "payment_inquiry",
    "phonetic": "给恩 ki 恩得莫一一得斯卡"
  },
  {
    "id": "fd_053",
    "scene": "food",
    "subscene": "end",
    "cn": "这个我没点。",
    "jp": "これ頼んでないです。",
    "icon": "wrong",
    "priority": 1,
    "tags": [
      "结账"
    ],
    "intent": "payment_inquiry",
    "phonetic": "扣咧塔诺恩得那一得斯"
  },
  {
    "id": "fd_054",
    "scene": "food",
    "subscene": "end",
    "cn": "账单好像多了。",
    "jp": "会計、多くないですか？",
    "icon": "bill",
    "priority": 2,
    "tags": [
      "结账"
    ],
    "intent": "payment_inquiry",
    "phonetic": "卡一开一哦哦库那一得斯卡"
  },
  {
    "id": "fd_055",
    "scene": "food",
    "subscene": "end",
    "cn": "服务费是包含的吗？",
    "jp": "サービス料込みですか？",
    "icon": "service",
    "priority": 2,
    "tags": [
      "结账"
    ],
    "intent": "payment_inquiry",
    "phonetic": "撒～bi 斯料乌扣米得斯卡"
  },
  {
    "id": "fd_056",
    "scene": "food",
    "subscene": "end",
    "cn": "有小费吗？",
    "jp": "チップって要りますか？",
    "icon": "tip",
    "priority": 2,
    "tags": [
      "结账"
    ],
    "intent": "payment_inquiry",
    "phonetic": "七普忒一里马斯卡"
  },
  {
    "id": "fd_057",
    "scene": "food",
    "subscene": "end",
    "cn": "算了不吃了，可以走吗？",
    "jp": "もういいです、出てもいいですか？",
    "icon": "exit",
    "priority": 2,
    "tags": [
      "付款"
    ],
    "intent": "payment_inquiry",
    "phonetic": "莫乌一一得斯得忒莫一一得斯卡"
  },
  {
    "id": "fd_058",
    "scene": "food",
    "subscene": "end",
    "cn": "收据请给我。",
    "jp": "領収書もらえますか？",
    "icon": "receipt",
    "priority": 2,
    "tags": [
      "付款"
    ],
    "intent": "payment_inquiry",
    "phonetic": "料乌修乌消莫拉诶马斯卡"
  },
  {
    "id": "fd_059",
    "scene": "food",
    "subscene": "enter",
    "cn": "我没预约。",
    "jp": "予約してないんですけど。",
    "icon": "reserve",
    "priority": 1,
    "tags": [
      "点餐"
    ],
    "intent": "help_request",
    "phonetic": "哟亚库西忒那一恩得斯开多"
  },
  {
    "id": "fd_060",
    "scene": "food",
    "subscene": "enter",
    "cn": "大概需要等吗？",
    "jp": "待ちますか？",
    "icon": "clock",
    "priority": 2,
    "tags": [
      "点餐"
    ],
    "intent": "help_request",
    "phonetic": "马七马斯卡"
  },
  {
    "id": "em_001",
    "scene": "emergency",
    "subscene": "urgent",
    "cn": "救命！",
    "jp": "助けてください！",
    "icon": "sos",
    "priority": 1,
    "tags": [
      "紧急",
      "最高优先级"
    ],
    "intent": "emergency",
    "phonetic": "塔斯开忒库达撒一"
  },
  {
    "id": "em_002",
    "scene": "emergency",
    "subscene": "urgent",
    "cn": "请帮我报警。",
    "jp": "警察を呼んでください。",
    "icon": "police",
    "priority": 1,
    "tags": [
      "紧急",
      "最高优先级"
    ],
    "intent": "emergency",
    "phonetic": "开一撒次哦哟恩得库达撒一"
  },
  {
    "id": "em_003",
    "scene": "emergency",
    "subscene": "urgent",
    "cn": "请叫救护车。",
    "jp": "救急車を呼んでください。",
    "icon": "ambulance",
    "priority": 1,
    "tags": [
      "紧急",
      "最高优先级"
    ],
    "intent": "emergency",
    "phonetic": "kiu 乌 kiu 乌下哦哟恩得库达撒一"
  },
  {
    "id": "em_004",
    "scene": "emergency",
    "subscene": "urgent",
    "cn": "着火了！",
    "jp": "火事です！",
    "icon": "fire",
    "priority": 1,
    "tags": [
      "紧急"
    ],
    "intent": "emergency",
    "phonetic": "卡机得斯"
  },
  {
    "id": "em_005",
    "scene": "emergency",
    "subscene": "urgent",
    "cn": "危险！",
    "jp": "危ない！",
    "icon": "danger",
    "priority": 1,
    "tags": [
      "紧急"
    ],
    "intent": "emergency",
    "phonetic": "阿不那一"
  },
  {
    "id": "em_006",
    "scene": "emergency",
    "subscene": "urgent",
    "cn": "请马上联系。",
    "jp": "すぐに連絡してください。",
    "icon": "urgent",
    "priority": 1,
    "tags": [
      "紧急"
    ],
    "intent": "emergency",
    "phonetic": "斯古尼咧恩拉库西忒库达撒一"
  },
  {
    "id": "em_007",
    "scene": "emergency",
    "subscene": "urgent",
    "cn": "这是紧急情况。",
    "jp": "緊急事態です。",
    "icon": "urgent",
    "priority": 1,
    "tags": [
      "紧急"
    ],
    "intent": "emergency",
    "phonetic": "ki 恩 kiu 乌机塔一得斯"
  },
  {
    "id": "em_008",
    "scene": "emergency",
    "subscene": "urgent",
    "cn": "来不及了！",
    "jp": "もう間に合わない！",
    "icon": "clock",
    "priority": 1,
    "tags": [
      "紧急"
    ],
    "intent": "emergency",
    "phonetic": "莫乌马尼阿哇那一"
  },
  {
    "id": "em_009",
    "scene": "emergency",
    "subscene": "urgent",
    "cn": "出事故了。",
    "jp": "事故がありました。",
    "icon": "accident",
    "priority": 1,
    "tags": [
      "紧急"
    ],
    "intent": "emergency",
    "phonetic": "机扣嘎阿里马西塔"
  },
  {
    "id": "em_010",
    "scene": "emergency",
    "subscene": "urgent",
    "cn": "帮我一下。",
    "jp": "ちょっと来てください！",
    "icon": "help",
    "priority": 1,
    "tags": [
      "紧急"
    ],
    "intent": "emergency",
    "phonetic": "乔托 ki 忒库达撒一"
  },
  {
    "id": "em_011",
    "scene": "emergency",
    "subscene": "lost",
    "cn": "钱包丢了。",
    "jp": "財布なくしました。",
    "icon": "wallet",
    "priority": 1,
    "tags": [
      "丢失",
      "高频"
    ],
    "intent": "help_request",
    "phonetic": "撒一夫那库西马西塔"
  },
  {
    "id": "em_012",
    "scene": "emergency",
    "subscene": "lost",
    "cn": "手机丢了。",
    "jp": "携帯なくしました。",
    "icon": "phone",
    "priority": 1,
    "tags": [
      "丢失",
      "高频"
    ],
    "intent": "help_request",
    "phonetic": "开一塔一那库西马西塔"
  },
  {
    "id": "em_013",
    "scene": "emergency",
    "subscene": "lost",
    "cn": "护照丢了。",
    "jp": "パスポートなくしました。",
    "icon": "passport",
    "priority": 1,
    "tags": [
      "丢失",
      "最高优先级"
    ],
    "intent": "help_request",
    "phonetic": "帕斯坡～托那库西马西塔"
  },
  {
    "id": "em_014",
    "scene": "emergency",
    "subscene": "lost",
    "cn": "行李不见了。",
    "jp": "荷物がなくなりました。",
    "icon": "luggage",
    "priority": 1,
    "tags": [
      "丢失"
    ],
    "intent": "help_request",
    "phonetic": "尼莫次嘎那库那里马西塔"
  },
  {
    "id": "em_015",
    "scene": "emergency",
    "subscene": "lost",
    "cn": "迷路了。",
    "jp": "迷子になりました。",
    "icon": "lost",
    "priority": 1,
    "tags": [
      "丢失",
      "高频"
    ],
    "intent": "help_request",
    "phonetic": "马一狗尼那里马西塔"
  },
  {
    "id": "em_016",
    "scene": "emergency",
    "subscene": "lost",
    "cn": "忘东西了。",
    "jp": "忘れ物しちゃいました。",
    "icon": "forgot",
    "priority": 1,
    "tags": [
      "丢失"
    ],
    "intent": "help_request",
    "phonetic": "哇斯咧莫诺西加一马西塔"
  },
  {
    "id": "em_017",
    "scene": "emergency",
    "subscene": "lost",
    "cn": "丢在哪里了？",
    "jp": "どこで落としたか分かりません。",
    "icon": "lost",
    "priority": 2,
    "tags": [
      "丢失"
    ],
    "intent": "help_request",
    "phonetic": "多扣得哦托西塔卡哇卡里马塞恩"
  },
  {
    "id": "em_018",
    "scene": "emergency",
    "subscene": "lost",
    "cn": "有失物招领吗？",
    "jp": "忘れ物センターありますか？",
    "icon": "lostfound",
    "priority": 1,
    "tags": [
      "丢失"
    ],
    "intent": "help_request",
    "phonetic": "哇斯咧莫诺塞恩塔～阿里马斯卡"
  },
  {
    "id": "em_019",
    "scene": "emergency",
    "subscene": "lost",
    "cn": "卡不能用了。",
    "jp": "カードが使えなくなりました。",
    "icon": "card",
    "priority": 2,
    "tags": [
      "丢失"
    ],
    "intent": "help_request",
    "phonetic": "卡～多嘎次卡诶那库那里马西塔"
  },
  {
    "id": "em_020",
    "scene": "emergency",
    "subscene": "lost",
    "cn": "电车忘东西了。",
    "jp": "電車に忘れ物しました。",
    "icon": "train",
    "priority": 2,
    "tags": [
      "丢失"
    ],
    "intent": "help_request",
    "phonetic": "得恩下尼哇斯咧莫诺西马西塔"
  },
  {
    "id": "em_021",
    "scene": "emergency",
    "subscene": "health",
    "cn": "不舒服。",
    "jp": "具合が悪いです。",
    "icon": "sick",
    "priority": 1,
    "tags": [
      "健康",
      "高频"
    ],
    "intent": "help_request",
    "phonetic": "古阿一嘎哇鲁一得斯"
  },
  {
    "id": "em_022",
    "scene": "emergency",
    "subscene": "health",
    "cn": "我受伤了。",
    "jp": "ケガしました。",
    "icon": "injury",
    "priority": 1,
    "tags": [
      "健康"
    ],
    "intent": "help_request",
    "phonetic": "开嘎西马西塔"
  },
  {
    "id": "em_023",
    "scene": "emergency",
    "subscene": "health",
    "cn": "我发烧了。",
    "jp": "熱があります。",
    "icon": "fever",
    "priority": 1,
    "tags": [
      "健康"
    ],
    "intent": "help_request",
    "phonetic": "内次嘎阿里马斯"
  },
  {
    "id": "em_024",
    "scene": "emergency",
    "subscene": "health",
    "cn": "头疼。",
    "jp": "頭が痛いです。",
    "icon": "headache",
    "priority": 1,
    "tags": [
      "健康"
    ],
    "intent": "help_request",
    "phonetic": "阿塔马嘎一塔一得斯"
  },
  {
    "id": "em_025",
    "scene": "emergency",
    "subscene": "health",
    "cn": "肚子不舒服。",
    "jp": "お腹が痛いです。",
    "icon": "stomach",
    "priority": 1,
    "tags": [
      "健康"
    ],
    "intent": "help_request",
    "phonetic": "哦那卡嘎一塔一得斯"
  },
  {
    "id": "em_026",
    "scene": "emergency",
    "subscene": "health",
    "cn": "周围有医院吗？",
    "jp": "この近くに病院ありますか？",
    "icon": "hospital",
    "priority": 1,
    "tags": [
      "健康",
      "高频"
    ],
    "intent": "help_request",
    "phonetic": "扣诺七卡库尼 bio 乌一恩阿里马斯卡"
  },
  {
    "id": "em_027",
    "scene": "emergency",
    "subscene": "health",
    "cn": "有药店吗？",
    "jp": "薬局ありますか？",
    "icon": "pharmacy",
    "priority": 1,
    "tags": [
      "健康",
      "高频"
    ],
    "intent": "help_request",
    "phonetic": "亚 kio 库阿里马斯卡"
  },
  {
    "id": "em_028",
    "scene": "emergency",
    "subscene": "health",
    "cn": "我需要医生。",
    "jp": "お医者さんに診てもらいたいです。",
    "icon": "doctor",
    "priority": 1,
    "tags": [
      "健康"
    ],
    "intent": "help_request",
    "phonetic": "哦一下撒恩尼米忒莫拉一塔一得斯"
  },
  {
    "id": "em_029",
    "scene": "emergency",
    "subscene": "health",
    "cn": "我对药物过敏。",
    "jp": "薬のアレルギーがあります。",
    "icon": "allergy",
    "priority": 2,
    "tags": [
      "健康"
    ],
    "intent": "help_request",
    "phonetic": "库斯里诺阿咧鲁 gi～嘎阿里马斯"
  },
  {
    "id": "em_030",
    "scene": "emergency",
    "subscene": "health",
    "cn": "保险可以用吗？",
    "jp": "保険は使えますか？",
    "icon": "insurance",
    "priority": 1,
    "tags": [
      "健康"
    ],
    "intent": "help_request",
    "phonetic": "霍开恩哈次卡诶马斯卡"
  },
  {
    "id": "em_031",
    "scene": "emergency",
    "subscene": "help",
    "cn": "请帮帮我。",
    "jp": "すみません、助けてもらえますか？",
    "icon": "help",
    "priority": 1,
    "tags": [
      "求助",
      "高频"
    ],
    "intent": "help_request",
    "phonetic": "斯米马塞恩塔斯开忒莫拉诶马斯卡"
  },
  {
    "id": "em_032",
    "scene": "emergency",
    "subscene": "help",
    "cn": "能帮帮我吗？",
    "jp": "ちょっと手伝ってもらえますか？",
    "icon": "help",
    "priority": 2,
    "tags": [
      "求助"
    ],
    "intent": "help_request",
    "phonetic": "乔托忒次达忒莫拉诶马斯卡"
  },
  {
    "id": "em_033",
    "scene": "emergency",
    "subscene": "help",
    "cn": "这里是哪里？",
    "jp": "ここはどこですか？",
    "icon": "location",
    "priority": 1,
    "tags": [
      "求助",
      "高频"
    ],
    "intent": "location_inquiry",
    "phonetic": "扣扣哈多扣得斯卡"
  },
  {
    "id": "em_034",
    "scene": "emergency",
    "subscene": "help",
    "cn": "找不到路。",
    "jp": "道が分かりません。",
    "icon": "lost",
    "priority": 1,
    "tags": [
      "求助"
    ],
    "intent": "help_request",
    "phonetic": "米七嘎哇卡里马塞恩"
  },
  {
    "id": "em_035",
    "scene": "emergency",
    "subscene": "help",
    "cn": "能叫工作人员吗？",
    "jp": "駅員さん呼んでもらえますか？",
    "icon": "staff",
    "priority": 1,
    "tags": [
      "求助"
    ],
    "intent": "help_request",
    "phonetic": "诶 ki 一恩撒恩哟恩得莫拉诶马斯卡"
  },
  {
    "id": "em_036",
    "scene": "emergency",
    "subscene": "help",
    "cn": "我听不懂日语。",
    "jp": "日本語が分かりません。",
    "icon": "language",
    "priority": 1,
    "tags": [
      "求助",
      "高频"
    ],
    "intent": "help_request",
    "phonetic": "尼霍恩狗嘎哇卡里马塞恩",
    "global": true
  },
  {
    "id": "em_037",
    "scene": "emergency",
    "subscene": "help",
    "cn": "你会说中文吗？",
    "jp": "中国語できますか？",
    "icon": "china",
    "priority": 1,
    "tags": [
      "求助"
    ],
    "intent": "help_request",
    "phonetic": "秋乌狗库狗得 ki 马斯卡",
    "global": true
  },
  {
    "id": "em_038",
    "scene": "emergency",
    "subscene": "help",
    "cn": "会英语吗？",
    "jp": "英語できますか？",
    "icon": "english",
    "priority": 1,
    "tags": [
      "求助"
    ],
    "intent": "help_request",
    "phonetic": "诶一狗得 ki 马斯卡",
    "global": true
  },
  {
    "id": "em_039",
    "scene": "emergency",
    "subscene": "help",
    "cn": "能借手机吗？",
    "jp": "携帯貸してもらえますか？",
    "icon": "phone",
    "priority": 1,
    "tags": [
      "求助"
    ],
    "intent": "help_request",
    "phonetic": "开一塔一卡西忒莫拉诶马斯卡"
  },
  {
    "id": "em_040",
    "scene": "emergency",
    "subscene": "help",
    "cn": "能借充电器吗？",
    "jp": "充電器貸してもらえますか？",
    "icon": "charge",
    "priority": 2,
    "tags": [
      "求助"
    ],
    "intent": "help_request",
    "phonetic": "就乌得恩 ki 卡西忒莫拉诶马斯卡"
  },
  {
    "id": "em_041",
    "scene": "emergency",
    "subscene": "embassy",
    "cn": "我想联系中国大使馆。",
    "jp": "中国大使館に連絡したいです。",
    "icon": "embassy",
    "priority": 1,
    "tags": [
      "领事馆",
      "高频"
    ],
    "intent": "help_request",
    "phonetic": "秋乌狗库塔一西卡恩尼咧恩拉库西塔一得斯"
  },
  {
    "id": "em_042",
    "scene": "emergency",
    "subscene": "embassy",
    "cn": "领事馆在哪里？",
    "jp": "領事館はどこですか？",
    "icon": "embassy",
    "priority": 1,
    "tags": [
      "领事馆"
    ],
    "intent": "help_request",
    "phonetic": "料乌机卡恩哈多扣得斯卡"
  },
  {
    "id": "em_043",
    "scene": "emergency",
    "subscene": "embassy",
    "cn": "请给我领事馆的电话号码。",
    "jp": "領事館の電話番号教えてください。",
    "icon": "phone",
    "priority": 2,
    "tags": [
      "领事馆"
    ],
    "intent": "help_request",
    "phonetic": "料乌机卡恩诺得恩哇巴恩狗乌哦西诶忒库达撒一"
  },
  {
    "id": "em_044",
    "scene": "emergency",
    "subscene": "embassy",
    "cn": "请帮我联系领事馆。",
    "jp": "領事館に連絡してもらえますか？",
    "icon": "embassy",
    "priority": 1,
    "tags": [
      "领事馆"
    ],
    "intent": "help_request",
    "phonetic": "料乌机卡恩尼咧恩拉库西忒莫拉诶马斯卡"
  },
  {
    "id": "em_045",
    "scene": "emergency",
    "subscene": "embassy",
    "cn": "需要领事保护。",
    "jp": "領事保護が必要です。",
    "icon": "protect",
    "priority": 1,
    "tags": [
      "领事馆"
    ],
    "intent": "help_request",
    "phonetic": "料乌机霍狗嘎 hi 次哟乌得斯"
  },
  {
    "id": "ia_001",
    "scene": "interact",
    "subscene": "ask_help",
    "cn": "能帮我拍张照片吗？",
    "jp": "写真撮ってもらえますか？",
    "icon": "camera",
    "priority": 1,
    "tags": [
      "拍照",
      "高频"
    ],
    "intent": "photo_request",
    "phonetic": "下西恩托忒莫拉诶马斯卡"
  },
  {
    "id": "ia_002",
    "scene": "interact",
    "subscene": "ask_help",
    "cn": "能帮我按一下吗？",
    "jp": "シャッター押してもらえますか？",
    "icon": "camera",
    "priority": 1,
    "tags": [
      "拍照"
    ],
    "intent": "photo_request",
    "phonetic": "下塔～哦西忒莫拉诶马斯卡"
  },
  {
    "id": "ia_003",
    "scene": "interact",
    "subscene": "ask_help",
    "cn": "可以一起拍照吗？",
    "jp": "一緒に写真撮ってもいいですか？",
    "icon": "camera",
    "priority": 1,
    "tags": [
      "拍照"
    ],
    "intent": "photo_request",
    "phonetic": "一消尼下西恩托忒莫一一得斯卡"
  },
  {
    "id": "ia_004",
    "scene": "interact",
    "subscene": "ask_help",
    "cn": "这里可以拍照吗？",
    "jp": "ここで写真撮っても大丈夫ですか？",
    "icon": "camera",
    "priority": 1,
    "tags": [
      "拍照",
      "规约确认"
    ],
    "intent": "photo_request",
    "phonetic": "扣扣得下西恩托忒莫达一叫乌不得斯卡"
  },
  {
    "id": "ia_005",
    "scene": "interact",
    "subscene": "ask_help",
    "cn": "可以帮我拍个半身吗？",
    "jp": "上半身だけ撮ってもらえますか？",
    "icon": "camera",
    "priority": 2,
    "tags": [
      "拍照"
    ],
    "intent": "photo_request",
    "phonetic": "叫乌哈恩西恩达开托忒莫拉诶马斯卡"
  },
  {
    "id": "ia_006",
    "scene": "interact",
    "subscene": "ask_help",
    "cn": "横拍可以吗？",
    "jp": "横向きでお願いします。",
    "icon": "camera",
    "priority": 2,
    "tags": [
      "拍照"
    ],
    "intent": "photo_request",
    "phonetic": "哟扣木 ki 得哦内嘎一西马斯"
  },
  {
    "id": "ia_007",
    "scene": "interact",
    "subscene": "ask_help",
    "cn": "再拍一张。",
    "jp": "もう一枚お願いします。",
    "icon": "camera",
    "priority": 1,
    "tags": [
      "拍照"
    ],
    "intent": "photo_request",
    "phonetic": "莫乌一七马一哦内嘎一西马斯"
  },
  {
    "id": "ia_008",
    "scene": "interact",
    "subscene": "ask_help",
    "cn": "这个按哪里？",
    "jp": "これ、どこ押せばいいですか？",
    "icon": "question",
    "priority": 2,
    "tags": [
      "拍照"
    ],
    "intent": "photo_request",
    "phonetic": "扣咧多扣哦塞巴一一得斯卡"
  },
  {
    "id": "ia_009",
    "scene": "interact",
    "subscene": "ask_help",
    "cn": "可以开闪光灯吗？",
    "jp": "フラッシュ焚いてもいいですか？",
    "icon": "flash",
    "priority": 2,
    "tags": [
      "拍照"
    ],
    "intent": "photo_request",
    "phonetic": "夫拉修塔一忒莫一一得斯卡"
  },
  {
    "id": "ia_010",
    "scene": "interact",
    "subscene": "ask_help",
    "cn": "不太好看。",
    "jp": "あんまり良くないですね。",
    "icon": "retake",
    "priority": 2,
    "tags": [
      "拍照"
    ],
    "intent": "photo_request",
    "phonetic": "阿恩马里哟库那一得斯内"
  },
  {
    "id": "ia_011",
    "scene": "interact",
    "subscene": "ask_help",
    "cn": "可以帮我录视频吗？",
    "jp": "動画撮ってもらえますか？",
    "icon": "video",
    "priority": 2,
    "tags": [
      "拍照"
    ],
    "intent": "photo_request",
    "phonetic": "多乌嘎托忒莫拉诶马斯卡"
  },
  {
    "id": "ia_012",
    "scene": "interact",
    "subscene": "ask_help",
    "cn": "你能帮我拿着手机拍吗？",
    "jp": "これ持って撮ってもらえますか？",
    "icon": "camera",
    "priority": 2,
    "tags": [
      "拍照"
    ],
    "intent": "photo_request",
    "phonetic": "扣咧莫忒托忒莫拉诶马斯卡"
  },
  {
    "id": "ia_013",
    "scene": "interact",
    "subscene": "ask_help",
    "cn": "从这边拍。",
    "jp": "こっちから撮ってください。",
    "icon": "direction",
    "priority": 2,
    "tags": [
      "拍照"
    ],
    "intent": "photo_request",
    "phonetic": "扣七卡拉托忒库达撒一"
  },
  {
    "id": "ia_014",
    "scene": "interact",
    "subscene": "ask_help",
    "cn": "请从这里开始拍。",
    "jp": "ここから撮ってください。",
    "icon": "camera",
    "priority": 2,
    "tags": [
      "拍照"
    ],
    "intent": "photo_request",
    "phonetic": "扣扣卡拉托忒库达撒一"
  },
  {
    "id": "ia_015",
    "scene": "interact",
    "subscene": "ask_help",
    "cn": "能帮我传到手机上吗？",
    "jp": "スマホに送ってもらえますか？",
    "icon": "send",
    "priority": 2,
    "tags": [
      "拍照"
    ],
    "intent": "photo_request",
    "phonetic": "斯马霍尼哦库忒莫拉诶马斯卡"
  },
  {
    "id": "ia_016",
    "scene": "interact",
    "subscene": "ask_help",
    "cn": "打扰一下，能帮我一下吗？",
    "jp": "すみません、ちょっとお願いしてもいいですか？",
    "icon": "help",
    "priority": 1,
    "tags": [
      "请求帮助",
      "高频"
    ],
    "intent": "help_request",
    "phonetic": "斯米马塞恩乔托哦内嘎一西忒莫一一得斯卡"
  },
  {
    "id": "ia_017",
    "scene": "interact",
    "subscene": "ask_help",
    "cn": "能帮我拿一下吗？",
    "jp": "これ持ってもらえますか？",
    "icon": "hand",
    "priority": 2,
    "tags": [
      "请求帮助"
    ],
    "intent": "help_request",
    "phonetic": "扣咧莫忒莫拉诶马斯卡"
  },
  {
    "id": "ia_018",
    "scene": "interact",
    "subscene": "ask_help",
    "cn": "能帮我抬一下吗？",
    "jp": "一緒に持ってもらえますか？",
    "icon": "lift",
    "priority": 2,
    "tags": [
      "请求帮助"
    ],
    "intent": "help_request",
    "phonetic": "一消尼莫忒莫拉诶马斯卡"
  },
  {
    "id": "ia_019",
    "scene": "interact",
    "subscene": "ask_help",
    "cn": "能帮我看一下吗？",
    "jp": "ちょっと見てもらえますか？",
    "icon": "eye",
    "priority": 2,
    "tags": [
      "请求帮助"
    ],
    "intent": "help_request",
    "phonetic": "乔托米忒莫拉诶马斯卡"
  },
  {
    "id": "ia_020",
    "scene": "interact",
    "subscene": "comprehension",
    "cn": "能帮我翻译一下吗？",
    "jp": "翻訳してもらえますか？",
    "icon": "translate",
    "priority": 1,
    "tags": [
      "请求帮助"
    ],
    "intent": "help_request",
    "phonetic": "霍恩亚库西忒莫拉诶马斯卡"
  },
  {
    "id": "ia_021",
    "scene": "interact",
    "subscene": "comprehension",
    "cn": "能帮我写一下吗？",
    "jp": "書いてもらえますか？",
    "icon": "write",
    "priority": 2,
    "tags": [
      "请求帮助"
    ],
    "intent": "help_request",
    "phonetic": "卡一忒莫拉诶马斯卡"
  },
  {
    "id": "ia_022",
    "scene": "interact",
    "subscene": "ask_help",
    "cn": "能教我一下吗？",
    "jp": "教えてもらえますか？",
    "icon": "teach",
    "priority": 2,
    "tags": [
      "请求帮助"
    ],
    "intent": "help_request",
    "phonetic": "哦西诶忒莫拉诶马斯卡"
  },
  {
    "id": "ia_023",
    "scene": "interact",
    "subscene": "ask_help",
    "cn": "能帮我叫出租车吗？",
    "jp": "タクシー呼んでもらえますか？",
    "icon": "taxi",
    "priority": 1,
    "tags": [
      "请求帮助"
    ],
    "intent": "help_request",
    "phonetic": "塔库西～哟恩得莫拉诶马斯卡"
  },
  {
    "id": "ia_024",
    "scene": "interact",
    "subscene": "ask_help",
    "cn": "请把我送到这里。",
    "jp": "ここまでお願いします。",
    "icon": "location",
    "priority": 1,
    "tags": [
      "请求帮助"
    ],
    "intent": "help_request",
    "phonetic": "扣扣马得哦内嘎一西马斯"
  },
  {
    "id": "ia_025",
    "scene": "interact",
    "subscene": "comprehension",
    "cn": "你能重复一遍吗？",
    "jp": "もう一度言ってもらえますか？",
    "icon": "repeat",
    "priority": 1,
    "tags": [
      "请求帮助",
      "高频"
    ],
    "intent": "help_request",
    "phonetic": "莫乌一七多一忒莫拉诶马斯卡",
    "global": true
  },
  {
    "id": "ia_026",
    "scene": "interact",
    "subscene": "comprehension",
    "cn": "请说慢一点。",
    "jp": "ゆっくり話してもらえますか？",
    "icon": "slow",
    "priority": 1,
    "tags": [
      "请求帮助",
      "高频"
    ],
    "intent": "help_request",
    "phonetic": "由库里哈那西忒莫拉诶马斯卡",
    "global": true
  },
  {
    "id": "ia_027",
    "scene": "interact",
    "subscene": "comprehension",
    "cn": "能用简单日语说吗？",
    "jp": "簡単な日本語で話してもらえますか？",
    "icon": "simple",
    "priority": 2,
    "tags": [
      "请求帮助"
    ],
    "intent": "help_request",
    "phonetic": "卡恩塔恩那尼霍恩狗得哈那西忒莫拉诶马斯卡",
    "global": true
  },
  {
    "id": "ia_028",
    "scene": "interact",
    "subscene": "comprehension",
    "cn": "能写在纸上吗？",
    "jp": "紙に書いてもらえますか？",
    "icon": "write",
    "priority": 1,
    "tags": [
      "请求帮助"
    ],
    "intent": "help_request",
    "phonetic": "卡米尼卡一忒莫拉诶马斯卡",
    "global": true
  },
  {
    "id": "ia_029",
    "scene": "interact",
    "subscene": "ask_help",
    "cn": "不好意思，能帮我一下吗？",
    "jp": "ごめんなさい、手伝ってもらえますか？",
    "icon": "help",
    "priority": 1,
    "tags": [
      "请求帮助"
    ],
    "intent": "help_request",
    "phonetic": "狗妹恩那撒一忒次达忒莫拉诶马斯卡"
  },
  {
    "id": "ia_030",
    "scene": "interact",
    "subscene": "ask_help",
    "cn": "有什么建议吗？",
    "jp": "何かアドバイスありますか？",
    "icon": "advice",
    "priority": 2,
    "tags": [
      "请求帮助"
    ],
    "intent": "help_request",
    "phonetic": "那尼卡阿多巴一斯阿里马斯卡"
  },
  {
    "id": "ia_031",
    "scene": "interact",
    "subscene": "basic_ask",
    "cn": "可以坐这里吗？",
    "jp": "ここ座っても大丈夫ですか？",
    "icon": "seat",
    "priority": 1,
    "tags": [
      "许可",
      "高频"
    ],
    "intent": "permission_request",
    "phonetic": "扣扣斯哇忒莫达一叫乌不得斯卡"
  },
  {
    "id": "ia_032",
    "scene": "interact",
    "subscene": "basic_ask",
    "cn": "可以进入吗？",
    "jp": "入ってもいいですか？",
    "icon": "enter",
    "priority": 1,
    "tags": [
      "许可"
    ],
    "intent": "permission_request",
    "phonetic": "哈一忒莫一一得斯卡"
  },
  {
    "id": "ia_033",
    "scene": "interact",
    "subscene": "basic_ask",
    "cn": "这里可以抽烟吗？",
    "jp": "すみません、ここってタバコ大丈夫ですか？",
    "icon": "smoke",
    "priority": 1,
    "tags": [
      "规约确认",
      "高频"
    ],
    "intent": "smoke_rule",
    "phonetic": "斯米马塞恩扣扣忒塔巴扣达一叫乌不得斯卡"
  },
  {
    "id": "ia_034",
    "scene": "interact",
    "subscene": "basic_ask",
    "cn": "这块禁烟吗？",
    "jp": "ここ禁煙ですか？",
    "icon": "nosmoke",
    "priority": 1,
    "tags": [
      "规约确认"
    ],
    "intent": "smoke_rule",
    "phonetic": "扣扣 ki 恩诶恩得斯卡"
  },
  {
    "id": "ia_035",
    "scene": "interact",
    "subscene": "basic_ask",
    "cn": "吸烟区在哪里？",
    "jp": "喫煙所ってどこですか？",
    "icon": "smoke",
    "priority": 1,
    "tags": [
      "规约确认",
      "高频"
    ],
    "intent": "smoke_rule",
    "phonetic": "ki 次诶恩消忒多扣得斯卡"
  },
  {
    "id": "ia_036",
    "scene": "interact",
    "subscene": "basic_ask",
    "cn": "需要预约吗？",
    "jp": "予約要りますか？",
    "icon": "reserve",
    "priority": 1,
    "tags": [
      "规约确认"
    ],
    "intent": "permission_request",
    "phonetic": "哟亚库一里马斯卡"
  },
  {
    "id": "ia_037",
    "scene": "interact",
    "subscene": "basic_ask",
    "cn": "在外面等可以吗？",
    "jp": "外で待っててもいいですか？",
    "icon": "wait",
    "priority": 2,
    "tags": [
      "许可"
    ],
    "intent": "permission_request",
    "phonetic": "搜托得马忒忒莫一一得斯卡"
  },
  {
    "id": "ia_038",
    "scene": "interact",
    "subscene": "basic_ask",
    "cn": "可以带进去吗？",
    "jp": "持ち込んでも大丈夫ですか？",
    "icon": "bring",
    "priority": 1,
    "tags": [
      "许可"
    ],
    "intent": "permission_request",
    "phonetic": "莫七扣恩得莫达一叫乌不得斯卡"
  },
  {
    "id": "ia_039",
    "scene": "interact",
    "subscene": "basic_ask",
    "cn": "需不需要脱鞋？",
    "jp": "靴脱ぐんですか？",
    "icon": "shoe",
    "priority": 1,
    "tags": [
      "规约确认"
    ],
    "intent": "permission_request",
    "phonetic": "库次努古恩得斯卡"
  },
  {
    "id": "ia_040",
    "scene": "interact",
    "subscene": "basic_ask",
    "cn": "这里有Wi-Fi吗？",
    "jp": "すみません、WiFiありますか？",
    "icon": "wifi",
    "priority": 1,
    "tags": [
      "询问",
      "高频"
    ],
    "intent": "location_inquiry",
    "phonetic": "斯米马塞恩 WiFi 阿里马斯卡"
  },
  {
    "id": "ia_041",
    "scene": "interact",
    "subscene": "basic_ask",
    "cn": "密码多少？",
    "jp": "パスワード何ですか？",
    "icon": "wifi",
    "priority": 1,
    "tags": [
      "询问"
    ],
    "intent": "location_inquiry",
    "phonetic": "帕斯哇～多那恩得斯卡"
  },
  {
    "id": "ia_042",
    "scene": "interact",
    "subscene": "basic_ask",
    "cn": "可以拍照吗？",
    "jp": "写真撮っても大丈夫ですか？",
    "icon": "camera",
    "priority": 1,
    "tags": [
      "规约确认",
      "高频"
    ],
    "intent": "photo_request",
    "phonetic": "下西恩托忒莫达一叫乌不得斯卡"
  },
  {
    "id": "ia_043",
    "scene": "interact",
    "subscene": "basic_ask",
    "cn": "这里开着吗？",
    "jp": "今やってますか？",
    "icon": "open",
    "priority": 2,
    "tags": [
      "询问"
    ],
    "intent": "location_inquiry",
    "phonetic": "一马亚忒马斯卡"
  },
  {
    "id": "ia_044",
    "scene": "interact",
    "subscene": "basic_ask",
    "cn": "休息到几点？",
    "jp": "何時から開きますか？",
    "icon": "clock",
    "priority": 2,
    "tags": [
      "询问"
    ],
    "intent": "location_inquiry",
    "phonetic": "那恩机卡拉 hi 拉 ki 马斯卡"
  },
  {
    "id": "ia_045",
    "scene": "interact",
    "subscene": "basic_ask",
    "cn": "能用信用卡吗？",
    "jp": "クレジットカード使えますか？",
    "icon": "card",
    "priority": 1,
    "tags": [
      "询问"
    ],
    "intent": "location_inquiry",
    "phonetic": "库咧机托卡～多次卡诶马斯卡"
  },
  {
    "id": "ia_046",
    "scene": "interact",
    "subscene": "ending",
    "cn": "谢谢。",
    "jp": "ありがとうございます。",
    "icon": "thanks",
    "priority": 1,
    "tags": [
      "礼貌用语",
      "高频"
    ],
    "intent": "help_request",
    "phonetic": "阿里嘎托乌狗扎一马斯",
    "global": true
  },
  {
    "id": "ia_047",
    "scene": "interact",
    "subscene": "greeting",
    "cn": "不好意思。",
    "jp": "すみません。",
    "icon": "sorry",
    "priority": 1,
    "tags": [
      "礼貌用语",
      "高频"
    ],
    "intent": "help_request",
    "phonetic": "斯米马塞恩",
    "global": true
  },
  {
    "id": "ia_048",
    "scene": "interact",
    "subscene": "ending",
    "cn": "对不起。",
    "jp": "ごめんなさい。",
    "icon": "sorry",
    "priority": 1,
    "tags": [
      "礼貌用语"
    ],
    "intent": "help_request",
    "phonetic": "狗妹恩那撒一",
    "global": true
  },
  {
    "id": "ia_049",
    "scene": "interact",
    "subscene": "ending",
    "cn": "没关系。",
    "jp": "大丈夫です。",
    "icon": "ok",
    "priority": 1,
    "tags": [
      "礼貌用语"
    ],
    "intent": "help_request",
    "phonetic": "达一叫乌不得斯",
    "global": true
  },
  {
    "id": "ia_050",
    "scene": "interact",
    "subscene": "ending",
    "cn": "没问题。",
    "jp": "問題ないです。",
    "icon": "ok",
    "priority": 2,
    "tags": [
      "礼貌用语"
    ],
    "intent": "help_request",
    "phonetic": "莫恩达一那一得斯",
    "global": true
  },
  {
    "id": "ia_051",
    "scene": "interact",
    "subscene": "ending",
    "cn": "不用了。",
    "jp": "結構です。",
    "icon": "no",
    "priority": 1,
    "tags": [
      "礼貌用语"
    ],
    "intent": "help_request",
    "phonetic": "开扣乌得斯"
  },
  {
    "id": "ia_052",
    "scene": "interact",
    "subscene": "ending",
    "cn": "请等一下。",
    "jp": "ちょっと待ってください。",
    "icon": "wait",
    "priority": 1,
    "tags": [
      "礼貌用语",
      "高频"
    ],
    "intent": "help_request",
    "phonetic": "乔托马忒库达撒一",
    "global": true
  },
  {
    "id": "ia_053",
    "scene": "interact",
    "subscene": "ending",
    "cn": "很漂亮！",
    "jp": "すごくきれいですね！",
    "icon": "nice",
    "priority": 2,
    "tags": [
      "称赞"
    ],
    "intent": "help_request",
    "phonetic": "斯狗库 ki 咧一得斯内"
  },
  {
    "id": "ia_054",
    "scene": "interact",
    "subscene": "ending",
    "cn": "好厉害！",
    "jp": "すごい！",
    "icon": "wow",
    "priority": 1,
    "tags": [
      "称赞"
    ],
    "intent": "help_request",
    "phonetic": "斯狗一"
  },
  {
    "id": "ia_055",
    "scene": "interact",
    "subscene": "ending",
    "cn": "很好吃。",
    "jp": "美味しいです。",
    "icon": "delicious",
    "priority": 1,
    "tags": [
      "称赞",
      "高频"
    ],
    "intent": "help_request",
    "phonetic": "哦一西一得斯"
  },
  {
    "id": "ia_056",
    "scene": "interact",
    "subscene": "ending",
    "cn": "是日本人。",
    "jp": "日本人です。",
    "icon": "japan",
    "priority": 2,
    "tags": [
      "身份"
    ],
    "intent": "help_request",
    "phonetic": "尼坡恩机恩得斯"
  },
  {
    "id": "ia_057",
    "scene": "interact",
    "subscene": "greeting",
    "cn": "从中国来的。",
    "jp": "中国から来ました。",
    "icon": "china",
    "priority": 1,
    "tags": [
      "身份"
    ],
    "intent": "help_request",
    "phonetic": "秋乌狗库卡拉 ki 马西塔"
  },
  {
    "id": "ia_058",
    "scene": "interact",
    "subscene": "greeting",
    "cn": "我叫○○。",
    "jp": "〇〇と言います。",
    "icon": "name",
    "priority": 2,
    "tags": [
      "身份"
    ],
    "intent": "help_request",
    "phonetic": "〇〇托一一马斯"
  },
  {
    "id": "ia_059",
    "scene": "interact",
    "subscene": "greeting",
    "cn": "很高兴认识你。",
    "jp": "よろしくお願いします。",
    "icon": "greet",
    "priority": 2,
    "tags": [
      "礼貌用语"
    ],
    "intent": "help_request",
    "phonetic": "哟罗西库哦内嘎一西马斯"
  },
  {
    "id": "ia_060",
    "scene": "interact",
    "subscene": "ending",
    "cn": "再见。",
    "jp": "ありがとうございました。",
    "icon": "bye",
    "priority": 2,
    "tags": [
      "礼貌用语"
    ],
    "intent": "help_request",
    "phonetic": "阿里嘎托乌狗扎一马西塔"
  },
  {
    "id": "st_001",
    "scene": "transport",
    "subscene": "confirm",
    "cn": "这个站台是去哪里的？",
    "jp": "このホーム、どこ行きですか？",
    "icon": "platform",
    "priority": 1,
    "tags": [
      "车站",
      "高频"
    ],
    "intent": "location_inquiry",
    "phonetic": "扣诺霍～木多扣一 ki 得斯卡"
  },
  {
    "id": "st_002",
    "scene": "transport",
    "subscene": "confirm",
    "cn": "是往○○方向吗？",
    "jp": "〇〇方面で合ってますか？",
    "icon": "direction",
    "priority": 1,
    "tags": [
      "车站",
      "高频"
    ],
    "intent": "location_inquiry",
    "phonetic": "〇〇霍乌妹恩得阿忒马斯卡"
  },
  {
    "id": "st_003",
    "scene": "transport",
    "subscene": "confirm",
    "cn": "有没有更快的路线？",
    "jp": "もっと早いルートありますか？",
    "icon": "fast",
    "priority": 2,
    "tags": [
      "车站"
    ],
    "intent": "location_inquiry",
    "phonetic": "莫托哈亚一鲁～托阿里马斯卡"
  },
  {
    "id": "st_004",
    "scene": "transport",
    "subscene": "confirm",
    "cn": "怎么去出口？",
    "jp": "出口へはどう行けばいいですか？",
    "icon": "exit",
    "priority": 1,
    "tags": [
      "车站"
    ],
    "intent": "location_inquiry",
    "phonetic": "得古七嘿哈多乌一开巴一一得斯卡"
  },
  {
    "id": "st_005",
    "scene": "transport",
    "subscene": "confirm",
    "cn": "JR线怎么走？",
    "jp": "JR線はどこですか？",
    "icon": "train",
    "priority": 1,
    "tags": [
      "车站"
    ],
    "intent": "location_inquiry",
    "phonetic": "JR 塞恩哈多扣得斯卡"
  },
  {
    "id": "st_006",
    "scene": "transport",
    "subscene": "confirm",
    "cn": "地铁在哪里？",
    "jp": "地下鉄の入口はどこですか？",
    "icon": "subway",
    "priority": 1,
    "tags": [
      "车站",
      "高频"
    ],
    "intent": "location_inquiry",
    "phonetic": "七卡忒次诺一里古七哈多扣得斯卡"
  },
  {
    "id": "st_007",
    "scene": "transport",
    "subscene": "confirm",
    "cn": "新干线往哪个方向？",
    "jp": "新幹線の改札、どっちですか？",
    "icon": "shinkansen",
    "priority": 1,
    "tags": [
      "车站"
    ],
    "intent": "location_inquiry",
    "phonetic": "西恩卡恩塞恩诺卡一撒次多七得斯卡"
  },
  {
    "id": "st_008",
    "scene": "transport",
    "subscene": "confirm",
    "cn": "人工窗口在哪里？",
    "jp": "窓口どこですか？",
    "icon": "counter",
    "priority": 1,
    "tags": [
      "车站"
    ],
    "intent": "location_inquiry",
    "phonetic": "马多古七多扣得斯卡"
  },
  {
    "id": "st_009",
    "scene": "transport",
    "subscene": "confirm",
    "cn": "有储物柜吗？",
    "jp": "コインロッカーありますか？",
    "icon": "locker",
    "priority": 1,
    "tags": [
      "车站",
      "高频"
    ],
    "intent": "location_inquiry",
    "phonetic": "扣一恩罗卡～阿里马斯卡"
  },
  {
    "id": "st_010",
    "scene": "transport",
    "subscene": "confirm",
    "cn": "站台有没有电梯？",
    "jp": "エレベーターありますか？",
    "icon": "elevator",
    "priority": 1,
    "tags": [
      "车站"
    ],
    "intent": "location_inquiry",
    "phonetic": "诶咧贝～塔～阿里马斯卡"
  },
  {
    "id": "st_011",
    "scene": "transport",
    "subscene": "confirm",
    "cn": "这里出去是哪里？",
    "jp": "この出口、どこに出ますか？",
    "icon": "exit",
    "priority": 1,
    "tags": [
      "车站"
    ],
    "intent": "location_inquiry",
    "phonetic": "扣诺得古七多扣尼得马斯卡"
  },
  {
    "id": "st_012",
    "scene": "transport",
    "subscene": "confirm",
    "cn": "厕所在站里什么位置？",
    "jp": "駅のトイレどこですか？",
    "icon": "toilet",
    "priority": 1,
    "tags": [
      "车站",
      "高频"
    ],
    "intent": "location_inquiry",
    "phonetic": "诶 ki 诺托一咧多扣得斯卡"
  },
  {
    "id": "st_013",
    "scene": "transport",
    "subscene": "confirm",
    "cn": "有公交站吗？",
    "jp": "バス停はどこですか？",
    "icon": "bus",
    "priority": 1,
    "tags": [
      "车站"
    ],
    "intent": "location_inquiry",
    "phonetic": "巴斯忒一哈多扣得斯卡"
  },
  {
    "id": "st_014",
    "scene": "transport",
    "subscene": "confirm",
    "cn": "这个站有哪些线？",
    "jp": "この駅、何線が通ってますか？",
    "icon": "lines",
    "priority": 2,
    "tags": [
      "车站"
    ],
    "intent": "location_inquiry",
    "phonetic": "扣诺诶 ki 那尼塞恩嘎卡哟忒马斯卡"
  },
  {
    "id": "st_015",
    "scene": "transport",
    "subscene": "confirm",
    "cn": "能不能走回去？",
    "jp": "歩いて戻れますか？",
    "icon": "walk",
    "priority": 2,
    "tags": [
      "车站"
    ],
    "intent": "location_inquiry",
    "phonetic": "阿鲁一忒莫多咧马斯卡"
  },
  {
    "id": "st_016",
    "scene": "transport",
    "subscene": "confirm",
    "cn": "能告诉我怎么走吗？",
    "jp": "道を教えていただけますか？",
    "icon": "direction",
    "priority": 1,
    "tags": [
      "车站"
    ],
    "intent": "location_inquiry",
    "phonetic": "米七哦哦西诶忒一塔达开马斯卡"
  },
  {
    "id": "st_017",
    "scene": "transport",
    "subscene": "confirm",
    "cn": "有站务员吗？",
    "jp": "駅員さんどこですか？",
    "icon": "staff",
    "priority": 1,
    "tags": [
      "车站"
    ],
    "intent": "location_inquiry",
    "phonetic": "诶 ki 一恩撒恩多扣得斯卡"
  },
  {
    "id": "st_018",
    "scene": "transport",
    "subscene": "confirm",
    "cn": "走的对吗？",
    "jp": "この道であってますか？",
    "icon": "direction",
    "priority": 1,
    "tags": [
      "车站"
    ],
    "intent": "location_inquiry",
    "phonetic": "扣诺米七得阿忒马斯卡"
  },
  {
    "id": "st_019",
    "scene": "transport",
    "subscene": "confirm",
    "cn": "车票进不去站了。",
    "jp": "切符が通らないんですけど。",
    "icon": "ticket",
    "priority": 1,
    "tags": [
      "车站"
    ],
    "intent": "location_inquiry",
    "phonetic": "ki 普嘎托哦拉那一恩得斯开多"
  },
  {
    "id": "st_020",
    "scene": "transport",
    "subscene": "confirm",
    "cn": "今天能正常运转吗？",
    "jp": "今日、動いてますか？",
    "icon": "status",
    "priority": 2,
    "tags": [
      "车站"
    ],
    "intent": "location_inquiry",
    "phonetic": "kio 乌乌狗一忒马斯卡"
  },
  {
    "id": "ap_001",
    "scene": "transport",
    "subscene": "airport",
    "cn": "登机口在哪里？",
    "jp": "搭乗口はどこですか？",
    "icon": "gate",
    "priority": 1,
    "tags": [
      "机场",
      "高频"
    ],
    "phonetic": "托乌叫乌古七哈多扣得斯卡",
    "intent": "location_inquiry"
  },
  {
    "id": "ap_002",
    "scene": "transport",
    "subscene": "airport",
    "cn": "行李提取在哪里？",
    "jp": "手荷物受取所はどこですか？",
    "icon": "luggage",
    "priority": 1,
    "tags": [
      "机场",
      "高频"
    ],
    "phonetic": "忒尼莫次乌开托里消哈多扣得斯卡",
    "intent": "location_inquiry"
  },
  {
    "id": "ap_003",
    "scene": "transport",
    "subscene": "airport",
    "cn": "我要办理登机手续。",
    "jp": "チェックインをお願いします。",
    "icon": "ticket",
    "priority": 1,
    "tags": [
      "机场",
      "高频"
    ],
    "phonetic": "七ェ库一恩哦哦内嘎一西马斯",
    "intent": "help_request"
  },
  {
    "id": "ap_004",
    "scene": "transport",
    "subscene": "airport",
    "cn": "安检在哪里？",
    "jp": "保安検査場はどこですか？",
    "icon": "gate",
    "priority": 1,
    "tags": [
      "机场"
    ],
    "phonetic": "霍阿恩开恩撒叫乌哈多扣得斯卡",
    "intent": "location_inquiry"
  },
  {
    "id": "ap_005",
    "scene": "transport",
    "subscene": "airport",
    "cn": "到达口在哪里？",
    "jp": "到着口はどこですか？",
    "icon": "exit",
    "priority": 1,
    "tags": [
      "机场"
    ],
    "phonetic": "托乌加库古七哈多扣得斯卡",
    "intent": "location_inquiry"
  },
  {
    "id": "ap_006",
    "scene": "transport",
    "subscene": "airport",
    "cn": "我要转机。",
    "jp": "乗り継ぎをしたいです。",
    "icon": "transfer",
    "priority": 1,
    "tags": [
      "机场",
      "高频"
    ],
    "phonetic": "诺里次 gi 哦西塔一得斯",
    "intent": "direction_request"
  },
  {
    "id": "ap_007",
    "scene": "transport",
    "subscene": "airport",
    "cn": "免税店在机场哪里？",
    "jp": "空港の免税店はどこですか？",
    "icon": "taxfree",
    "priority": 2,
    "tags": [
      "机场",
      "免税"
    ],
    "phonetic": "库乌扣乌诺妹恩在一忒恩哈多扣得斯卡",
    "intent": "tax_free"
  },
  {
    "id": "ap_008",
    "scene": "transport",
    "subscene": "airport",
    "cn": "有机场巴士去市区吗？",
    "jp": "市内行きの空港バスはありますか？",
    "icon": "bus",
    "priority": 2,
    "tags": [
      "机场"
    ],
    "phonetic": "西那一一 ki 诺库乌扣乌巴斯哈阿里马斯卡",
    "intent": "direction_request"
  },
  {
    "id": "ia_061",
    "scene": "interact",
    "subscene": "greeting",
    "cn": "你好",
    "jp": "こんにちは",
    "icon": "greet",
    "intent": "help_request",
    "tags": [
      "礼貌用语",
      "高频"
    ],
    "priority": 1,
    "phonetic": "扣恩尼七哈"
  },
  {
    "id": "ia_062",
    "scene": "interact",
    "subscene": "greeting",
    "cn": "早上好",
    "jp": "おはようございます",
    "icon": "greet",
    "intent": "help_request",
    "tags": [
      "礼貌用语",
      "高频"
    ],
    "priority": 1,
    "phonetic": "哦哈哟乌狗扎一马斯"
  },
  {
    "id": "ia_063",
    "scene": "interact",
    "subscene": "greeting",
    "cn": "晚上好",
    "jp": "こんばんは",
    "icon": "greet",
    "intent": "help_request",
    "tags": [
      "礼貌用语"
    ],
    "priority": 1,
    "phonetic": "扣恩巴恩哈"
  },
  {
    "id": "ia_064",
    "scene": "interact",
    "subscene": "greeting",
    "cn": "初次见面",
    "jp": "はじめまして",
    "icon": "greet",
    "intent": "help_request",
    "tags": [
      "礼貌用语",
      "高频"
    ],
    "priority": 1,
    "phonetic": "哈机妹马西忒"
  },
  {
    "id": "ia_065",
    "scene": "interact",
    "subscene": "comprehension",
    "cn": "我不会日语",
    "jp": "日本語が分かりません",
    "icon": "language",
    "intent": "help_request",
    "tags": [
      "高频"
    ],
    "priority": 1,
    "phonetic": "尼霍恩狗嘎哇卡里马塞恩",
    "global": true
  },
  {
    "id": "ia_066",
    "scene": "interact",
    "subscene": "comprehension",
    "cn": "我听不懂",
    "jp": "分かりません",
    "icon": "sorry",
    "intent": "help_request",
    "tags": [
      "高频"
    ],
    "priority": 1,
    "phonetic": "哇卡里马塞恩",
    "global": true
  },
  {
    "id": "ia_067",
    "scene": "interact",
    "subscene": "basic_ask",
    "cn": "这个是什么",
    "jp": "これは何ですか",
    "icon": "question",
    "intent": "location_inquiry",
    "tags": [
      "高频",
      "万能"
    ],
    "priority": 1,
    "phonetic": "扣咧哈那尼得斯卡"
  },
  {
    "id": "ia_068",
    "scene": "interact",
    "subscene": "basic_ask",
    "cn": "在哪里",
    "jp": "どこですか",
    "icon": "location",
    "intent": "location_inquiry",
    "tags": [
      "万能"
    ],
    "priority": 1,
    "phonetic": "多扣得斯卡"
  },
  {
    "id": "ia_069",
    "scene": "interact",
    "subscene": "basic_ask",
    "cn": "可以吗",
    "jp": "いいですか",
    "icon": "ok",
    "intent": "permission_request",
    "tags": [
      "万能"
    ],
    "priority": 1,
    "phonetic": "一一得斯卡"
  },
  {
    "id": "ia_070",
    "scene": "interact",
    "subscene": "basic_ask",
    "cn": "多少钱",
    "jp": "いくらですか",
    "icon": "price",
    "intent": "price_inquiry",
    "tags": [
      "高频",
      "万能"
    ],
    "priority": 1,
    "phonetic": "一库拉得斯卡"
  },
  {
    "id": "ia_071",
    "scene": "interact",
    "subscene": "basic_ask",
    "cn": "怎么做",
    "jp": "どうやってやりますか",
    "icon": "question",
    "intent": "help_request",
    "tags": [
      "万能"
    ],
    "priority": 2,
    "phonetic": "多乌亚忒亚里马斯卡"
  },
  {
    "id": "ia_072",
    "scene": "interact",
    "subscene": "ask_help",
    "cn": "我需要帮助",
    "jp": "助けてください",
    "icon": "help",
    "intent": "help_request",
    "tags": [
      "高频"
    ],
    "priority": 1,
    "phonetic": "塔斯开忒库达撒一"
  },
  {
    "id": "ia_073",
    "scene": "interact",
    "subscene": "ask_help",
    "cn": "可以告诉我吗",
    "jp": "教えてください",
    "icon": "teach",
    "intent": "help_request",
    "tags": [
      "高频"
    ],
    "priority": 1,
    "phonetic": "哦西诶忒库达撒一"
  },
  {
    "id": "ia_074",
    "scene": "interact",
    "subscene": "ask_help",
    "cn": "我有问题",
    "jp": "問題があります",
    "icon": "question",
    "intent": "help_request",
    "tags": [],
    "priority": 2,
    "phonetic": "莫恩达一嘎阿里马斯"
  },
  {
    "id": "ia_075",
    "scene": "interact",
    "subscene": "ending",
    "cn": "非常感谢",
    "jp": "本当にありがとうございます",
    "icon": "thanks",
    "intent": "help_request",
    "tags": [
      "礼貌用语",
      "高频"
    ],
    "priority": 1,
    "phonetic": "霍恩托乌尼阿里嘎托乌狗扎一马斯"
  },
  {
    "id": "ia_076",
    "scene": "interact",
    "subscene": "ending",
    "cn": "不好意思打扰了",
    "jp": "お邪魔しました",
    "icon": "sorry",
    "intent": "help_request",
    "tags": [
      "礼貌用语"
    ],
    "priority": 1,
    "phonetic": "哦加马西马西塔"
  },
  {
    "id": "ia_077",
    "scene": "interact",
    "subscene": "ending",
    "cn": "再见",
    "jp": "さようなら",
    "icon": "bye",
    "intent": "help_request",
    "tags": [
      "礼貌用语",
      "高频"
    ],
    "priority": 1,
    "phonetic": "撒哟乌那拉",
    "global": true
  },
  {
    "id": "ac_001",
    "scene": "accommodation",
    "subscene": "checkin",
    "cn": "我来办理入住",
    "jp": "チェックインをお願いします",
    "icon": "enter",
    "intent": "help_request",
    "tags": [
      "入住",
      "高频"
    ],
    "priority": 1,
    "phonetic": "七ェ库一恩哦哦内嘎一西马斯"
  },
  {
    "id": "ac_002",
    "scene": "accommodation",
    "subscene": "checkin",
    "cn": "我有预订",
    "jp": "予約しています",
    "icon": "reserve",
    "intent": "help_request",
    "tags": [
      "入住",
      "高频"
    ],
    "priority": 1,
    "phonetic": "哟亚库西忒一马斯"
  },
  {
    "id": "ac_003",
    "scene": "accommodation",
    "subscene": "checkin",
    "cn": "我预订了，名字是○○",
    "jp": "○○の名前で予約しています",
    "icon": "name",
    "intent": "help_request",
    "tags": [
      "入住"
    ],
    "priority": 1,
    "phonetic": "○○诺那马诶得哟亚库西忒一马斯"
  },
  {
    "id": "ac_004",
    "scene": "accommodation",
    "subscene": "checkin",
    "cn": "今晚有空房吗",
    "jp": "今夜、空いている部屋はありますか",
    "icon": "question",
    "intent": "location_inquiry",
    "tags": [
      "入住"
    ],
    "priority": 1,
    "phonetic": "扣恩亚阿一忒一鲁嘿亚哈阿里马斯卡"
  },
  {
    "id": "ac_005",
    "scene": "accommodation",
    "subscene": "checkin",
    "cn": "一晚多少钱",
    "jp": "一泊いくらですか",
    "icon": "price",
    "intent": "price_inquiry",
    "tags": [
      "入住",
      "高频"
    ],
    "priority": 1,
    "phonetic": "一七哈库一库拉得斯卡"
  },
  {
    "id": "ac_006",
    "scene": "accommodation",
    "subscene": "checkin",
    "cn": "请给我房卡",
    "jp": "ルームキーをください",
    "icon": "card",
    "intent": "help_request",
    "tags": [
      "入住"
    ],
    "priority": 1,
    "phonetic": "鲁～木 ki～哦库达撒一"
  },
  {
    "id": "ac_007",
    "scene": "accommodation",
    "subscene": "checkin",
    "cn": "需要押金吗",
    "jp": "デポジットは必要ですか",
    "icon": "coin",
    "intent": "payment_inquiry",
    "tags": [
      "入住"
    ],
    "priority": 2,
    "phonetic": "得坡机托哈 hi 次哟乌得斯卡"
  },
  {
    "id": "ac_008",
    "scene": "accommodation",
    "subscene": "checkin",
    "cn": "可以刷卡吗",
    "jp": "クレジットカードは使えますか",
    "icon": "card",
    "intent": "payment_inquiry",
    "tags": [
      "支付",
      "高频"
    ],
    "priority": 1,
    "phonetic": "库咧机托卡～多哈次卡诶马斯卡"
  },
  {
    "id": "ac_009",
    "scene": "accommodation",
    "subscene": "checkin",
    "cn": "这是护照",
    "jp": "パスポートです",
    "icon": "passport",
    "intent": "help_request",
    "tags": [
      "入住"
    ],
    "priority": 1,
    "phonetic": "帕斯坡～托得斯"
  },
  {
    "id": "ac_010",
    "scene": "accommodation",
    "subscene": "checkin",
    "cn": "可以选禁烟房吗",
    "jp": "禁煙ルームにしてもらえますか",
    "icon": "nosmoke",
    "intent": "permission_request",
    "tags": [
      "入住"
    ],
    "priority": 1,
    "phonetic": "ki 恩诶恩鲁～木尼西忒莫拉诶马斯卡"
  },
  {
    "id": "ac_011",
    "scene": "accommodation",
    "subscene": "room_info",
    "cn": "房间在几楼",
    "jp": "部屋は何階ですか",
    "icon": "elevator",
    "intent": "location_inquiry",
    "tags": [
      "房间",
      "高频"
    ],
    "priority": 1,
    "phonetic": "嘿亚哈那恩卡一得斯卡"
  },
  {
    "id": "ac_012",
    "scene": "accommodation",
    "subscene": "room_info",
    "cn": "房间号是多少",
    "jp": "部屋番号は何番ですか",
    "icon": "tag",
    "intent": "location_inquiry",
    "tags": [
      "房间"
    ],
    "priority": 1,
    "phonetic": "嘿亚巴恩狗乌哈那恩巴恩得斯卡"
  },
  {
    "id": "ac_013",
    "scene": "accommodation",
    "subscene": "room_info",
    "cn": "WiFi密码是多少",
    "jp": "Wi-Fiのパスワードを教えてください",
    "icon": "wifi",
    "intent": "help_request",
    "tags": [
      "房间",
      "高频"
    ],
    "priority": 1,
    "phonetic": "Wi-Fi 诺帕斯哇～多哦哦西诶忒库达撒一"
  },
  {
    "id": "ac_014",
    "scene": "accommodation",
    "subscene": "room_info",
    "cn": "早餐几点开始",
    "jp": "朝食は何時からですか",
    "icon": "clock",
    "intent": "location_inquiry",
    "tags": [
      "房间",
      "高频"
    ],
    "priority": 1,
    "phonetic": "乔乌消库哈那恩机卡拉得斯卡"
  },
  {
    "id": "ac_015",
    "scene": "accommodation",
    "subscene": "room_info",
    "cn": "早餐在哪里",
    "jp": "朝食はどこですか",
    "icon": "location",
    "intent": "location_inquiry",
    "tags": [
      "房间",
      "高频"
    ],
    "priority": 1,
    "phonetic": "乔乌消库哈多扣得斯卡"
  },
  {
    "id": "ac_016",
    "scene": "accommodation",
    "subscene": "room_info",
    "cn": "几点前退房",
    "jp": "チェックアウトは何時ですか",
    "icon": "clock",
    "intent": "location_inquiry",
    "tags": [
      "房间",
      "高频"
    ],
    "priority": 1,
    "phonetic": "七ェ库阿乌托哈那恩机得斯卡"
  },
  {
    "id": "ac_017",
    "scene": "accommodation",
    "subscene": "room_info",
    "cn": "大浴场在哪里",
    "jp": "大浴場はどこですか",
    "icon": "location",
    "intent": "location_inquiry",
    "tags": [
      "房间"
    ],
    "priority": 2,
    "phonetic": "达一哟库叫乌哈多扣得斯卡"
  },
  {
    "id": "ac_018",
    "scene": "accommodation",
    "subscene": "room_info",
    "cn": "电梯在哪里",
    "jp": "エレベーターはどこですか",
    "icon": "elevator",
    "intent": "location_inquiry",
    "tags": [
      "房间"
    ],
    "priority": 1,
    "phonetic": "诶咧贝～塔～哈多扣得斯卡"
  },
  {
    "id": "ac_019",
    "scene": "accommodation",
    "subscene": "problem",
    "cn": "空调打不开",
    "jp": "エアコンがつきません",
    "icon": "alert",
    "intent": "help_request",
    "tags": [
      "设备",
      "高频"
    ],
    "priority": 1,
    "phonetic": "诶阿扣恩嘎次 ki 马塞恩"
  },
  {
    "id": "ac_020",
    "scene": "accommodation",
    "subscene": "problem",
    "cn": "空调不制冷",
    "jp": "エアコンが冷えません",
    "icon": "alert",
    "intent": "help_request",
    "tags": [
      "设备"
    ],
    "priority": 1,
    "phonetic": "诶阿扣恩嘎 hi 诶马塞恩"
  },
  {
    "id": "ac_021",
    "scene": "accommodation",
    "subscene": "problem",
    "cn": "没有热水",
    "jp": "お湯が出ません",
    "icon": "alert",
    "intent": "help_request",
    "tags": [
      "设备",
      "高频"
    ],
    "priority": 1,
    "phonetic": "哦由嘎得马塞恩"
  },
  {
    "id": "ac_022",
    "scene": "accommodation",
    "subscene": "problem",
    "cn": "水龙头坏了",
    "jp": "蛇口が壊れています",
    "icon": "alert",
    "intent": "help_request",
    "tags": [
      "设备"
    ],
    "priority": 2,
    "phonetic": "加古七嘎扣哇咧忒一马斯"
  },
  {
    "id": "ac_023",
    "scene": "accommodation",
    "subscene": "problem",
    "cn": "隔壁太吵了",
    "jp": "隣の部屋がうるさいです",
    "icon": "alert",
    "intent": "help_request",
    "tags": [
      "投诉",
      "高频"
    ],
    "priority": 1,
    "phonetic": "托那里诺嘿亚嘎乌鲁撒一得斯"
  },
  {
    "id": "ac_024",
    "scene": "accommodation",
    "subscene": "problem",
    "cn": "能换个安静的房间吗",
    "jp": "静かな部屋に換えてください",
    "icon": "exchange",
    "intent": "help_request",
    "tags": [
      "投诉"
    ],
    "priority": 1,
    "phonetic": "西资卡那嘿亚尼卡诶忒库达撒一"
  },
  {
    "id": "ac_025",
    "scene": "accommodation",
    "subscene": "problem",
    "cn": "房门打不开",
    "jp": "ドアが開きません",
    "icon": "lock",
    "intent": "help_request",
    "tags": [
      "设备"
    ],
    "priority": 1,
    "phonetic": "多阿嘎 hi 拉 ki 马塞恩"
  },
  {
    "id": "ac_026",
    "scene": "accommodation",
    "subscene": "problem",
    "cn": "灯不亮了",
    "jp": "電球が切れました",
    "icon": "alert",
    "intent": "help_request",
    "tags": [
      "设备"
    ],
    "priority": 2,
    "phonetic": "得恩 kiu 乌嘎 ki 咧马西塔"
  },
  {
    "id": "ac_027",
    "scene": "accommodation",
    "subscene": "problem",
    "cn": "马桶堵了",
    "jp": "トイレの水が流れません",
    "icon": "toilet",
    "intent": "help_request",
    "tags": [
      "设备"
    ],
    "priority": 2,
    "phonetic": "托一咧诺米资嘎那嘎咧马塞恩"
  },
  {
    "id": "ac_028",
    "scene": "accommodation",
    "subscene": "problem",
    "cn": "电视坏了",
    "jp": "テレビが壊れています",
    "icon": "alert",
    "intent": "help_request",
    "tags": [
      "设备"
    ],
    "priority": 2,
    "phonetic": "忒咧 bi 嘎扣哇咧忒一马斯"
  },
  {
    "id": "ac_029",
    "scene": "accommodation",
    "subscene": "problem",
    "cn": "WiFi连不上",
    "jp": "Wi-Fiが繋がりません",
    "icon": "wifi",
    "intent": "help_request",
    "tags": [
      "设备",
      "高频"
    ],
    "priority": 1,
    "phonetic": "Wi-Fi 嘎次那嘎里马塞恩"
  },
  {
    "id": "ac_030",
    "scene": "accommodation",
    "subscene": "problem",
    "cn": "请来房间看一下",
    "jp": "部屋に来てください",
    "icon": "help",
    "intent": "help_request",
    "tags": [
      "设备"
    ],
    "priority": 1,
    "phonetic": "嘿亚尼 ki 忒库达撒一"
  },
  {
    "id": "ac_031",
    "scene": "accommodation",
    "subscene": "service",
    "cn": "可以多一条毛巾吗",
    "jp": "タオルをもう一枚いただけますか",
    "icon": "hand",
    "intent": "help_request",
    "tags": [
      "用品",
      "高频"
    ],
    "priority": 1,
    "phonetic": "塔哦鲁哦莫乌一七马一一塔达开马斯卡"
  },
  {
    "id": "ac_032",
    "scene": "accommodation",
    "subscene": "service",
    "cn": "请给我浴巾",
    "jp": "バスタオルをもう一枚ください",
    "icon": "hand",
    "intent": "help_request",
    "tags": [
      "用品"
    ],
    "priority": 2,
    "phonetic": "巴斯塔哦鲁哦莫乌一七马一库达撒一"
  },
  {
    "id": "ac_033",
    "scene": "accommodation",
    "subscene": "service",
    "cn": "牙刷和拖鞋有吗",
    "jp": "歯ブラシとスリッパはありますか",
    "icon": "question",
    "intent": "location_inquiry",
    "tags": [
      "用品"
    ],
    "priority": 1,
    "phonetic": "哈不拉西托斯里帕哈阿里马斯卡"
  },
  {
    "id": "ac_034",
    "scene": "accommodation",
    "subscene": "service",
    "cn": "可以帮我叫出租车吗",
    "jp": "タクシーを呼んでもらえますか",
    "icon": "taxi",
    "intent": "help_request",
    "tags": [
      "帮助",
      "高频"
    ],
    "priority": 1,
    "phonetic": "塔库西～哦哟恩得莫拉诶马斯卡"
  },
  {
    "id": "ac_035",
    "scene": "accommodation",
    "subscene": "service",
    "cn": "行李可以寄存吗",
    "jp": "荷物を預けられますか",
    "icon": "luggage",
    "intent": "help_request",
    "tags": [
      "帮助",
      "高频"
    ],
    "priority": 1,
    "phonetic": "尼莫次哦阿资开拉咧马斯卡"
  },
  {
    "id": "ac_036",
    "scene": "accommodation",
    "subscene": "service",
    "cn": "能晚一点退房吗",
    "jp": "チェックアウトを延長できますか",
    "icon": "clock",
    "intent": "permission_request",
    "tags": [
      "帮助"
    ],
    "priority": 1,
    "phonetic": "七ェ库阿乌托哦诶恩乔乌得 ki 马斯卡"
  },
  {
    "id": "ac_037",
    "scene": "accommodation",
    "subscene": "service",
    "cn": "请打扫房间",
    "jp": "部屋の掃除をお願いします",
    "icon": "search",
    "intent": "help_request",
    "tags": [
      "清洁"
    ],
    "priority": 1,
    "phonetic": "嘿亚诺搜乌机哦哦内嘎一西马斯"
  },
  {
    "id": "ac_038",
    "scene": "accommodation",
    "subscene": "service",
    "cn": "有叫醒服务吗",
    "jp": "モーニングコールはありますか",
    "icon": "bell",
    "intent": "location_inquiry",
    "tags": [
      "帮助"
    ],
    "priority": 2,
    "phonetic": "莫～尼恩古扣～鲁哈阿里马斯卡"
  },
  {
    "id": "ac_039",
    "scene": "accommodation",
    "subscene": "service",
    "cn": "有转换插头吗",
    "jp": "変圧器はありますか",
    "icon": "charge",
    "intent": "location_inquiry",
    "tags": [
      "用品"
    ],
    "priority": 2,
    "phonetic": "嘿恩阿次 ki 哈阿里马斯卡"
  },
  {
    "id": "ac_040",
    "scene": "accommodation",
    "subscene": "service",
    "cn": "可以帮我搬行李吗",
    "jp": "荷物を運んでもらえますか",
    "icon": "luggage",
    "intent": "help_request",
    "tags": [
      "帮助"
    ],
    "priority": 2,
    "phonetic": "尼莫次哦哈扣恩得莫拉诶马斯卡"
  },
  {
    "id": "ac_041",
    "scene": "accommodation",
    "subscene": "checkout",
    "cn": "我要退房",
    "jp": "チェックアウトをお願いします",
    "icon": "exit",
    "intent": "payment_inquiry",
    "tags": [
      "退房",
      "高频"
    ],
    "priority": 1,
    "phonetic": "七ェ库阿乌托哦哦内嘎一西马斯"
  },
  {
    "id": "ac_042",
    "scene": "accommodation",
    "subscene": "checkout",
    "cn": "请结账",
    "jp": "お会計をお願いします",
    "icon": "bill",
    "intent": "payment_inquiry",
    "tags": [
      "退房"
    ],
    "priority": 1,
    "phonetic": "哦卡一开一哦哦内嘎一西马斯"
  },
  {
    "id": "ac_043",
    "scene": "accommodation",
    "subscene": "checkout",
    "cn": "可以开发票吗",
    "jp": "領収書をください",
    "icon": "receipt",
    "intent": "payment_inquiry",
    "tags": [
      "退房"
    ],
    "priority": 1,
    "phonetic": "料乌修乌消哦库达撒一"
  },
  {
    "id": "ac_044",
    "scene": "accommodation",
    "subscene": "checkout",
    "cn": "我用了冰箱里的饮料",
    "jp": "冷蔵庫のドリンクを使いました",
    "icon": "cart",
    "intent": "payment_inquiry",
    "tags": [
      "退房"
    ],
    "priority": 2,
    "phonetic": "咧一走乌扣诺多里恩库哦次卡一马西塔"
  },
  {
    "id": "ac_045",
    "scene": "accommodation",
    "subscene": "checkout",
    "cn": "谢谢，住得很舒服",
    "jp": "お世話になりました",
    "icon": "thanks",
    "intent": "help_request",
    "tags": [
      "退房",
      "礼貌用语"
    ],
    "priority": 1,
    "phonetic": "哦塞哇尼那里马西塔"
  },
  {
    "id": "md_001",
    "scene": "medical",
    "subscene": "enter",
    "cn": "我要看医生",
    "jp": "診察をお願いします",
    "icon": "doctor",
    "intent": "help_request",
    "tags": [
      "医疗",
      "高频"
    ],
    "rank": "L1",
    "priority": 1,
    "phonetic": "西恩撒次哦哦内嘎一西马斯"
  },
  {
    "id": "md_002",
    "scene": "medical",
    "subscene": "enter",
    "cn": "我想挂号",
    "jp": "受付をお願いします",
    "icon": "ticket",
    "intent": "help_request",
    "tags": [
      "医疗",
      "高频"
    ],
    "rank": "L1",
    "priority": 1,
    "phonetic": "乌开次开哦哦内嘎一西马斯"
  },
  {
    "id": "md_003",
    "scene": "medical",
    "subscene": "enter",
    "cn": "初诊可以吗",
    "jp": "初診でも大丈夫ですか",
    "icon": "question",
    "intent": "permission_request",
    "tags": [
      "医疗"
    ],
    "rank": "L2",
    "priority": 2,
    "phonetic": "消西恩得莫达一叫乌不得斯卡"
  },
  {
    "id": "md_004",
    "scene": "medical",
    "subscene": "enter",
    "cn": "我没有预约",
    "jp": "予約していません",
    "icon": "reserve",
    "intent": "help_request",
    "tags": [
      "医疗",
      "高频"
    ],
    "rank": "L1",
    "priority": 1,
    "phonetic": "哟亚库西忒一马塞恩"
  },
  {
    "id": "md_005",
    "scene": "medical",
    "subscene": "enter",
    "cn": "今天可以看吗",
    "jp": "今日診てもらえますか",
    "icon": "calendar",
    "intent": "permission_request",
    "tags": [
      "医疗"
    ],
    "rank": "L2",
    "priority": 2,
    "phonetic": "kio 乌米忒莫拉诶马斯卡"
  },
  {
    "id": "md_006",
    "scene": "medical",
    "subscene": "enter",
    "cn": "内科在哪里",
    "jp": "内科はどこですか",
    "icon": "location",
    "intent": "location_inquiry",
    "tags": [
      "医疗"
    ],
    "rank": "L2",
    "priority": 2,
    "phonetic": "那一卡哈多扣得斯卡"
  },
  {
    "id": "md_007",
    "scene": "medical",
    "subscene": "enter",
    "cn": "外科在哪里",
    "jp": "外科はどこですか",
    "icon": "location",
    "intent": "location_inquiry",
    "tags": [
      "医疗"
    ],
    "rank": "L2",
    "priority": 2,
    "phonetic": "给卡哈多扣得斯卡"
  },
  {
    "id": "md_008",
    "scene": "medical",
    "subscene": "enter",
    "cn": "请问怎么挂号",
    "jp": "受付はどうすればいいですか",
    "icon": "question",
    "intent": "help_request",
    "tags": [
      "医疗",
      "高频"
    ],
    "rank": "L1",
    "priority": 1,
    "phonetic": "乌开次开哈多乌斯咧巴一一得斯卡"
  },
  {
    "id": "md_009",
    "scene": "medical",
    "subscene": "enter",
    "cn": "我第一次来",
    "jp": "初めてです",
    "icon": "person",
    "intent": "help_request",
    "tags": [
      "医疗"
    ],
    "rank": "L2",
    "priority": 2,
    "phonetic": "哈机妹忒得斯"
  },
  {
    "id": "md_010",
    "scene": "medical",
    "subscene": "enter",
    "cn": "可以用保险吗",
    "jp": "保険は使えますか",
    "icon": "insurance",
    "intent": "payment_inquiry",
    "tags": [
      "医疗",
      "高频"
    ],
    "rank": "L1",
    "priority": 1,
    "phonetic": "霍开恩哈次卡诶马斯卡"
  },
  {
    "id": "md_011",
    "scene": "medical",
    "subscene": "enter",
    "cn": "健康保险证在这里",
    "jp": "健康保険証です、こちら",
    "icon": "passport",
    "intent": "help_request",
    "tags": [
      "医疗"
    ],
    "rank": "L2",
    "priority": 2,
    "phonetic": "开恩扣乌霍开恩消乌得斯扣七拉"
  },
  {
    "id": "md_012",
    "scene": "medical",
    "subscene": "enter",
    "cn": "请帮我填写",
    "jp": "記入を手伝ってもらえますか",
    "icon": "write",
    "intent": "help_request",
    "tags": [
      "医疗"
    ],
    "rank": "L3",
    "priority": 2,
    "phonetic": "kiniu 乌哦忒次达忒莫拉诶马斯卡"
  },
  {
    "id": "md_013",
    "scene": "medical",
    "subscene": "core",
    "cn": "我头痛",
    "jp": "頭が痛いです",
    "icon": "headach",
    "intent": "help_request",
    "tags": [
      "医疗",
      "高频"
    ],
    "rank": "L1",
    "priority": 1,
    "phonetic": "阿塔马嘎一塔一得斯"
  },
  {
    "id": "md_014",
    "scene": "medical",
    "subscene": "core",
    "cn": "我发烧了",
    "jp": "熱があります",
    "icon": "fever",
    "intent": "help_request",
    "tags": [
      "医疗",
      "高频"
    ],
    "rank": "L1",
    "priority": 1,
    "phonetic": "内次嘎阿里马斯"
  },
  {
    "id": "md_015",
    "scene": "medical",
    "subscene": "core",
    "cn": "我咳嗽",
    "jp": "咳が出ます",
    "icon": "sick",
    "intent": "help_request",
    "tags": [
      "医疗",
      "高频"
    ],
    "rank": "L1",
    "priority": 1,
    "phonetic": "塞 ki 嘎得马斯"
  },
  {
    "id": "md_016",
    "scene": "medical",
    "subscene": "core",
    "cn": "我肚子痛",
    "jp": "お腹が痛いです",
    "icon": "stomach",
    "intent": "help_request",
    "tags": [
      "医疗",
      "高频"
    ],
    "rank": "L1",
    "priority": 1,
    "phonetic": "哦那卡嘎一塔一得斯"
  },
  {
    "id": "md_017",
    "scene": "medical",
    "subscene": "core",
    "cn": "我喉咙痛",
    "jp": "喉が痛いです",
    "icon": "sick",
    "intent": "help_request",
    "tags": [
      "医疗",
      "高频"
    ],
    "rank": "L1",
    "priority": 1,
    "phonetic": "诺多嘎一塔一得斯"
  },
  {
    "id": "md_018",
    "scene": "medical",
    "subscene": "core",
    "cn": "我恶心",
    "jp": "吐き気がします",
    "icon": "sick",
    "intent": "help_request",
    "tags": [
      "医疗"
    ],
    "rank": "L2",
    "priority": 2,
    "phonetic": "哈 ki 开嘎西马斯"
  },
  {
    "id": "md_019",
    "scene": "medical",
    "subscene": "core",
    "cn": "我拉肚子",
    "jp": "下痢をしています",
    "icon": "sick",
    "intent": "help_request",
    "tags": [
      "医疗"
    ],
    "rank": "L2",
    "priority": 2,
    "phonetic": "给里哦西忒一马斯"
  },
  {
    "id": "md_020",
    "scene": "medical",
    "subscene": "core",
    "cn": "我过敏了",
    "jp": "アレルギーが出ました",
    "icon": "allergy",
    "intent": "help_request",
    "tags": [
      "医疗"
    ],
    "rank": "L2",
    "priority": 2,
    "phonetic": "阿咧鲁 gi～嘎得马西塔"
  },
  {
    "id": "md_021",
    "scene": "medical",
    "subscene": "core",
    "cn": "我呼吸有点困难",
    "jp": "息が少し苦しいです",
    "icon": "sick",
    "intent": "help_request",
    "tags": [
      "医疗",
      "高频"
    ],
    "rank": "L1",
    "priority": 1,
    "phonetic": "一 ki 嘎斯扣西库鲁西一得斯"
  },
  {
    "id": "md_022",
    "scene": "medical",
    "subscene": "core",
    "cn": "昨天开始不舒服",
    "jp": "昨日から体調が悪いです",
    "icon": "calendar",
    "intent": "help_request",
    "tags": [
      "医疗"
    ],
    "rank": "L2",
    "priority": 2,
    "phonetic": "ki 诺乌卡拉塔一乔乌嘎哇鲁一得斯"
  },
  {
    "id": "md_023",
    "scene": "medical",
    "subscene": "core",
    "cn": "一直在痛",
    "jp": "ずっと痛いです",
    "icon": "sick",
    "intent": "help_request",
    "tags": [
      "医疗"
    ],
    "rank": "L2",
    "priority": 2,
    "phonetic": "资托一塔一得斯"
  },
  {
    "id": "md_024",
    "scene": "medical",
    "subscene": "core",
    "cn": "有点晕",
    "jp": "めまいがします",
    "icon": "sick",
    "intent": "help_request",
    "tags": [
      "医疗"
    ],
    "rank": "L3",
    "priority": 2,
    "phonetic": "妹马一嘎西马斯"
  },
  {
    "id": "md_025",
    "scene": "medical",
    "subscene": "confirm",
    "cn": "严重吗",
    "jp": "重症ですか",
    "icon": "question",
    "intent": "location_inquiry",
    "tags": [
      "医疗",
      "高频"
    ],
    "rank": "L1",
    "priority": 1,
    "phonetic": "就乌消乌得斯卡"
  },
  {
    "id": "md_026",
    "scene": "medical",
    "subscene": "confirm",
    "cn": "需要检查吗",
    "jp": "検査は必要ですか",
    "icon": "search",
    "intent": "location_inquiry",
    "tags": [
      "医疗"
    ],
    "rank": "L2",
    "priority": 2,
    "phonetic": "开恩撒哈 hi 次哟乌得斯卡"
  },
  {
    "id": "md_027",
    "scene": "medical",
    "subscene": "confirm",
    "cn": "要抽血吗",
    "jp": "採血はありますか",
    "icon": "question",
    "intent": "location_inquiry",
    "tags": [
      "医疗"
    ],
    "rank": "L2",
    "priority": 2,
    "phonetic": "撒一开次哈阿里马斯卡"
  },
  {
    "id": "md_028",
    "scene": "medical",
    "subscene": "confirm",
    "cn": "要拍片吗",
    "jp": "レントゲンは必要ですか",
    "icon": "camera",
    "intent": "location_inquiry",
    "tags": [
      "医疗"
    ],
    "rank": "L2",
    "priority": 2,
    "phonetic": "咧恩托给恩哈 hi 次哟乌得斯卡"
  },
  {
    "id": "md_029",
    "scene": "medical",
    "subscene": "confirm",
    "cn": "需要住院吗",
    "jp": "入院は必要ですか",
    "icon": "hospital",
    "intent": "location_inquiry",
    "tags": [
      "医疗"
    ],
    "rank": "L2",
    "priority": 2,
    "phonetic": "niu 乌一恩哈 hi 次哟乌得斯卡"
  },
  {
    "id": "md_030",
    "scene": "medical",
    "subscene": "confirm",
    "cn": "大概多久能好",
    "jp": "どのくらいで治りますか",
    "icon": "clock",
    "intent": "location_inquiry",
    "tags": [
      "医疗"
    ],
    "rank": "L2",
    "priority": 2,
    "phonetic": "多诺库拉一得那哦里马斯卡"
  },
  {
    "id": "md_031",
    "scene": "medical",
    "subscene": "confirm",
    "cn": "今天能看完吗",
    "jp": "今日中に終わりますか",
    "icon": "clock",
    "intent": "location_inquiry",
    "tags": [
      "医疗"
    ],
    "rank": "L3",
    "priority": 2,
    "phonetic": "kio 乌秋乌尼哦哇里马斯卡"
  },
  {
    "id": "md_032",
    "scene": "medical",
    "subscene": "confirm",
    "cn": "可以开药吗",
    "jp": "薬を処方してもらえますか",
    "icon": "pharmacy",
    "intent": "help_request",
    "tags": [
      "医疗",
      "高频"
    ],
    "rank": "L1",
    "priority": 1,
    "phonetic": "库斯里哦消霍乌西忒莫拉诶马斯卡"
  },
  {
    "id": "md_033",
    "scene": "medical",
    "subscene": "confirm",
    "cn": "费用大概多少",
    "jp": "費用はどのくらいですか",
    "icon": "price",
    "intent": "price_inquiry",
    "tags": [
      "医疗"
    ],
    "rank": "L2",
    "priority": 2,
    "phonetic": "hi 哟乌哈多诺库拉一得斯卡"
  },
  {
    "id": "md_034",
    "scene": "medical",
    "subscene": "confirm",
    "cn": "需要复诊吗",
    "jp": "再診は必要ですか",
    "icon": "calendar",
    "intent": "location_inquiry",
    "tags": [
      "医疗"
    ],
    "rank": "L2",
    "priority": 2,
    "phonetic": "撒一米哈 hi 次哟乌得斯卡"
  },
  {
    "id": "md_035",
    "scene": "medical",
    "subscene": "confirm",
    "cn": "这个危险吗",
    "jp": "これは危険ですか",
    "icon": "danger",
    "intent": "location_inquiry",
    "tags": [
      "医疗"
    ],
    "rank": "L3",
    "priority": 2,
    "phonetic": "扣咧哈 ki 开恩得斯卡"
  },
  {
    "id": "md_036",
    "scene": "medical",
    "subscene": "problem",
    "cn": "这个药怎么吃",
    "jp": "この薬はどうやって飲みますか",
    "icon": "pharmacy",
    "intent": "help_request",
    "tags": [
      "医疗",
      "高频"
    ],
    "rank": "L1",
    "priority": 1,
    "phonetic": "扣诺库斯里哈多乌亚忒诺米马斯卡"
  },
  {
    "id": "md_037",
    "scene": "medical",
    "subscene": "problem",
    "cn": "有副作用吗",
    "jp": "副作用はありますか",
    "icon": "allergy",
    "intent": "location_inquiry",
    "tags": [
      "医疗"
    ],
    "rank": "L2",
    "priority": 2,
    "phonetic": "夫库撒哟乌哈阿里马斯卡"
  },
  {
    "id": "md_038",
    "scene": "medical",
    "subscene": "problem",
    "cn": "可以换药吗",
    "jp": "薬を変えてもらえますか",
    "icon": "exchange",
    "intent": "help_request",
    "tags": [
      "医疗"
    ],
    "rank": "L3",
    "priority": 2,
    "phonetic": "库斯里哦卡诶忒莫拉诶马斯卡"
  },
  {
    "id": "md_039",
    "scene": "medical",
    "subscene": "problem",
    "cn": "这是抗生素吗",
    "jp": "これは抗生物質ですか",
    "icon": "question",
    "intent": "location_inquiry",
    "tags": [
      "医疗"
    ],
    "rank": "L2",
    "priority": 2,
    "phonetic": "扣咧哈扣乌塞一不西次得斯卡"
  },
  {
    "id": "md_040",
    "scene": "medical",
    "subscene": "problem",
    "cn": "吃几天",
    "jp": "何日間飲みますか",
    "icon": "calendar",
    "intent": "location_inquiry",
    "tags": [
      "医疗"
    ],
    "rank": "L2",
    "priority": 2,
    "phonetic": "那恩尼七卡恩诺米马斯卡"
  },
  {
    "id": "md_041",
    "scene": "medical",
    "subscene": "problem",
    "cn": "什么时候会好",
    "jp": "いつ頃治りますか",
    "icon": "clock",
    "intent": "location_inquiry",
    "tags": [
      "医疗"
    ],
    "rank": "L2",
    "priority": 2,
    "phonetic": "一次扣罗那哦里马斯卡"
  },
  {
    "id": "md_042",
    "scene": "medical",
    "subscene": "problem",
    "cn": "可以上学上班吗",
    "jp": "学校や仕事に行ってもいいですか",
    "icon": "question",
    "intent": "permission_request",
    "tags": [
      "医疗"
    ],
    "rank": "L3",
    "priority": 2,
    "phonetic": "嘎扣乌亚西狗托尼一忒莫一一得斯卡"
  },
  {
    "id": "md_043",
    "scene": "medical",
    "subscene": "end",
    "cn": "在哪里取药",
    "jp": "薬はどこでもらえますか",
    "icon": "pharmacy",
    "intent": "location_inquiry",
    "tags": [
      "医疗",
      "高频"
    ],
    "rank": "L1",
    "priority": 1,
    "phonetic": "库斯里哈多扣得莫拉诶马斯卡"
  },
  {
    "id": "md_044",
    "scene": "medical",
    "subscene": "end",
    "cn": "这个怎么用",
    "jp": "これはどうやって使いますか",
    "icon": "question",
    "intent": "help_request",
    "tags": [
      "医疗"
    ],
    "rank": "L2",
    "priority": 2,
    "phonetic": "扣咧哈多乌亚忒次卡一马斯卡"
  },
  {
    "id": "md_045",
    "scene": "medical",
    "subscene": "end",
    "cn": "一天几次",
    "jp": "一日何回ですか",
    "icon": "clock",
    "intent": "location_inquiry",
    "tags": [
      "医疗",
      "高频"
    ],
    "rank": "L1",
    "priority": 1,
    "phonetic": "一七尼七那恩卡一得斯卡"
  },
  {
    "id": "md_046",
    "scene": "medical",
    "subscene": "end",
    "cn": "饭前还是饭后",
    "jp": "食前ですか食後ですか",
    "icon": "rice",
    "intent": "location_inquiry",
    "tags": [
      "医疗",
      "高频"
    ],
    "rank": "L1",
    "priority": 1,
    "phonetic": "消库在恩得斯卡消库狗得斯卡"
  },
  {
    "id": "md_047",
    "scene": "medical",
    "subscene": "end",
    "cn": "谢谢医生",
    "jp": "先生、ありがとうございました",
    "icon": "thanks",
    "intent": "help_request",
    "tags": [
      "医疗",
      "礼貌用语"
    ],
    "rank": "L1",
    "priority": 1,
    "phonetic": "塞恩塞一阿里嘎托乌狗扎一马西塔"
  },
  {
    "id": "ad_001",
    "scene": "admin",
    "subscene": "enter",
    "cn": "我来办理手续",
    "jp": "手続きをしたいです",
    "icon": "enter",
    "intent": "help_request",
    "tags": [
      "行政",
      "高频"
    ],
    "rank": "L1",
    "priority": 1,
    "phonetic": "忒次资 ki 哦西塔一得斯"
  },
  {
    "id": "ad_002",
    "scene": "admin",
    "subscene": "enter",
    "cn": "在哪里办理这个",
    "jp": "これはどこで手続きできますか",
    "icon": "location",
    "intent": "location_inquiry",
    "tags": [
      "行政",
      "高频"
    ],
    "rank": "L1",
    "priority": 1,
    "phonetic": "扣咧哈多扣得忒次资 ki 得 ki 马斯卡"
  },
  {
    "id": "ad_003",
    "scene": "admin",
    "subscene": "enter",
    "cn": "区役所在哪里",
    "jp": "区役所はどこですか",
    "icon": "location",
    "intent": "location_inquiry",
    "tags": [
      "行政"
    ],
    "rank": "L2",
    "priority": 2,
    "phonetic": "库亚库消哈多扣得斯卡"
  },
  {
    "id": "ad_004",
    "scene": "admin",
    "subscene": "enter",
    "cn": "入管局怎么走",
    "jp": "入国管理局はどう行けばいいですか",
    "icon": "direction",
    "intent": "direction_request",
    "tags": [
      "行政"
    ],
    "rank": "L2",
    "priority": 2,
    "phonetic": "niu 乌扣库卡恩里 kio 库哈多乌一开巴一一得斯卡"
  },
  {
    "id": "ad_005",
    "scene": "admin",
    "subscene": "enter",
    "cn": "我预约了",
    "jp": "予約しています",
    "icon": "reserve",
    "intent": "help_request",
    "tags": [
      "行政"
    ],
    "rank": "L2",
    "priority": 2,
    "phonetic": "哟亚库西忒一马斯"
  },
  {
    "id": "ad_006",
    "scene": "admin",
    "subscene": "enter",
    "cn": "请问哪个窗口",
    "jp": "どの窓口ですか",
    "icon": "question",
    "intent": "location_inquiry",
    "tags": [
      "行政"
    ],
    "rank": "L2",
    "priority": 2,
    "phonetic": "多诺马多古七得斯卡"
  },
  {
    "id": "ad_007",
    "scene": "admin",
    "subscene": "enter",
    "cn": "这个业务在哪里办",
    "jp": "この手続きはどの窓口ですか",
    "icon": "question",
    "intent": "location_inquiry",
    "tags": [
      "行政",
      "高频"
    ],
    "rank": "L1",
    "priority": 1,
    "phonetic": "扣诺忒次资 ki 哈多诺马多古七得斯卡"
  },
  {
    "id": "ad_008",
    "scene": "admin",
    "subscene": "core",
    "cn": "这是我的在留卡",
    "jp": "在留カードです",
    "icon": "passport",
    "intent": "help_request",
    "tags": [
      "行政",
      "高频"
    ],
    "rank": "L1",
    "priority": 1,
    "phonetic": "扎一留乌卡～多得斯"
  },
  {
    "id": "ad_009",
    "scene": "admin",
    "subscene": "core",
    "cn": "这是我的护照",
    "jp": "パスポートです",
    "icon": "passport",
    "intent": "help_request",
    "tags": [
      "行政"
    ],
    "rank": "L2",
    "priority": 2,
    "phonetic": "帕斯坡～托得斯"
  },
  {
    "id": "ad_010",
    "scene": "admin",
    "subscene": "core",
    "cn": "这是住民票",
    "jp": "住民票です",
    "icon": "receipt",
    "intent": "help_request",
    "tags": [
      "行政"
    ],
    "rank": "L2",
    "priority": 2,
    "phonetic": "就乌米恩 hio 乌得斯"
  },
  {
    "id": "ad_011",
    "scene": "admin",
    "subscene": "core",
    "cn": "我已经填好了",
    "jp": "もう記入しました",
    "icon": "write",
    "intent": "help_request",
    "tags": [
      "行政"
    ],
    "rank": "L2",
    "priority": 2,
    "phonetic": "莫乌 kiniu 乌西马西塔"
  },
  {
    "id": "ad_012",
    "scene": "admin",
    "subscene": "core",
    "cn": "请帮我确认",
    "jp": "確認してもらえますか",
    "icon": "eye",
    "intent": "help_request",
    "tags": [
      "行政"
    ],
    "rank": "L2",
    "priority": 2,
    "phonetic": "卡库尼恩西忒莫拉诶马斯卡"
  },
  {
    "id": "ad_013",
    "scene": "admin",
    "subscene": "core",
    "cn": "还需要什么材料",
    "jp": "他に必要な書類はありますか",
    "icon": "question",
    "intent": "location_inquiry",
    "tags": [
      "行政",
      "高频"
    ],
    "rank": "L1",
    "priority": 1,
    "phonetic": "塔尼 hi 次哟乌那消鲁一哈阿里马斯卡"
  },
  {
    "id": "ad_014",
    "scene": "admin",
    "subscene": "core",
    "cn": "这个表格对吗",
    "jp": "この用紙で合っていますか",
    "icon": "question",
    "intent": "location_inquiry",
    "tags": [
      "行政"
    ],
    "rank": "L2",
    "priority": 2,
    "phonetic": "扣诺哟乌西得阿忒一马斯卡"
  },
  {
    "id": "ad_015",
    "scene": "admin",
    "subscene": "core",
    "cn": "请检查一下",
    "jp": "チェックしてください",
    "icon": "eye",
    "intent": "help_request",
    "tags": [
      "行政"
    ],
    "rank": "L3",
    "priority": 2,
    "phonetic": "七ェ库西忒库达撒一"
  },
  {
    "id": "ad_016",
    "scene": "admin",
    "subscene": "confirm",
    "cn": "还需要什么",
    "jp": "他に何が必要ですか",
    "icon": "question",
    "intent": "location_inquiry",
    "tags": [
      "行政"
    ],
    "rank": "L2",
    "priority": 2,
    "phonetic": "塔尼那尼嘎 hi 次哟乌得斯卡"
  },
  {
    "id": "ad_017",
    "scene": "admin",
    "subscene": "confirm",
    "cn": "要等多久",
    "jp": "どのくらい待ちますか",
    "icon": "clock",
    "intent": "location_inquiry",
    "tags": [
      "行政",
      "高频"
    ],
    "rank": "L1",
    "priority": 1,
    "phonetic": "多诺库拉一马七马斯卡"
  },
  {
    "id": "ad_018",
    "scene": "admin",
    "subscene": "confirm",
    "cn": "什么时候可以完成",
    "jp": "いつ頃完了しますか",
    "icon": "clock",
    "intent": "location_inquiry",
    "tags": [
      "行政"
    ],
    "rank": "L2",
    "priority": 2,
    "phonetic": "一次扣罗卡恩料乌西马斯卡"
  },
  {
    "id": "ad_019",
    "scene": "admin",
    "subscene": "confirm",
    "cn": "可以邮寄吗",
    "jp": "郵送でもいいですか",
    "icon": "send",
    "intent": "permission_request",
    "tags": [
      "行政"
    ],
    "rank": "L2",
    "priority": 2,
    "phonetic": "由乌搜乌得莫一一得斯卡"
  },
  {
    "id": "ad_020",
    "scene": "admin",
    "subscene": "confirm",
    "cn": "可以网上办理吗",
    "jp": "オンラインでもできますか",
    "icon": "mobile",
    "intent": "permission_request",
    "tags": [
      "行政"
    ],
    "rank": "L2",
    "priority": 2,
    "phonetic": "哦恩拉一恩得莫得 ki 马斯卡"
  },
  {
    "id": "ad_021",
    "scene": "admin",
    "subscene": "confirm",
    "cn": "需要翻译吗",
    "jp": "通訳は必要ですか",
    "icon": "translate",
    "intent": "location_inquiry",
    "tags": [
      "行政"
    ],
    "rank": "L3",
    "priority": 2,
    "phonetic": "次乌亚库哈 hi 次哟乌得斯卡"
  },
  {
    "id": "ad_022",
    "scene": "admin",
    "subscene": "confirm",
    "cn": "要收费吗",
    "jp": "手数料はかかりますか",
    "icon": "price",
    "intent": "price_inquiry",
    "tags": [
      "行政",
      "高频"
    ],
    "rank": "L1",
    "priority": 1,
    "phonetic": "忒斯乌料乌哈卡卡里马斯卡"
  },
  {
    "id": "ad_023",
    "scene": "admin",
    "subscene": "confirm",
    "cn": "下一个步骤是什么",
    "jp": "次のステップは何ですか",
    "icon": "question",
    "intent": "location_inquiry",
    "tags": [
      "行政"
    ],
    "rank": "L2",
    "priority": 2,
    "phonetic": "次 gi 诺斯忒普哈那尼得斯卡"
  },
  {
    "id": "ad_024",
    "scene": "admin",
    "subscene": "problem",
    "cn": "太复杂了",
    "jp": "複雑すぎます",
    "icon": "alert",
    "intent": "help_request",
    "tags": [
      "行政"
    ],
    "rank": "L2",
    "priority": 2,
    "phonetic": "夫库扎次斯 gi 马斯"
  },
  {
    "id": "ad_025",
    "scene": "admin",
    "subscene": "problem",
    "cn": "材料不够怎么办",
    "jp": "書類が足りない場合はどうすれば",
    "icon": "question",
    "intent": "help_request",
    "tags": [
      "行政",
      "高频"
    ],
    "rank": "L1",
    "priority": 1,
    "phonetic": "消鲁一嘎塔里那一巴阿一哈多乌斯咧巴"
  },
  {
    "id": "ad_026",
    "scene": "admin",
    "subscene": "problem",
    "cn": "需要重新申请吗",
    "jp": "再申請は必要ですか",
    "icon": "question",
    "intent": "location_inquiry",
    "tags": [
      "行政"
    ],
    "rank": "L2",
    "priority": 2,
    "phonetic": "撒一西恩塞一哈 hi 次哟乌得斯卡"
  },
  {
    "id": "ad_027",
    "scene": "admin",
    "subscene": "problem",
    "cn": "已经过期了",
    "jp": "もう期限切れです",
    "icon": "alert",
    "intent": "help_request",
    "tags": [
      "行政"
    ],
    "rank": "L2",
    "priority": 2,
    "phonetic": "莫乌 ki 给恩 gi 咧得斯"
  },
  {
    "id": "ad_028",
    "scene": "admin",
    "subscene": "problem",
    "cn": "可以代办吗",
    "jp": "代理でもできますか",
    "icon": "person",
    "intent": "permission_request",
    "tags": [
      "行政"
    ],
    "rank": "L2",
    "priority": 2,
    "phonetic": "达一里得莫得 ki 马斯卡"
  },
  {
    "id": "ad_029",
    "scene": "admin",
    "subscene": "problem",
    "cn": "我不会填",
    "jp": "書き方がわかりません",
    "icon": "write",
    "intent": "help_request",
    "tags": [
      "行政",
      "高频"
    ],
    "rank": "L1",
    "priority": 1,
    "phonetic": "卡 ki 卡塔嘎哇卡里马塞恩"
  },
  {
    "id": "ad_030",
    "scene": "admin",
    "subscene": "problem",
    "cn": "可以帮我吗",
    "jp": "手伝ってもらえますか",
    "icon": "help",
    "intent": "help_request",
    "tags": [
      "行政"
    ],
    "rank": "L2",
    "priority": 2,
    "phonetic": "忒次达忒莫拉诶马斯卡"
  },
  {
    "id": "ad_031",
    "scene": "admin",
    "subscene": "end",
    "cn": "我明白了",
    "jp": "わかりました",
    "icon": "ok",
    "intent": "help_request",
    "tags": [
      "行政"
    ],
    "rank": "L2",
    "priority": 2,
    "phonetic": "哇卡里马西塔"
  },
  {
    "id": "ad_032",
    "scene": "admin",
    "subscene": "end",
    "cn": "我下次再来",
    "jp": "また来ます",
    "icon": "calendar",
    "intent": "help_request",
    "tags": [
      "行政"
    ],
    "rank": "L2",
    "priority": 2,
    "phonetic": "马塔 ki 马斯"
  },
  {
    "id": "fi_001",
    "scene": "finance",
    "subscene": "enter",
    "cn": "我要开户",
    "jp": "口座を開設したいです",
    "icon": "card",
    "intent": "help_request",
    "tags": [
      "金融",
      "高频"
    ],
    "rank": "L1",
    "priority": 1,
    "phonetic": "扣乌扎哦卡一塞次西塔一得斯"
  },
  {
    "id": "fi_002",
    "scene": "finance",
    "subscene": "enter",
    "cn": "我要存钱",
    "jp": "お金を預けたいです",
    "icon": "cash",
    "intent": "payment_inquiry",
    "tags": [
      "金融"
    ],
    "rank": "L2",
    "priority": 2,
    "phonetic": "哦卡内哦阿资开塔一得斯"
  },
  {
    "id": "fi_003",
    "scene": "finance",
    "subscene": "enter",
    "cn": "我要取钱",
    "jp": "お金を引き出したいです",
    "icon": "cash",
    "intent": "payment_inquiry",
    "tags": [
      "金融",
      "高频"
    ],
    "rank": "L1",
    "priority": 1,
    "phonetic": "哦卡内哦 hiki 达西塔一得斯"
  },
  {
    "id": "fi_004",
    "scene": "finance",
    "subscene": "enter",
    "cn": "我要汇款",
    "jp": "送金したいです",
    "icon": "send",
    "intent": "payment_inquiry",
    "tags": [
      "金融"
    ],
    "rank": "L2",
    "priority": 2,
    "phonetic": "搜乌 ki 恩西塔一得斯"
  },
  {
    "id": "fi_005",
    "scene": "finance",
    "subscene": "enter",
    "cn": "可以办卡吗",
    "jp": "キャッシュカードを作れますか",
    "icon": "card",
    "intent": "permission_request",
    "tags": [
      "金融",
      "高频"
    ],
    "rank": "L1",
    "priority": 1,
    "phonetic": "kia 修卡～多哦次库咧马斯卡"
  },
  {
    "id": "fi_006",
    "scene": "finance",
    "subscene": "enter",
    "cn": "ATM在哪里",
    "jp": "ATMはどこですか",
    "icon": "location",
    "intent": "location_inquiry",
    "tags": [
      "金融"
    ],
    "rank": "L2",
    "priority": 2,
    "phonetic": "ATM 哈多扣得斯卡"
  },
  {
    "id": "fi_007",
    "scene": "finance",
    "subscene": "enter",
    "cn": "我想换现金",
    "jp": "現金に両替したいです",
    "icon": "coin",
    "intent": "payment_inquiry",
    "tags": [
      "金融"
    ],
    "rank": "L2",
    "priority": 2,
    "phonetic": "给恩 ki 恩尼料乌嘎诶西塔一得斯"
  },
  {
    "id": "fi_008",
    "scene": "finance",
    "subscene": "enter",
    "cn": "我想开账户",
    "jp": "口座を作りたいです",
    "icon": "card",
    "intent": "help_request",
    "tags": [
      "金融"
    ],
    "rank": "L2",
    "priority": 2,
    "phonetic": "扣乌扎哦次库里塔一得斯"
  },
  {
    "id": "fi_009",
    "scene": "finance",
    "subscene": "core",
    "cn": "我要转账",
    "jp": "振り込みたいです",
    "icon": "send",
    "intent": "payment_inquiry",
    "tags": [
      "金融",
      "高频"
    ],
    "rank": "L1",
    "priority": 1,
    "phonetic": "夫里扣米塔一得斯"
  },
  {
    "id": "fi_010",
    "scene": "finance",
    "subscene": "core",
    "cn": "自动扣款怎么设置",
    "jp": "自動引き落としはどう設定しますか",
    "icon": "question",
    "intent": "help_request",
    "tags": [
      "金融"
    ],
    "rank": "L2",
    "priority": 2,
    "phonetic": "机多乌 hiki 哦托西哈多乌塞忒一西马斯卡"
  },
  {
    "id": "fi_011",
    "scene": "finance",
    "subscene": "core",
    "cn": "请帮我处理",
    "jp": "手続きをお願いします",
    "icon": "hand",
    "intent": "help_request",
    "tags": [
      "金融"
    ],
    "rank": "L2",
    "priority": 2,
    "phonetic": "忒次资 ki 哦哦内嘎一西马斯"
  },
  {
    "id": "fi_012",
    "scene": "finance",
    "subscene": "core",
    "cn": "可以分期吗",
    "jp": "分割払いはできますか",
    "icon": "split",
    "intent": "permission_request",
    "tags": [
      "金融"
    ],
    "rank": "L3",
    "priority": 2,
    "phonetic": "不恩卡次巴拉一哈得 ki 马斯卡"
  },
  {
    "id": "fi_013",
    "scene": "finance",
    "subscene": "confirm",
    "cn": "手续费多少",
    "jp": "手数料はいくらですか",
    "icon": "price",
    "intent": "price_inquiry",
    "tags": [
      "金融",
      "高频"
    ],
    "rank": "L1",
    "priority": 1,
    "phonetic": "忒斯乌料乌哈一库拉得斯卡"
  },
  {
    "id": "fi_014",
    "scene": "finance",
    "subscene": "confirm",
    "cn": "汇率是多少",
    "jp": "為替レートはいくらですか",
    "icon": "price",
    "intent": "price_inquiry",
    "tags": [
      "金融"
    ],
    "rank": "L2",
    "priority": 2,
    "phonetic": "卡哇塞咧～托哈一库拉得斯卡"
  },
  {
    "id": "fi_015",
    "scene": "finance",
    "subscene": "confirm",
    "cn": "什么时候到账",
    "jp": "いつ着金しますか",
    "icon": "clock",
    "intent": "location_inquiry",
    "tags": [
      "金融"
    ],
    "rank": "L2",
    "priority": 2,
    "phonetic": "一次加 ki 恩西马斯卡"
  },
  {
    "id": "fi_016",
    "scene": "finance",
    "subscene": "confirm",
    "cn": "有限额吗",
    "jp": "限度額はありますか",
    "icon": "question",
    "intent": "location_inquiry",
    "tags": [
      "金融"
    ],
    "rank": "L2",
    "priority": 2,
    "phonetic": "给恩多嘎库哈阿里马斯卡"
  },
  {
    "id": "fi_017",
    "scene": "finance",
    "subscene": "confirm",
    "cn": "需要印章吗",
    "jp": "印鑑は必要ですか",
    "icon": "tag",
    "intent": "location_inquiry",
    "tags": [
      "金融",
      "高频"
    ],
    "rank": "L1",
    "priority": 1,
    "phonetic": "一恩卡恩哈 hi 次哟乌得斯卡"
  },
  {
    "id": "fi_018",
    "scene": "finance",
    "subscene": "confirm",
    "cn": "可以取消吗",
    "jp": "キャンセルできますか",
    "icon": "cancel",
    "intent": "permission_request",
    "tags": [
      "金融"
    ],
    "rank": "L2",
    "priority": 2,
    "phonetic": "kia 恩塞鲁得 ki 马斯卡"
  },
  {
    "id": "fi_019",
    "scene": "finance",
    "subscene": "confirm",
    "cn": "安全吗",
    "jp": "安全ですか",
    "icon": "protect",
    "intent": "location_inquiry",
    "tags": [
      "金融"
    ],
    "rank": "L3",
    "priority": 2,
    "phonetic": "阿恩在恩得斯卡"
  },
  {
    "id": "fi_020",
    "scene": "finance",
    "subscene": "problem",
    "cn": "卡被吞了",
    "jp": "カードが飲み込まれました",
    "icon": "alert",
    "intent": "help_request",
    "tags": [
      "金融",
      "高频"
    ],
    "rank": "L1",
    "priority": 1,
    "phonetic": "卡～多嘎诺米扣马咧马西塔"
  },
  {
    "id": "fi_021",
    "scene": "finance",
    "subscene": "problem",
    "cn": "密码忘了",
    "jp": "暗証番号を忘れました",
    "icon": "lock",
    "intent": "help_request",
    "tags": [
      "金融",
      "高频"
    ],
    "rank": "L1",
    "priority": 1,
    "phonetic": "阿恩消乌巴恩狗乌哦哇斯咧马西塔"
  },
  {
    "id": "fi_022",
    "scene": "finance",
    "subscene": "problem",
    "cn": "账户被冻结",
    "jp": "口座が凍結されました",
    "icon": "lock",
    "intent": "help_request",
    "tags": [
      "金融"
    ],
    "rank": "L2",
    "priority": 2,
    "phonetic": "扣乌扎嘎托乌开次撒咧马西塔"
  },
  {
    "id": "fi_023",
    "scene": "finance",
    "subscene": "problem",
    "cn": "扣款失败",
    "jp": "引き落としができませんでした",
    "icon": "alert",
    "intent": "help_request",
    "tags": [
      "金融"
    ],
    "rank": "L2",
    "priority": 2,
    "phonetic": "hiki 哦托西嘎得 ki 马塞恩得西塔"
  },
  {
    "id": "fi_024",
    "scene": "finance",
    "subscene": "problem",
    "cn": "为什么扣钱了",
    "jp": "なぜ引き落とされましたか",
    "icon": "question",
    "intent": "help_request",
    "tags": [
      "金融"
    ],
    "rank": "L2",
    "priority": 2,
    "phonetic": "那在 hiki 哦托撒咧马西塔卡"
  },
  {
    "id": "fi_025",
    "scene": "finance",
    "subscene": "problem",
    "cn": "我看不懂账单",
    "jp": "明細がわかりません",
    "icon": "receipt",
    "intent": "help_request",
    "tags": [
      "金融"
    ],
    "rank": "L2",
    "priority": 2,
    "phonetic": "妹一撒一嘎哇卡里马塞恩"
  },
  {
    "id": "fi_026",
    "scene": "finance",
    "subscene": "problem",
    "cn": "交易失败了",
    "jp": "取引が失敗しました",
    "icon": "alert",
    "intent": "help_request",
    "tags": [
      "金融"
    ],
    "rank": "L3",
    "priority": 2,
    "phonetic": "托里 hiki 嘎西帕一西马西塔"
  },
  {
    "id": "fi_027",
    "scene": "finance",
    "subscene": "problem",
    "cn": "可以退回吗",
    "jp": "返金してもらえますか",
    "icon": "return",
    "intent": "help_request",
    "tags": [
      "金融"
    ],
    "rank": "L2",
    "priority": 2,
    "phonetic": "嘿恩 ki 恩西忒莫拉诶马斯卡"
  },
  {
    "id": "fi_028",
    "scene": "finance",
    "subscene": "end",
    "cn": "我办好了",
    "jp": "手続きが終わりました",
    "icon": "ok",
    "intent": "help_request",
    "tags": [
      "金融"
    ],
    "rank": "L2",
    "priority": 2,
    "phonetic": "忒次资 ki 嘎哦哇里马西塔"
  }
]

;