const express = require('express');
const app = express();
const HomeController = require('./home');

app.set('port', 1337);
app.set('ip', '0.0.0.0');
app.use(HomeController);
app.use((req, res) => res.status(404).send("Unable to find that")); // 404 middleware


app.listen(app.get('port'), app.get('ip'), () => { 
    console.log(`App started on port ${app.get('ip')}:${app.get('port')}`) 
});