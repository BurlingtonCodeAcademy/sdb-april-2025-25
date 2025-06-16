import express from 'express'

const app = express()
const PORT = 8080;

app.get("/api/health", (request, response) => {
    response.json({
        status: "✅",
        timestamp: new Date().toISOString()
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})