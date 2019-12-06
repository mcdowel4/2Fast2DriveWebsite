const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const host = '0.0.0.0';
app.use(express.static(__dirname + '/views')); // this publishes all files in public folderr



app.listen(port, host, function(){
    console.log(`Example app listening on port ${port}!`);
}); 

app.get('/', (req, res) => res.send('index.html') );