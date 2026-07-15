# Sh3n1in 博客内容与配置分析报告

本报告对当前博客项目目录（基于 Astro + Litos 主题）进行了系统性分析，整理了属于原作者（神林 / Sh3n1in）编写的博客文章、配置的社交链接、项目展示以及照片相册路径。

---

## 1. 个人与站点基本信息

站点基本元数据和全局配置位于 [src/config.ts](file:///home/blog/src/config.ts) 文件中，具体信息如下：
- **作者名称 (Author):** 神林 (Shenlin / Sh3nL1n)
- **站点标题 (Title):** Shenlin Blog / Sh3nL1n's Blog
- **站点网址 (Website):** [https://blog.shenlin.black/](https://blog.shenlin.black/)
- **GitHub 用户名 (GitHub Username):** `Sh3n1in`
- **评论系统配置 (Comment System):** 使用 Gitalk 评论插件，绑定到 GitHub 仓库 [Sh3n1in/gitalk-comment](https://github.com/Sh3n1in/gitalk-comment)
- **站点描述 (Description):** Litos is a modern blogging theme built on Astro.js... (重新设计自 `@needim`，由神林基于 Astro 开发)。

---

## 2. 社交平台链接 (Social Links)

社交平台链接及图标配置同样位于 [src/config.ts](file:///home/blog/src/config.ts) 中的 `SOCIAL_LINKS` 数组内：

| 平台名称 | 链接地址 | 图标类名 (Iconify) | 其他属性 |
| :--- | :--- | :--- | :--- |
| **GitHub** | [https://github.com/Sh3n1in](https://github.com/Sh3n1in) | `icon-[ri--github-fill]` | 粉丝数显示: 20 |
| **Twitter (X)** | [https://x.com/sh3nl1n](https://x.com/sh3nl1n) | `icon-[ri--twitter-x-fill]` | - |
| **Bilibili** | [https://space.bilibili.com/3546690906753177](https://space.bilibili.com/3546690906753177) | `icon-[ri--bilibili-fill]` | - |

---

## 3. 博客文章分析 (Blog Posts)

经过对 [src/content/posts/](file:///home/blog/src/content/posts/) 下 11 个目录的分析，博客文章可分为**原作者撰写博文**和**主题自带模板/说明文档**两类。

### 3.1 原作者撰写的博客文章 (5篇)

以下 5 篇文章属于原作者实际发布的技术心得、CTF 题解或测试文章：

1. **《Claude Code 里发现间谍代码？》**
   - **路径:** [claude-code-spy-code/index.mdx](file:///home/blog/src/content/posts/claude-code-spy-code/index.mdx)
   - **发布日期:** 2026-07-08
   - **标签:** `AI`, `Security`, `Claude Code`
   - **封面图片:** [src/content/posts/claude-code-spy-code/assets/cover.png](file:///home/blog/src/content/posts/claude-code-spy-code/assets/cover.png)
   - **简介:** 深入剖析 Anthropic 发布的 CLI 编码工具 Claude Code 背后关于隐私安全、遥测数据收集与所谓的“间谍行为”争议。

2. **《使用Scoop作为多版本环境切换器》**
   - **路径:** [scoop/index.mdx](file:///home/blog/src/content/posts/scoop/index.mdx)
   - **发布日期:** 2025-11-10
   - **标签:** `Windows`, `Scoop`
   - **封面图片:** [src/content/posts/scoop/assets/cover.png](file:///home/blog/src/content/posts/scoop/assets/cover.png)
   - **简介:** 全面介绍 Windows 包管理器 Scoop 的安装、基础使用和进阶技巧，重点讲解如何使用 Scoop 管理 Python、PHP、JDK、Rust、Ruby 等多版本开发环境的安装与切换。

3. **《Python SSTI 漏洞完全指南》**
   - **路径:** [ssti/index.mdx](file:///home/blog/src/content/posts/ssti/index.mdx)
   - **发布日期:** 2025-11-12
   - **标签:** `Python`, `SSTI`
   - **封面图片:** [src/content/posts/ssti/assets/cover.png](file:///home/blog/src/content/posts/ssti/assets/cover.png)
   - **简介:** 全面介绍 Python SSTI 漏洞的成因、利用技术及防护措施，帮助开发者深入理解并有效防范该类安全风险。

4. **《IHDR[宽高隐写]》**
   - **路径:** [helloblog/index.mdx](file:///home/blog/src/content/posts/helloblog/index.mdx)
   - **发布日期:** 2025-09-27
   - **标签:** `Litos`, `Documentation` *(带有此标签，但内容是 CTF 宽高隐写测试)*
   - **封面图片:** [src/content/posts/helloblog/assets/kirito.png](file:///home/blog/src/content/posts/helloblog/assets/kirito.png)
   - **简介:** 博客中文测试简介描述，内含 CTF 宽高隐写解题步骤。

5. **《LSB隐写》**
   - **路径:** [lsb/index.mdx](file:///home/blog/src/content/posts/lsb/index.mdx)
   - **发布日期:** 2025-09-28
   - **标签:** `CTF`, `Steganography`
   - **封面/文章图片:** 外部链接 `https://7605c52.webp.li/2.jpg` (本地备份目录: [src/content/posts/lsb/assets/wallhaven-6loz9w.png](file:///home/blog/src/content/posts/lsb/assets/wallhaven-6loz9w.png))
   - **简介:** 博客中文测试简介描述，包含 LSB 隐写技术概述及原理。

### 3.2 主题内置使用说明/模板文档 (6篇)

以下 6 篇文章是 Litos 主题自带的功能演示与配置说明：

*   **《Markdown enhanced syntax》**: 增强 Markdown 语法使用参考手册。对应路径: [enhance/index.mdx](file:///home/blog/src/content/posts/enhance/index.mdx)
*   **《Photos Page Config》**: 照片墙相册页配置说明。对应路径: [photos/index.mdx](file:///home/blog/src/content/posts/photos/index.mdx)
*   **《Posts Page Config》**: 博客文章列表与分页配置说明。对应路径: [posts/index.mdx](file:///home/blog/src/content/posts/posts/index.mdx)
*   **《Project And Tag Page Config》**: 项目与标签页配置说明。对应路径: [project-tag/index.mdx](file:///home/blog/src/content/posts/project-tag/index.mdx)
*   **《Readme Page Config》**: 主页 README 布局配置说明。对应路径: [readme/index.mdx](file:///home/blog/src/content/posts/readme/index.mdx)
*   **《How to get started with this theme》**: Litos 主题的快速入门指南。对应路径: [start/index.mdx](file:///home/blog/src/content/posts/start/index.mdx)

---

## 4. 展示项目 (Portfolio Projects)

项目展示配置位于 [src/content/projects/](file:///home/blog/src/content/projects/)，目前有两个项目配置：

1. **PureRead (Chrome 浏览器扩展)**
   - **路径:** [src/content/projects/PureRead/index.mdx](file:///home/blog/src/content/projects/PureRead/index.mdx)
   - **项目地址:** [https://github.com/Sh3n1in/PureRead](https://github.com/Sh3n1in/PureRead)
   - **图标路径:** [src/assets/projects/pureRead.png](file:///home/blog/src/assets/projects/pureRead.png)
   - **描述:** Your font, your rules. A professional, lightweight Chrome extension that provides you with an excellent web reading experience. (网页阅读排版优化扩展)

2. **Litos (本博客主题项目)**
   - **路径:** [src/content/projects/Litos/index.mdx](file:///home/blog/src/content/projects/Litos/index.mdx)
   - **项目地址:** [https://github.com/Sh3n1in/blog](https://github.com/Sh3n1in/blog)
   - **图标路径:** [src/assets/projects/litos.png](file:///home/blog/src/assets/projects/litos.png)
   - **描述:** A Simple & Modern Blog Theme for Astro. (作者的博客源码库)

---

## 5. 摄影相册与图片路径 (Photo Albums)

照片墙相册的静态数据定义在 [src/lib/photos.ts](file:///home/blog/src/lib/photos.ts)，图片资源存放在 [src/assets/photos/](file:///home/blog/src/assets/photos/) 目录。目前包含以下 7 个相册：

| 相册标题 | 拍摄/记录日期 | 本地图片文件夹路径 (均在 `src/assets/photos/` 下) | 描述 / 主题 |
| :--- | :--- | :--- | :--- |
| **Ningbo · Botanical Garden** | 2026-03-07 | [2026-03-07-botanicalGarden/](file:///home/blog/src/assets/photos/2026-03-07-botanicalGarden) | 宁波植物园早春樱花记录 |
| **Around Home** | 2026-02-20 | [2026-02-20-hometown/](file:///home/blog/src/assets/photos/2026-02-20-hometown) | 过年回家，家周围随拍 |
| **Ningbo · Day Out with a Classmate** | 2026-01-10 | [2026-01-10-classmate/](file:///home/blog/src/assets/photos/2026-01-10-classmate) | 同学来访，重温旧校、 board game cafe 聚会随影 |
| **Dazz App** | 2025-12-11 | [2025-12-11-dazz/](file:///home/blog/src/assets/photos/2025-12-11-dazz) | Dazz App 胶片相机拍摄的日常随拍 |
| **A Cute Cat at a Friend's Place** | 2025-06-21 | [2025-06-21-cat/](file:///home/blog/src/assets/photos/2025-06-21-cat) | 朋友家非常可爱的小猫 |
| **Ningbo · Dongqian Lake** | 2025-03-01 | [2025-03-01-dongqianhu/](file:///home/blog/src/assets/photos/2025-03-01-dongqianhu) | 宁波东钱湖环湖骑行 |
| **Ningbo · Zhoushan** | 2024-09-07 | [2024-09-07-zhoushan/](file:///home/blog/src/assets/photos/2024-09-07-zhoushan) | 宁波舟山风光随拍 |

---

## 6. 如何添加新内容

如果您需要继续更新博客，可以参考以下操作：
- **新增博文:** 在 `src/content/posts/` 下新建 `<post-slug>/index.mdx` 目录与文件，并添加 YAML 头部元数据。
- **新增项目:** 在 `src/content/projects/` 下新建 `<project-slug>/index.mdx` 并配置文件。
- **新增相册:** 将图片放入 `src/assets/photos/<album-slug>/` 目录，并在 [src/lib/photos.ts](file:///home/blog/src/lib/photos.ts) 中的 `PhotosList` 数组内声明相应的配置和布局比例。
