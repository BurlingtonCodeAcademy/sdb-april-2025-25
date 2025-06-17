import express from 'express'

const app = express()
const PORT = 8080;

app.get("/api/health", (request, response) => {
    response.json({
        status: "✅",
        timestamp: new Date().toISOString()
    })
})

app.get("/", (req, res) => {
    res.send("Hey from the API!")
})

// query example
app.get("/api/hello", (req, res) => {
    const name = req.query.name || "World"
    res.send(`Hello ${name}!`)
})

// params example
app.get("/api/hello/:name", (req, res) => {
    res.send(`Hello ${req.params.name}!`)
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})