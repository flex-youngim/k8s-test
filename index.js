const http = require('http');

const hostname = '0.0.0.0';
const port = 9001;

const dummyString = "this is just for pressure"

const server = http.createServer((req, res) => {
	const now = Date.now();
	console.log(`got request at ${now}`)
	getLoopPromise(999999999)
		.then(() => {
			return getLoopPromise(999999999)
		}).then(() => {
			res.statusCode = 200;
			res.setHeader('Content-Type', 'text/plain');
			res.end(`Hello world at ${now}`);
		})
});

server.listen(port, hostname, () => {
	console.log(`Server running at ${hostname}:${port}`);
});


function getLoopPromise(loopNum) {
	return new Promise((res, rej) => {
		for(let i = 0; i < loopNum; i++) {
			console.log(dummyString + i);
		}
		res()
	});
}