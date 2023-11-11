// 监听来自服务器的消息
// ...

chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    // 在这里处理webRequest事件
  },
  { urls: ["<all_urls>"] },
  ["blocking"]
);
