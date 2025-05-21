// index.js
const http = require('http');

// サーバーの設定
const hostname = '127.0.0.1';
const port = 3000;

// リクエストを受け取ったときの処理
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.end('こんにちは！!\n');
});

// サーバーを起動
server.listen(port, hostname, () => {
  console.log(`サーバーは http://${hostname}:${port}/ で起動中`);
});
