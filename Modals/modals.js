let openModal1Btn = document.getElementById("openModal1Btn");
let openModal2Btn = document.getElementById("openModal2Btn");
let openModal3Btn = document.getElementById("openModal3Btn");

let modal1 = document.getElementById("modal1");
let modal2 = document.getElementById("modal2");
let modal3 = document.getElementById("modal3");


let close1 = document.getElementById("close1")
let close2 = document.getElementById("close2")
let close3 = document.getElementById("close3")


openModal1Btn.onclick = function() {
   modal1.style.display = "flex";
}

close1.onclick = function () {
   closeModal1()
}




openModal2Btn.onclick = function() {
   modal2.style.display = "flex";
}


close2.onclick = function () {
   closeModal2()
}




openModal3Btn.onclick = function() {
   modal3.style.display = "flex";
}

close3.onclick = function () {
   closeModal3()
}



window.onclick = function(event) {
  if (event.target == modal1) {
    closeModal1();
     } else if (event.target == modal2) {
    closeModal2();
     } else if (event.target == modal3) {
    closeModal3();
  }
};

document.addEventListener("keydown", function(e){
   if (e.keyCode ===27){
      modal1.style.display = "none";
      modal2.style.display = "none";
      modal3.style.display = "none";
   }
});

function closeModal1() {
   modal1.style.display = "none";
}

function closeModal2() {
   modal2.style.display = "none";
}

function closeModal3() {
   modal3.style.display = "none";
}