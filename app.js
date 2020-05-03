const express = require('express');
const config = require('config');

const app = express();
const PORT = config.get('port') || 5000;
const db = require("./db/DB_API");

app.use(express.json({extended: true}));
app.use('/api', require("./routes/routes"));

async function startServer() {
    try {
        await db.initDB();
        await app.listen(PORT, () => {
            console.log(`Server has been started on ${PORT} port!`);
        });
    } catch (e) {
        console.log('Something wrong, try again...');
    }
}

startServer();