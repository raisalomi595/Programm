const foods = [
    {name: "pizza", price: 400, type: "non-veg"},
    {name: "burger", price: 200, type: "non-veg"},
    {name: "pasta", price: 300, type: "veg"},
    {name: "salad", price: 150, type: "veg"},
    {name: "sushi", price: 500, type: "non-veg"},
]

const getFoodByType = foods.map(function (food) {
    return food.type;
});

console.log(getFoodByType);