require('dotenv').config()

const helmet = require('helmet')
const cors = require("cors")
const xss = require('xss-clean')
const { json } = require("express")
const connectDB = require("./src/db/connect");
const app = require('express')()
const notFoundMiddleware = require('./src/middleware/not-found')

app.use(helmet())
app.use(json())
app.use(cors())
app.use(xss())

const port = process.env.PORT || 5001;

app.use(notFoundMiddleware);

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () =>
            console.log(`Server is listening on port ${port}...`)
        );
    } catch (error) {
        console.log(error);
    }
};

setTimeout(()=> {
    start()
})