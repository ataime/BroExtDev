## 浏览器扩展开发

```
chrome -> 管理扩展程序-> 打开“开发者模式” -> “加载已解压的扩展程序” -> 选择插件开发目录.
edge -> 扩展 -> 打开“开发人员模式”->“加载未打包的扩展” -> 选择开发目录.

# tree edge-plugin
edge-plugin
├── background.js
├── content.js
├── icons
│   └── smiley48.png
├── manifest.json
├── popup.html
└── popup.js
```

当您创建一个 Chrome 或 Edge 扩展时，您需要编写一个名为 manifest.json 的文件，其中包含了扩展的配置信息。以下是 manifest.json 文件中常用字段的说明：

https://developer.mozilla.org/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json
