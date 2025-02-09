import http from 'http'
import url from 'url'

const server = http.createServer((request, response) => {
    response.statusCode = 200

    const parsedUrl = url.parse(request.url, true)

    const pathName = parsedUrl.pathname
    const query = parsedUrl.query

    if (pathName === '/') {
        response.setHeader('Content-Type', 'text/plain')
        response.end('Welcome to my webpage')
    } else if (pathName === '/calculate') {
        const num1 = parseFloat(query.num1)
        const num2 = parseFloat(query.num2)
        const operation = query.operation

        if (isNaN(num1) || isNaN(num2) || !operation) {
            response.statusCode = 404
            response.setHeader('Content-Type', 'application/json')
            const error = {
                'Error': 'Missing required parameters'
            }
            response.end(JSON.stringify(error))
            return
        }

        let result
        switch (operation) {
            case 'add':
                result = num1 + num2
                break
            case 'sub':
                result = num1 - num2
                break
            case 'mul':
                result = num1 * num2
                break
            case 'div':
                if (num2 === 0) {
                    response.statusCode = 404
                    response.setHeader('Content-Type', 'application/json')
                    const error = {
                        'Error': 'Cannot divide by zero'
                    }
                    response.end(JSON.stringify(error))
                    return
                }
                result = num1 / num2
                break
            default:
                response.statusCode = 404
                response.setHeader('Content-Type', 'application/json')
                response.end(JSON.stringify({
                    'Error': 'Invalid operation'
                }))

        }
        const resultObject = {
            "num1": num1,
            "num2": num2,
            "Result": result
        }
        response.setHeader('Content-Type', 'application/json')  
        response.end(JSON.stringify(resultObject))
    } else {
        response.statusCode = 404
        response.setHeader('Content-Type', 'text/plain')
        response.end(`Page not found`)
    }
})


const PORT = 8080
server.listen(PORT, () => {
    console.log(`Server is running on the PORT ${PORT}`)
})



/*
Challenge: Build a Simple Calculator API
Modify your Node.js server to handle a new route:

1️⃣ Route: /calculate
Accept two numbers and an operation as query parameters.
Perform the operation and return the result in JSON format.
2️⃣ Supported Query Parameters
num1 → First number
num2 → Second number
operation → One of: add, subtract, multiply, divide
3️⃣ Example Requests & Responses


👉 Addition (num1=10, num2=5)
http://localhost:8080/calculate?num1=10&num2=5&operation=add

Response:
{
  "num1": 10,
  "num2": 5,
  "operation": "add",
  "result": 15
}


👉 Division (num1=20, num2=4)
http://localhost:8080/calculate?num1=20&num2=4&operation=divide

Response
{
  "num1": 20,
  "num2": 4,
  "operation": "divide",
  "result": 5
}



4️⃣ Handle Errors Properly
If any parameter is missing, return:
{
  "error": "Missing required parameters"
}

If an invalid operation is requested, return:
{
  "error": "Invalid operation"
}

If dividing by zero, return:
{
  "error": "Cannot   divide by zero"
}

💡 Hints:

Use parseFloat(query.num1) to convert query strings to numbers.
Use a switch or if-else to handle different operations.
*/