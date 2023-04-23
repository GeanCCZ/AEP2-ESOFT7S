import { Schema,model } from "mongoose";


const productStockSchema=new Schema({
  nome:{
    required:true,
    type:String,
    },
    quantidade:{
        required:true,
        type:Number,
    },
    valor:{
        required:true,
        type:Number,
    },
    stockValue:{
        required:true,
        type:Number,
    }
},{timestamps:true})


export default model('ProductStock',productStockSchema)