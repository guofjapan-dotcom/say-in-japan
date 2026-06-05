// intents.js — 功能标签注册表（唯一数据源）
// recommend 字段驱动对话补救推荐策略:
//   "same_intent"  → 同 intent 的替代句子
//   "clarify"      → 请求澄清类通用句
//   "same_scene"   → 同 scene 的替代句子
//   "emergency"    → 应急专用推荐
var JPSP_INTENTS = [
  { id: "location_inquiry",  emoji: "📍", cn: "找地方", recommend: "same_intent" },
  { id: "price_inquiry",     emoji: "💰", cn: "问价格", recommend: "same_intent" },
  { id: "direction_request", emoji: "🧭", cn: "问路线", recommend: "same_intent" },
  { id: "payment_inquiry",   emoji: "💳", cn: "支付",   recommend: "same_intent" },
  { id: "help_request",      emoji: "🙏", cn: "求助",   recommend: "clarify" },
  { id: "permission_request",emoji: "✔️", cn: "许可",   recommend: "clarify" },
  { id: "photo_request",     emoji: "📸", cn: "拍照",   recommend: "clarify" },
  { id: "tax_free",          emoji: "🛃", cn: "免税",   recommend: "same_scene" },
  { id: "smoke_rule",        emoji: "🚬", cn: "吸烟",   recommend: "same_scene" },
  { id: "emergency",         emoji: "🚨", cn: "紧急",   recommend: "emergency" }
];
