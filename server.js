const http = require('http');

const server = http.createServer((req, res) => {
	res.write("Hi, I am Siva. I am a developer learning Devops for my professional growth");
	res.end();
});

server.listen(3000, () => {
	console.log("Server is running on port 3000");
});
