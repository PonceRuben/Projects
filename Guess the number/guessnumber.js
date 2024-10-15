let numeroDelUsuario = document.querySelector(".numero-del-usuario")
let botonSubmit = document.querySelector(".submit")
let botonReset = document.querySelector(".reset")
let mensaje = document.querySelector(".mensaje")
let puntaje = document.querySelector(".score")
let puntajeAlto = document.querySelector(".highscore")
let caja = document.querySelector(".caja")
let score = 20
let highscore = 0
let numero;
let numeroParaAdivinar;

function setNumber() {
   numero = Math.random() * 20
   numeroParaAdivinar = Math.floor(numero+1)
}

window.onload = function(){
   setNumber();
}

botonSubmit.addEventListener("click", function(e){
   e.preventDefault();
   let valorUsuario = parseInt(numeroDelUsuario.value);
   let noNumber = numeroDelUsuario.value

   if (noNumber === "") { 
      mensaje.textContent = "⛔ No number!"
   }

   else if (numeroParaAdivinar == valorUsuario) {
      const color = "#7DC64B";
      mensaje.textContent = "🎉 Correct Number!"
      caja.textContent = numeroParaAdivinar
      document.body.style.backgroundColor = color;
      numeroDelUsuario.style.backgroundColor = color;
      if (score > highscore) {
         puntajeAlto.textContent = score;
      }


   } else if (numeroParaAdivinar > valorUsuario) {
      const color = "#FE361A ";
      mensaje.textContent = "📉 Too low!"
      score--;
      puntaje.textContent = score;
      if (score < 1) {
        document.body.style.backgroundColor = color;
        numeroDelUsuario.style.backgroundColor = color;
        mensaje.textContent = "You lost the game!"
        botonSubmit.disabled = true
        numeroDelUsuario.disabled = true
      }
   

   } else if (numeroParaAdivinar < valorUsuario) {
      const color = "#FE361A ";
      mensaje.textContent = "📈 Too high!"
      score--;
      puntaje.textContent = score;
      if (score < 1) {
        document.body.style.backgroundColor = color;
        numeroDelUsuario.style.backgroundColor = color;
        mensaje.textContent = "💥 You lost the game!"
        botonSubmit.disabled = true
        numeroDelUsuario.disabled = true
      }
   } 
})



botonReset.addEventListener("click", function(){
   score = 20;
   puntaje.textContent = score;
   mensaje.textContent = "Start guessing...";
   caja.textContent = "??"
   document.body.style.backgroundColor = "#1C1C1B";
   numeroDelUsuario.style.backgroundColor = "#1C1C1B";
   setNumber();
   numeroDelUsuario.value = "";
   numeroDelUsuario.disabled = false;
   botonSubmit.disabled = false;
})