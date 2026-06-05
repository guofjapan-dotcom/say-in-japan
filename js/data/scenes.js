var JPSP_SCENES = {
  "scenes": [
    {
      "id": "transport",
      "title_cn": "交通出行",
      "title_jp": "交通",
      "icon": "train",
      "color": "#007AFF",
      "layer": "A",
      "count": 98
    },
    {
      "id": "food",
      "title_cn": "餐饮",
      "title_jp": "飲食",
      "icon": "food",
      "color": "#FF6B35",
      "layer": "A",
      "count": 60
    },
    {
      "id": "medical",
      "title_cn": "医疗",
      "title_jp": "医療",
      "icon": "hospital",
      "color": "#FF3B30",
      "layer": "A",
      "count": 47
    },
    {
      "id": "shop",
      "title_cn": "购物",
      "title_jp": "ショッピング",
      "icon": "bag",
      "color": "#FF9500",
      "layer": "A",
      "count": 55
    },
    {
      "id": "accommodation",
      "title_cn": "住宿",
      "title_jp": "宿泊",
      "icon": "hotel",
      "color": "#AF52DE",
      "layer": "A",
      "count": 45
    },
    {
      "id": "interact",
      "title_cn": "互动沟通",
      "title_jp": "コミュニケーション",
      "icon": "chat",
      "color": "#34C759",
      "layer": "A",
      "count": 77
    },
    {
      "id": "emergency",
      "title_cn": "紧急情况",
      "title_jp": "緊急",
      "icon": "alert",
      "color": "#FF3B30",
      "layer": "B",
      "count": 45
    },
    {
      "id": "admin",
      "title_cn": "行政手续",
      "title_jp": "行政手続き",
      "icon": "embassy",
      "color": "#6366F1",
      "layer": "B",
      "count": 32
    },
    {
      "id": "finance",
      "title_cn": "金融支付",
      "title_jp": "金融·支払い",
      "icon": "card",
      "color": "#0891B2",
      "layer": "B",
      "count": 28
    }
  ],
  "subscenes": {
    "transport": [
      { "id": "enter", "name": "进入/问路", "count": 20 },
      { "id": "core", "name": "购票/乘车", "count": 26 },
      { "id": "confirm", "name": "确认站台/方向", "count": 36 },
      { "id": "problem", "name": "走错/故障", "count": 3 },
      { "id": "end", "name": "出站/换乘", "count": 5 },
      { "id": "airport", "name": "机场", "count": 8 }
    ],
    "food": [
      { "id": "enter", "name": "进入/找位", "count": 7 },
      { "id": "core", "name": "点餐", "count": 14 },
      { "id": "confirm", "name": "确认信息", "count": 5 },
      { "id": "problem", "name": "饮食限制", "count": 19 },
      { "id": "end", "name": "结账/离开", "count": 15 }
    ],
    "medical": [
      { "id": "enter", "name": "进入/挂号", "count": 12 },
      { "id": "core", "name": "描述症状", "count": 12 },
      { "id": "confirm", "name": "确认信息", "count": 11 },
      { "id": "problem", "name": "问题沟通", "count": 7 },
      { "id": "end", "name": "取药/离开", "count": 5 }
    ],
    "shop": [
      { "id": "enter", "name": "进入", "count": 2 },
      { "id": "core", "name": "挑选商品", "count": 11 },
      { "id": "confirm", "name": "尺寸/价格", "count": 18 },
      { "id": "problem", "name": "退换/免税", "count": 14 },
      { "id": "end", "name": "结账/离开", "count": 10 }
    ],
    "accommodation": [
      { "id": "checkin", "name": "入住办理", "count": 10 },
      { "id": "room_info", "name": "房间信息", "count": 8 },
      { "id": "problem", "name": "问题处理", "count": 12 },
      { "id": "service", "name": "服务请求", "count": 10 },
      { "id": "checkout", "name": "退房", "count": 5 }
    ],
    "interact": [
      { "id": "greeting", "name": "打招呼", "count": 8 },
      { "id": "comprehension", "name": "理解沟通", "count": 8 },
      { "id": "basic_ask", "name": "基础询问", "count": 20 },
      { "id": "ask_help", "name": "请求帮助", "count": 27 },
      { "id": "ending", "name": "结束互动", "count": 14 }
    ],
    "emergency": [
      { "id": "urgent", "name": "紧急情况", "count": 10 },
      { "id": "lost", "name": "丢失物品", "count": 10 },
      { "id": "health", "name": "健康/医疗", "count": 10 },
      { "id": "help", "name": "基础求助", "count": 10 },
      { "id": "embassy", "name": "领事馆信息", "count": 5 }
    ],
    "admin": [
      { "id": "enter", "name": "进入/说明来意", "count": 7 },
      { "id": "core", "name": "提交材料", "count": 8 },
      { "id": "confirm", "name": "确认信息", "count": 8 },
      { "id": "problem", "name": "问题处理", "count": 7 },
      { "id": "end", "name": "结束离开", "count": 2 }
    ],
    "finance": [
      { "id": "enter", "name": "进入/说明来意", "count": 8 },
      { "id": "core", "name": "核心操作", "count": 4 },
      { "id": "confirm", "name": "确认信息", "count": 7 },
      { "id": "problem", "name": "问题处理", "count": 8 },
      { "id": "end", "name": "结束离开", "count": 1 }
    ]
  }
};