const http = require('http');

const server = http.createServer((req, res) => {
  someAsyncOperation()
    .then(() => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Success!');
    })
    .catch(error => {
      console.error('Error:', error);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
    });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    const success = Math.random() < 0.8;
    setTimeout(() => {
      if (success) {
        resolve();
      } else {
        reject(new Error('Async operation failed'));
      }
    }, 1000);
  });
}