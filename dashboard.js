let loggedInUser = localStorage.getItem("loggedInUser");
if (!loggedInUser) {
  window.location.href = "login.html";
}

document.addEventListener("DOMContentLoaded", () => {
  let logout = document.getElementById("logout");
  logout.addEventListener("click", () => {
    localStorage.removeItem("loggedInUser");
    alert("logout");
    window.location.href = "login.html";
  });
});

let sideBar = document.getElementById("side-bar");
document.addEventListener("DOMContentLoaded", () => {
  let sideBar = document.getElementById("side-bar");
  sideBar.addEventListener("click", () => {
    window.location.href = "index.html";
  });
});
