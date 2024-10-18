let cart = [];
let productPrice = 20.00; // Set the price of the product

// Function to add items to the cart
function addToCart() {
    const quantity = parseInt(document.getElementById('quantity').value);

    if (quantity > 0) {
        const item = {
            name: 'Awesome Widget',
            price: productPrice,
            quantity: quantity
        };

        // Check if item already exists in the cart
        const existingItem = cart.find(cartItem => cartItem.name === item.name);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push(item);
        }

        updateCart(); // Update the cart's display and total cost
    }
}
