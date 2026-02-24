const { getFullName, productType } = require("./services/produtcs");
const product = require("./services/produtcs");
const config = require("./services/config");
const db = require("./services/database");

async function main(){
    // console.log("Carrinho de Compras:\n");
    // product.getFullName("408", "mousepad");
    // product.getFullName("404", "teclado");
    // product.getProductLabel("mouse")
    // console.log(`Versão: ${config.devArea.version}`)
    // console.log(`Produção: ${config.devArea.production}`)
    // console.log(`Dispositivo: ${config.client.device}`)
    db.connectToDatabase("ProdutosDB");
    product.getFullName("408", "mousepad");
    getFullName("408", "mousepad");
}

main();