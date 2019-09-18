const express = require('express');
const morgan = require('morgan');

const app = express();
const bodyParser = require('body-parser');

const port = 3000;

app.use(morgan('tiny'));
app.use('/restaraunt/:id/', express.static('public'));


app.listen(port, () => { console.log(`Proxy server listening on port ${port}`); });
