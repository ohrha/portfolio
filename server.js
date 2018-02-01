const http      = require('http');
const express   = require('express');
const cors      = require('cors');
const bodyParser= require('body-parser');
const path      = require('path');

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname,'dist')));
app.use(bodyParser.json({limit: '50mb'}));
app.get('*', (req,res)=>{

    res.sendFile(path.join(__dirname, 'dist/index.html'));

})

const port = process.env.PORT || 8080;
const server = http.createServer(app);

server.listen(port,()=>console.log("Server Created at "+port))