require('dotenv').config();
require('./services/passport');
require('./services/db').connect();
const cookieSession = require('cookie-session');
const passport = require('passport');
const app = require('express')();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const log4js = require('log4js');
const logger = require('./logger');

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

app.get('/', (req, res) => {
    res.status(200).send('Home route');
});

const PORT = process.env.PORT || 2121;
app.listen(PORT, () => logger.info(`Easy Dev API running on port: ${PORT}`));
