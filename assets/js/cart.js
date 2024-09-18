// CART JS
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCart() {
  const cartCount = document.getElementById('cart-count');
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  cartCount.textContent = cart.length;
  cartItems.innerHTML = '';
  let totalAmount = 0;

  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';

    // Product name and price
    const productInfo = document.createElement('div');
    productInfo.textContent = `${item.name} - $${item.price}`;
    
    // Quantity input with decimal support
    const quantityInput = document.createElement('input');
    quantityInput.type = 'number';
    quantityInput.value = item.quantity || 1;
    quantityInput.min = 0.1; // Allow minimum of 0.1
    quantityInput.step = 0.1; // Allow increments of 0.1
    quantityInput.className = 'form-control quantity-input';
    quantityInput.style.width = '60px';
    quantityInput.addEventListener('input', () => {
      item.quantity = parseFloat(quantityInput.value);
      updateCart();
    });

    // Calculate total for this product
    const itemTotal = parseFloat(item.price) * (item.quantity || 1);
    totalAmount += itemTotal;

    // Remove button
    const removeBtn = document.createElement('button');
    removeBtn.className = 'btn btn-danger btn-sm';
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', () => {
      cart.splice(index, 1);
      updateCart();
    });

    // Append elements to the list item
    li.appendChild(productInfo);
    li.appendChild(quantityInput);
    li.appendChild(removeBtn);
    cartItems.appendChild(li);
  });

  cartTotal.textContent = totalAmount.toFixed(2); // Update the total amount in the modal
  localStorage.setItem('cart', JSON.stringify(cart));
}

document.querySelectorAll('.add-to-cart-btn').forEach(button => {
  button.addEventListener('click', () => {
    const name = button.getAttribute('data-name');
    const price = button.getAttribute('data-price');
    const existingItemIndex = cart.findIndex(item => item.name === name);

    if (existingItemIndex !== -1) {
      // If the item already exists in the cart, increase the quantity by 1
      cart[existingItemIndex].quantity += 1;
    } else {
      // Add the new item with quantity 1
      cart.push({ name, price, quantity: 1 });
    }

    updateCart();

    // Show notification
    const toast = new bootstrap.Toast(document.getElementById('cart-toast'));
    toast.show();
  });
});

// Initial cart update
updateCart();

document.getElementById('proceed-to-checkout-btn').addEventListener('click', () => {
  if (cart.length === 0) {
    Swal.fire({
      icon: 'error',
      title: 'Your cart is empty!',
      text: 'Please add products to your cart before proceeding to checkout.',
    });
  } else {
    // Hide the cart modal
    const cartModal = bootstrap.Modal.getInstance(document.getElementById('cartModal'));
    cartModal.hide();
    
    // Show the billing modal
    const billingModal = new bootstrap.Modal(document.getElementById('billingModal'));
    billingModal.show();
  }
});

document.getElementById('place-order-btn').addEventListener('click', () => {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const contact = document.getElementById('contact').value.trim();
  const address = document.getElementById('address').value.trim();

  if (name && email && contact && address) {
    const existingOrders = JSON.parse(localStorage.getItem('orders')) || [];
    const newOrder = {
      id: Date.now(),
      date: new Date().toLocaleString(),
      name,
      email,
      contact,
      address,
      products: [...cart],
    };

    existingOrders.push(newOrder);
    localStorage.setItem('orders', JSON.stringify(existingOrders));
    sessionStorage.setItem('orderDetails', JSON.stringify(newOrder));

    Swal.fire({
      icon: 'success',
      title: 'Your order has been placed!',
      showConfirmButton: false,
      timer: 2000,
    });

    cart = [];
    updateCart();
    localStorage.removeItem('cart');

    const billingModal = bootstrap.Modal.getInstance(document.getElementById('billingModal'));
    billingModal.hide();

    setTimeout(() => {
      window.location.href = '../pages/myorders.html';
    }, 2000);
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Please fill in all fields',
    });
  }
});
// CART JS
