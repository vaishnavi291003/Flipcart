document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const card = this.parentElement;
        const controls = card.querySelector('.quantity-controls');
        
        this.style.display = 'none';
        controls.style.display = 'flex';
    });
});

document.querySelectorAll('.increment').forEach(button => {
    button.addEventListener('click', function() {
        const quantityElem = this.parentElement.querySelector('.quantity');
        let quantity = parseInt(quantityElem.textContent);
        
        quantityElem.textContent = quantity + 1; // Fixed: Assign the incremented value
    });
});

document.querySelectorAll('.decrement').forEach(button => {
    button.addEventListener('click', function() {
        const quantityElem = this.parentElement.querySelector('.quantity');
        let quantity = parseInt(quantityElem.textContent);
        
        if (quantity > 1) {
            quantityElem.textContent = quantity - 1;
        } else {
            this.parentElement.style.display = 'none';
            this.parentElement.parentElement.querySelector('.add-to-cart').style.display = 'inline-block';
        }
    });
});
const products = [
    {
        id: 1,
        name: "Bufferfly Pestle 3 Jar 750 Mixer Grinder 1",
        price: 10100,
        category: "Electronics",
        image: "EP1.webp",
        description: "Fast and powerful smartphone with a long-lasting battery.",
        rating: 4.5
      },

      {
        id: 2,
        name: "Kimatsu Jarset 750 W Mixer Grinder ",
        price: 11000,
        category: "Electronics",
        image: "EP2.webp",
        description: "Fast and powerful smartphone with a long-lasting battery.",
        rating: 4.7
      },
   
      
      {
        id: 3,
        name: "Prestige By Stovekraft 1800 W Induction Cooktop Push Button ",

        price: 18000,
        category: "Electronics",
        image: "EP3.webp",
        description: "Fast and powerful smartphone with a long-lasting battery.",
        rating: 3.8
      },
      
      {
        id: 4,
        name: "Orient Profile Crystal 5L 1500W Air Fryer ",
        price: 20000,
        category: "Electronics",
        image: "EP4.webp",
        description: "Fast and powerful smartphone with a long-lasting battery.",
        rating: 5.6
      },

      
      {
        id: 5,
        name: "Activa 4 Jars 500 W Juicer Mixer Grinder ",
        price: 28000,
        category: "Electronics",
        image: "EP5.webp",
        description: "Fast and powerful smartphone with a long-lasting battery.",
        rating: 7.3
      },

      
      {
        id: 6,
        name: "Refurbished Apple iPhone XR (Red)",
        price: 35000,
        category: "Electronics",
        image: "EP6.webp",
        description: "Fast and powerful smartphone with a long-lasting battery.",
        rating: 5.3
      },

  
      {
        id: 7,
        name: "Samsung Galaxy A16 5G  256 GB (Icy Blue) ",
        price: 100000,
        category: "Electronics",
        image: "EP7.webp",
        description: "Fast and powerful smartphone with a long-lasting battery.",
        rating: 4.1
      },

      
      {
        id: 8,
        name: "Boat Airdopes Alpha With 35 hrs Playback, 13mm Drivers, dual  ",
        price: 58200,
        category: "Electronics",
        image: "EP8.webp",
        description: "Fast and powerful smartphone with a long-lasting battery.",
        rating: 4.0
      },

      
      {
        id: 9,
        name: "Mak 33 W Supervooc 6 A Wall Charger For Mobile With fast charging ",
        price: 2500,
        category: "Electronics",
        image: "EP9.webp",
        description: "Fast and powerful smartphone with a long-lasting battery.",
        rating: 4.6
      },

      
      {
        id: 10,
        name: "Boat Sh12 Bluetooth Headset On the Ear Bvc49 Bluetooth & with microphone ",
         price: 3966,
        category: "Electronics",
        image: "EP10.webp",
        description: "Fast and powerful smartphone with a long-lasting battery.",
        rating: 4.0
      },

      
      {
        id: 11,
        name: "Everedy Poxketilte Mini Torch ",
        price: 5200,
        category: "Electronics",
        image: "EP11.webp",
        description: "Fast and powerful smartphone with a long-lasting battery.",
        rating: 4.7
      },


    
      {
        id: 12,
        name: "Boult  Drift! Smartwatch with BT .",
        price: 60000,
        category: "Electronics",
        image: "EP12.webp",
        description: "Fast and powerful smartphone with a long-lasting battery.",
        rating: 4.6
      },



]



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
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
  
      productList.appendChild(productCard);
    });
  }
 
  
  displayProducts();

  

  let banners = document.querySelectorAll('.banner'); 
  let currentIndex = 0;
  
  function showBanner() { 
    banners.forEach((banner, index) => { 
      banner.style.opacity = index === currentIndex ? '1' : '0'; 
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
  