// icons.js — icon key 注册表（完整 emoji 映射，按语义分组）
// 词库只存 icon key，渲染时通过此表查找 emoji。
// 如需换风格（SVG / Icon Font / CSS class），只改此文件的值 + eForIcon() 逻辑即可。
var JPSP_ICONS = {
  // 建筑/设施
  "station": "🚉", "toilet": "🚻", "hospital": "🏥", "pharmacy": "💊",
  "shop": "🏪", "counter": "🏪",
  // 交通
  "train": "🚆", "bus": "🚌", "subway": "🚇", "taxi": "🚖", "shinkansen": "🚅",
  "airport": "🛫",
  // 车站元素
  "platform": "🛤️", "exit": "🚪", "gate": "🚧", "transfer": "🔄",
  "locker": "🗄️", "elevator": "🛗",
  // 动作
  "walk": "🚶", "direction": "🧭", "enter": "🚶", "search": "🔍",
  "point": "👆", "hand": "✋", "eye": "👁️",
  // 物品
  "ticket": "🎫", "card": "💳", "cash": "💵", "receipt": "🧾",
  "bag": "🛍️", "passport": "📕", "luggage": "🧳", "phone": "📞",
  "map": "🗺️", "menu": "📋",
  // 状态/标识
  "clock": "🕐", "bell": "🔔", "calendar": "📅", "wifi": "📶",
  "seat": "💺", "lock": "🔒",
  // 购物
  "price": "💰", "size": "📏", "color": "🎨", "stock": "📦",
  "cart": "🛒", "tag": "🏷️", "taxfree": "🛃",
  "return": "↩️", "exchange": "💱",
  // 餐饮
  "recommend": "⭐", "delicious": "😋", "add": "➕", "less": "➖",
  "spicy": "🌶️", "allergy": "⚠️", "meat": "🥩", "vegetable": "🥬",
  "takeout": "📦", "bill": "🧾", "split": "💸",
  "rice": "🍚", "pork": "🐷", "egg": "🥚", "wasabi": "🌿", "onion": "🧅",
  "salt": "🧂", "sugar": "🍬", "chopsticks": "🥢", "plate": "🍽️",
  "water": "💧", "alcohol": "🍺", "serving": "🍽️",
  // 互动
  "camera": "📸", "photo": "🖼️", "video": "🎬", "flash": "📸",
  "translate": "🌐", "write": "✍️", "send": "📨",
  "thanks": "🙏", "sorry": "😔", "ok": "👌", "no": "✋", "wait": "⏳",
  "wow": "😲", "greet": "👋", "bye": "👋", "name": "📛", "person": "👤",
  "nice": "👍", "teach": "📖", "simple": "✅", "repeat": "🔄",
  "slow": "⏪", "fast": "⏩", "advice": "💬", "cancel": "❌",
  "wrong": "❌", "remove": "🗑️",
  // 应急
  "sos": "🆘", "help": "🆘", "alert": "⚠️",
  "police": "👮", "ambulance": "🚑", "fire": "🔥", "danger": "⚠️",
  "sick": "🤒", "fever": "🤒", "headach": "🤕", "injury": "🩹", "stomach": "🤢",
  "doctor": "👨‍⚕️", "health": "💚", "insurance": "📋",
  "embassy": "🏛️", "protect": "🛡️",
  "wallet": "👛", "lost": "🔍", "lostfound": "🔍", "forgot": "❓",
  "urgent": "🔴",
  // 其他
  "staff": "👨‍💼", "japan": "🗾", "china": "🇨🇳", "english": "💂",
  "mobile": "📱", "charge": "🔌", "question": "❓", "location": "📍",
  "fragile": "⚠️", "weight": "⚖️", "accident": "💥",
  "smoke": "🚬", "nosmoke": "🚭", "reserve": "📅",
  "coin": "🪙", "retake": "📸", "heat": "🔥", "shoe": "👟", "bring": "📦",
  "language": "🌐", "compare": "⚖️", "open": "🔓", "status": "🟢",
  "tip": "💡", "new": "🆕", "popular": "📈", "fit": "📏",
  "favorite": "⭐", "lines": "📊", "call": "📞",
  // 场景级 emoji
  "scene-transport": "🚆", "scene-shop": "🛍️", "scene-food": "🍜",
  "scene-emergency": "🚨", "scene-interact": "💬", "scene-accommodation": "🏨",
  "scene-medical": "🏥", "scene-admin": "🏛️", "scene-finance": "🏦",
  // 住宿专用
  "hotel": "🏨", "clean": "🧹"
};
