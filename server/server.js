const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(
    cors({
        orgin: 'http://localhost:3000'
    }),
);

require('./config/mongoose.config')
require('./routes/entry.routes')(app)

app.listen(8000, () => {
    console.log('listening on port 8000!')
})