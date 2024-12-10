const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might fail
  someAsyncOperation().then(() => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Success!');
  }).catch(error => {
    // Error handling is missing here. If someAsyncOperation rejects,
    // the response is never sent, leading to a hanging request.
    console.error('Error:', error);
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    // Simulate a random failure
    const success = Math.random() < 0.8; // 80% chance of success
    setTimeout(() => {
      if (success) {
        resolve();
      } else {
        reject(new Error('Async operation failed'));
      }
    }, 1000);
  });
}