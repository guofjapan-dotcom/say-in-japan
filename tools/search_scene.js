// search_scene.js — 框架约束词库搜索脚本
// 用于从外部搜索候选词条，并通过框架校验过滤
// 用法: node tools/search_scene.js <scene> <subscene> [keywords...]
// 示例: node tools/search_scene.js food special "素食 过敏 不放"

const fs = require("fs");
const path = require("path");

// 场景搜索配置
const SCENE_CONFIG = {
  food: {
    name: "餐饮",
    subscenes: {
      order:    { name: "点餐",   keywords: ["居酒屋", "点餐", "菜单", "推荐", "一人", "几人", "予約", "座位", "大盛り"] },
      special:  { name: "特殊需求", keywords: ["过敏", "素食", "不放", "抜き", "宗教", "不能吃", "アレルギー", "ベジタリアン"] },
      pay:      { name: "结账",   keywords: ["结账", "买单", "分开", "打包", "刷卡", "会計", "持ち帰り"] },
    }
  },
  transport: {
    name: "交通出行",
    subscenes: {
      ask_way:    { name: "问路",   keywords: ["どこ", "道", "方向", "地图", "地図", "歩い"] },
      station_nav:{ name: "车站导航", keywords: ["駅", "ホーム", "乗り換え", "出口", "改札", "线路"] },
      ride:       { name: "乘车",   keywords: ["電車", "バス", "タクシー", "乗り", "降り", "終電"] },
      ticket:     { name: "票务",   keywords: ["切符", "ICカード", "チャージ", "一日乗車券", "Suica"] },
      airport:    { name: "机场",   keywords: ["空港", "登機", "チェックイン", "安检", "手荷物"] },
    }
  },
  shop: {
    name: "购物",
    subscenes: {
      inquiry:   { name: "商品询问", keywords: ["いくら", "色", "サイズ", "おすすめ", "人気"] },
      dutyfree:  { name: "免税",     keywords: ["免税", "パスポート", "税金", "還付"] },
      size_price:{ name: "尺寸价格", keywords: ["サイズ", "値段", "割引", "セール"] },
      return:    { name: "退换货",   keywords: ["返品", "交換", "レシート", "袋"] },
    }
  },
  emergency: {
    name: "应急",
    subscenes: {
      urgent:  { name: "紧急情况", keywords: ["助けて", "警察", "救急", "火事", "事故"] },
      lost:    { name: "丢失物品", keywords: ["なくし", "忘れ物", "パスポート", "財布"] },
      health:  { name: "健康医疗", keywords: ["病院", "薬", "痛い", "怪我", "保険"] },
      help:    { name: "基础求助", keywords: ["助けて", "わからない", "中国語", "英語"] },
      embassy: { name: "领事馆",   keywords: ["大使館", "領事館", "領事保護"] },
    }
  },
  interact: {
    name: "互动沟通",
    subscenes: {
      photo:      { name: "拍照请求", keywords: ["写真", "撮っ", "カメラ", "シャッター"] },
      ask_help:   { name: "请求帮助", keywords: ["手伝っ", "教え", "翻訳", "書い"] },
      permission: { name: "许可确认", keywords: ["いいですか", "大丈夫", "禁煙", "WiFi"] },
      casual:     { name: "简单交流", keywords: ["ありがとう", "すみません", "美味しい", "日本"] },
    }
  },
  station: {
    name: "车站专项",
    subscenes: {
      station_main: { name: "车站常用", keywords: ["駅", "ホーム", "出口", "新幹線", "コインロッカー"] },
    }
  },
};

function main() {
  const args = process.argv.slice(2);
  if (args.length < 2) {
    console.log("用法: node tools/search_scene.js <scene> <subscene> [keywords...]");
    console.log("\n可用场景:");
    Object.entries(SCENE_CONFIG).forEach(([id, cfg]) => {
      console.log(`  ${id} — ${cfg.name}`);
      Object.entries(cfg.subscenes).forEach(([sid, sc]) => {
        console.log(`    .${sid} — ${sc.name}`);
      });
    });
    console.log("\n示例: node tools/search_scene.js food special 素食 过敏");
    process.exit(0);
  }

  const sceneId = args[0];
  const subsceneId = args[1];
  const extraKeywords = args.slice(2);

  const scene = SCENE_CONFIG[sceneId];
  if (!scene) {
    console.error(`❌ 未知场景: ${sceneId}`);
    console.error(`可用: ${Object.keys(SCENE_CONFIG).join(", ")}`);
    process.exit(1);
  }

  const subscene = scene.subscenes[subsceneId];
  if (!subscene) {
    console.error(`❌ 未知子场景: ${subsceneId}`);
    console.error(`可用: ${Object.keys(scene.subscenes).join(", ")}`);
    process.exit(1);
  }

  const keywords = [...subscene.keywords, ...extraKeywords];

  console.log(`\n🔍 搜索配置:`);
  console.log(`  场景: ${scene.name} (${sceneId})`);
  console.log(`  子场景: ${subscene.name} (${subsceneId})`);
  console.log(`  关键词: ${keywords.join(", ")}`);
  console.log(`\n📋 框架约束:`);
  console.log(`  - 必须归属 ${sceneId}.${subsceneId}`);
  console.log(`  - 必须是可直接开口的完整句子`);
  console.log(`  - cn + jp 在现有词库中不重复`);
  console.log(`  - 必须有明确的 intent`);

  // 读取现有词库检查重复
  const phrasesPath = path.join(__dirname, "..", "js", "data", "phrases.js");
  const raw = fs.readFileSync(phrasesPath, "utf8");
  const m = raw.match(/var JPSP_PHRASES\s*=\s*([\s\S]*?);\s*$/);
  const existing = JSON.parse(m[1]);
  const existingKeys = new Set(existing.map(p => p.cn + "|||" + p.jp));

  console.log(`\n📋 现有词库: ${existing.length} 条`);
  console.log(`📋 当前子场景现有: ${existing.filter(p => p.scene === sceneId && p.subscene === subsceneId).length} 条`);

  console.log(`\n💡 下一步:`);
  console.log(`  将搜索结果（候选词条）按以下 JSON 模板填入:`);
  console.log(`  {`);
  console.log(`    "id": "${sceneId}_${subsceneId}_XXX",`);
  console.log(`    "scene": "${sceneId}",`);
  console.log(`    "subscene": "${subsceneId}",`);
  console.log(`    "cn": "中文句子",`);
  console.log(`    "jp": "日语句子",`);
  console.log(`    "phonetic": "",  // 由 generate_phonetic.js 生成`);
  console.log(`    "icon": "对应的icon key",`);
  console.log(`    "intent": "对应的intent",`);
  console.log(`    "tags": ["标签"],`);
  console.log(`    "priority": 1`);
  console.log(`  }`);
  console.log(`\n  然后运行 npm run validate 校验`);
}

main();
