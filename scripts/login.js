// Primero obtenemos los id del documento
const user = document.getElementById("user");
const password = document.getElementById("password");
const mensaje = document.getElementById("mensaje");
mensaje.style.color = 'red';

// Luego creamos la función que valida 
let form = document.getElementById('formLogin');
    form.addEventListener('submit',function(evnt){
	evnt.preventDefault();
	if ((user.value === 'ADMIN' && password.value === '000111') ||
		(user.value === 'ASISTENTE' && password.value === 'ADMIN2')
		)
	{
	  location.href="./principal.html";
	  
     } else {
		mensaje.innerHTML = "Usuario o contraseña incorrecta"
	 }
 
	});

