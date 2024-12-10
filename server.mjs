import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';

// Initialize Express and create an HTTP server
const app = express();
const server = createServer(app);
const io = new Server(server);

// Handle socket connections
io.on('connection', (socket) => {
    console.log('A user connected');

    // Handle incoming messages
    socket.on('message', (msg) => {
        console.log(`Message received: ${msg}`);
        io.emit('message', msg); // Broadcast the message
    });

    // Handle user disconnection
    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
