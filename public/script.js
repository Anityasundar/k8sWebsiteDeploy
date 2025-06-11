function sendMessage() {
  fetch('/api/hello')
    .then(res => res.text())
    .then(data => {
      document.getElementById('response').innerText = data;
    });
}
