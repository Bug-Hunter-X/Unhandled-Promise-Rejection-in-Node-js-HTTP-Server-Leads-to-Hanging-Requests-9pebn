# Unhandled Promise Rejection in Node.js HTTP Server

This repository demonstrates a common error in Node.js where an unhandled promise rejection within an HTTP request handler can lead to hanging requests.  The server doesn't send a response when the asynchronous operation fails, resulting in a poor user experience.

## The Problem

The `bug.js` file contains a Node.js HTTP server that performs an asynchronous operation.  This operation can sometimes fail, but the error isn't properly handled. If the asynchronous operation rejects, the server doesn't send a response, causing requests to hang.

## The Solution

The `bugSolution.js` file shows how to fix the issue.  It uses a `catch` block within the request handler to handle potential errors from the asynchronous operation.  If an error occurs, it sends a proper error response to the client, preventing hanging requests.

## How to Reproduce

1. Clone this repository.
2. Run `node bug.js`.
3. Send multiple requests to `http://localhost:3000`.  You'll notice that some requests hang indefinitely.
4. Run `node bugSolution.js`.
5. Repeat step 3. You'll now receive appropriate responses for both successful and failed requests.