const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url)
    res.write('hello world 3')
    res.write('hello world 2')
    res.end()
})

server.listen(5779, () => {
    console.log('Server is running on port 3000');
});