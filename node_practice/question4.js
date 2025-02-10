import http from 'http'
import url from 'url'

const _weatherData = {
    "London": { temperature: "15°C", condition: "Sunny" },
    "Paris": { temperature: "20°C", condition: "Cloudy" },
    "Mumbai": { temperature: "30°C", condition: "Humid" },
    "New York": { temperature: "10°C", condition: "Snowy" }
}

const server = http.createServer((request, response) => {
    response.statusCode = 200
    response.setHeader('Content-Type', 'application/json')

    const parsedUrl = url.parse(request.url, true)
    const pathName = parsedUrl.pathname
    const query = parsedUrl.query

    if (pathName === '/') {
        response.end('Welcome to the Weather API')
    } else if (pathName === '/weather') {
        const city = query.city

        if (!city) {
            response.statusCode = 400
            return response.end(JSON.stringify({ "error": "Please provide a city name." }))

        }

        if (_weatherData[city]) {  // check if city exists
            const cityData = _weatherData[city]
            cityData.city = city
            const jsonData = JSON.stringify(cityData)
            return response.end(jsonData)

        } else {
            response.statusCode = 404
            return response.end(JSON.stringify({ "error": "City not found in database." }))
        }
    } else {
        response.statusCode = 404
        response.setHeader('Content-Type', 'text/plain')
        return response.end('Page not found')
    }
})

const PORT = 8080

server.listen(PORT, () => console.log(`Server is running on the port ${PORT}`))




/*
🔥 Challenge: Build a Weather API (Using Query Parameters)
📌 Requirements:
1️⃣ Create a Node.js server that handles the following routes:

/ → Returns "Welcome to the Weather API!"
/weather?city=London → Returns a JSON response like

{
  "city": "London",
  "temperature": "15°C",
  "condition": "Sunny"
}

If no city is provided (/weather), return an error message.
If an unknown route is accessed (/random), return "404 - Page Not Found".


🔍 Expected Outputs
✅ http://localhost:3000/
Response: "Welcome to the Weather API!"

✅ http://localhost:3000/weather?city=Paris
Response:
{
  "city": "Paris",
  "temperature": "20°C",
  "condition": "Cloudy"
}
✅ http://localhost:3000/weather
Response:
{
  "error": "Please provide a city name."
}
✅ http://localhost:3000/xyz
Response: "404 - Page Not Found"

1️⃣ Create a JavaScript object that stores weather data for different cities.
2️⃣ When a user requests a city (/weather?city=Mumbai), check if it exists in the object.
3️⃣ If it exists → Return the weather details.
4️⃣ If it doesn’t exist → Return "City not found" message.

*/