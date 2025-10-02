// form = document.getElementById("form");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   let email = document.getElementById("email").value.trim();
//   let name = document.getElementById("name").value.trim();
//   let adress = document.getElementById("adress").value.trim();

//   if (email === "" || name === "" || adress === "") {
//     Toastify({
//       text: "Fill all the fields",
//       duration: 3000,
//       gravity: "top",
//       position: "center",
//       backgroundColor: "red",
//     }).showToast();

//     return;
//   }
//   if (!email.includes("@") || !email.includes(".com")) {

//     Toastify({
//       text: "Invalid email format",
//       duration: 3000,
//       gravity: "top",
//       position: "center",
//       backgroundColor: "red",
//     }).showToast();
//     return;
//   }

//   if (adress.length < 5) {
//     Toastify({
//       text: "adress should be complete",
//       duration: 3000,
//       gravity: "top",
//       position: "center",
//       backgroundColor: "red",
//     }).showToast();
//     return;
//   }

//   Toastify({
//     text: " Your order is placed ",
//     duration: 3000,
//     gravity: "top",
//     position: "center",
//     stopOnFocus: true,
//     backgroundColor: "green",
//   }).showToast();

//   form.reset();
// });

const form = document.getElementById("form");
const outputBox = document.getElementById("outputBox");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let email = document.getElementById("email").value.trim();
  let name = document.getElementById("name").value.trim();
  let adress = document.getElementById("adress").value.trim();

  if (email === "" || name === "" || adress === "") {
    Toastify({
      text: "Fill all the fields",
      duration: 3000,
      gravity: "top",
      position: "center",
      backgroundColor: "red",
    }).showToast();
    return;
  }

  if (!email.includes("@") || !email.includes(".com")) {
    Toastify({
      text: "Invalid email format",
      duration: 3000,
      gravity: "top",
      position: "center",
      backgroundColor: "red",
    }).showToast();
    return;
  }

  if (adress.length < 5) {
    Toastify({
      text: "Address should be complete",
      duration: 3000,
      gravity: "top",
      position: "center",
      backgroundColor: "red",
    }).showToast();
    return;
  }

  outputBox.style.display = "block";
    outputBox.innerHTML = `
    <h3> Order Details</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Address:</strong> ${adress}</p>
  `;

  Toastify({
    text: "Your order is placed ",
    duration: 3000,
    gravity: "top",
    position: "center",
    stopOnFocus: true,
    backgroundColor: "green",
  }).showToast();

  form.reset();
  
});
