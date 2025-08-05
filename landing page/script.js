document.addEventListener('DOMContentLoaded', () => {
    const cartBadge = document.getElementById('cart-badge');
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    function updateCartBadge() {
        cartBadge.textContent = cartItems.length;
    }

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (event) => {
            const productDiv = event.target.closest('.product');
            const productId = productDiv.getAttribute('data-product-id');
            if (!cartItems.includes(productId)) {
                cartItems.push(productId);
                localStorage.setItem('cartItems', JSON.stringify(cartItems));
                updateCartBadge();
            }
        });
    });

    updateCartBadge();
});