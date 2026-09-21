/* =====================================================
   个人作品集 · 脚本
   数据渲染 + 主题切换 + 滚动渐入动画（原生 JS）
   ===================================================== */

/* ---------- 深浅色主题切换 ---------- */
(function () {
  var html = document.documentElement;

  // 读取上次选择
  var saved = null;
  try { saved = localStorage.getItem('theme'); } catch (e) { /* 忽略隐私模式下的异常 */ }
  if (saved === 'dark') html.setAttribute('data-theme', 'dark');

  var toggle = document.getElementById('theme-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var isDark = html.getAttribute('data-theme') === 'dark';
      if (isDark) {
        html.removeAttribute('data-theme');
        try { localStorage.setItem('theme', 'light'); } catch (e) {}
      } else {
        html.setAttribute('data-theme', 'dark');
        try { localStorage.setItem('theme', 'dark'); } catch (e) {}
      }
    });
  }
})();

/* ---------- 数据 ---------- */
var skills = [
  { name: 'UI 设计', cls: 'tag--pink' },
  { name: 'UX 研究', cls: 'tag--yellow' },
  { name: '交互原型', cls: 'tag--blue' },
  { name: '设计系统', cls: 'tag--purple' },
  { name: '动效设计', cls: 'tag--mint' },
  { name: '品牌视觉', cls: 'tag--ink' },
  { name: '前端开发', cls: 'tag--cream' },
  { name: '可访问性', cls: 'tag--pink' },
];

var tools = ['Figma', 'Framer', 'Webflow', 'React', 'Tailwind', 'GSAP', 'After Effects', 'Notion'];

var projects = [
  {
    title: 'Lumen 银行移动端',
    cat: '产品设计 · 2025',
    desc: '为新兴数字银行重塑开户与转账流程，将原本 7 步压缩至 3 步，转化率提升 32%。',
    img: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=' + encodeURIComponent('vibrant mobile banking app UI mockup with bold purple and pink gradient, modern fintech interface, clean layout') + '&image_size=square',
    tag: 'tag--purple',
    accent: 'accent--purple',
  },
  {
    title: 'Mosaic 设计系统',
    cat: '设计系统 · 2024',
    desc: '为 12 条产品线统一组件、令牌与文档体系，使跨团队设计交付效率提升一倍。',
    img: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=' + encodeURIComponent('colorful design system component sheet, UI buttons cards forms, bold yellow pink blue palette, abstract grid') + '&image_size=square',
    tag: 'tag--yellow',
    accent: 'accent--yellow',
  },
  {
    title: 'Kettle 咖啡品牌',
    cat: '品牌识别 · 2024',
    desc: '独立咖啡品牌的视觉系统：从 logo、包装到店内导视，传递温暖与手工感。',
    img: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=' + encodeURIComponent('coffee brand identity poster design with bold typography, warm cream orange palette, packaging mockup') + '&image_size=square',
    tag: 'tag--pink',
    accent: 'accent--pink',
  },
  {
    title: 'Pulse 健康仪表盘',
    cat: '数据可视化 · 2023',
    desc: '把可穿戴设备的健康数据转译为直觉的图表与建议，鼓励用户持续行动。',
    img: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=' + encodeURIComponent('health data dashboard UI design with colorful charts, blue mint palette, modern interface, analytics') + '&image_size=square',
    tag: 'tag--blue',
    accent: 'accent--blue',
  },
];

var timeline = [
  { year: '2026 — 现在', title: '独立设计工作室创始人', org: 'Alex Lin Studio', desc: '创立个人工作室，专注品牌 × 产品 × 界面一体化交付。', color: '--pink' },
  { year: '2023 — 2026', title: '高级产品设计师', org: 'Northwave 科技', desc: '负责消费级 SaaS 产品的端到端设计，主导 2 次重大改版。', color: '--yellow' },
  { year: '2021 — 2023', title: 'UI/UX 设计师', org: 'Halcyon 数字代理', desc: '服务 20+ 客户的品牌站点与移动端项目，建立动效规范。', color: '--blue' },
  { year: '2020', title: '视觉传达设计学士', org: '中央美术学院', desc: '毕业设计获年度最佳，研究方向：色彩与信息层级。', color: '--purple' },
];

/* ---------- 渲染 ---------- */
function render() {
  document.getElementById('skill-tags').innerHTML = skills.map(function (s) {
    return '<span class="tag ' + s.cls + '">' + s.name + '</span>';
  }).join('');

  document.getElementById('tool-grid').innerHTML = tools.map(function (t) {
    return '<div class="tool-item">' + t + '</div>';
  }).join('');

  document.getElementById('project-grid').innerHTML = projects.map(function (p) {
    return (
      '<article class="project-card reveal tilt">' +
        '<div class="project-media">' +
          '<img src="' + p.img + '" alt="' + p.title + '" loading="lazy"/>' +
          '<span class="project-cat ' + p.tag + '">' + p.cat + '</span>' +
        '</div>' +
        '<div class="project-body">' +
          '<h3 class="project-title">' + p.title + '</h3>' +
          '<p class="project-desc">' + p.desc + '</p>' +
          '<div class="project-more"><span class="accent-bar ' + p.accent + '"></span> 查看案例</div>' +
        '</div>' +
      '</article>'
    );
  }).join('');

  document.getElementById('timeline').innerHTML = timeline.map(function (t, i) {
    var side = i % 2 === 0 ? 'timeline-item--left' : 'timeline-item--right';
    return (
      '<div class="reveal timeline-item ' + side + '">' +
        '<div class="timeline-card-wrap">' +
          '<div class="timeline-card">' +
            '<span class="timeline-year timeline-year' + t.color + '">' + t.year + '</span>' +
            '<h3>' + t.title + '</h3>' +
            '<p class="timeline-org">' + t.org + '</p>' +
            '<p class="timeline-desc">' + t.desc + '</p>' +
          '</div>' +
        '</div>' +
        '<span class="timeline-dot timeline-dot' + t.color + '"></span>' +
      '</div>'
    );
  }).join('');
}

/* ---------- 滚动渐入 ---------- */
function initReveal() {
  var items = document.querySelectorAll('.reveal');
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  items.forEach(function (el) { io.observe(el); });
}

render();
initReveal();
