require('dotenv').config()
const { json: jsonParser } = require('body-parser')
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express()
const register = require('./routes/register/register');
const verifyKey = require('./routes/auth/auth');
const Keys = require('./models/Key');
const rateLimit = require('express-rate-limit')
const limitMiddleware = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
});

const port = process.env.PORT || 8080;

app.use(cors());
app.use(limitMiddleware);
app.use(jsonParser({ limit: '50mb' }));
app.use('/register/verify', verifyKey);
app.use('/register/:event', register);


const startServer = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI, { useNewUrlParser: true });
        console.log("Connected to the database");
    } catch (err) {
        console.log(err);
    }
    app.listen(port, () => {
        console.log(`Server started on port http://localhost:${port}`);
    }
    );
}

startServer();


// app.post("/key", async (req, res) => {
//     let key = req.body.key
//     if (!key) {
//         return res.status(404).send("Page Not Found");
//     }
//     const newKey = new Keys({
//         key
//     })
//     await newKey.save()
//     return res.send("OK");
// })
