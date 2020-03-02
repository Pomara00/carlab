const express = require("express")
const cartRoutes = express.Router();


const cart = [{
        id: 0,
        product: "oil",
        price: 5,
        quantity: 2
    },
    {
        id: 1,
        product: "not oil",
        price: 8,
        quantity: 6
    },
    {
        id: 2,
        product: "purple paint",
        price: 100,
        quantity: 7
    },
    {
        id: 3,
        product: "paint remover",
        price: 300,
        quantity: 19
    }
];

cartRoutes.get("/cart", (request, response) => {
    response.json(cart);
})

cartRoutes.get("/cart/:id", (require, response) => {
    let id = parseInt(request.params.id);
    let cartItem = cart.find(cart => id === cart.id);
    if (cartItem) {
        response.json(cartItem)
    } else {
        response.status(200)
        response.send(`No items by this Name: ${cart}`)
    }
});

cartRoutes.post("/cart", (request, response) => {
    let newItem = request.body;
    newItem.id = nextId;
    nextId++;
    cart.push(newItem);
    response.status(201);
    response.json(cart);
});

cartRoutes.put("/cart/:id", (request, response) => {
    let id = parseInt(request.params.id);
    let newItem = request.body;
    newItem.id = id;
    let index = cart.findIndex(cart => cart.id === id);
    if (index >= 0) {
        cart.splice(index, 1, newItem);
        response.send(food);
    } else {
        response.status(404);
        response.send(`No cart item by this ID ${id}`);
    }
});
cartRoutes.delete("/cart/:id", (request, response) => {
    let id = parseInt(request.params.id);
    let index = cart.findIndex(cart => cart.id === id);
    if (index >= 0) {
        cart.splice(index, 1);
        response.sendsStatus(204);
    } else {
        response.status(404);
        response.send(`There's no food by id: ${id}`);
    }
});







module.exports = cartRoutes