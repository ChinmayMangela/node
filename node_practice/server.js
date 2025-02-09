import http from 'http'

const server = http.createServer((request, response) => {
    response.statusCode = 200
    response.setHeader("Content-Type", "text/plain")
    response.end('WELCOME TO MY WEBSITE')
    
})

const PORT = 8080

server.listen(PORT, () => { 
    console.log(`Server is running on port ${PORT}`)
})
