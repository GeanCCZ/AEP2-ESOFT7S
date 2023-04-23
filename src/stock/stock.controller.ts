import { Request,Response } from "express";
import stockService from "./stockService";

class StockController{
    public async getStockValue(req:Request,res:Response){
     const stockValue= await stockService.getStockValue()
        return res.json(stockValue)
 }
    public async getTotalStockValue(req:Request,res:Response){
        const totalStockValue= await stockService.getTotalStockValue()
           return res.json(totalStockValue)
    }
}

export default new StockController()