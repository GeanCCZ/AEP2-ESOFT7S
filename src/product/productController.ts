import productService from "./productService";
import {Request,Response} from 'express'

class productController{
    public async addProduct(req:Request,res:Response){
        const product = await productService.addProduct(req.body)
        return res.json(product)
    }
    public async getProductByID(req:Request,res:Response){
        const product=await productService.getProductByID(req.params.id)
        return res.json(product)
    }
    public async getStock(req:Request,res:Response){
        const stock= await productService.getStock()
        return res.json(stock)
    }
    public async remProduct(req:Request,res:Response){
        const product= await productService.remProduct(req.params.id)
        return res.json(product)
    }
    public async updProduct(req:Request,res:Response){
        const product= await productService.updProduct(req.params.id,req.body)
        return res.json(product)
    }
    public async randomProduct(req:Request,res:Response){
        const product= await productService.randomProduct()
        return res.json(product)
    }
    public async writeStock(req:Request,res:Response){
        const product= await productService.writeStock()
        return res.json(product)
    }
    public async readStock(req:Request,res:Response){    
        const product= await productService.readStock()
        return res.json(product)
    }
}

export default new productController();