document.addEventListener("DOMContentLoaded", function () {
  // 初始化聊天窗口
  // ...

  // 发送消息按钮点击事件
  document.getElementById("send-button").addEventListener("click", function () {
    var message = document.getElementById("message-input").value;
    // 调用服务器接口发送消息
    // ...
  });
});
