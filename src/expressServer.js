const route = require('./routes/routes');
const app= require('./server').app

app.use('/', route);

module.exports = app