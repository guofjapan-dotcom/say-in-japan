// test_system.js — 全方面系统性验证 Say in Japan
// 用法: node tools/test_system.js
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
let pass = 0, fail = 0, warn = 0;

function ok(msg) { pass++; console.log('  ✅ ' + msg); }
function err(msg) { fail++; console.log('  ❌ ' + msg); }
function w(msg) { warn++; console.log('  ⚠️  ' + msg); }

function header(str) { console.log('\n' + '═'.repeat(60)); console.log('  ' + str); console.log('═'.repeat(60)); }

// ========== 加载数据 ==========
function loadJSVar(filePath, varName) {
  const raw = fs.readFileSync(filePath, 'utf8');
  // Try JSON array
  const arrMatch = raw.match(new RegExp('var\\s+' + varName + '\\s*=\\s*([\\[][\\s\\S]*?[\\]])\\s*;?\\s*$'));
  if (arrMatch) return JSON.parse(arrMatch[1]);
  // Try JSON object
  const objMatch = raw.match(new RegExp('var\\s+' + varName + '\\s*=\\s*([\\{][\\s\\S]*?[\\}])\\s*;?\\s*$'));
  if (objMatch) return JSON.parse(objMatch[1]);
  // Try eval for nested objects
  const evalMatch = raw.match(new RegExp('var\\s+' + varName + '\\s*=\\s*([\\{][\\s\\S]*\\});?\\s*$'));
  if (evalMatch) return eval('(' + evalMatch[1] + ')');
  throw new Error('Cannot parse ' + varName + ' from ' + filePath);
}

console.log('🔍 Say in Japan — 全系统验证');
console.log('  时间: ' + new Date().toISOString());
console.log('  项目: ' + ROOT);

// ===== 1. 文件完整性 =====
header('1. 文件完整性检查');
const requiredFiles = [
  'index.html', 'manifest.json', 'sw.js',
  'js/app.js', 'css/style.css',
  'js/data/phrases.js', 'js/data/scenes.js', 'js/data/icons.js',
  'js/data/intents.js', 'js/data/emergency.js',
  'js/core/storage.js', 'js/core/speak.js', 'js/core/router.js', 'js/core/converter.js',
  'js/vendor/cn2t.js',
  'tools/validate.js', 'tools/generate_phonetic.js', 'tools/search_scene.js',
];
requiredFiles.forEach(f => {
  const fp = path.join(ROOT, f);
  if (fs.existsSync(fp)) ok(f);
  else err('文件缺失: ' + f);
});

// ===== 2. HTML 加载顺序 =====
header('2. index.html 脚本加载顺序');
const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const scriptOrder = [];
const scriptRe = /<script\s+src="([^"]+)"/g;
let sm;
while ((sm = scriptRe.exec(html)) !== null) scriptOrder.push(sm[1]);

const expectedOrder = [
  { file: 'js/vendor/cn2t.js', after: null },
  { file: 'js/core/converter.js', after: 'js/vendor/cn2t.js' },
  { file: 'js/data/scenes.js', after: 'js/core/converter.js' },
  { file: 'js/data/phrases.js', after: 'js/data/scenes.js' },
  { file: 'js/data/emergency.js', after: 'js/data/phrases.js' },
  { file: 'js/data/icons.js', after: 'js/data/emergency.js' },
  { file: 'js/data/intents.js', after: 'js/data/icons.js' },
  { file: 'js/core/storage.js', after: 'js/data/intents.js' },
  { file: 'js/core/speak.js', after: 'js/core/storage.js' },
  { file: 'js/core/router.js', after: 'js/core/speak.js' },
  { file: 'js/app.js', after: 'js/core/router.js' },
];

expectedOrder.forEach(e => {
  const idx = scriptOrder.indexOf(e.file);
  if (idx === -1) { err('脚本缺失: ' + e.file); return; }
  if (e.after) {
    const afterIdx = scriptOrder.indexOf(e.after);
    if (afterIdx === -1) err(e.file + ' 依赖缺失: ' + e.after);
    else if (idx <= afterIdx) err(e.file + ' 应在 ' + e.after + ' 之后加载');
    else ok(e.file + ' (在 ' + e.after + ' 之后)');
  } else {
    ok(e.file + ' (第一个脚本)');
  }
});

