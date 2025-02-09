import http from "http"
import url from "url"

const server = http.createServer((request, response) => {
    response.statusCode = 200

    const parsedUrl = url.parse(request.url, true)

    const pathName = parsedUrl.pathname

    if (pathName === '/') {
        response.setHeader("Content-Type", "text/plain");
        response.end('Welcome to my node js server!')
    } else if (pathName === '/about') {
        response.setHeader("Content-Type", "text/plain");
        response.end('This is an about page')
    } else if (pathName === '/contact') {
        response.setHeader("Content-Type", "application/json");
        const contactInfo = {
            "email": "test@example.com",
            "phone": "123-456-7890"
        }

        response.end(JSON.stringify(contactInfo))
    } else {
        response.statusCode = 400
        response.setHeader("Content-Type", "text/plain");
        response.end('Page not found')
    }
})


const PORT = 3000
server.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})

/*
Node.js Challenge: Build a Simple HTTP Server
Create a Node.js server without Express that:

Listens on port 3000.
Handles three routes:
GET / → Responds with "Welcome to my Node.js server!"
GET /about → Responds with "This is an about page."
GET /contact → Responds with a JSON object:
json
{
  "email": "test@example.com",
  "phone": "123-456-7890"
}
Returns a 404 error for any other route with "Page not found".

*/
