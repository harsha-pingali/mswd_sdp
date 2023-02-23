const {response, request}=require("express");//importing
const express= require("express");//importing
const {MongoClient}=require('mongodb')
const cors=require('cors');
const app=express();
app.use(cors())
app.use(express.json())
const uri= "mongodb+srv://harsha19:harsha123@cluster0.msnedsf.mongodb.net/?retryWrites=true&w=majority"
const client=new MongoClient(uri);
client.connect();
const db=client.db("sdp");
const collect=db.collection("collect1");

app.listen( 6061 ,console.log("started at port 6061"));//port connection