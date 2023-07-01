if(process.env.NODE_ENV!=='production'){
  require("dotenv").config()
}
const express=require("express")
const mongoose=require("mongoose")
const blogRouter=require("./routes/blogRouter")
const methodOverride=require("method-override")
let app=express()

// register template engine
app.set("view engine","ejs")

// mongodb connection
async function db(){
  await mongoose.connect(process.env.MONGODB_URI)
  console.log("Mongodb connected");
}
db()
// inbuilt middleware
app.use(express.urlencoded({ extended:false}))

app.use(express.static("public"))

// method Override
app.use(methodOverride("_method"))

// MOUNTING ROUTES:- to use the routing paths from "blogRouter" after importing.
// route middleware
app.use(blogRouter)

// IF THE ABOVE ROUTES ARE NOT EXECUTED(paths are not matching)THE BELOW 404 FILE IS EXECUTED.
// error page middleware
app.use((req, res) => {
  res.render("404")
})

app.get("/",(req, res) => {
  res.send("hello")
})

// app.listen(process.evn.PORT,(err)=>{
//   if(err){console.log(err);}
//   console.log(`server is running on port ${process.env.PORT}`)
// })
app.listen(5000,(err)=>{
  if(err){console.log(err);}
  console.log("server is running on port 5000");
})
