

let demoUsers = [
  { email: "omer@gmail.com", password: "123456" },
  { email: "ali@gmail.com", password: "678901" },
];

localStorage.setItem("users", JSON.stringify(demoUsers));

let form = document.getElementById("loginForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let users = JSON.parse(localStorage.getItem("users")) || []; 

  if (email === "" || password === "") {
    alert("Fill all the fields");
    return;
  }

  if (!email.includes("@") || !email.includes(".com")) {
    alert("Invalid email address");
    return;
  }
  if (password.length < 5) {
    alert("Password should be minimum 5 characters");
    return;
  }

  console.log("Users in storage:", users);
  console.log("Entered email:", email);
  console.log("Entered password:", password);

  let found = users.find((u) => u.email === email && u.password === password);

  if (found) {
    localStorage.setItem("loggedInUser", JSON.stringify(found));
    alert("Login success!");
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid credentials");
  }
});
