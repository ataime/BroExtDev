// content.js

// 在页面加载完成后向控制台输出一条消息
console.log("Hello from content script!");

// 修改页面中的文本内容
document.body.innerHTML = document.body.innerHTML.replace(/Hello/g, "Hi");
