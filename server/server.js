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
//collect.insertOne({name:"harsha"})

app.listen( 6061 ,console.log("started at port 6061"));//port connection

app.post('/reg',(request,response)=>{
    console.log(request.body)
    collect.insertOne(request.body)
    response.send('pass')
})


/*app.get('/authenticate',(request,response)=>{
    console.log(request.query)
    async function find(){
        try{
            console.log(request.query.un);
            const result=await collect.findOne({email:request.query.un})
                     console.log(result)
            if(result==null){
                response.send("fail")
            }
            else{
                if(result.password===request.query.pw)
                {
                    response.send("pass")
                }
                else{
                    response.send("fail")
                }
            }
        }
        finally{

        }
    }
   find().catch(console.dir)
})*/


app.get('/authenticate',(request,response)=>{
    console.log(request.query)
    async function find(){
        try{
            const result=await collect.findOne({email:request.query.un})
                     console.log(result)
            if(result==null){
                response.send("fail")
            }
            else{
                if(result.password===request.query.pw)
                {
                    response.send("pass")
                }
                else{
                    response.send("fail")
                }
            }
        }
        finally{

        }
    }
   find().catch(console.dir)
})