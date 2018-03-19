# 为什么要弄一个 vue simple
可以用 vue-cli 很容易开始一个项目，为什么还要自己弄一个 vue simple ？最原始的原因就是 vue-cli 做的太好了，但不需要你关心任何配置就可以开始一个项目，以致初级开发都根本不了解这个项目是怎么跑起来的、用到了那些技术；这个小git只提供了原始的骨架，让vue能跑起来，需要用什么自己配置，在配置的过程中可以熟悉其中的各个模块。

## How to start
```
git clone https://github.com/wfzong/vue-simple.git
cd vue-simple
cnpm install // 需要改装 cnpm，在国内跑的快，如果没有请先按装 npm install -g cnpm
npm run dev // 启动项目
```
## 主要功能
- 提供基础的babel转码和polyfill
- 默认安装了axios
- 默认提供将根目录下./static下所有文件，拷到到./dist/static下
