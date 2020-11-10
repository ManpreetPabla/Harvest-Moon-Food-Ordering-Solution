const express= require('express');
const cors=require('cors');
const mongoose=require('mongoose');

require ('dotenv').config();

const app = express();
const port=process.env.port || 5000;

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://infocus:infocus@cluster0.rykvx.mongodb.net/<dbname>?retryWrites=true&w=majority"


mongoose.connect(uri,{ useNewUrlParser: true,useCreateIndex: true , useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open',()=>{
    console.log("MongoDB database connection established successfully");
})


//const menuRouter= require('./routes/menus');
const usersRouter = require('./routes/users');  

//app.use('/menus',menuRouter);
app.use('/user',usersRouter);

app.listen(port,()=>{
    console.log(`Server is running on port:${port}`);
});