const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {
	if (req.method === 'GET') {
		res.writeHead(200, { 'Content-Type': 'text/html' })

		if (req.url === '/') {
			fs.readFile(path.join(__dirname, 'templates', 'index.html'), 'utf8', (err, content) => {
				if (err) throw err
				res.end(content)
			})
		} else if (req.url === '/about') {
			fs.readFile(path.join(__dirname, 'templates', 'about.html'), 'utf8', (err, content) => {
				if (err) throw err
				res.end(content)
			})
		}else if (req.url === '/contact') {
			fs.readFile(path.join(__dirname, 'templates', 'contact.html'), 'utf8', (err, content) => {
				if (err) throw err
				res.end(content)
			})
		}

	} else if (req.method === 'POST') {
		const body = []
		res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })

		req.on('data', data => {
			body.push(Buffer.from(data))
		})

		req.on('end', () => {
			const message = body.toString().split('=')[1]

			res.end(`Name successfully added: ${message}`)
		})
	}
})

const port = 8080

server.listen(port, () => {
	console.log(`Server has been started on port: ${port}`)
})