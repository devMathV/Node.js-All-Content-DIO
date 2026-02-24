// Todas as funções que lidam com produto
const productType = {
    version: "digital",
    tax: "x1",
}

//hidden const
const apiUrl = {
    url: "www.google.com/api"
}

async function getFullName(codeId, productName) {
    console.log("Product: " + codeId + " -- " + productName);
}

async function getProductLabel(productName) {
    console.log("Product: " + productName);
}

module.exports = {
    getFullName,
    getProductLabel,
    productType,
};