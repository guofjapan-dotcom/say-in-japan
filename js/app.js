// app.js — Japan survival phrase V5
(function(){
var S = JPSP.storage, TTS = JPSP.speak, I = JPSP_ICONS, CV = JPSP.converter;
var PHRASES = [], SCENES = {}, EMERGENCY = [];
var navStack = [{type:'tab',tab:'home'}];
var currentDetailId = null;
var statsTapCount = 0;
var FEEDBACK_URL = "https://wj.qq.com/s2/26936457/0673/";

function esc(s){return String(s).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'<').replace(/>/g,'>');}

// ===== ANALYTICS =====
function track(eventName, props) {
  if (typeof clarity === 'function') {
    clarity('event', eventName);
  }
  // Local backup: store event counts for stats page
  var stats = S.get('analytics_events') || {};
  stats[eventName] = (stats[eventName] || 0) + 1;
  if (!stats._firstVisit) { stats._firstVisit = Date.now(); }
  var today = new Date().toDateString();
  stats['_day_' + today] = (stats['_day_' + today] || 0) + 1;
  S.set('analytics_events', stats);
}

function eForIcon(n){return I[n]||'🗾';}
function emojiForScene(id){return I['scene-' + id] || '📄';}

// ===== TAG PALETTE =====
var TAG_PALETTE = {
  // 应急类
  "紧急": "tag-red", "最高优先级": "tag-red", "求助": "tag-orange", "丢失": "tag-orange", "投诉": "tag-orange", "健康": "tag-red", "领事馆": "tag-orange",
  // 交通类
  "交通": "tag-blue", "车站": "tag-blue", "机场": "tag-blue", "乘车": "tag-blue", "问路": "tag-blue", "票务": "tag-blue",
  // 餐饮类
  "餐饮": "tag-yellow", "点餐": "tag-yellow", "结账": "tag-yellow", "打包": "tag-yellow", "饮食限制": "tag-yellow", "付款": "tag-yellow",
  // 购物类
  "购物": "tag-green", "支付": "tag-green", "免税": "tag-green", "价格": "tag-green", "尺寸": "tag-green", "颜色": "tag-green", "库存": "tag-green", "试穿": "tag-green", "产地": "tag-green", "询问": "tag-gray", "购买": "tag-green", "退换货": "tag-orange",
  // 互动类
  "拍照": "tag-purple", "许可": "tag-purple", "规约确认": "tag-purple", "请求帮助": "tag-orange", "身份": "tag-gray", "称赞": "tag-teal",
  // 住宿类
  "入住": "tag-indigo", "房间": "tag-indigo", "设备": "tag-red", "清洁": "tag-teal", "用品": "tag-teal", "帮助": "tag-orange", "退房": "tag-indigo",
  // 属性
  "高频": "tag-blue", "万能": "tag-gray", "礼貌用语": "tag-gray",
  // 新卡
  "医疗": "tag-red", "行政": "tag-indigo", "金融": "tag-teal",
};
function tagClass(t){return TAG_PALETTE[t] || 'tag-gray';}

// ===== INTENTS FROM REGISTRY =====
var INTENTS = JPSP_INTENTS;
function phrasesByIntent(intent){return PHRASES.filter(function(p){return p.intent===intent});}
function intentInfo(id){return INTENTS.find(function(i){return i.id===id});}

// ===== NAV =====
function pushNav(e){navStack.push(e);}
window.JPSP.goBack=function(){
  if(navStack.length<=1){navStack=[{type:'tab',tab:'home'}];renderTab('home');return;}
  navStack.pop();var p=navStack[navStack.length-1];
  if(p.type==='tab')renderTab(p.tab);
  else if(p.type==='scene')renderScenePage(p.sceneId,p.subsceneId);
  else if(p.type==='detail')renderDetail(p.id);
  else if(p.type==='stats')renderStatsPage();
  else renderTab('home');
};

function renderTab(tab){
  document.querySelectorAll('#tabbar .tab').forEach(function(b){b.classList.toggle('active',b.dataset.tab===tab)});
  document.getElementById('app-content').scrollTop=0;
  if(tab==='home')renderHome();else if(tab==='more')renderMorePage();else if(tab==='emergency')renderEmergencyPage();else if(tab==='favorites')renderFavoritesPage();
}

// ===== HOME =====
function renderHome(){
  var qids=S.get('quick')||[];
  var quick=qids.map(function(id){return PHRASES.find(function(p){return p.id===id})}).filter(Boolean);
  var recent=(S.get('history')||[]).slice(0,8).map(function(id){return PHRASES.find(function(p){return p.id===id})}).filter(Boolean);

  var h='<div class="scroll-page">';
  h+='<div class="lang-toggle"><button class="lt-btn" onclick="event.stopPropagation();JPSP.toggleLang()">' + (CV.getLang() === 'cn' ? '<span class="lt-active">简体</span> ｜ 繁體' : '简体 ｜ <span class="lt-active">繁體</span>') + '</button></div>';
  h+='<div class="alert-banner"><div class="marquee" id="alertMarquee"><span>🇯🇵 报警：110（警察）</span><span>🚑 急救·消防：119</span><span>🇨🇳 外交部领保热线：+86-10-12308</span><span>🇯🇵 报警：110（警察）</span><span>🚑 急救·消防：119</span><span>🇨🇳 外交部领保热线：+86-10-12308</span></div></div>';
  h+='<div class="intent-bar" id="intentBar">'+INTENTS.map(function(it){return'<button class="intent-pill" data-intent="'+it.id+'"><span class="ie">'+it.emoji+'</span> '+CV.t(it.cn)+'</button>';}).join('')+'</div>';
  h+='<div class="search-wrap"><span class="search-icon">🔍</span><input class="search-input" id="searchInput" placeholder="'+esc(CV.t('搜索短句、场景关键词'))+'" autocomplete="off"><div class="search-results hidden" id="searchResults"></div></div>';
  h+='<h3 class="section-head">'+CV.t('⭐ 我的常用')+'</h3>';
  if(quick.length){h+='<div class="home-grid">'+quick.map(function(p){return'<button class="scene-btn" onclick="JPSP.openDetail(\''+p.id+'\')"><span class="se">'+eForIcon(p.icon)+'</span><span class="label">'+CV.t(p.cn)+'</span></button>';}).join('')+'</div>';
    h+='<div class="quick-sort">'+quick.map(function(p,i){var b='';if(i>0)b+='<button class="qs-btn" onclick="JPSP.moveQuick('+i+',-1)">◀</button>';b+='<span class="qs-name">'+CV.t(p.cn)+'</span>';if(i<quick.length-1)b+='<button class="qs-btn" onclick="JPSP.moveQuick('+i+',1)">▶</button>';b+='<button class="qs-del" onclick="JPSP.removeQuick('+i+')">✕</button>';return'<div class="qs-chip">'+b+'</div>';}).join('')+'</div>';}
  else{h+='<p class="empty-hint">'+CV.t('在词条详情页点击「➕ 添加到常用」')+'</p>';}
  // PWA install tip
  if (!(window.navigator.standalone || window.matchMedia('(display-mode: standalone)').matches) && !S.get('pwa_tip_closed')) {
    h+='<div class="pwa-tip" id="pwaTip"><span class="pwa-tip-emoji">💡</span><div class="pwa-tip-body"><strong>'+CV.t('小彩蛋：添加到桌面更好用哦')+'</strong><p>'+CV.t('分享 →「添加到主屏幕」')+'<br>'+CV.t('下次点桌面图标就能直接打开啦')+'</p></div><button class="pwa-tip-close" onclick="event.stopPropagation();var d=document.getElementById(\'pwaTip\');if(d)d.remove();JPSP.storage.set(\'pwa_tip_closed\',true)">✕</button></div>';
  }
  h+='<h3 class="section-head">'+CV.t('📂 场景入口')+'</h3>';
  h+='<div class="home-grid">';
  SCENES.scenes.filter(function(s){return s.layer==='A'&&s.count>0||s.id==='emergency'}).forEach(function(s){var cls='scene-btn'+(s.id==='emergency'?' emergency-btn':'');h+='<button class="'+cls+'" onclick="JPSP.openScene(\''+s.id+'\')"><span class="se">'+emojiForScene(s.id)+'</span><span class="label">'+CV.t(s.title_cn)+'</span><span class="count">'+s.count+' '+CV.t('句')+'</span></button>';});
  h+='</div>';
  if(recent.length){h+='<div class="home-extras"><h3>'+CV.t('🕐 最近使用')+'</h3><div class="recent-list">'+recent.map(function(p){return'<div class="recent-item" onclick="JPSP.openDetail(\''+p.id+'\')">'+eForIcon(p.icon)+' '+CV.t(p.cn)+'</div>';}).join('')+'</div></div>';}
  h+='<div class="footer-copyright"><p>© 2026 Peak.Guo</p><p>Say in Japan · Free &amp; Open Source Project</p><p>Made in Japan</p><p><a href="https://github.com/guofjapan-dotcom/say-in-japan" target="_blank" style="color:#3366EE">GitHub Repository</a></p></div>';
  h+='<div class="settings-links">';
  h+='<a class="settings-link" href="javascript:JPSP.showDisclaimer()">免责声明</a>';
  h+='<a class="settings-link" href="javascript:JPSP.showAbout()">关于作者</a>';
  h+='<a class="settings-link" href="javascript:JPSP.showSupport()">支持作者</a>';
  h+='<a class="settings-link" href="javascript:JPSP.showSettings()">设置</a>';
  h+='</div>';
  h+='<div class="feedback-entry"><button class="feedback-btn" onclick="event.stopPropagation();JPSP.openFeedback()">💬 '+CV.t('意见反馈')+'</button></div>';
  h+='</div>';
  document.getElementById('app-content').innerHTML=h;
  bindHome();
}

function bindHome(){
  var si=document.getElementById('searchInput');if(si){si.oninput=function(){JPSP.onSearch(this.value)};si.onfocus=function(){JPSP.onSearch(this.value)};}
  document.querySelectorAll('.intent-pill').forEach(function(p){p.onclick=function(){JPSP.triggerIntent(this.dataset.intent);};});
  var b=document.getElementById('intentBar');if(b){b.addEventListener('wheel',function(e){e.preventDefault();b.scrollLeft+=e.deltaY;});}
  var m=document.getElementById('alertMarquee');if(m){m.addEventListener('touchstart',function(){m.style.animationPlayState='paused'});m.addEventListener('touchend',function(){m.style.animationPlayState='running'});}
}

// ===== FEEDBACK URL =====
window.JPSP.openFeedback = function() {
  if (FEEDBACK_URL) {
    window.open(FEEDBACK_URL, '_blank');
    track('feedback_click');
  } else {
    alert('反馈功能暂未开放');
  }
};

// ===== QUICK =====
window.JPSP.addQuick=function(id){var q=S.get('quick')||[];if(q.includes(id))q=q.filter(function(x){return x!==id});else q.push(id);if(q.length>12)q=q.slice(0,12);S.set('quick',q);renderDetail(id);};
window.JPSP.removeQuick=function(i){var q=S.get('quick')||[];q.splice(i,1);S.set('quick',q);navStack=[{type:'tab',tab:'home'}];renderHome();};
window.JPSP.moveQuick=function(i,d){var q=S.get('quick')||[];var j=i+d;if(j<0||j>=q.length)return;var t=q[i];q[i]=q[j];q[j]=t;S.set('quick',q);navStack=[{type:'tab',tab:'home'}];renderHome();};

// ===== MORE PAGE (B-layer) =====
function renderMorePage(){
  var bScenes = SCENES.scenes.filter(function(s){return s.layer==='B'});
  var h='<div class="scroll-page"><div class="header"><h1>'+CV.t('更多')+'</h1><p>'+CV.t('长期生活的实用场景')+'</p></div>';
  h+='<div class="scene-list">';
  bScenes.forEach(function(s){h+='<div class="sl-row" onclick="JPSP.openScene(\''+s.id+'\')"><span class="sl-emoji">'+emojiForScene(s.id)+'</span><div class="sl-body"><div class="sl-cn">'+CV.t(s.title_cn)+'</div><div class="sl-jp">'+s.title_jp+'</div></div><span class="sl-count">'+s.count+' '+CV.t('句')+'</span></div>';});
  h+='</div>';
  // Also show all scenes (A+B) for browsing
  h+='<h3 class="section-head" style="margin-top:20px">'+CV.t('📂 全部场景')+'</h3>';
  h+='<div class="scene-list">';
  SCENES.scenes.forEach(function(s){h+='<div class="sl-row" onclick="JPSP.openScene(\''+s.id+'\')"><span class="sl-emoji">'+emojiForScene(s.id)+'</span><div class="sl-body"><div class="sl-cn">'+CV.t(s.title_cn)+'</div><div class="sl-jp">'+s.title_jp+'</div></div><span class="sl-count">'+s.count+' '+CV.t('句')+'</span></div>';});
  h+='</div></div>';
  document.getElementById('app-content').innerHTML=h;
}

// ===== SCENE PAGE =====
window.JPSP.openScene=function(sceneId,ssId){track('category_click');pushNav({type:'scene',sceneId:sceneId,subsceneId:ssId});renderScenePage(sceneId,ssId);};

function renderScenePage(sceneId,ssId){
  var info=SCENES.scenes.find(function(s){return s.id===sceneId});
  var subs=(SCENES.subscenes||{})[sceneId]||[];
  var items=PHRASES.filter(function(p){return p.scene===sceneId});
  if(ssId){items=items.filter(function(p){return p.subscene===ssId});}else if(subs.length){ssId=subs[0].id;items=items.filter(function(p){return p.subscene===ssId});}
  var isEm=sceneId==='emergency';
  if(isEm) track('emergency_open');
  var h='<div class="scroll-page">';
  h+='<div class="nav-bar"><button class="back-btn" onclick="JPSP.goBack()">←</button><span class="section-title">'+emojiForScene(sceneId)+' '+CV.t((info||{}).title_cn||'')+'</span><span class="section-count">'+items.length+' '+CV.t('句')+'</span></div>';
  if(subs.length>1){h+='<div class="sub-tabs">'+subs.map(function(s){var a=s.id===ssId?' active':'';return'<button class="sub-tab'+a+(isEm?' emergency':'')+'" onclick="JPSP.openScene(\''+sceneId+'\',\''+s.id+'\')">'+CV.t(s.name)+'</button>';}).join('')+'</div>';}
  h+='<div class="phrase-list">'+items.map(function(p){return renderRow(p,isEm);}).join('')+'</div>';
  if(isEm)h+=renderEmbassy();
  h+='</div>';
  document.getElementById('app-content').innerHTML=h;
  document.getElementById('app-content').scrollTop=0;
}

// ===== EMERGENCY =====
function renderEmergencyPage(){
  var items=PHRASES.filter(function(p){return p.scene==='emergency'});
  track('emergency_open');
  var h='<div class="scroll-page"><div class="header"><h1>'+CV.t('🚨 应急')+'</h1></div>';
  h+='<div class="sub-tabs">';
  ['urgent','lost','health','help','embassy'].forEach(function(sub){var it=items.filter(function(p){return p.subscene===sub});if(it.length)h+='<button class="sub-tab" onclick="JPSP.openScene(\'emergency\',\''+sub+'\')">'+CV.t(it[0].cn)+'</button>';});
  h+='</div>';
  h+='<div class="phrase-list">'+items.filter(function(p){return p.subscene==='urgent'}).map(function(p){return renderRow(p,true)}).join('')+'</div>';
  h+=renderEmbassy();
  h+='</div>';
  document.getElementById('app-content').innerHTML=h;
}

function renderEmbassy(){
  var h='<div class="emergency-section">';
  h+='<h3>🇯🇵 紧急电话</h3><div class="japan-info">';
  EMERGENCY.forEach(function(e){if(!e.address){h+='<div class="info-item"><div class="num">'+e.phone+'</div><div class="desc">'+e.name+'</div><a class="call-btn emergency-call" href="tel:'+e.phone+'">📞 拨打</a></div>';}});
  h+='</div><h3>🏛️ 使领馆</h3>';
  EMERGENCY.forEach(function(e){if(e.address){h+='<div class="embassy-card"><div class="name">'+e.name+'</div><div class="info">📍 '+e.address+'<br>📞 <strong>'+e.phone+'</strong><br>🗺️ '+e.region+'</div><a class="call-btn" href="tel:'+e.phone+'">📞 拨打</a></div>';}});
  h+='</div>';return h;
}

// ===== FAVORITES =====
function renderFavoritesPage(){
  var ids=S.get('favorites')||[];
  var items=PHRASES.filter(function(p){return ids.includes(p.id)});
  var h='<div class="scroll-page"><div class="header"><h1>'+CV.t('⭐ 我的收藏')+'</h1><p>'+items.length+' '+CV.t('句')+'</p></div>';
  if(!items.length)h+='<div class="empty"><span class="empty-icon">⭐</span>'+CV.t('还没有收藏的句子')+'</div>';
  else h+='<div class="phrase-list">'+items.map(function(p){return renderRow(p)}).join('')+'</div>';
  h+='</div>';
  document.getElementById('app-content').innerHTML=h;
}

// ===== PHRASE ROW =====
function renderRow(p,isEm){
  var f=S.isInSet('favorites',p.id),pl=TTS.isPlaying(p.id);
  return'<div class="phrase-row'+(isEm?' emergency-row':'')+(pl?' playing':'')+'" data-id="'+p.id+'" onclick="JPSP.openDetail(\''+p.id+'\')"><span class="pr-emoji">'+eForIcon(p.icon)+'</span><div class="body"><div class="cn">'+CV.t(p.cn)+'</div><div class="jp">'+p.jp+'</div>'+(p.tags?'<div class="tags">'+p.tags.slice(0,3).map(function(t){return'<span class="tag '+tagClass(t)+'">'+CV.t(t)+'</span>';}).join('')+'</div>':'')+'</div><div class="actions"><button class="play-btn'+(pl?' playing':'')+'" onclick="event.stopPropagation();JPSP.playAndRecord(\''+p.id+'\',\''+esc(p.jp)+'\')">▶</button><button class="fav-btn-sm'+(f?' on':'')+'" onclick="event.stopPropagation();JPSP.toggleFav(\''+p.id+'\')">'+(f?'⭐':'☆')+'</button></div></div>';
}

// ===== DETAIL =====
window.JPSP.openDetail=function(id){pushNav({type:'detail',id:id});renderDetail(id);};

function renderDetail(id){
  var p=PHRASES.find(function(ph){return ph.id===id});if(!p){navStack=[{type:'tab',tab:'home'}];renderTab('home');return;}
  currentDetailId=id;var f=S.isInSet('favorites',id),pl=TTS.isPlaying(id),q=(S.get('quick')||[]).includes(id);
  var h='<div class="scroll-page">';
  h+='<div class="nav-bar"><button class="back-btn" onclick="JPSP.goBack()">←</button><span class="section-title">'+CV.t('详情')+'</span></div>';
  h+='<div class="detail-img" onclick="JPSP.playAndRecord(\''+id+'\',\''+esc(p.jp)+'\')">'+eForIcon(p.icon)+'</div>';
  h+='<div class="detail-cn">'+CV.t(p.cn)+'</div>';
  h+='<div class="detail-jp">'+p.jp+'</div>';
  if(p.phonetic)h+='<div class="detail-phonetic"><span class="dp-icon">🔊</span>'+CV.t(p.phonetic)+'</div>';
  if(p.tags)h+='<div class="detail-tags">'+p.tags.map(function(t){return'<span class="detail-tag '+tagClass(t)+'">#'+CV.t(t)+'</span>';}).join('')+'</div>';
  h+='<div class="detail-actions"><button class="btn-play'+(pl?' playing':'')+'" onclick="JPSP.playAndRecord(\''+id+'\',\''+esc(p.jp)+'\')">🔊 '+(pl?CV.t('播放中…'):CV.t('播放'))+'</button><button class="btn-fav'+(f?' on':'')+'" onclick="JPSP.toggleFav(\''+id+'\')">'+(f?CV.t('⭐ 已收藏'):CV.t('☆ 收藏'))+'</button></div>';
  h+='<button class="quick-add-btn'+(q?' added':'')+'" onclick="JPSP.addQuick(\''+id+'\')">'+(q?CV.t('✅ 已添加到常用'):CV.t('➕ 添加到常用'))+'</button>';
  h+=renderRecovery(p);
  h+=renderFeedback(p);
  var items=PHRASES.filter(function(ph){return ph.scene===p.scene&&ph.subscene===p.subscene});if(!items.length)items=PHRASES.filter(function(ph){return ph.scene===p.scene});
  var idx=items.findIndex(function(ph){return ph.id===id});
  h+='<div class="nav-buttons">';
  if(idx>0)h+='<button onclick="JPSP.openDetail(\''+items[idx-1].id+'\')">'+CV.t('← 上一句')+'</button>';
  if(idx<items.length-1)h+='<button onclick="JPSP.openDetail(\''+items[idx+1].id+'\')">'+CV.t('下一句 →')+'</button>';
  h+='</div></div>';
  document.getElementById('app-content').innerHTML=h;document.getElementById('app-content').scrollTop=0;
}

// ===== DIALOG RECOVERY — 对话卡住了？试试下一句 =====
function renderRecovery(p){
  var info = intentInfo(p.intent) || {};
  var recommend = info.recommend || 'same_intent';

  var cards = [
    {emoji:'🙅', label:CV.t('被拒绝了'), hint:CV.t('换个说法再试试'), action:'rejected'},
    {emoji:'😕', label:CV.t('对方没听懂我'), hint:CV.t('请对方重复或慢点说'), action:'confused'},
    {emoji:'🗣️', label:CV.t('对方说太快听不懂'), hint:CV.t('请对方写下来'), action:'too_fast'}
  ];

  return'<div class="recovery-section"><h3>'+CV.t('💬 对话卡住了？试试下一句')+'</h3><div class="recovery-grid">'+cards.map(function(c){return'<div class="recovery-card" onclick="JPSP.handleRecovery(\''+c.action+'\',\''+esc(p.id)+'\')"><div class="rc-emoji">'+c.emoji+'</div><div class="rc-label">'+c.label+'</div><div class="rc-hint">'+c.hint+'</div></div>';}).join('')+'</div></div>';
}

window.JPSP.handleRecovery=function(action,phraseId){
  track('recovery_click');
  var p=PHRASES.find(function(ph){return ph.id===phraseId});if(!p)return;
  S.pushRecent('history',phraseId);

  var matches = [];
  if(action === 'rejected'){
    // 同 intent + 同 scene 的替代句
    matches = PHRASES.filter(function(ph){
      return ph.intent === p.intent && ph.scene === p.scene && ph.id !== phraseId;
    }).slice(0, 3);
    if(!matches.length){
      matches = PHRASES.filter(function(ph){return ph.scene === p.scene && ph.id !== phraseId;}).slice(0, 3);
    }
  } else if(action === 'confused'){
    // 请求澄清类通用句
    matches = [
      PHRASES.find(function(ph){return ph.id === 'ia_025'}), // 请再说一遍
      PHRASES.find(function(ph){return ph.id === 'ia_026'}), // 请说慢一点
      PHRASES.find(function(ph){return ph.id === 'ia_027'})  // 能用简单日语说吗
    ].filter(Boolean);
  } else if(action === 'too_fast'){
    // 请求辅助类
    matches = [
      PHRASES.find(function(ph){return ph.id === 'ia_028'}), // 能写在纸上吗
      PHRASES.find(function(ph){return ph.id === 'ia_020'}), // 能帮我翻译吗
      PHRASES.find(function(ph){return ph.id === 'ia_021'})  // 能帮我写一下吗
    ].filter(Boolean);
  }
  if(!matches.length) return;
  showRecoveryModal(matches);
};

function showRecoveryModal(matches){
  var ov=document.createElement('div');ov.className='disclaimer-overlay';
  ov.innerHTML='<div class="disclaimer-dialog" onclick="event.stopPropagation()"><h2>💡 '+CV.t('试试下一句')+'</h2><div class="modal-list">'+matches.map(function(m){return'<div class="modal-item" onclick="JPSP.openDetail(\''+m.id+'\');this.closest(\'.disclaimer-overlay\').remove()"><span class="mi-emoji">'+eForIcon(m.icon)+'</span><div><div class="modal-cn">'+m.cn+'</div><div class="modal-jp">'+m.jp+'</div></div></div>';}).join('')+'</div><button class="disclaimer-accept" onclick="this.closest(\'.disclaimer-overlay\').remove()">'+CV.t('关闭')+'</button></div>';
  ov.addEventListener('click',function(){ov.remove()});document.body.appendChild(ov);
}

// ===== FEEDBACK =====
function renderFeedback(p){
  return'<div class="feedback-row"><span>'+CV.t('这个表达有帮助吗？')+'</span><button onclick="JPSP.sendFeedback(\''+esc(p.id)+'\',\'helpful\')">'+CV.t('👍 有用')+'</button><button onclick="JPSP.sendFeedback(\''+esc(p.id)+'\',\'not_helpful\')">'+CV.t('👎 不好用')+'</button></div>';
}
window.JPSP.sendFeedback=function(id,t){var fb=S.get('feedback')||[];fb.push({phrase:id,type:t,time:Date.now()});S.set('feedback',fb);track('phrase_feedback');
  // Visual confirmation
  var row=document.querySelector('.feedback-row');if(row){row.innerHTML='<span style=\"color:#34c759;font-weight:600\">'+CV.t('✓ 已反馈，谢谢！')+'</span>';}
};

// ===== SEARCH =====
var st;
window.JPSP.onSearch=function(q){clearTimeout(st);st=setTimeout(function(){doSearch(q);},150);};
function doSearch(q){
  var r=document.getElementById('searchResults');if(!r)return;
  if(!q||q.trim().length<1){r.classList.add('hidden');return;}
  q=q.toLowerCase().trim();
  var m=PHRASES.filter(function(p){return p.cn.indexOf(q)>-1||p.jp.indexOf(q)>-1||(p.tags||[]).some(function(t){return t.indexOf(q)>-1})||(p.intent||'').indexOf(q)>-1;}).slice(0,8);
  if(!m.length){r.classList.add('hidden');return;}
  track('search');
  r.innerHTML=m.map(function(p){return'<div class="sr-item" onclick="JPSP.openDetail(\''+p.id+'\')"><span class="sr-emoji">'+eForIcon(p.icon)+'</span><div><div class="sr-cn">'+CV.t(p.cn)+'</div><div class="sr-jp">'+p.jp+'</div></div></div>';}).join('');
  r.classList.remove('hidden');
}
document.addEventListener('click',function(e){var w=document.querySelector('.search-wrap');if(w&&!w.contains(e.target)){var r=document.getElementById('searchResults');if(r)r.classList.add('hidden');}});

// ===== INTENT =====
window.JPSP.triggerIntent=function(intent){track('category_click');var m=phrasesByIntent(intent);if(!m.length)return;if(m.length===1)JPSP.openDetail(m[0].id);else{var it=INTENTS.find(function(i){return i.id===intent})||{emoji:'📄',cn:intent};var ov=document.createElement('div');ov.className='disclaimer-overlay';ov.innerHTML='<div class="disclaimer-dialog" onclick="event.stopPropagation()"><h2>'+it.emoji+' '+it.cn+' ('+m.length+' '+CV.t('句')+')</h2><div class="modal-list">'+m.map(function(p){return'<div class="modal-item" onclick="JPSP.openDetail(\''+p.id+'\');this.closest(\'.disclaimer-overlay\').remove()"><span class="mi-emoji">'+eForIcon(p.icon)+'</span><div><div class="modal-cn">'+p.cn+'</div><div class="modal-jp">'+p.jp+'</div></div></div>';}).join('')+'</div><button class="disclaimer-accept" onclick="this.closest(\'.disclaimer-overlay\').remove()">'+CV.t('关闭')+'</button></div>';ov.addEventListener('click',function(){ov.remove()});document.body.appendChild(ov);}};

// ===== PLAY / FAV =====
window.JPSP.playAndRecord=function(id,jp){track('phrase_play');S.pushRecent('history',id);
  var img=document.querySelector('.detail-img');if(img){img.classList.add('bouncing');setTimeout(function(){img.classList.remove('bouncing');},400);}
  TTS.speak(id,jp);};
window.JPSP.toggleFav=function(id){var n=S.toggleSet('favorites',id);document.querySelectorAll('.fav-btn-sm[onclick*="'+id+'"]').forEach(function(b){b.classList.toggle('on',n);b.textContent=n?'⭐':'☆';});var d=document.querySelector('.btn-fav');if(d&&currentDetailId===id){d.classList.toggle('on',n);d.textContent=n?'⭐ 已收藏':'☆ 收藏';}};

TTS.setStateChange(function(id,pl){
  var row=document.querySelector('[data-id="'+id+'"]');if(row){row.classList.toggle('playing',pl);var b=row.querySelector('.play-btn');if(b)b.classList.toggle('playing',pl);}
  var db=document.querySelector('.btn-play');if(db&&currentDetailId===id){db.classList.toggle('playing',pl);db.textContent=pl?'🔊 播放中…':'🔊 播放';}
});

// ===== DISCLAIMER =====
window.JPSP.showFirstDisclaimer=function(){
  var ov=document.createElement('div');ov.className='disclaimer-overlay';
  ov.innerHTML='<div class="disclaimer-dialog" onclick="event.stopPropagation()"><h2>使用说明</h2><p>本应用为日常生活语言辅助工具，提供场景化日语表达参考与语音播放功能，<strong>不构成任何法律、医疗或官方建议</strong>。</p><p>紧急情况请优先拨打日本当地紧急电话：<span class="emergency-highlight">警察 110</span> · <span class="emergency-highlight">救护/消防 119</span></p><p>涉及领事保护等事务，请以中国驻日本使领馆官方渠道信息为准。使用本应用产生的任何行为及后果，由使用者自行承担。</p><label class="disclaimer-check"><input type="checkbox" id="dc" onchange="document.getElementById(\'db\').disabled=!this.checked"> 我已阅读并理解以上内容</label><button class="disclaimer-accept" id="db" disabled onclick="JPSP.storage.set(\'disclaimer_accepted\',true);this.closest(\'.disclaimer-overlay\').remove();JPSP.startApp();">进入应用</button></div>';
  document.body.appendChild(ov);
};
window.JPSP.startApp=function(){navStack=[{type:'tab',tab:'home'}];renderTab('home');};
window.JPSP.showDisclaimer=function(){
  var ex=document.querySelector('.disclaimer-overlay');if(ex)ex.remove();
  var ov=document.createElement('div');ov.className='disclaimer-overlay';
  ov.innerHTML='<div class="disclaimer-dialog" onclick="event.stopPropagation()"><h2>'+CV.t('免责声明')+'</h2><p>本应用仅提供日常生活交流参考用语与辅助功能，<strong>不构成任何法律、医疗或官方机构的正式建议</strong>。</p><p>紧急情况请优先联系日本当地紧急电话：<span class="emergency-highlight">警察（110）</span> · <span class="emergency-highlight">救急·消防（119）</span></p><p>涉及领事保护等事宜，请以中国驻日本使领馆官方公布信息为准。使用本应用过程中产生的任何行为及后果，由使用者自行承担。</p><div class="lang-section"><h3>日本語</h3><p>本アプリは、日常生活におけるコミュニケーション補助を目的とした参考表現·音声再生ツールです。<strong>法律·医療·公的機関による正式な助言を行うものではありません。</strong></p><p>緊急時は、ためらわずに日本の緊急通報番号：<span class="emergency-highlight">警察（110）</span>·<span class="emergency-highlight">救急·消防（119）</span>へ連絡してください。</p><p>領事保護に関わる事項は、在日中国大使館·総領事館の公式情報をご確認ください。本アプリの利用により生じたいかなる結果についても、開発者は一切の責任を負いません。</p><p style="color:#aeaeb2;font-size:11px;margin-top:10px;text-align:center">Made by Peak.Guo</p></div><button class="disclaimer-accept" onclick="this.closest(\'.disclaimer-overlay\').remove()">'+CV.t('閉じる')+'</button></div>';
  ov.addEventListener('click',function(){ov.remove()});document.body.appendChild(ov);
};

// ===== GO HOME =====
window.JPSP.goHome=function(){JPSP.speak.stop();navStack=[{type:'tab',tab:'home'}];renderTab('home');};

// ===== ABOUT =====
window.JPSP.showAbout=function(){
  var ov=document.createElement('div');ov.className='disclaimer-overlay';
  ov.innerHTML='<div class="disclaimer-dialog" onclick="event.stopPropagation()"><h2>👤 '+CV.t('关于作者')+'</h2><div class="static-card" style="background:#f8f8fa;padding:16px;border-radius:14px;margin-bottom:12px"><p><strong>作者：Peak.Guo</strong></p><p>Say in Japan 是作者在日本生活期间开发的免费沟通工具。</p><p>因为亲身经历过：</p><p>• 不会日语</p><p>• 不敢开口</p><p>• 找不到想表达的话</p><p>• 紧急情况不知道如何求助</p><p>所以开发了这个工具。</p><p>希望帮助更多来日本旅游、留学、工作和生活的人。</p></div><button class="disclaimer-accept secondary" onclick="JPSP.openFeedback()" style="margin-bottom:6px">💬 '+CV.t('意见反馈')+'</button><button class="disclaimer-accept" onclick="this.closest(\x27.disclaimer-overlay\x27).remove()">'+CV.t('关闭')+'</button></div>';
  ov.addEventListener('click',function(){ov.remove()});document.body.appendChild(ov);
};

// ===== SUPPORT =====
window.JPSP.showSupport=function(){
  var ov=document.createElement('div');ov.className='disclaimer-overlay';
  ov.innerHTML='<div class="disclaimer-dialog" onclick="event.stopPropagation()"><h2>☕ 支持作者</h2><p style="text-align:center;margin-bottom:8px">如果这个工具帮助到了你，<br>欢迎请作者喝一杯咖啡。</p><p style="text-align:center;font-size:12px;color:#8e8e93;margin-bottom:12px">你的支持将用于：项目维护 · 词库更新 · BUG修复 · 用户体验优化</p><p style="text-align:center;font-size:13px;margin-bottom:14px">Say in Japan 将继续保持<strong>免费开放</strong>。</p><div class="qr-cards"><div class="qr-card" onclick="this.classList.toggle(\x27zoomed\x27)"><img src="assets/qr/wechat.png" alt="微信收款码" style="width:100%;border-radius:12px"><div class="qr-card-label">💚 微信支付</div></div><div class="qr-card" onclick="this.classList.toggle(\x27zoomed\x27)"><img src="assets/qr/alipay.png" alt="支付宝收款码" style="width:100%;border-radius:12px"><div class="qr-card-label">💙 支付宝</div></div></div><button class="disclaimer-accept" onclick="this.closest(\x27.disclaimer-overlay\x27).remove()">'+CV.t('关闭')+'</button></div>';
  ov.addEventListener('click',function(e){if(e.target===ov)ov.remove()});document.body.appendChild(ov);
};

// ===== SETTINGS =====
window.JPSP.showSettings=function(){
  statsTapCount = 0;
  var ov=document.createElement('div');ov.className='disclaimer-overlay';
  ov.innerHTML='<div class="disclaimer-dialog" onclick="event.stopPropagation()"><h2>⚙️ '+CV.t('项目信息')+'</h2><div class="meta-row"><span class="label">'+CV.t('版本')+'</span><span class="value" id="versionText" style="cursor:pointer;-webkit-user-select:text;user-select:text" onclick="JPSP.onVersionTap()">0.33</span></div><div class="meta-row"><span class="label">'+CV.t('最近更新')+'</span><span class="value">2026-06-05</span></div><div class="meta-row"><span class="label">'+CV.t('PWA')+'</span><span class="value">✓ '+CV.t('支持')+'</span></div><div class="meta-row"><span class="label">'+CV.t('离线可用')+'</span><span class="value">✓ '+CV.t('支持')+'</span></div><div class="meta-row"><span class="label">'+CV.t('开源协议')+'</span><span class="value">CC BY-NC 4.0</span></div><div class="meta-row"><span class="label">'+CV.t('作者')+'</span><span class="value">Peak.Guo</span></div><div class="meta-row"><span class="label">GitHub</span><span class="value"><a href="https://github.com/guofjapan-dotcom/say-in-japan" target="_blank" style="color:#3366EE">'+CV.t('查看仓库')+'</a></span></div><button class="disclaimer-accept" onclick="this.closest(\x27.disclaimer-overlay\x27).remove()">'+CV.t('关闭')+'</button></div>';
  ov.addEventListener('click',function(){ov.remove()});document.body.appendChild(ov);
};

// ===== STATS (hidden — 5 taps on version) =====
window.JPSP.onVersionTap = function() {
  statsTapCount++;
  if (statsTapCount >= 5) {
    statsTapCount = 0;
    // Close settings modal
    var ov = document.querySelector('.disclaimer-overlay');
    if (ov) ov.remove();
    pushNav({type:'stats'});
    renderStatsPage();
  }
};

function renderStatsPage() {
  var stats = S.get('analytics_events') || {};
  var events = ['search','category_click','phrase_play','emergency_open','feedback_click','recovery_click','phrase_feedback'];

  // Count today
  var today = new Date().toDateString();
  var todayCount = stats['_day_' + today] || 0;

  // Count total events
  var totalEvents = 0;
  events.forEach(function(e){ totalEvents += (stats[e] || 0); });

  var firstVisit = stats._firstVisit ? new Date(stats._firstVisit).toLocaleDateString('zh-CN') : '未知';
  var daysSince = stats._firstVisit ? Math.max(1, Math.ceil((Date.now() - stats._firstVisit) / 86400000)) : 1;

  var h = '<div class="scroll-page">';
  h += '<div class="nav-bar"><button class="back-btn" onclick="JPSP.goBack()">←</button><span class="section-title">📊 使用统计</span></div>';

  h += '<div class="stats-section"><h3>📅 今日</h3>';
  h += '<div class="stats-big">' + todayCount + ' <small>次页面浏览</small></div></div>';

  h += '<div class="stats-section"><h3>📈 累计 (自 ' + firstVisit + ')</h3>';
  h += '<div class="stats-big">~' + daysSince + ' <small>天</small></div></div>';

  h += '<div class="stats-section"><h3>🎯 行为统计</h3>';
  events.forEach(function(e) {
    var count = stats[e] || 0;
    var bar = '';
    var maxW = Math.max(1, totalEvents);
    var w = Math.round(count / maxW * 20);
    for (var i = 0; i < w; i++) bar += '█';
    var labels = {search:'🔍 搜索',category_click:'📂 分类点击',phrase_play:'🔊 播放句子',emergency_open:'🚨 应急打开',feedback_click:'💬 反馈点击',recovery_click:'🔄 对话补救',phrase_feedback:'👍 句子反馈'};
    h += '<div class="stats-row"><span class="stats-label">' + (labels[e] || e) + '</span><span class="stats-bar">' + bar + '</span><span class="stats-count">' + count + '</span></div>';
  });
  h += '</div>';

  h += '<div class="stats-section"><h3>⏰ 每日浏览</h3>';
  var days = [];
  for (var k in stats) {
    if (k.indexOf('_day_') === 0) {
      days.push({day: k.replace('_day_', ''), count: stats[k]});
    }
  }
  days.sort(function(a,b){return a.day.localeCompare(b.day);});
  days.slice(-30).forEach(function(d){
    h += '<div class="stats-row"><span class="stats-label">' + d.day + '</span><span class="stats-count">' + d.count + '</span></div>';
  });
  h += '</div>';

  // Feedback summary
  var feedbacks = S.get('feedback') || [];
  var likeMap = {}, dislikeMap = {};
  feedbacks.forEach(function(f){
    var p = PHRASES.find(function(ph){return ph.id === f.phrase});
    if(!p) return;
    if(f.type === 'helpful'){ likeMap[p.id] = (likeMap[p.id]||0) + 1; }
    else { dislikeMap[p.id] = (dislikeMap[p.id]||0) + 1; }
  });
  function topPhrases(map, n){
    return Object.entries(map).sort(function(a,b){return b[1]-a[1]}).slice(0,n)
      .map(function(e){var p=PHRASES.find(function(ph){return ph.id===e[0]});return p?p.cn+' ('+e[1]+')':'';}).filter(Boolean);
  }
  var liked = topPhrases(likeMap, 5);
  var disliked = topPhrases(dislikeMap, 3);
  if(liked.length > 0){
    h += '<div class="stats-section"><h3>👍 最受欢迎 ('+feedbacks.filter(function(f){return f.type==="helpful"}).length+' 次)</h3>';
    liked.forEach(function(s,i){h += '<div class="stats-row"><span class="stats-label">' + (i+1) + '. ' + s + '</span></div>';});
    h += '</div>';
  }
  if(disliked.length > 0){
    h += '<div class="stats-section"><h3>👎 需改进</h3>';
    disliked.forEach(function(s,i){h += '<div class="stats-row"><span class="stats-label">' + (i+1) + '. ' + s + '</span></div>';});
    h += '</div>';
  }

  h += '<p style="text-align:center;font-size:11px;color:#aeaeb2;margin-top:16px">数据仅存储在本地，不上传服务器</p>';
  h += '</div>';
  document.getElementById('app-content').innerHTML = h;
  document.getElementById('app-content').scrollTop = 0;
}

// ===== LICENSE =====
window.JPSP.showLicense=function(){
  var ov=document.createElement('div');ov.className='disclaimer-overlay';
  ov.innerHTML='<div class="disclaimer-dialog" onclick="event.stopPropagation()"><h2>📄 开源协议</h2><p>本项目为个人开源项目，采用 <strong>CC BY-NC 4.0</strong> 协议。</p><p style="color:#34c759;font-weight:600">允许：</p><p>• 学习</p><p>• 使用</p><p>• 分享</p><p>• Fork</p><p style="color:#ff3b30;font-weight:600">未经作者许可禁止商业用途。</p><p style="font-size:12px;color:#8e8e93;margin-top:8px">完整协议请查看项目仓库中的 LICENSE 文件。</p><button class="disclaimer-accept" onclick="this.closest(\x27.disclaimer-overlay\x27).remove()">'+CV.t('关闭')+'</button></div>';
  ov.addEventListener('click',function(){ov.remove()});document.body.appendChild(ov);
};

// ===== LANGUAGE TOGGLE =====
window.JPSP.toggleLang = function() {
  var cur = CV.getLang();
  CV.setLang(cur === 'cn' ? 'tw' : 'cn');
  CV.initConv();
  var top = navStack[navStack.length - 1];
  if (top && top.type === 'tab') renderTab(top.tab);
  else if (top && top.type === 'scene') renderScenePage(top.sceneId, top.subsceneId);
  else if (top && top.type === 'detail') renderDetail(top.id);
  else if (top && top.type === 'stats') renderStatsPage();
  else renderTab('home');
};

// ===== TAB BAR =====
document.getElementById('tabbar').onclick=function(e){var t=e.target.closest('.tab');if(!t)return;navStack=[{type:'tab',tab:t.dataset.tab}];renderTab(t.dataset.tab);};

// ===== INIT =====
window.JPSP.init=function(p,s,e){PHRASES=p;SCENES=s;EMERGENCY=e;if(!S.get('disclaimer_accepted')){JPSP.showFirstDisclaimer();return;}navStack=[{type:'tab',tab:'home'}];renderTab('home');};
})();
