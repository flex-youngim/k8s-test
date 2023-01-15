const http = require('http');

const hostname = '0.0.0.0';
const port = 9001;

const server = http.createServer((req, res) => {
	const now = Date.now();
	console.log(`got request at ${now}`)
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end(`Hello world at ${now}`);
});

server.listen(port, hostname, () => {
	console.log(`Server running at ${hostname}:${port}`);
});
