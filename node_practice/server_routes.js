import http from 'http'
import url from 'url'

const server = http.createServer((request, response) => {
    response.statusCode = 200
    response.setHeader("Content-Type", "text/plain")

    const currentPage = request.url

    if(currentPage === '/') {
        response.end('Hello, Welcome to my website')
    } else if(currentPage === '/projects') {
        response.end('Here\'s the projects which i have builded using android')
    } else if(currentPage === '/profile') {
        response.end('This is my profile')
    } else if(currentPage === '/about') {
        response.end('I am an android application developer')
    } else {
        response.statusCode = 400
        response.end('Page not found')
    }
})

const PORT = 2804

server.listen(PORT, () => {
    console.log(`Server is running on the port ${PORT}`)
})