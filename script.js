// 获取表单和留言列表的引用 
 const messageForm = document.getElementById('messageForm'); 
 const messageList = document.getElementById('messageList'); 
  
 // 表单提交处理函数 
 function addMessage(event) { 
     event.preventDefault(); // 阻止表单默认的提交行为 
  
     // 获取输入的姓名和留言内容 
     const nameInput = document.getElementById('name'); 
     const messageInput = document.getElementById('message'); 
  
     const name = nameInput.value; 
     const message = messageInput.value; 
  
     // 创建新的留言元素 
     const newMessage = document.createElement('div'); 
     newMessage.innerHTML = `<strong>\${name}：</strong>\${message}`; 
  
     // 将留言元素添加到留言列表 
     messageList.appendChild(newMessage); 
  
     // 清空输入框的内容 
     nameInput.value = ''; 
     messageInput.value = ''; 
 } 
  
 // 将表单提交事件绑定到处理函数 
 messageForm.addEventListener('submit', addMessage);