const express = require('express');
const dotenv = require('dotenv');

// 1. Determine environment file (defaults to .env.development)
const env_value = process.argv[2] || "development";
dotenv.config({ path: `.env.${env_value}` });

const app = express();

// 2. Fallback default port if process.env.PORT is missing or undefined
const PORT = process.env.PORT || 3000;
const APP = process.env.APP || "DefaultExpressApp";

// 3. Centralized logger utility
function log(message) {
        const time = new Date().toISOString();
        console.log(`[${time}] [${env_value.toUpperCase()}] ${message}`);
}

// 4. Base Endpoint
app.get('/', (req, res) => {
        res.send('Hello world from express from ' + APP);
});

// 5. Health Check Endpoint
app.get('/health', (req, res) => {
        log("Health check called");
        res.status(200).json({
                status: "UP"
        });
});

// 6. Start Server (Fixed callback arguments)
app.listen(PORT, () => {
        log("Server is running on PORT " + PORT);
});

