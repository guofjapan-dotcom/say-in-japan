// generate_phonetic.js — 日语→中文谐音自动生成器 V2
// 依赖: kuroshiro + kuroshiro-analyzer-kuromoji（kanji→kana 转换）
// 用法: node tools/generate_phonetic.js

const fs = require("fs");
const path = require("path");
const Kuroshiro = require("kuroshiro").default;
const KuromojiAnalyzer = require("kuroshiro-analyzer-kuromoji");

// ===== 完整假名→中文音映射表 =====
const KANA_MAP = {
  // 清音
  "あ":"阿","い":"一","う":"乌","え":"诶","お":"哦",
  "か":"卡","き":"ki","く":"库","け":"开","こ":"扣",
  "さ":"撒","し":"西","す":"斯","せ":"塞","そ":"搜",
  "た":"塔","ち":"七","つ":"次","て":"忒","と":"托",
  "な":"那","に":"尼","ぬ":"努","ね":"内","の":"诺",
  "は":"哈","ひ":"hi","ふ":"夫","へ":"嘿","ほ":"霍",
  "ま":"马","み":"米","む":"木","め":"妹","も":"莫",
  "や":"亚","ゆ":"由","よ":"哟",
  "ら":"拉","り":"里","る":"鲁","れ":"咧","ろ":"罗",
  "わ":"哇","を":"哦","ん":"恩",
  // 浊音
  "が":"嘎","ぎ":"gi","ぐ":"古","げ":"给","ご":"狗",
  "ざ":"扎","じ":"机","ず":"资","ぜ":"在","ぞ":"走",
  "だ":"达","ぢ":"机","づ":"资","で":"得","ど":"多",
  "ば":"巴","び":"bi","ぶ":"不","べ":"贝","ぼ":"波",
  // 半浊音
  "ぱ":"帕","ぴ":"pi","ぷ":"普","ぺ":"佩","ぽ":"坡",
  // 小假名（拗音后半）
  "ゃ":"亚","ゅ":"由","ょ":"哟","っ":"",
};

// 拗音组合（两个假名 → 一个中文音）
const DIGRAPH_MAP = {
  "きゃ":"kia","きゅ":"kiu","きょ":"kio",
  "しゃ":"下","しゅ":"修","しょ":"消",
  "ちゃ":"加","ちゅ":"秋","ちょ":"乔",
  "にゃ":"nia","にゅ":"niu","にょ":"nio",
  "ひゃ":"hia","ひゅ":"hiu","ひょ":"hio",
  "みゃ":"mia","みゅ":"miu","みょ":"mio",
  "りゃ":"俩","りゅ":"留","りょ":"料",
  "ぎゃ":"gia","ぎゅ":"giu","ぎょ":"gio",
  "じゃ":"加","じゅ":"就","じょ":"叫",
  "びゃ":"bia","びゅ":"biu","びょ":"bio",
  "ぴゃ":"pia","ぴゅ":"piu","ぴょ":"pio",
};

// 片假名→平假名映射
const KATA_TO_HIRA = {
  "ア":"あ","イ":"い","ウ":"う","エ":"え","オ":"お",
  "カ":"か","キ":"き","ク":"く","ケ":"け","コ":"こ",
  "サ":"さ","シ":"し","ス":"す","セ":"せ","ソ":"そ",
  "タ":"た","チ":"ち","ツ":"つ","テ":"て","ト":"と",
  "ナ":"な","ニ":"に","ヌ":"ぬ","ネ":"ね","ノ":"の",
  "ハ":"は","ヒ":"ひ","フ":"ふ","ヘ":"へ","ホ":"ほ",
  "マ":"ま","ミ":"み","ム":"む","メ":"め","モ":"も",
  "ヤ":"や","ユ":"ゆ","ヨ":"よ",
  "ラ":"ら","リ":"り","ル":"る","レ":"れ","ロ":"ろ",
  "ワ":"わ","ヲ":"を","ン":"ん",
  "ガ":"が","ギ":"ぎ","グ":"ぐ","ゲ":"げ","ゴ":"ご",
  "ザ":"ざ","ジ":"じ","ズ":"ず","ゼ":"ぜ","ゾ":"ぞ",
  "ダ":"だ","ヂ":"ぢ","ヅ":"づ","デ":"で","ド":"ど",
  "バ":"ば","ビ":"び","ブ":"ぶ","ベ":"べ","ボ":"ぼ",
  "パ":"ぱ","ピ":"ぴ","プ":"ぷ","ペ":"ぺ","ポ":"ぽ",
  "ャ":"ゃ","ュ":"ゅ","ョ":"ょ","ッ":"っ","ー":"ー",
};

function kataToHira(str) {
  return [...str].map(ch => KATA_TO_HIRA[ch] || ch).join("");
}

