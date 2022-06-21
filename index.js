const express = require('express');
const indexRoutes = require('./routes');
const rateLimit = require('express-rate-limit');
const app = express();
const port = 3000;

app.use(
    rateLimit({
        windowMs: 60*1000,
        max: 10,
        message: "You exceeded 100 requests in 12 hour limit",
        headers: true
    })
)

app.use('/posts', indexRoutes);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})