// ===== 3. 数据加载 =====
header('3. 数据加载');
const phrases = loadJSVar('js/data/phrases.js', 'JPSP_PHRASES');
ok('phrases.js 加载: ' + phrases.length + ' 条');
const scenes = loadJSVar('js/data/scenes.js', 'JPSP_SCENES');
ok('scenes.js 加载: ' + scenes.scenes.length + ' 个场景, ' + Object.keys(scenes.subscenes).length + ' 组子场景');
let icons;
try {
  const iconsRaw = fs.readFileSync(path.join(ROOT,'js/data/icons.js'),'utf8');
  const iconsMatch = iconsRaw.match(/var\s+JPSP_ICONS\s*=\s*(\{[\s\S]*\});?\s*$/);
  icons = eval('(' + iconsMatch[1] + ')');
  ok('icons.js 加载: ' + Object.keys(icons).length + ' 个 key');
} catch(e) { err('icons.js 解析失败: ' + e.message); icons = {}; }
let intents;
try {
  const intentsRaw = fs.readFileSync(path.join(ROOT,'js/data/intents.js'),'utf8');
  const intentsMatch = intentsRaw.match(/var\s+JPSP_INTENTS\s*=\s*(\[[\s\S]*?\]);?\s*$/);
  intents = eval('(' + intentsMatch[1] + ')');
  ok('intents.js 加载: ' + intents.length + ' 个');
} catch(e) { err('intents.js 解析失败: ' + e.message); intents = []; }
const emergency = loadJSVar('js/data/emergency.js', 'JPSP_EMERGENCY');
ok('emergency.js 加载: ' + emergency.length + ' 条');

// ===== 4. 词条必填字段 =====
header('4. 词条必填字段 (487条)');
const REQUIRED = ['id','scene','subscene','cn','jp','phonetic','intent','icon'];
let fieldIssues = 0;
phrases.forEach((p, i) => {
  REQUIRED.forEach(f => {
    if (!p[f] || (typeof p[f] === 'string' && p[f].trim() === '')) {
      if (fieldIssues < 10) err((p.id || ('#'+i)) + ': 缺少 ' + f);
      fieldIssues++;
    }
  });
});
if (fieldIssues === 0) ok('全部 487 条必填字段完整');
else err('共 ' + fieldIssues + ' 个字段缺失');

// ===== 5. ID 唯一性 =====
header('5. ID 唯一性');
const idSet = new Set();
let dupIds = 0;
phrases.forEach(p => {
  if (idSet.has(p.id)) { dupIds++; err('重复 ID: ' + p.id); }
  idSet.add(p.id);
});
if (dupIds === 0) ok('全部 ID 唯一');

// ===== 6. Scene/Subscene 有效性 =====
header('6. Scene & Subscene 归属');
const sceneIds = new Set(scenes.scenes.map(s => s.id));
const subsceneMap = {};
Object.entries(scenes.subscenes).forEach(([sid, subs]) => {
  subsceneMap[sid] = new Set(subs.map(s => s.id));
});
let sceneIssues = 0;
phrases.forEach(p => {
  if (!sceneIds.has(p.scene)) { sceneIssues++; if (sceneIssues <= 3) err(p.id + ': 无效 scene=' + p.scene); }
  if (subsceneMap[p.scene] && !subsceneMap[p.scene].has(p.subscene)) {
    sceneIssues++; if (sceneIssues <= 3) err(p.id + ': 无效 subscene=' + p.subscene + ' (scene=' + p.scene + ')');
  }
});
if (sceneIssues === 0) ok('全部 scene/subscene 有效');

// ===== 7. Intent 有效性 =====
header('7. Intent 归属');
const intentIds = new Set(intents.map(i => i.id));
let intentIssues = 0;
phrases.forEach(p => {
  if (p.intent && !intentIds.has(p.intent)) { intentIssues++; if (intentIssues <= 3) err(p.id + ': 无效 intent=' + p.intent); }
});
if (intentIssues === 0) ok('全部 intent 有效');

// ===== 8. Tags 归属 =====
header('8. Tags 有效性');
const TAG_PALETTE = {
  // 应急类
  "紧急":1,"最高优先级":1,"求助":1,"丢失":1,"投诉":1,"健康":1,"领事馆":1,
  // 交通类
  "交通":1,"车站":1,"机场":1,"乘车":1,"问路":1,"票务":1,
  // 餐饮类
  "餐饮":1,"点餐":1,"结账":1,"打包":1,"饮食限制":1,"付款":1,
  // 购物类
  "购物":1,"支付":1,"免税":1,"价格":1,"尺寸":1,"颜色":1,"库存":1,
  "试穿":1,"产地":1,"询问":1,"购买":1,"退换货":1,
  // 互动类
  "拍照":1,"许可":1,"规约确认":1,"请求帮助":1,"身份":1,"称赞":1,
  // 住宿类
  "入住":1,"房间":1,"设备":1,"清洁":1,"用品":1,"帮助":1,"退房":1,
  // 属性
  "高频":1,"万能":1,"礼貌用语":1,
  // 新卡
  "医疗":1,"行政":1,"金融":1,
};
let tagIssues = 0;
phrases.forEach(p => {
  (p.tags || []).forEach(t => {
    if (!TAG_PALETTE[t]) { tagIssues++; if (tagIssues <= 5) w(p.id + ': 标签不在调色板 — "' + t + '"'); }
  });
});
if (tagIssues === 0) ok('全部 tags 在调色板中');
else w(tagIssues + ' 个标签不在调色板');

