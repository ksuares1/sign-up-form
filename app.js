let first = document.querySelector(".firstName");
let last = document.querySelector(".lasttName");
let mail = document.querySelector(".email");
let pass = document.querySelector(".password");

function information(){
if (first !== "") {
  console.log("Please enter your" + first);
}
  else if(first === ""){
    console.log("Welcome," +first);
  }
}
information();
// let contactInfo=document.querySelector(".claim");
// claim.addEventlistener("click", information);
