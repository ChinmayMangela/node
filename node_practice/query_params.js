import http from 'http'
import url from 'url'

const server = http.createServer((request, response) => {
    response.statusCode = 200
    response.setHeader("Content-Type", "text/plain")

    // parse function parses the url
    const parsedUrl = url.parse(request.url, true)

    // path => /about....queryparams => ?name=chinmaymangela&role=androiddeveloper

    // query paramers are the object values
    /*
    {
     "name": "chinmaymangela",
     "role": "androiddeveloper"
    }
    */

    const pathName = parsedUrl.pathname // gets the path name and store it into path variable
    const query = parsedUrl.query // gets the query object and store it into the query variable

    if(pathName === '/') {
        response.end(`Hello, Welcome to my website ${query.name} ${query.role}`)
    } else if(pathName === '/projects') {
        response.end(`Here\'s the projects which i have builded using android ${query.name} ${query.role}`)
    } else if(pathName === '/profile') {
        response.end(`This is my profile ${query.name} ${query.role}`)
    } else if(pathName === '/about') {
        response.end(`I am an android application developer ${query.name} ${query.role}`)
    } else {
        response.statusCode = 400
        response.end(`Page not found ${query.name} ${query.role}`)
    }
})


const PORT = 8000

server.listen(PORT, () => {
    console.log(`Server running on the port ${PORT}`)
})