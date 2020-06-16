var express = require('express');
var app = express();
app.use(express.static(__dirname + '/'));
app.listen(process.env.PORT || 8080);

if (process.env.NODE_ENV === 'production') {
    // Exprees will serve up production assets
    app.use(express.static('public'));

    // Express serve up index.html file if it doesn't recognize route
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
    });
}