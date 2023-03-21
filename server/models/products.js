const data = require('../data/products.json');

function getProducts(id) {
    return data.getProducts.find(product => product.id === id);
}

function getProductById() {
    
}

function addProduct(product) {
    product.id = data.products.length + 1;
    data.products.push(product);
}

function updateProduct(product) {
    const index = data.products.findIndex(p => p.id == product.id);
    data.products(index) = index;
}

function deleteProduct(id) {
    const index = data.products.findIndex(p => p.id == index);
    data.products.splice(index, 1);
}

module.reports = {
    getProducts,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct,
};