const express = require('express');
const chatRouter = require('./routers/chatRouter');



const app = express();
const PORT = 4200;

app.use(express.json());

app.use('/chat',chatRouter);


app.listen(PORT,()=>{
    console.log('listening on PORT 4200')
})