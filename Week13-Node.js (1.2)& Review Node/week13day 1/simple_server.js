const http = require('http')

const server = http.createServer((req, res) => {  
    res.writeHead(404,{
    'content-type':'text/html'
    })
    res.end("<h1>Welcome to My Server</h1>")

});

server.listen(3000, 'localhost', () => {
    console.log('Server is listening at localhost on port 3000')
});