<a name="readme-top"></a>

<div align="center">

<img height="120" src="https://registry.npmmirror.com/@lobehub/assets-logo/1.0.0/files/assets/logo-3d.webp">
<img height="120" src="https://gw.alipayobjects.com/zos/kitchen/qJ3l3EPsdW/split.svg">
<img height="120" src="https://registry.npmmirror.com/@lobehub/assets-emoji/1.3.0/files/assets/lollipop.webp">

<h1>GALAXY-AI UI</h1>

GALAXY-AI UI 是一个用于构建 _AIGC_ 网页应用的开源 UI 组件库

[English](./README.md) ・ 简体中文 ・ [更新日志](./CHANGELOG.md) · [报告问题][github-issues-link] · [请求功能][github-issues-link]

<!-- SHIELD GROUP -->

[![][npm-release-shield]][npm-release-link]
[![][vercel-shield]][vercel-link]
[![][discord-shield]][discord-link]
[![][npm-downloads-shield]][npm-downloads-link]
[![][github-releasedate-shield]][github-releasedate-link]
[![][github-action-test-shield]][github-action-test-link]
[![][github-action-release-shield]][github-action-release-link]<br/>
[![][github-contributors-shield]][github-contributors-link]
[![][github-forks-shield]][github-forks-link]
[![][github-stars-shield]][github-stars-link]
[![][github-issues-shield]][github-issues-link]
[![][github-license-shield]][github-license-link]

[![][banner]][vercel-link]

</div>

<details>
<summary><kbd>目录</kbd></summary>

#### 目录

