// server.js
import { WebSocketServer } from 'ws';
import http from 'http';

// Create an HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('WebSocket server is running.');
});

// Create a WebSocket server by passing the HTTP server
const wss = new WebSocketServer({ server });

// Event handler for WebSocket connections
wss.on('connection', (ws) => {
  console.log('A new client has connected.');

  // Event handler for incoming messages from clients
  ws.on('message', (message) => {
    console.log(`Received: ${message}`);
    ws.send(message.toString());
  });

  // Event handler for WebSocket connection closing
  ws.on('close', () => {
    console.log('A client has disconnected.');
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT);
