import Product from "./productSchema"
import { writeFile,readFile} from "fs/promises"


class productService{
async addProduct(data:any){
    try {
        const product=await Product.create(data)
    return product
    } catch (error) {
        console.error('Error creating a product ',error)
    }
}
async getProductByID(id:any){
    try {
        const product=await Product.findById(id)
        return product;
    } catch (error) {
        console.error('Error getting a product ',error)
    }
}
async getStock(){
    try {
        const product=await Product.find()
        return product;
    } catch (error) {
        console.error('Error getting the product stock ',error)
    }
}
async remProduct(id:any){
    try {
        const product=await Product.findByIdAndDelete(id)
        return product
    } catch (error) {
        console.error('Error removing the product ',error)
    }
}
async updProduct(id:any,data:any){
    try {
        const product=await Product.findByIdAndUpdate(id,
            {
              nome:data.nome,
              quantidade:data.quantidade,
              price:data.preco
            },{new:true})
        return product
        
    } catch (error) {
        console.error('Error updating the product stock ',error)
    }
}

async randomProduct(){
    try {
        const product=await Product.find()

        let randomProduct:any=[]

        while(randomProduct.length<4){
            let randomNumber=Math.floor(Math.random()*product.length)
            let selectedProduct=product[randomNumber]

            let exists=false
            randomProduct.forEach((product:any)=>{
                if(product===selectedProduct){
                    exists=true
                }
            
            })
            if(!exists){
                randomProduct.push(selectedProduct)
            }
        }
        return randomProduct
    } catch (error) {
        console.error('Error getting a random product ',error)
    }
    }

    async writeStock(){
        try {
        const stock= await Product.find()
        writeFile('stock.txt',JSON.stringify(stock,null,2))
        return stock
        } catch (error) {
        console.error('Error writing the stock ',error)
        }
    }

    async readStock(){

        try {
        const stock= await readFile('stock.txt')
        const stockJson=JSON.parse(stock.toString())
        return stockJson
        } catch (error) {
        console.error('Error reading the stock ',error)
        }

        
    }
}

export default new productService()