// HTTP Methods
// GET
// POST
// PATCH
// PUT
// DELETE

import Express from "express";

const app = Express()
const port = +process.env.PORT || 4000

app.get('/', (req, res)=> {
    res.json({
        status: res.statusCode,
        msg: "You're Home"
    })
})
app.get('/about', (req, res)=> {
    res.json({
        status: res.statusCode,
        msg: "You're on the About Page"
    })
})
app.all('*', (req, res)=>{
    res.json({
        status: 404,
        msg: "404 PAGE"
    })
})
app.listen(port)