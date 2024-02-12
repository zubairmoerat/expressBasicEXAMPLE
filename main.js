// HTTP Methods
// GET
// POST
// PATCH
// PUT
// DELETE

import Express from "express";

const app = Express()
const port = +process.env.PORT || 4000
const router = Express.Router()
app.use(router)

router.get('^/$|/express', tits,(req, res)=> {
    res.json({
        status: res.statusCode,
        msg: "You're Home"
    })
})
router.get('/about', (req, res)=> {
    res.json({
        status: res.statusCode,
        msg: "You're on the About Page"
    })
})
router.all('*', (req, res)=>{
    res.json({
        status: 404,
        msg: "404 PAGE"
    })
})
app.listen(port, () =>{
    console.log(`Server is running at http//localhost:${port}`);
})

// MIDDLEWARE
function tits(req, res, next){
    console.log("Hello there !");
    // next()
    res.json({
        status: res.statusCode ,
        msg:"You are a faggot Harry"
    })
}



// In Node.js, middleware refers to functions that have access to the request object (req), the response object (res), and the next function in the application’s request-response cycle. These functions can modify the request and response objects, execute additional code, end the request-response cycle, and call the next middleware function in the stack.

// Logging: Logging information about incoming requests, such as request method, URL, and timestamp.

// Authentication: Verifying the identity of users or clients before allowing access to certain routes or resources.

// Authorization: Checking if a user has the necessary permissions to access a particular resource.

// Error handling: Catching and processing errors that occur during the request-response cycle.

// Request parsing: Parsing incoming request data, such as form data or JSON payloads.

// Response manipulation: Modifying the response object before sending it back to the client.


