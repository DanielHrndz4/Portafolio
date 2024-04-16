const mongoose = require('mongoose')
require('dotenv').config();

const URI = process.env.URI_MONGO;

mongoose.connect(URI)
    .then(() => console.log('Connected to mongodb'))
    .catch((e) => console.error(e))