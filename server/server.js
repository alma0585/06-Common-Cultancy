const express = require('express');
const cors = require('cors');
const db = require('mysql2');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Connect til database.
const connection = db.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.dbpassword,
    database: process.env.dbname
});


connection.connect((err) => {
    if (err) {
        console.error("Error connecting to the database:", err.message);
        return;
    }
    console.log("Connected to the database.");
});

// Endpoint til at hente data fra databasen
app.get('/data', (req, res) => {
    const q = `SELECT year, count(ccpost_id) as amount FROM time GROUP BY year ORDER BY year ASC`;

    connection.query(q, (error, results) => {
        if (error) {
            console.error("Error executing query:", error.message);
            res.status(500).json({ error: "Database query failed" });
        } else {
            res.json(results); // Returner data som JSON
        }
    });
});

// Start server. Skal være under end points.
app.listen(port, ()=>{
    console.log("Hey guys we are officially LIVE !!!!");
});