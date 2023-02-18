let form= document.getElementById('form');
let first = document.getElementById("firstName");
let last = document.getElementById("lasttName");
let mail = document.getElementById("email");
let pass = document.getElementById("password");


form.addEventListener("click", e =>{
  e.preventDefault();

  const first = form['firstname'].value;
  alert(firstValue);
});


// function information() {
//   if (first == "") {
//     alert("Please enter your first name.");
//   }
// }
// information();