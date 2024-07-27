const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const occurrences = require('./routes/occurrences');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/occurrence-book', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api/occurrences', occurrences);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
