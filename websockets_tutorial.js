// Code provided via WebSockets tutorial

// For low latency web apps, the overhead of HTTP is cumbersome, even when using workarounds like long polling

// Architectures with high concurrency at a low performance cost (think threading or non-blocking I/O) do well with WebSockets

// WebSockets allow "socket" connections, or persistent connectons, between a browser and server
var connection = new WebSocket('ws://html5rocks.websocket.org/echo', ['soap', 'xmpp']);
// ws/wss are URl schemas for WebSocket connections while soap and xmpp are accepted subprotocols

// Attach event handlers to connection for connection opening, errors, and logging
connection.onopen = function () {
	connection.send('I\'m here!');
};

connection.onerror = function (error) {
	console.log('WebSocket Error ' + error);
};

connection.onmessage = function (e) {
	console.log('Server: ' + e.data);
};

// When open event is triggered, you can send string and binary data to the server
connection.send('Another message!');

connection.binaryType = 'arraybuffer';
// Sending binary canvas data via ArrayBuffer
var img = canvas_context.getImageData(0, 0, 400, 320);
var binary = new Uint8Array(img.data.length);
for (var i = 0; i < img.data.length; i++) {
	binary[i] = img.data[i];
}
connection.send(binary.buffer);

connection.binaryType = 'blob';
// Sending binary file data via Blob
var file = document.querySelector('input[type="file"]').files[0];
connection.send(file);

// View acceptable extensions
console.log(connection.extensions);






