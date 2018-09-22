require('dotenv').config();
require('./services/passport');
require('./services/db').connect();
const cookieSession = require('cookie-session');
const passport = require('passport');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const log4js = require('log4js');
const path = require('path');
const logger = require('./logger');

const app = express();

// logging
app.use(morgan('tiny'));
app.use(log4js.connectLogger(log4js.getLogger()));

// Setting up passport
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 100,
        keys: [process.env.COOKIE_KEY],
    }),
);
app.use(passport.initialize());
app.use(passport.session());

// middleware
app.use(bodyParser.json());

// routes
require('./routes/authRoutes')(app);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}

const PORT = process.env.PORT || 2121;
app.listen(PORT, () => logger.info(`Easy Dev API running on port: ${PORT}`));
