# Alex Lin · 个人作品集

一个使用原生 HTML / CSS / JavaScript 实现的个人作品集单页站点，无前端框架、无第三方 UI 组件库，桌面端与移动端自适应。

## 技术栈

- **HTML** — 单页结构（导航 / Hero / 关于 / 作品 / 经历 / 联系 / 页脚）
- **CSS** — 自定义样式（`style.css`），含深浅色主题变量与响应式布局
- **JavaScript** — 原生 JS（`script.js`），数据驱动渲染 + 主题切换 + 滚动渐入动画
- 字体：Google Fonts（Archivo Black、Space Grotesk）

## 主要功能

- **数据驱动渲染**：技能标签、工具箱、作品卡片、时间轴均由 `script.js` 中的数据数组生成，修改数据即可更新页面。
- **深浅色主题切换**：右上角按钮切换，使用 `localStorage` 记住用户偏好。
- **滚动渐入动画**：基于 `IntersectionObserver`，元素进入视口时淡入。
- **响应式布局**：兼容桌面端与移动端。
- **项目配图**：通过 Trae 文本生成图片接口按项目动态生成占位图。
- **章节导航**：锚点跳转（关于 / 技能 / 作品 / 经历 / 联系）。

## 运行方式

无需构建，直接在浏览器中打开 `index.html` 即可：

```bash
# 方式一：直接双击 index.html

# 方式二：启动本地静态服务器（推荐，避免某些浏览器对本地文件的限制）
# Python 3
python -m http.server 8000
# 然后访问 http://localhost:8000
```

## 目录结构

```
.
├── index.html      # 页面结构
├── style.css       # 样式（含深浅色主题、响应式）
├── script.js       # 数据、渲染、主题切换、滚动动画
├── .gitignore      # 忽略系统文件、编辑器配置、依赖与构建产物
└── README.md       # 项目说明
```

## 自定义

- 修改 `script.js` 顶部的 `skills`、`tools`、`projects`、`timeline` 数组即可替换内容。
- 个人信息（姓名、联系方式、社交链接）位于 `index.html` 对应区块。
- 主题色变量在 `style.css` 中定义。
