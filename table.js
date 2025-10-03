
let cartArray = JSON.parse(localStorage.getItem("cart")) || [];
let wishArray = JSON.parse(localStorage.getItem("wishlist")) || [];

function updateCartCount() {
  const cartCount = document.getElementById("cartCount");
  if (cartCount) {
    cartCount.textContent = cartArray.length;
  }
}

function updateWishCount() {
  const wishCount = document.getElementById("wishCount");
  if (wishCount) {
    wishCount.textContent = wishArray.length;
  }
}

function renderCart() {
  let tbody = document.querySelector("tbody");
  let totalElement = document.querySelector("#totalAmount");
  tbody.innerHTML = "";

  if (cartArray.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" class="text-center py-4 text-red-500">Your cart is empty
           </td></tr>`;
    totalElement.textContent = "Total: $0";
    updateCartCount();
    return;
  }

  let grandTotal = 0;

  cartArray.forEach((item, index) => {
    let quantity = item.quantity || 1;
    let subTotal = item.price * quantity;
    grandTotal += subTotal;

    let tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="flex justify-center items-center px-4 py-3 border border-gray-200">
        <img src="${item.image}" alt="product" class="w-16 h-16">
      </td>
      <td class="px-4 py-2 text-center border border-gray-200">${item.name.slice(
        0,
        25
      )}</td>
      <td class="px-4 py-2 text-center border border-gray-200">$${item.price.toFixed(
        2
      )}</td>

      
      <td class="px-4 py-2 text-center border border-gray-200">
        <button class="decrementBtn bg-gray-300 px-2 rounded" data-index="${index}">-</button>
        <span class="mx-2">${quantity}</span>
        <button class="incrementBtn bg-gray-300 px-2 rounded" data-index="${index}">+</button>
      </td>

      <td class="px-4 py-2 text-center border border-gray-200">$${subTotal.toFixed(
        2
      )}</td>
      <td class="px-4 py-2 text-center border border-gray-200">
        <button class="hover:scale-105 transition-all duration-300 bg-[#fb2c36] text-white text-center py-1 px-3 rounded removeBtn " data-index="${index}">
          Remove
        </button>
      </td>
    `;
    tbody.append(tr);
  });

  totalElement.textContent = `Total: $${grandTotal.toFixed(2)}`;

  
  document.querySelectorAll(".removeBtn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let index = e.target.getAttribute("data-index");
      cartArray.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cartArray));
      renderCart();

      Toastify({
        text: "Item removed from cart ",
        duration: 3000,
        gravity: "top",
        position: "center",
        backgroundColor: "red",
      }).showToast();
    });
  });

  
  document.querySelectorAll(".incrementBtn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let index = e.target.getAttribute("data-index");
      cartArray[index].quantity = (cartArray[index].quantity || 1) + 1;
      localStorage.setItem("cart", JSON.stringify(cartArray));
      renderCart();
    });
  });

  
  document.querySelectorAll(".decrementBtn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let index = e.target.getAttribute("data-index");
      if (cartArray[index].quantity > 1) {
        cartArray[index].quantity -= 1;
      }
      localStorage.setItem("cart", JSON.stringify(cartArray));
      renderCart();
    });
  });

  updateCartCount();
  updateWishCount();
}

renderCart();
updateCartCount();
updateWishCount();

