import express from "express";
const app = express();

class ErrorHandler extends Error {
    constructor(message, statusCode) {
        super(message);

        this.statusCode = statusCode;
    }
}

app.get("/", (req, res, next) => {
    console.log("A");
    return next(new ErrorHandler("Unauthorized", 401));
    // next();
},
    (req, res, next) => {
        console.log("B");
        next()
    },
    (req, res, next) => {
        console.log("C");
    }
);

app.use((err, req, res, next) => {
    console.log("working");
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";

    res.status(err.statusCode).json({
        message: err.message,
    })
})

app.listen(4000, () => {
    console.log(`Server is working`)
})