// ===== 9. Rank 字段 =====
header('9. L1/L2/L3 分级');
const rankDist = {L1:0, L2:0, L3:0, undefined:0};
phrases.forEach(p => { rankDist[p.rank||'undefined']++; });
console.log('  L1: ' + rankDist.L1 + ' | L2: ' + rankDist.L2 + ' | L3: ' + rankDist.L3 + ' | 未分级: ' + rankDist.undefined);
if (rankDist.undefined < phrases.length * 0.3) ok('大部分词条已分级 (未分级 ' + rankDist.undefined + '/' + phrases.length + ')');
else w('较多词条未分级: ' + rankDist.undefined);

// ===== 10. Scene vs Scenes.js 计数一致性 =====
header('10. scenes.js 计数一致性');
let countMismatch = 0;
scenes.scenes.forEach(s => {
  const actual = phrases.filter(p => p.scene === s.id).length;
  if (actual !== s.count) {
    countMismatch++;
    err(s.id + ': scenes.js 标记 ' + s.count + ' 条, 实际 ' + actual + ' 条');
  }
});
if (countMismatch === 0) ok('全部场景计数一致');

scenes.scenes.forEach(s => {
  const subs = scenes.subscenes[s.id] || [];
  subs.forEach(sub => {
    const actual = phrases.filter(p => p.scene === s.id && p.subscene === sub.id).length;
    if (actual !== sub.count) {
      countMismatch++;
      err(s.id + '.' + sub.id + ': 标记 ' + sub.count + ' 条, 实际 ' + actual + ' 条');
    }
  });
});

// ===== 11. Phonetic 质量 =====
header('11. Phonetic 质量');
let badPhonetics = 0, totalPhLen = 0;
phrases.forEach(p => {
  if (!p.phonetic || p.phonetic.trim() === '') badPhonetics++;
  totalPhLen += (p.phonetic || '').length;
});
const avgLen = Math.round(totalPhLen / phrases.length);
console.log('  平均长度: ' + avgLen + ' 字符');
if (badPhonetics === 0) ok('全部 phonetic 非空');
else err(badPhonetics + ' 条 phonetic 为空');

// ===== 12. Icon Key 有效性 =====
header('12. Icon Key 有效性');
let iconIssues = 0;
phrases.forEach(p => {
  if (!icons[p.icon] && !icons['scene-' + p.scene]) {
    iconIssues++; if (iconIssues <= 5) w(p.id + ': icon key 不在注册表 — "' + p.icon + '"');
  }
});
if (iconIssues === 0) ok('全部 icon key 在注册表中');
else w(iconIssues + ' 个 icon key 缺失');

// ===== 13. 5-Stage Flow 完整性 =====
header('13. 场景流程完整性 (5-Stage Flow)');
const idealStages = ['enter', 'core', 'confirm', 'problem', 'end'];
scenes.scenes.forEach(s => {
  const subs = (scenes.subscenes[s.id] || []).map(x => x.id);
  const missing = idealStages.filter(st => !subs.includes(st));
  const extra = subs.filter(st => !idealStages.includes(st));
  if (missing.length === 0 && extra.length === 0) ok(s.id + ': 恰好5阶段 ✅');
  else {
    let msg = s.id + ': ';
    if (missing.length > 0) msg += '缺 ' + missing.join(',') + ' ';
    if (extra.length > 0) msg += '多 ' + extra.join(',');
    if (s.id === 'transport' && extra.includes('airport')) {
      ok(s.id + ': 5阶段 + airport (合理)');
    } else if (s.id === 'accommodation' && extra.includes('service')) {
      ok(s.id + ': 5阶段 + service (可接受)');
    } else {
      w(msg);
    }
  }
});

// ===== 14. Global Phrase 标记 =====
header('14. Global Phrase 跨卡短语');
const globalPhrases = phrases.filter(p => p.global === true);
console.log('  已标记 global: ' + globalPhrases.length + ' 条');
if (globalPhrases.length > 0) {
  globalPhrases.forEach(p => console.log('    ' + p.id + ': ' + p.cn + ' → ' + p.jp));
  ok('Global 短语已标记');
} else w('无 global 标记短语');

