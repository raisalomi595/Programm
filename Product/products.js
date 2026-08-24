const products = [
    {name: "Laptop", price: 90000},
    {name: "Mobile", price: 30000},
    {name: "Tablet", price: 50000},
    {name: "Headphones", price: 2000},
    {name: "Smartwatch", price: 15000}
];

const getProducts = products.find(function (product) {
    return product.name === "Tablet";

})
   
console.log(getProducts);

