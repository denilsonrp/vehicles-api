const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const routes = require('./src/routes/index.routes');

/**
 * Load environment variables
 */
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.APP_PORT, () => console.log(`Vehicles API started on port ${process.env.APP_PORT}`));
