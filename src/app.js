import express from 'express';
const app=express();
import cors from 'cors';
import cookieParser from "cookie-parser";

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true,
})); 
app.use(express.json({
    limit:"16kb",
}))
app.use(express.urlencoded({extended:true,limit:"16kb"}));
app.use(express.static("public"));
app.use(cookieParser());
app.use(express.json());
//-------------------------------------------Cookies----------------------------------
app.use(cookieParser());

const users={
    name:"Kush",
    age:20,
}

app.get("/",(req,res)=>{
    res.cookie("user_1",users,{maxAge:60*60*24*7, httpOnly:true}); // 1 week in sec
    console.log(req.cookies);
})
app.get("/username",(req,res)=>{
    const username=res.cookie.name;
    console.log(`Hello ${username}`);
})

app.get("/delete",(req,res)=>{
    res.clearCookie("user_1");
    res.send("cleared");
})

//-----------------------------------------------Cookie End------------------------------------

//-----------------------------------------------Session------------------------------------
import expressSession from 'express-session';
app.use(session({
    resave:false,
    saveuninitialized:false,
    secret:"hello",     // secret key by which data will be encrypted
    cookie: { secure: false } // Set to true if using HTTPS
}));
app.get('/user',(req,res)=>{
    res.session.name="hello",''
})
req.session.cart = []; // Initialize an empty shopping cart
req.session.cart.push({ product: 'Shoes', quantity: 1 }); // Add items to the cart

req.session.destroy((err) => {
    if (err) {
      console.error('Error destroying session:', err);
    } else {
      res.redirect('/login'); // Redirect to login page or another appropriate page
    }
  });
  


export default app;
