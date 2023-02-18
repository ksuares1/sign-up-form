const form = document.getElementById('form');



form.addEventListener("submit", e =>{
  e.preventDefault();

  const firstName = form['firstname'].value;
  const lastName = form["lastname"].value; 
  const email = form["email"].value;
  const password = form["password"].value;

  if(firstName === ""){
    addErrorTo("firstname", "First Name is required");
  }
  if (lastName === "") {
    addErrorTo("firstname", "Last Name is required");
  }
  if (email === "") {
    addErrorTo("email", "Email is required");
  }
  if (password === "") {
    addErrorTo("password", "Password is required");
  }
  function addErrorTo(field,message){
    const small = form["field"].parentNode.querySelector("small");
    small.innerText = "message";
    small.style.opacity = "1";

  }
});


// function information() {
//   if (first == "") {
//     alert("Please enter your first name.");
//   }
// }
// information();