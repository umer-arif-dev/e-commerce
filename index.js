let cartArray = JSON.parse(localStorage.getItem("cart")) || [];
let wishArray = JSON.parse(localStorage.getItem("wishlist")) || [];
let allProducts = [];

function fetchdata() {
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((products) => {
      allProducts = products; // data ko global variable me save kar liya
      renderProducts(allProducts);
      console.log("Products", products);
    })
    .catch((error) => {
      console.error("Error fetching products", error);
    });
}

function renderProducts(products) {
  let container = document.getElementById("container");
  container.innerHTML = "";

  if (products.length === 0) {
    container.innerHTML =
      "<p class='text-center text-red-500 mt-4'>No products found!</p>";
    return;
  }

  products.forEach((product) => {
    let script = document.createElement("div");
    script.className =
      "w-[30rem] sm:w-[20rem] rounded-xl shadow-lg p-[2rem] mb-[1rem] bg-white border-gray-600";
    script.innerHTML = `
       <img src="${
         product.image
       }" alt="img" class="w-full h-60 object-contain"  >

     <h1 class="text-center font-bold text-lg">${product.title.slice(
       0,
       20
     )}</h1>

      <p class="text-center text-[blue] mt-2">$${product.price}</p>
 <p class="text-center text-gray-600 mt-2">${product.description.slice(
   0,
   60
 )}</p>

   <div class="flex flex-col gap-[0.8rem] mt-3">
         <button class="bg-[#00c950] p-[0.5rem] hover:scale-105 transition-all duration-300 hover:bg-green-700  pl-[2rem] pr-[2rem] text-white rounded-[0.4rem] addToCart">
           Add TO Cart
        </button>
         <button class="bg-[#e7000b] hover:bg-red-700 hover:scale-105 transition-all duration-300 p-[0.5rem] pl-[2rem] pr-[2rem] text-white rounded-[0.4rem] addToWishlist">
          Add TO Wishlist
       </button>
      </div>
    `;
    container.append(script);

    script.querySelector(".addToCart").addEventListener("click", () => {
      const exists = cartArray.find((item) => item.id === product.id);
      if (!exists) {
        cartArray.push({
          id: product.id,
          name: product.title,
          price: product.price,
          image: product.image,
        });

        localStorage.setItem("cart", JSON.stringify(cartArray));
        updateCartCount();

        Toastify({
          text: " Item added to cart!",
          duration: 3000,
          gravity: "top",
          position: "center",
          stopOnFocus: true,

          backgroundColor: "green",
        }).showToast();
      } else {
        Toastify({
          text: "Item already exists in cart!",
          duration: 3000,
          gravity: "top",
          position: "center",
          backgroundColor: "red",
        }).showToast();
      }
    });

    script.querySelector(".addToWishlist").addEventListener("click", () => {
      const exists = wishArray.find((item) => item.id === product.id);
      if (!exists) {
        wishArray.push({
          id: product.id,
          name: product.title,
          price: product.price,
          image: product.image,
        });
        localStorage.setItem("wishlist", JSON.stringify(wishArray));
        updateCartWish();

        Toastify({
          text: " Item added to wishlist!",
          duration: 3000,
          gravity: "top",
          position: "center",
          stopOnFocus: true,

          backgroundColor: "green",
        }).showToast();
      } else {
        Toastify({
          text: "Item already exists in wishlist!",
          duration: 3000,
          gravity: "top",
          position: "center",
          backgroundColor: "red",
        }).showToast();
      }
    });
  });
}

document.getElementById("searchInput").addEventListener("input", (e) => {
  const searchValue = e.target.value.toLowerCase();
  const filteredProducts = allProducts.filter((product) =>
    product.title.toLowerCase().includes(searchValue)
  );
  renderProducts(filteredProducts);
});

function updateCartCount() {
  const cartCount = document.getElementById("cartCount");
  cartCount.textContent = cartArray.length;
}

function updateCartWish() {
  const cartCount = document.getElementById("cartWish");
  cartCount.textContent = wishArray.length;
}



let sideBar=document.getElementById("side-bar")
sideBar.addEventListener("click",(e)=>{
e.preventDefault()
window.location.href="login.html"


})
fetchdata();
updateCartCount();
updateCartWish();
