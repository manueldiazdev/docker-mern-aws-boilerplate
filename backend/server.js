const express = require("express")
const PORT = 5000
const app = express();
app.use(express.json());


app.get("/test", (req, res) => {
    res.json({
        Hi: "Welcome to the MERN Library API",
    });
}); 


const server = app.listen(
    PORT,
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
    )
);