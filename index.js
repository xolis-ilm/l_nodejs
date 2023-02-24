const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.method)
    if (req.method === 'GET') {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end('<h2>Salom Dunyo</h2> <form action="/" method="post">' +
            '<input type="text" name="body">' +
            '<button type="submit">submit</button></form>')
    } else if (req.method === 'POST') {
        const body = []
        req.on('data', (data) => {
            body.push(Buffer.from(data))
            res.writeHead(200, {'Content-Type': 'text/html charset="utf-8'})

        })
        req.on('end', () => {
            const mess = body.toString().split('=')[1]
            res.end('Email succesfully added' + ' ' + mess)
        })
    }
})

server.listen(5779, () => {
    console.log('Server is running on port 3000');
});