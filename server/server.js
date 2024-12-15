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

// Endpoints til at hente data fra databasen
app.get('/data', (req, res) => {
    const q = `SELECT year, count(ccpost_id) as amount 
    FROM time 
    WHERE year < 2024 AND year > 2021
    GROUP BY year 
    ORDER BY year ASC`;

    connection.query(q, (error, results) => {
        if (error) {
            console.error("Error executing query:", error.message);
            res.status(500).json({ error: "Database query failed" });
        } else {
            res.json(results);
        }
    });
});

app.get('/data2', (req, res) => {
    const q = `SELECT month, sum(total_interactions) as interactions
    FROM metrics as m
    JOIN time as t ON m.ccpost_id = t.ccpost_id
    WHERE year = 2022
    GROUP BY month
    ORDER BY month ASC`

    connection.query(q, (error, results) => {
        if (error) {
            console.error("Error executing query:", error.message);
            res.status(500).json({ error: "Database query failed" });
        } else {
            res.json(results);
        }
    });
});

app.get('/data3', (req, res) => {
    const q = `SELECT month, sum(total_interactions) as interactions
    FROM metrics as m
    JOIN time as t ON m.ccpost_id = t.ccpost_id
    WHERE year = 2023
    GROUP BY month
    ORDER BY month ASC`

    connection.query(q, (error, results) => {
        if (error) {
            console.error("Error executing query:", error.message);
            res.status(500).json({ error: "Database query failed" });
        } else {
            res.json(results);
        }
    });
});

app.get('/data4', (req, res) => {
    const q = `SELECT month, count(ccpost_id) as opslag
    FROM time
    WHERE year = 2022
    GROUP BY month
    ORDER BY month asc`

    connection.query(q, (error, results) => {
        if (error) {
            console.error("Error executing query:", error.message);
            res.status(500).json({ error: "Database query failed" });
        } else {
            res.json(results);
        }
    });
});

app.get('/data5', (req, res) => {
    const q = `SELECT month, count(ccpost_id) as opslag
    FROM time
    WHERE year = 2023
    GROUP BY month
    ORDER BY month asc`

    connection.query(q, (error, results) => {
        if (error) {
            console.error("Error executing query:", error.message);
            res.status(500).json({ error: "Database query failed" });
        } else {
            res.json(results);
        }
    });
});

// Start server. Skal være under end points.
app.listen(port, ()=>{
    console.log("Hey guys we are officially LIVE !!!!");
});