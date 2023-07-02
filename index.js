document.getElementById('messageForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const mailtoLink = `mailto:chengaihhz@yeah.net?subject=新留言&body=姓名: \${name}%0A邮箱: \${email}%0A留言: \${message}`;

  window.open(mailtoLink);
});
