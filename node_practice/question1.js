import http from "http"
import url from "url"

const server = http.createServer((request, response) => {
    response.statusCode = 200

    const parsedUrl = url.parse(request.url, true)

    const pathName = parsedUrl.pathname

    if (pathName === '/') {
        response.end('Welcome to my node js server!')
    } else if (pathName === '/about') {
        response.end('This is an about page')
    } else if (pathName === '/contact') {

        const contactInfo = {
            "email": "test@example.com",
            "phone": "123-456-7890"
        }

        response.end(JSON.stringify(contactInfo))
    } else {
        response.statusCode = 400
        response.end('Page not found')
    }
})


const PORT = 3000
server.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})