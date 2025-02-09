import http from 'http'
import url from 'url'

const server = http.createServer((request, response) => {
    response.statusCode = 200

    const parsedUrl = url.parse(request.url, true)

    const pathName = parsedUrl.pathname
    const query = parsedUrl.query

    // pathname: /greet...query: ?name=chinmay

    if (pathName === '/') {
        response.setHeader('Content-Type', 'text/plain')
        response.end(`Welcome to my Node.js server!`)
    } else if (pathName === '/greet') {
        response.setHeader('Content-Type', 'text/plain')
        const name = query.name ? query.name : 'Guest'
        response.end(`Hello, ${name}! welcome to my node js server`)

    } else if (pathName === '/about') {
        response.setHeader('Content-Type', 'text/plain')
        response.end(`This is an about page`)
    } else if (pathName === '/contacts') {
        response.setHeader('Content-Type', 'application/json')
        const contactInfo = {
            'email': 'abc@gmail.com',
            'phone': '012-345-6789'
        }
        response.end(JSON.stringify(contactInfo))
    } else {
        response.statusCode = 404
        response.end(`Page not found`)
    }     

})


const PORT = 8080
server.listen(PORT, () => {
    console.log(`Server is running on the PORT ${PORT}`)
})


/*
Challenge: Simple API with Query Parameters
Modify your Node.js server to handle a new route:

GET /greet?name=John

If a name is provided in the query parameter, respond with
Hello, John! Welcome to my Node.js server.

If no name is provided, respond with:
Hello, Guest! Welcome to my Node.js server.
Keep your existing routes (/, /about, /contact, and 404 handling).
*/