- [📦 安装](#-安装)
  - [使用 NextJS 编译](#使用-nextjs-编译)
- [🤯 使用](#-使用)
- [⌨️ 本地开发](#️-本地开发)
- [🤝 贡献](#-贡献)
- [🔗 更多产品](#-更多产品)

####

</details>

## 📦 安装

> \[!IMPORTANT]\
> 该包仅支持 [ESM](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c)。

要安装 Lobe UI，请运行以下命令：

[![][bun-shield]][bun-link]

```bash
$ bun add @RoyelSteven-Ai/ui
```

### 使用 NextJS 编译

> \[!NOTE]\
> 为了正确使用 nextjs ssr，请在 `next.config.js` 中添加 `transpilePackages: ['@RoyelSteven-Ai/ui']`。例如：

```js
// next.config.js
const nextConfig = {
  // ...其他配置

  transpilePackages: ['@RoyelSteven-Ai/ui'],
};
```

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 🤯 使用

> \[!NOTE]\
> LobeUI 组件是基于 [Antd](https://ant.design/components/overview/) 开发的，完全兼容 Antd 组件，
> 推荐使用 [antd-style](https://ant-design.github.io/antd-style/) 作为默认的 css-in-js 样式解决方案。

```tsx
import { ThemeProvider, Button } from '@RoyelSteven-Ai/ui'
import { Button } from 'antd'

export default () => (
  <ThemeProvider>
    <Button>Hello AIGC</Button>
  </ThemeProvider>
)
```

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## ⌨️ 本地开发

您可以使用 Github Codespaces 进行在线开发：

[![][codespaces-shield]][codespaces-link]

或者克隆到本地进行开发：

```bash
$ git clone https://github.com/RoyelSteven-Ai/GALAXY.git
$ cd GALAXY-AI-ui
$ bun install
$ bun start
```

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 🤝 贡献

欢迎各种类型的贡献，如果您有兴趣贡献代码，请随时查看我们的 GitHub [问题][github-issues-link]，并展示您的才华。

[![][pr-welcome-shield]][pr-welcome-link]

[![][contributors-contrib]][contributors-link]

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 🩷 感谢赞助

每一分支持都珍贵无比，汇聚成我们支持的璀璨银河！你就像一颗划破夜空的流星，瞬间点亮我们前行的道路。感谢你对我们的信任 —— 你的支持笔就像星辰导航，一次又一次地为项目指明前进的光芒。

<a href="https://opencollective.com/lobehub" target="_blank">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://github.com/lobehub/.github/blob/main/static/sponsor-dark.png?raw=true">
    <img  src="https://github.com/lobehub/.github/blob/main/static/sponsor-light.png?raw=true">
  </picture>
</a>

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 🔗 更多产品

- **[🤖 Lobe Chat][lobe-chat] :** 一个开源、可扩展（函数调用）、高性能的聊天机器人框架。支持一键免费部署私有 ChatGPT/LLM 网页应用程序。
- **[🤯 Lobe Theme][lobe-theme] :** 稳定扩散 WebUI 的现代主题，精美的界面设计，高度可定制的 UI 和提高效率的功能。
- **[🌏 Lobe i18n][lobe-i18n] :** Lobe i18n 是一个由 ChatGPT 提供支持的自动化工具，用于 i18n（国际化）翻译过程。它支持诸如大文件的自动拆分、增量更新和对 OpenAI 模型、API 代理和温度的自定义选项等功能。
- **[💌 Lobe Commit][lobe-commit] :** Lobe Commit 是一个利用 Langchain/ChatGPT 生成基于 Gitmoji 的提交消息的 CLI 工具。

<div align="right">

[![][back-to-top]](#readme-top)

</div>

---

<details><summary><h4>📝 License</h4></summary>

[![][fossa-license-shield]][fossa-license-link]

</details>

Copyright © 2023 [GALAXY-AI][profile-link]. <br />
This project is [MIT](./LICENSE) licensed.

<!-- LINK GROUP -->

[back-to-top]: https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square
[banner]: https://github-production-user-asset-6210df.s3.amazonaws.com/17870709/268452017-960ab8a1-e4b7-4648-beb1-77daf4b6034a.png
[bun-link]: https://bun.sh
[bun-shield]: https://img.shields.io/badge/-speedup%20with%20bun-black?logo=bun&style=for-the-badge
[codespaces-link]: https://codespaces.new/RoyelSteven-Ai/GALAXY-AI-ui
[codespaces-shield]: https://github.com/codespaces/badge.svg
[contributors-contrib]: https://contrib.rocks/image?repo=RoyelSteven-Ai/GALAXY-AI-ui
[contributors-link]: https://github.com/RoyelSteven-Ai/graphs/contributors
[discord-link]: https://discord.gg/AYFPHvv2jT
[discord-shield]: https://img.shields.io/discord/1127171173982154893?color=5865F2&label=discord&labelColor=black&logo=discord&logoColor=white&style=flat-square
[fossa-license-link]: https://app.fossa.com/projects/git%2Bgithub.com%2Flobehub%2Flobe-ui
[fossa-license-shield]: https://app.fossa.com/api/projects/git%2Bgithub.com%2Flobehub%2Flobe-ui.svg?type=large
[github-action-release-link]: https://github.com/RoyelSteven-Ai/GALAXY-AI-ui/release.yml
[github-action-release-shield]: https://img.shields.io/github/actions/workflow/status/lobehub/lobe-ui/release.yml?label=release&labelColor=black&logo=githubactions&logoColor=white&style=flat-square
[github-action-test-link]: https://github.com/actions/workflows/lobehub/lobe-ui/test.yml
[github-action-test-shield]: https://img.shields.io/github/actions/workflow/status/lobehub/lobe-ui/test.yml?label=test&labelColor=black&logo=githubactions&logoColor=white&style=flat-square
[github-contributors-link]: https://github.com/lobehub/lobe-ui/graphs/contributors
[github-contributors-shield]: https://img.shields.io/github/contributors/lobehub/lobe-ui?color=c4f042&labelColor=black&style=flat-square
[github-forks-link]: https://github.com/lobehub/lobe-ui/network/members
[github-forks-shield]: https://img.shields.io/github/forks/lobehub/lobe-ui?color=8ae8ff&labelColor=black&style=flat-square
[github-issues-link]: https://github.com/lobehub/lobe-ui/issues
[github-issues-shield]: https://img.shields.io/github/issues/lobehub/lobe-ui?color=ff80eb&labelColor=black&style=flat-square
[github-license-link]: https://github.com/lobehub/lobe-ui/blob/master/LICENSE
[github-license-shield]: https://img.shields.io/github/license/lobehub/lobe-ui?color=white&labelColor=black&style=flat-square
[github-releasedate-link]: https://github.com/lobehub/lobe-ui/releases
[github-releasedate-shield]: https://img.shields.io/github/release-date/lobehub/lobe-ui?labelColor=black&style=flat-square
[github-stars-link]: https://github.com/lobehub/lobe-ui/network/stargazers
[github-stars-shield]: https://img.shields.io/github/stars/lobehub/lobe-ui?color=ffcb47&labelColor=black&style=flat-square
[lobe-chat]: https://github.com/lobehub/lobe-chat
[lobe-commit]: https://github.com/lobehub/lobe-commit/tree/master/packages/lobe-commit
[lobe-i18n]: https://github.com/lobehub/lobe-commit/tree/master/packages/lobe-i18n
[lobe-theme]: https://github.com/lobehub/sd-webui-lobe-theme
[npm-downloads-link]: https://www.npmjs.com/package/@lobehub/ui
[npm-downloads-shield]: https://img.shields.io/npm/dt/@lobehub/ui?labelColor=black&style=flat-square
[npm-release-link]: https://www.npmjs.com/package/@lobehub/ui
[npm-release-shield]: https://img.shields.io/npm/v/@lobehub/ui?color=369eff&labelColor=black&logo=npm&logoColor=white&style=flat-square
[pr-welcome-link]: https://github.com/lobehub/lobe-chat/pulls
[pr-welcome-shield]: https://img.shields.io/badge/🤯_pr_welcome-%E2%86%92-ffcb47?labelColor=black&style=for-the-badge
[profile-link]: https://github.com/lobehub
[vercel-link]: https://ui.lobehub.com
[vercel-shield]: https://img.shields.io/website?down_message=offline&label=vercel&labelColor=black&logo=vercel&style=flat-square&up_message=online&url=https%3A%2F%2Fui.lobehub.com
