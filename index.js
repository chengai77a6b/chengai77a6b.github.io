document.getElementById('messageForm').addEventListener('submit', function(e) {
    e.preventDefault(); // 阻止表单提交

    var name = document.getElementById('nameInput').value;
    var message = document.getElementById('messageInput').value;

    // 将姓名和留言内容发送到邮箱
    var mailtoLink = 'mailto:chengaihhz@yeah.net?subject=留言板留言&body=姓名: ' + name + '%0A留言内容: ' + message;
    window.location.href = mailtoLink;
});
