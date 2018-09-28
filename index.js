require('dotenv').config();
require('./services/authService');
require('./services/db').connect();
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const log4js = require('log4js');
const path = require('path');
const logger = require('./logger');
const userRouter = require('./routes/usersRoutes');

const app = express();

// logging
app.use(morgan('tiny'));
app.use(log4js.connectLogger(log4js.getLogger()));

// middleware
app.use(bodyParser.json());

// routes
app.use('/api/users', userRouter);


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}

const PORT = process.env.PORT || 2121;
app.listen(PORT, () => logger.info(`Easy Dev API running on port: ${PORT}`));
