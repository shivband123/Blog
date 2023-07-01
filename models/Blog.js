const {Schema,model}=require("mongoose")
let blogSchema=new Schema({
  title:{
    type:String,
    required:true,
    time:true
  },
snippet:{
    type:String,
    required:true,
    time:true
},
body:{
    type:String,
    required:true,
    time:true
},
},{timestamps:true})
module.exports=model("blog",blogSchema)