// ===== 15. Cross-scene Duplicates =====
header('15. 跨场景重复检测');
const cnjpMap = new Map();
let crossDupCount = 0;
phrases.forEach(p => {
  const key = p.cn + '|||' + p.jp;
  if (cnjpMap.has(key)) {
    const prev = cnjpMap.get(key);
    if (prev.scene !== p.scene) {
      if (crossDupCount < 5) w(p.id + ' (' + p.scene + ') 与 ' + prev.id + ' (' + prev.scene + ') 跨场景重复: ' + p.cn);
      crossDupCount++;
    }
  }
  cnjpMap.set(key, p);
});
if (crossDupCount <= 5) ok('跨场景重复可控 (' + crossDupCount + ' 组)');
else err('过多跨场景重复: ' + crossDupCount);

// ===== 16. Emergency Info =====
header('16. Emergency/领事馆数据');
const embassies = emergency.filter(e => e.address);
const phones = emergency.filter(e => !e.address);
console.log('  领事馆: ' + embassies.length + ' | 紧急电话: ' + phones.length);
if (embassies.length >= 5) ok('领事馆数据充足');
else w('领事馆数据偏少');
if (phones.length >= 2) ok('紧急电话数据充足');

// ===== 17. index.html 关键DOM =====
header('17. HTML 结构');
if (html.includes('id="app-shell"')) ok('app-shell 存在');
if (html.includes('id="app-content"')) ok('app-content 存在');
if (html.includes('id="tabbar"')) ok('tabbar 存在');
if (html.includes('data-tab="home"')) ok('首页 tab');
if (html.includes('data-tab="more"')) ok('更多 tab');
if (html.includes('data-tab="emergency"')) ok('应急 tab');
if (html.includes('data-tab="favorites"')) ok('收藏 tab');
if (html.includes('js/data/intents.js')) ok('intents.js 已引用');
if (html.includes('<meta name="viewport"')) ok('viewport meta 存在');
if (html.includes('apple-mobile-web-app-capable')) ok('PWA apple meta 存在');
if (html.includes('manifest.json')) ok('manifest 引用');

// ===== 18. PWA =====
header('18. PWA 配置');
try {
  const manifest = JSON.parse(fs.readFileSync(path.join(ROOT,'manifest.json'),'utf8'));
  if (manifest.name) ok('manifest name: ' + manifest.name);
  if (manifest.start_url) ok('start_url: ' + manifest.start_url);
  if (manifest.display === 'standalone') ok('display: standalone');
  else err('display 非 standalone');
} catch(e) { err('manifest.json 解析失败'); }

if (fs.existsSync(path.join(ROOT, 'sw.js'))) ok('Service Worker 存在');
else err('sw.js 缺失');

// ===== 19. CSS 关键类 =====
header('19. CSS 关键样式');
const css = fs.readFileSync(path.join(ROOT,'css/style.css'),'utf8');
['.phrase-row','.scene-btn','.emergency-btn','.recovery-card','.feedback-btn',
 '.tag-red','.tag-blue','.tag-green','.tag-purple','.tag-indigo','.tag-teal',
 '.pwa-tip','.stats-section','.detail-img','.sub-tab','#tabbar','.playing'].forEach(cls => {
  if (css.includes(cls)) ok(cls);
  else w('CSS 缺失: ' + cls);
});

// ===== 20. app.js 关键函数 =====
header('20. app.js 关键函数');
const app = fs.readFileSync(path.join(ROOT,'js/app.js'),'utf8');
['renderHome','renderMorePage','renderDetail','renderRecovery','handleRecovery',
 'playAndRecord','toggleFav','sendFeedback','openFeedback','onSearch',
 'renderEmergencyPage','renderFavoritesPage','renderStatsPage','onVersionTap',
 'track(','TAG_PALETTE','eForIcon','emojiForScene','tagClass','showAbout',
 'showSettings','openScene','goBack','goHome'].forEach(fn => {
  if (app.includes(fn)) ok(fn);
  else err('app.js 缺失函数: ' + fn);
});

// ===== SUMMARY =====
header('📊 验证总结');
console.log('  ✅ 通过: ' + pass);
console.log('  ❌ 错误: ' + fail);
console.log('  ⚠️  警告: ' + warn);
console.log('  词条总数: ' + phrases.length);
console.log('  场景总数: ' + scenes.scenes.length);
console.log('  Intent 数: ' + intents.length);

if (fail === 0) {
  console.log('\n  🎉 系统验证全部通过！');
  process.exit(0);
} else {
  console.log('\n  💥 发现 ' + fail + ' 个错误，需要修复');
  process.exit(1);
}
