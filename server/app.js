const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const path = require('path');

app.use(cors());

mongoose.connect('mongodb+srv://root:root@cluster0-yrpzx.mongodb.net/test?retryWrites=true&w=majority');
mongoose.connection.once('open',()=>{
    console.log('hello monogo')
})

app.use('/',graphqlHTTP({
    schema:schema,
    graphiql:true,
}));

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html' ));
    });

}

const port = process.env.PORT || 30 

app.listen(port, ()=>{console.log('now listening to port 4000')});

