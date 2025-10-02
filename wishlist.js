let wishArray = JSON.parse(localStorage.getItem("wishlist")) || [];
let cartArray = JSON.parse(localStorage.getItem("cart")) || [];


function updateCartCount() {
  const cartCount = document.getElementById("cartCount");
  if (cartCount) {
    cartCount.textContent = cartArray.length;
  }
}




function renderWishlist() {
  let container = document.getElementById("wishlistContainer");
  container.innerHTML = "";

  if (wishArray.length === 0) {
    container.innerHTML = `
      <div class="text-center mt-10">
        <h2 class="text-2xl font-bold text-gray-600 mb-4">No items in Wishlist</h2>
        <a href="index.html"
          class="bg-[#155dfc] text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-700 transition">
          ⬅ Back to Home
        </a>
      </div>
    `;
    updateCartWish();
    return;
  }

  wishArray.forEach((item, index) => {
    let div = document.createElement("div");
    div.className =
      "w-[20rem] rounded-xl shadow-lg p-[1.5rem] mb-[1rem] bg-white border-gray-600";

    div.innerHTML = `
      <img src="${
        item.image
      }" alt="wishlist-item" class="w-full h-40 object-contain">
      <h1 class="text-center text-xl font-bold mt-2">${item.name.slice(
        0,
        25
      )}</h1>
      <p class="text-center text-[blue] mt-1">$${item.price}</p>

      <div class="flex flex-col gap-[0.8rem] mt-3">
        <button class="bg-[#e7000b] hover:bg-green-700  hover:scale-105 transition-all duration-300 p-[0.5rem] text-white rounded-[0.4rem] removeFromWishlist">Remove</button>

      </div>
    `;

    container.append(div);

    div.querySelector(".removeFromWishlist").addEventListener("click", () => {
      wishArray.splice(index, 1);
      localStorage.setItem("wishlist", JSON.stringify(wishArray));
      renderWishlist();

      Toastify({
        text: "Item removed from cart ",
        duration: 3000,
        gravity: "top",
        position: "center",
        backgroundColor: "red",
      }).showToast();
    });
  });

  updateCartWish();
  updateCartCount();
}

function updateCartWish() {
  const cartCount = document.getElementById("cartWish");
  if (cartCount) {
    cartCount.textContent = wishArray.length;
  }
}

renderWishlist();
