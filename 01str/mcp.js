// Simple MCP-like server to add two numbers
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
	const parsedUrl = url.parse(req.url, true);
	if (parsedUrl.pathname === '/add' && req.method === 'GET') {
		const a = parseFloat(parsedUrl.query.a);
		const b = parseFloat(parsedUrl.query.b);
		if (isNaN(a) || isNaN(b)) {
			res.writeHead(400, { 'Content-Type': 'application/json' });
			res.end(JSON.stringify({ error: 'Invalid numbers' }));
		} else {
			res.writeHead(200, { 'Content-Type': 'application/json' });
			res.end(JSON.stringify({ result: a + b }));
		}
	} else {
		res.writeHead(404, { 'Content-Type': 'application/json' });
		res.end(JSON.stringify({ error: 'Not found' }));
	}
});

const PORT = 3002;
server.listen(PORT, () => {
	console.log(`MCP server running at http://localhost:${PORT}/add?a=1&b=2`);
});
