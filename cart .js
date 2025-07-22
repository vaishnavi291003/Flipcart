const products = [
    {
      id: 1,
      name: "Wireless Bluetooth Headphones",
      price: 1999,
      category: "Electronics",
      image: "1.jpg",
      description: "High-quality wireless headphones with noise cancellation.",
      rating: 4.5
    },
    {
      id: 2,
      name: "Men's Casual Shoes",
      price: 1299,
      category: "Fashion",
      image: "2.jpg",
      description: "Stylish and comfortable casual shoes for everyday wear.",
      rating: 4.2
    },
    {
      id: 3,
      name: "Smartphone (128GB, 8GB RAM)",
      price: 19999,
      category: "Electronics",
      image: "4.jpg",
      description: "Fast and powerful smartphone with a long-lasting battery.",
      rating: 4.8
    }
  ];
  
  const productList = document.getElementById("product-list");
  
  function displayProducts() {
    productList.innerHTML = "";
  
    products.forEach(product => {
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");
  
      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p>Price: ₹${product.price}</p>
        <p>Rating: ⭐${product.rating}</p>
        <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
        <div class="quantity-controls" style="display:none;">
          <button class="decrement">-</button>
          <span class="quantity">1</span>
          <button class="increment">+</button>
        </div>
      `;
  
      productList.appendChild(productCard);
    });
  
    setupEventListeners();
  }
  
  function setupEventListeners() {
    // Add to Cart button click
    document.querySelectorAll('.add-to-cart').forEach(button => {
      button.addEventListener('click', function () {
        const card = this.parentElement;
        const productId = parseInt(this.getAttribute('data-id'));
        const controls = card.querySelector('.quantity-controls');
  
        this.style.display = 'none';
        controls.style.display = 'flex';
  
        addToCart(productId);
      });
    });
  
    // Increment Quantity
    document.querySelectorAll('.increment').forEach(button => {
      button.addEventListener('click', function () {
        const quantityElem = this.parentElement.querySelector('.quantity');
        let quantity = parseInt(quantityElem.textContent);
        quantityElem.textContent = quantity + 1;
  
        const productId = parseInt(this.parentElement.parentElement.querySelector('.add-to-cart').getAttribute('data-id'));
        updateCart(productId, quantity + 1);
      });
    });
  
    // Decrement Quantity
    document.querySelectorAll('.decrement').forEach(button => {
      button.addEventListener('click', function () {
        const quantityElem = this.parentElement.querySelector('.quantity');
        let quantity = parseInt(quantityElem.textContent);
  
        const productId = parseInt(this.parentElement.parentElement.querySelector('.add-to-cart').getAttribute('data-id'));
  
        if (quantity > 1) {
          quantityElem.textContent = quantity - 1;
          updateCart(productId, quantity - 1);
        } else {
          this.parentElement.style.display = 'none';
          this.parentElement.parentElement.querySelector('.add-to-cart').style.display = 'inline-block';
          removeFromCart(productId);
        }
      });
    });
  }
  
  function addToCart(id) {
    const product = products.find(item => item.id === id);
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
    const existingItem = cart.find(item => item.id === id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      product.quantity = 1;
      cart.push(product);
    }
  
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(${product.name} has been added to the cart!);
    // window.location.href = "card.html";
  }
  
  function updateCart(id, quantity) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const item = cart.find(product => product.id === id);
    
    if (item) {
      item.quantity = quantity;
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }
  
  function removeFromCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter(product => product.id !== id);
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  
  displayProducts();
  
  
  
  let banners = document.querySelectorAll('.banner'); 
  let currentIndex = 0; 
  function showBanner() { 
  banners.forEach((banner, index) => { 
  banner.style.opacity = index === currentIndex ? '1': '0'; 
  }); 
  } 
  function changeBanner(direction) { 
  currentIndex = (currentIndex + direction + banners.length) % banners.length; 
  showBanner(); 
  } 
  function autoSlide() { 
  changeBanner(1); 
  } 
  setInterval(autoSlide, 3000); 
  showBanner(); 
  

  function loadCartItems() {
    const cartItemsContainer = document.getElementById("cart-items");
    const totalAmountElement = document.getElementById("total-amount");
  
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cartItemsContainer.innerHTML = "";
  
    if (cart.length === 0) {
      cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
      totalAmountElement.textContent = 0;
      return;
    }
  
    let totalAmount = 0;
  
    cart.forEach(product => {
      const cartItem = document.createElement("div");
      cartItem.classList.add("cart-item");
  
      cartItem.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <div class="item-info">
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <p>Price: ₹${product.price}</p>
          <p>Rating: ⭐${product.rating}</p>
          <div class="quantity-controls">
            <button class="decrement" data-id="${product.id}">-</button>
            <span class="quantity">${product.quantity}</span>
            <button class="increment" data-id="${product.id}">+</button>
          </div>
        </div>
        <button class="remove-item" data-id="${product.id}">Remove</button>
      `;
  
      totalAmount += product.price * product.quantity;
      cartItemsContainer.appendChild(cartItem);
    });
  
    totalAmountElement.textContent = totalAmount;
    setupCartEventListeners();
  }
  
  function setupCartEventListeners() {
    // Increment quantity
    document.querySelectorAll('.increment').forEach(button => {
      button.addEventListener('click', function() {
        const id = parseInt(this.getAttribute('data-id'));
        updateCartQuantity(id, 1);
      });
    });
  
    // Decrement quantity
    document.querySelectorAll('.decrement').forEach(button => {
      button.addEventListener('click', function() {
        const id = parseInt(this.getAttribute('data-id'));
        updateCartQuantity(id, -1);
      });
    });
  
    // Remove item
    document.querySelectorAll('.remove-item').forEach(button => {
      button.addEventListener('click', function() {
        const id = parseInt(this.getAttribute('data-id'));
        removeCartItem(id);
      });
    });
  }
  
  function updateCartQuantity(id, change) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const product = cart.find(item => item.id === id);
  
    if (product) {
      product.quantity += change;
  
      if (product.quantity <= 0) {
        removeCartItem(id);
      } else {
        localStorage.setItem("cart", JSON.stringify(cart));
        loadCartItems();
      }
    }
  }
  
  function removeCartItem(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCartItems();
  }
  
  // Load cart items on page load
  document.addEventListener("DOMContentLoaded", loadCartItems);
  