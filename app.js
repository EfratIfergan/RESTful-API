const express = require('express');
const app = express();
const mongoose = require('mongoose');
const nodemonJson = require('./nodemon.json');

mongoose.connect(`mongodb+srv://${nodemonJson.env.MONGO_USERNAME}:${nodemonJson.env.MONGO_PASSWORD}@database.ubdkr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log("you are connected!😃")
});

const articleRoutes = require('./api/routes/article');
const categoryRoutes = require('./api/routes/category');
const userRoutes = require('./api/routes/user');
// app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authoriztion");
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
})

//! routes
app.use('/article', articleRoutes);
app.use('/category', categoryRoutes);
app.use('/user', userRoutes);

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
})

module.exports = app;