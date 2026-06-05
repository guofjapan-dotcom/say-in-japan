// validate.js — 词条校验脚本
// 用法: node tools/validate.js

const fs = require("fs");
const path = require("path");

function loadJSON(relPath) {
  const raw = fs.readFileSync(path.join(__dirname, "..", relPath), "utf8");
  const m = raw.match(/var\s+\w+\s*=\s*([\s\S]*?);\s*$/);
  if (!m) throw new Error(`无法解析 ${relPath}`);
  return JSON.parse(m[1]);
}

function loadScenes() {
  const raw = fs.readFileSync(path.join(__dirname, "..", "js", "data", "scenes.js"), "utf8");
  const m = raw.match(/var\s+\w+\s*=\s*(\{[\s\S]*\});?\s*$/);
  if (!m) throw new Error("无法解析 scenes.js");
  return eval("(" + m[1] + ")");
}

function loadIntents() {
  const raw = fs.readFileSync(path.join(__dirname, "..", "js", "data", "intents.js"), "utf8");
  const m = raw.match(/var\s+\w+\s*=\s*(\[[\s\S]*?\]);?\s*$/);
  if (!m) throw new Error("无法解析 intents.js");
  return eval("(" + m[1] + ")");
}

function main() {
  const phrases = loadJSON("js/data/phrases.js");
  const scenes = loadScenes();
  const intents = loadIntents();

  const sceneIds = new Set(scenes.scenes.map(s => s.id));
  const subsceneMap = scenes.subscenes || {};
  const intentIds = new Set(intents.map(i => i.id));
  const validSceneIds = new Set(["transport", "shop", "food", "emergency", "interact", "accommodation", "medical", "admin", "finance"]);

  const errors = [];
  const warnings = [];
  const seen = { ids: new Set(), cnjp: new Map() };

  const REQUIRED = ["id", "scene", "subscene", "cn", "jp", "intent"];

  phrases.forEach((p, idx) => {
    const loc = `${p.id || "条目#" + idx}`;

    // 必填字段
    REQUIRED.forEach(f => {
      if (!p[f]) errors.push(`${loc}: 缺少必填字段 "${f}"`);
    });

    // scene 有效性
    if (p.scene && !validSceneIds.has(p.scene)) {
      errors.push(`${loc}: scene "${p.scene}" 不在注册的场景中`);
    }

    // subscene 有效性
    if (p.scene && p.subscene && subsceneMap[p.scene]) {
      const validSubs = subsceneMap[p.scene].map(s => s.id);
      if (!validSubs.includes(p.subscene)) {
        errors.push(`${loc}: subscene "${p.subscene}" 不在 scene "${p.scene}" 下`);
      }
    }

    // intent 有效性
    if (p.intent && !intentIds.has(p.intent)) {
      errors.push(`${loc}: intent "${p.intent}" 不在 intents 枚举中`);
    }

    // phonetic 非空
    if (!p.phonetic || p.phonetic.trim() === "") {
      warnings.push(`${loc}: phonetic 为空`);
    }

    // ID 唯一
    if (p.id) {
      if (seen.ids.has(p.id)) {
        errors.push(`${loc}: ID "${p.id}" 重复`);
      }
      seen.ids.add(p.id);
    }

    // 重复词条检测
    if (p.cn && p.jp) {
      const key = p.cn + "|||" + p.jp;
      if (seen.cnjp.has(key)) {
        warnings.push(`${loc}: 与 ${seen.cnjp.get(key)} 疑似重复 (cn+jp 相同)`);
      }
      seen.cnjp.set(key, loc);
    }
  });

  // 报告
  console.log(`\n📋 词库校验报告`);
  console.log(`─────────────────────`);
  console.log(`  总词条: ${phrases.length}`);
  console.log(`  场景数: ${sceneIds.size}`);

  if (errors.length === 0 && warnings.length === 0) {
    console.log(`\n✅ 全部通过`);
  } else {
    if (errors.length > 0) {
      console.log(`\n❌ 错误 (${errors.length}):`);
      errors.forEach(e => console.log(`  - ${e}`));
    }
    if (warnings.length > 0) {
      console.log(`\n⚠️ 警告 (${warnings.length}):`);
      warnings.forEach(w => console.log(`  - ${w}`));
    }
  }

  console.log(`\n结果: ${errors.length} 错误, ${warnings.length} 警告`);
  process.exit(errors.length > 0 ? 1 : 0);
}

main();
