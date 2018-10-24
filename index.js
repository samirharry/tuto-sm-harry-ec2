const express= require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('Hello World Hi How are you I miss you');
})
app.listen(3000,()=>{
    console.log('Corriendo Puerto 3000');
})