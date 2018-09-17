require('dotenv').config();
const app = require('express')();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const logger = require('./logger');

app.use(morgan('tiny'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.status(200).send('Welcome home to Easy Dev API!');
});


const PORT = process.env.PORT || 2121;
app.listen(PORT, () => logger.info(`Easy Dev API running on port: ${PORT}`));
