form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let email = document.getElementById("email").value.trim();
  let subject = document.getElementById("subject").value.trim();
  let textarea = document.getElementById("textarea").value.trim();


  if (email === "" || subject === "" || textarea === "") {
    // alert("Fill all the fields");
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
    alert("Invalid email address");
    return;
  }




  if (textarea.length < 5) {
    alert("textarea should be minimum 5 characters");
    return;
  }

  Toastify({
    text: " Thanks for contacting us We will get back to you soon",
    duration: 3000,
    gravity: "top",
    position: "center",
    stopOnFocus: true,

    backgroundColor: "green",
  }).showToast();

  form.reset();

});




