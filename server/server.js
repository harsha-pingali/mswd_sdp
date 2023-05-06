const {response, request}=require("express");//importing
const express= require("express");//importing
const {MongoClient, ObjectId}=require('mongodb')
const cors=require('cors');
const app=express();

app.use(cors())
app.use(express.json())
const uri= "mongodb+srv://harsha19:harsha123@cluster0.msnedsf.mongodb.net/?retryWrites=true&w=majority"
const client=new MongoClient(uri);
client.connect();
const db=client.db("sdp");
const collect=db.collection("collect1");
const cart=db.collection("cart")
const jwt =require('jsonwebtoken');
const bcrypt=require('bcryptjs');
const{expressjwt:exjwt} = require('express-jwt');
const jwt_decode = require('jwt-decode');
const bodyParser=require('body-parser')
//collect.insertOne({name:"harsha"})
const secretkey="abcd"
const algorithm ="HS256"

const stripe=require('stripe')('sk_test_51N4JFHSBO9WWFWOthXCTS7Nj0RC1b0QvwV4zS5BDEUQ0CfeR644GLifg7Iz1jmTdEy3eaRxlQl0mF8g4mVQzvuTx00UovcIEyD')
const jwt_mw=exjwt({
    algorithms:[algorithm],
    secret:secretkey
});

app.listen( 6061 ,console.log("started at port 6061"));//port connection

app.use(bodyParser.json())

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


/*app.post('/authenticate',(request,response)=>{
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
})*/

app.post('/authenticate', async (req, res) => {
    console.log(req.body.email)
	const user = await collect.findOne({
		email: req.body.email,
        password:req.body.password
	})
    //console.log(user.password,req.body.password)

	if (user==null) {
		res.send({status:"fail"})
	}

	/*const isPasswordValid = await bcrypt.compare(
		req.body.password,
		user.password
	)*/
    else{
	if (user.password==req.body.password) {
		const token = jwt.sign(
			{
				name: user.name,
				email: user.email,
			},secretkey,
		    {
                algorithm:algorithm,
                expiresIn:'5m'
            }
		)

		return res.json({ status: 'ok', user: token })
	} 
    else {
		return res.json({ status: 'error', user: false })
	}}
})

app.post('/user', async (req, res) => {
console.log(req.body)
  const users = await collect.find().toArray()
  //console.log(users)
  res.send(users)
})


app.post('/deleteusers', async (req, res) => {
  try {
    const id = req.body.id;
    console.log(id)
    const result = await collect.deleteOne({_id:new ObjectId(id)})
    console.log(result)
    if (result === null) {
      res.status(404).send({ message: 'User not found' });
    } else {
      res.send({ message: 'User deleted successfully' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal server error' });
  }
});

app.post('/cart', async (request, response) => {
  const { product_id, email } = request.body;
  
  const existingCartItem = await cart.findOne({ product_id });
  console.log(existingCartItem)
  if (existingCartItem) {
    // Check if the email already exists in the emails array
    const emailsSet = new Set(existingCartItem.emails);
    console.log(emailsSet)
    if (!emailsSet.has(email)) {
      // Add the email to the emails array
      await cart.updateOne({ _id: existingCartItem._id }, { $addToSet: { emails: email } });
    }
  } else {
    // Product does not exist in the cart, so create a new document
    await cart.insertOne({ product_id, emails: [email] });
  }
  
  response.send("success");
});

app.post('/decode', jwt_mw, (req, res) => {
    var token = req.headers.authorization;
    console.log(token);
    res.send(jwt_decode(token));
    //res.send("You are Authorized");
})

app.post('/products', async (request, response) => {
  const email = request.body.email;
  console.log(email)
  const cartItems = await cart.find({ emails: email }).toArray();
  const productIds = cartItems.map((cartItem) => cartItem.product_id);
  console.log(productIds)
  response.send(productIds);
});



app.post('/pay', async (req, res) => {
  console.log(req.body.total)
  console.log(req.body.cart)
  const line_items=req.body.cart.map(item=>{
    return{
        price_data:{
          currency:'inr',
          product_data:{
            name:item.heading,
            metadata:{
              id:item.id
            }
          },
          unit_amount:(item.price.slice(1))*100,
        },
        quantity:item.qty,
      }
    
    })
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items,
    mode: 'payment',
    success_url: 'http://localhost:3000/success',
    cancel_url: 'http://localhost:3000/failure'
  });


   res.json({url: session.url})
});