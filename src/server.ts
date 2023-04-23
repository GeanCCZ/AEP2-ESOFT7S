import App from './app'

function main(){
    try {
        App.listen(3000,'localhost',()=>{
            console.log('Server is running on port 3000')
        })
    } catch (error) {
        console.error('erro na inicialização do servidor',error)
    }
    
}
main()