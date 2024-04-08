const express = require('express');
const app  = express();
const port = 3000;

const userRouter =require('./Routers/user');
const productRouter = require('./Routers/product');

//middleware for this mongodb is use
app.use(express.json());
app.use('/user',userRouter);
app.use('/product',productRouter);

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
});

