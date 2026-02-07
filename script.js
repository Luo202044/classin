const form = document.getElementById("message-form");
const nameInput = document.getElementById("name-input");
const messageInput = document.getElementById("message-input");
const messagesContainer = document.getElementById("messages-container");
form.addEventListener("submit", (event) => {
   event.preventDefault(); // 阻止表单的默认提交行为
   const name = nameInput.value;
   const message = messageInput.value;
   // 创建新的留言元素
   const newMessageElement = document.createElement("div");
   newMessageElement.innerHTML = `${name}：${message}`;
   // 将留言添加到留言容器中
   messagesContainer.appendChild(newMessageElement);
   // 清空表单输入框
   nameInput.value = "";
   messageInput.value = "";
});