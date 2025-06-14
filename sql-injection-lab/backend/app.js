const express = require('express');
const cors = require('cors');
const app = express();
const level1 = require('./routes/level1');

app.use(cors());
app.use(express.json());

app.use('/api/level1', level1);

app.listen(5000, () => console.log('Server running on port 5000'));
