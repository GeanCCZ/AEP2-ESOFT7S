import Product from "../product/productSchema"
import ProductStock from "./productStock.schema"
class stockService{

    async getStockValue(){
        try {
            const stock= await Product.find()
            const stockvalue = stock.map((product:any)=>{
                return{
                    nome:product.nome,
                    quantidade:product.quantidade,
                    valor:product.valor,
                    stockValue:(product.valor*product.quantidade).toFixed(2)
                }
                })
            await ProductStock.create(stockvalue)
            return stockvalue
        } catch (error) {
            console.error('Error getting the stock value ',error)
        }
    }

    async getTotalStockValue(){
        try {
            const stock=await ProductStock.find()
        const total= stock.reduce((stock,atualStock)=>{
            return(stock+atualStock.stockValue)
        },0).toFixed(2)
        return total
        } catch (error) {
            console.error('Error getting the total stock value ',error)
        }
        
    }


}
export default new stockService();