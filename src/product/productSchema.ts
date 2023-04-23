import { Schema, model  } from "mongoose";

const ProductSchema=new Schema({
    nome:{
        required : true,
        type: String,
    },
    quantidade:{
        required:true,
        type: Number,
    },
    valor:{
        required:true,
        type: Number,
    }},
    {timestamps:true}
)

export default model('Product',ProductSchema)


