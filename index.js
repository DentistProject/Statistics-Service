const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http, { cors: { origin: "*" } });

let userCount = 0;

io.on('connection', (socket) => {
    userCount++;
    console.log('A user connected. Current users:', userCount);

    socket.on('disconnect', () => {
        userCount--;
        console.log('A user disconnected. Current users:', userCount);
    });
});

// HTTP endpoint to get current user count
app.get('/userCount', (req, res) => {
    res.json({ count: userCount });
 });

http.listen(5177, () => {
    console.log('Statistics microservice running on port 5177');
});
