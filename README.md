# HighLight Utility ![HighLight](https://img.shields.io/badge/HighLight-Utility-blue)

这是一个用于高亮文本的 JavaScript 工具，也就意味着在Vue,React这样的现代框架也能使用。该工具可以在指定的 DOM 元素中查找并高亮显示指定的文本，支持自定义高亮效果。

## 目录

- [安装](#安装) 🛠️
- [功能](#功能) ✨
  - [highLight](#`highLight(dom: HTMLElement, str: string, options: options)` 📌) 📌
  -- [选项](#选项) ⚙️
  - [cancelAllHighLight](#cancelallhighlight) 📌
  - [cancelNameHighLight](#cancelnamehighlight) 📌
- [许可证](#许可证) 📜

## 安装

```js
npm install highlighttext
```

## 功能 

### `highLight(dom: HTMLElement, str: string, options: options)` 📌

在指定的 DOM 元素中高亮指定的文本字符串。此函数使用 CSS 自定义高亮 API 将文本匹配区域高亮显示。

### 参数：

- **dom (HTMLElement)**: 需要进行高亮操作的 DOM 元素。
- **str (string)**: 需要高亮的文本字符串。此函数会查找所有匹配该文本的部分进行高亮。
- **options (object)**: 高亮配置项，包含以下参数：

  #### 选项 ⚙️

  - **isCaseSensitive (boolean, 默认值: `false`)**: 是否区分大小写。如果为 `false`，搜索时会忽略大小写。
  - **cssName (string, 默认值: `"default"`)**: 用于标识该高亮的名称。可以通过此名称来管理不同的高亮效果。
  - **ignoreText (string[], 默认值: `[]`)**: 一个字符串数组，指定在搜索过程中要忽略的文本。可以避免某些不需要高亮的文本被匹配。

### 示例：

```javascript
import { highLight } from 'highlighttext';

// 获取 DOM 元素
const element = document.getElementById('content');

// 高亮文本 'JavaScript'
highLight(element, 'JavaScript', {
  isCaseSensitive: false,
  cssName: 'js-highlight',
  ignoreText: ['不要高亮这个文本'],
});
//css 声明高亮的样式
::highlight(js-highlight) {
  background-color: #f06;
  color: white;
}
```

### `cancelAllHighLight()` 📌
取消所有通过 `highLight` 函数应用的高亮效果。

#### 示例：
```javascript
import { cancelAllHighLight } from 'highlighttext';

// 取消所有高亮
cancelAllHighLight();
```

### `cancelNameHighLight(cssName: string)` 📌
取消指定 `cssName` 名称的高亮效果。

#### 参数：
- **cssName (string)**: 要删除的高亮名称。

#### 示例：
```javascript
import { cancelNameHighLight } from 'highlighttext';

// 取消指定名称的高亮
cancelNameHighLight('js-highlight');
```
## 许可证 📜
此项目使用 MIT 许可证 