// ===== 特殊规则 =====
// 助词标记位置（需要 kuroshiro 分词信息，简化处理：看上下文）
function applyParticleRules(chars, originalJp) {
  // は → 哇（当读作 wa 时，即助词时）
  // 简化为：如果 は 不在词首且前面是名词/其他，改为 哇
  // 由于 kuroshiro 已转换读音，这里检查原始 jp 中的 は 位置
  return chars;
}

function generatePhonetic(kanaText) {
  const chars = [...kanaText]; // 正确处理 Unicode
  const result = [];
  let i = 0;

  while (i < chars.length) {
    // 检查是否为拗音组合（两个字符）
    if (i + 1 < chars.length) {
      const pair = chars[i] + chars[i + 1];
      if (DIGRAPH_MAP[pair]) {
        result.push(DIGRAPH_MAP[pair]);
        i += 2;
        continue;
      }
    }

    const ch = chars[i];

    // 促音 っ/ッ → 跳过（后面辅音会自然体现）
    if (ch === "っ" || ch === "ッ") {
      i++;
      continue;
    }

    // 长音 ー → 前一个音拉长标记
    if (ch === "ー") {
      if (result.length > 0) {
        result[result.length - 1] += "～";
      }
      i++;
      continue;
    }

    // 标点/空格 → 保留
    if (/[\s　 、。，．？！「」『』（）［］【】]/.test(ch)) {
      // 跳过大多数标点，关键停顿加空格
      if (/[、。？！]/.test(ch)) {
        // 不加额外空格，自然断句
      }
      i++;
      continue;
    }

    // 数字/英文 → 保留原字符
    if (/[0-9A-Za-zＡ-Ｚａ-ｚ]/.test(ch)) {
      result.push(ch);
      i++;
      continue;
    }

    // 查表
    if (KANA_MAP[ch]) {
      result.push(KANA_MAP[ch]);
    } else {
      // 未知字符（可能的汉字残留）→ 保留
      result.push(ch);
    }
    i++;
  }

  // 后处理：合并连续中文，用空格分隔词块
  let phonetic = result.join("");
  // 在中文/字母边界加空格（每 2-4 个音节一组）
  phonetic = phonetic.replace(/([一-龥])([A-Za-z])/g, "$1 $2");
  phonetic = phonetic.replace(/([A-Za-z])([一-龥])/g, "$1 $2");

  return phonetic.trim();
}

// ===== 主流程 =====
async function main() {
  const phrasesPath = path.join(__dirname, "..", "js", "data", "phrases.js");
  const raw = fs.readFileSync(phrasesPath, "utf8");

  // 提取 JSON 数组
  const jsonMatch = raw.match(/var JPSP_PHRASES\s*=\s*([\s\S]*?);\s*$/);
  if (!jsonMatch) {
    console.error("无法解析 phrases.js，请检查格式");
    process.exit(1);
  }

  const phrases = JSON.parse(jsonMatch[1]);

  // 初始化 kuroshiro
  const kuroshiro = new Kuroshiro();
  await kuroshiro.init(new KuromojiAnalyzer());

  console.log(`共 ${phrases.length} 条短语，开始生成谐音...`);

  let count = 0;
  for (const p of phrases) {
    try {
      // kanji + kana → 平假名，然后片假名→平假名
      const hiragana = await kuroshiro.convert(p.jp, { to: "hiragana", mode: "normal" });
      const allHira = kataToHira(hiragana);
      p.phonetic = generatePhonetic(allHira);
      count++;
      if (count % 50 === 0) console.log(`  进度: ${count}/${phrases.length}`);
    } catch (err) {
      console.warn(`  跳過 ${p.id}: ${err.message}`);
      p.phonetic = p.phonetic || ""; // 保留旧的
    }
  }

  // 校验生成结果
  let issues = [];
  for (const p of phrases) {
    if (!p.phonetic || p.phonetic.trim() === "") {
      issues.push(`${p.id}: phonetic 为空`);
    }
    if (p.phonetic && /[a-zA-Z]{5,}/.test(p.phonetic)) {
      issues.push(`${p.id}: 含较多未转换英文 — "${p.phonetic}"`);
    }
  }

  if (issues.length > 0) {
    console.log(`\n⚠ 需要人工 review 的条目 (${issues.length}):`);
    issues.forEach(i => console.log(`  - ${i}`));
  }

  // 写回文件
  const output = `var JPSP_PHRASES = \n\n${JSON.stringify(phrases, null, 2)}\n\n;`;
  fs.writeFileSync(phrasesPath, output, "utf8");

  console.log(`\n✔ 完成: ${count}/${phrases.length} 条已更新`);
  console.log(`  输出: ${phrasesPath}`);
}

main().catch(err => {
  console.error("生成失败:", err);
  process.exit(1);
});
