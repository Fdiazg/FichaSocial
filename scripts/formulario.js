

//Calculo de altura

let rangoEstatura = document.getElementById("rangoEstatura");
let valor = document.getElementById("valor");
valor.innerHTML = rangoEstatura.value;

rangoEstatura.oninput = function () {
    // valor.innerHTML = (this.value/100);
    valor.innerHTML = this.value;
};


//Pasar a mayuscula el nombre

let mayus = document.getElementById("nombre");
mayus.addEventListener('keyup', function(mayusOn){
    // preventDefault llama a un evento que puede ser cancelado
    // mayusOn.preventDefault();
    mayus.value = mayus.value.toUpperCase();

});


//Permite habilitar la opcion de años trabajando y renumeración si se marca la casilla de se 
//encuentra trabajando

const trabajoCheck = document.getElementById("trabajoCheck");
const aniosTrabajando = document.getAnimations("aniosTrabajando")
const remuneracion = document.getElementById("remuneracion")

trabajoCheck.addEventListener('change', function(habilitarTrabajo){

    if (trabajoCheck.checked == true) {
        document.getElementById('aniosTrabajando').disabled = false;
        document.getElementById('remuneracion').disabled = false;
    } else {
        document.getElementById('aniosTrabajando').disabled = true;
        document.getElementById('remuneracion').disabled = true;

    }
});


// activar el documento

  let verRegistroTotal = document.getElementById("verRegistroTotal");
 verRegistroTotal.addEventListener("click", function(verR) {
   document.getElementById("formFicha").hidden = true;
   document.getElementById("sumPersonas").hidden = true;
   document.getElementById("tablaDatos").hidden = false;
 });
 let volverListado = document.getElementById("volverListado");
 volverListado.addEventListener("click", function(verR) {
   document.getElementById("formFicha").hidden = false;
   document.getElementById("sumPersonas").hidden = false;
   document.getElementById("tablaDatos").hidden = true;
//    $("#formFicha").show();  // hide
//    $("#sumPersonas").hide();  // hide
//    $("#tablaDatos").hide();
 });



//Llenado de tabla
let lista1 = [];
let lista2 = [];
let lista3 = [];
let lista4 = [];
let lista5 = [];
let lista6 = [];
let lista7 = [];
let lista8 = [];
let lista9 = [];
let lista10 = [];
let lista11 = [];
let lista12 = [];
let lista13 = [];

let n = 1;
let x = 0;
let conteoPersonas = 1;
let sumaMujeres = 0;
let sumaTotalMujeres = 0;
let sumaHombres = 0;
let sumaTotalHombres = 0;

//Evitar que el formulario se envie automaticamente y llenado de celdas

 	const prevenirEnvio = document.getElementById('formFichaSocial')
	 prevenirEnvio.addEventListener('submit', (e) =>{
		 e.preventDefault();


	let addRow = document.getElementById('fichaTabla');
	let newRow = addRow.insertRow(-1);

	//Seleccionar valor de check genero
	let generoValor = document.nombreForm.checkGenero.value;
	
	lista1[x] = document.getElementById("nombre").value;
	lista2[x] = document.getElementById("rut").value;
	lista3[x] = document.getElementById("direccion").value;
	lista4[x] = document.getElementById("comuna").value;
	lista5[x] = document.getElementById("telefono").value;
	lista6[x] = document.getElementById("email").value;
	lista7[x] = parseInt(edad.innerHTML) ;
	lista8[x] = generoValor;
	lista9[x] = document.getElementById("rangoEstatura").value;
	lista10[x] = document.getElementById("nivelEducacional").value;
	lista11[x] = document.getElementById("aniosTrabajando").value;	 
	lista12[x] = parseInt(document.getElementById("remuneracion").value);
	
	let cel1 = newRow.insertCell(0);
	let cel2 = newRow.insertCell(1);
	let cel3 = newRow.insertCell(2);
	let cel4 = newRow.insertCell(3);
	let cel5 = newRow.insertCell(4);
	let cel6 = newRow.insertCell(5);
	let cel7 = newRow.insertCell(6);
	let cel8 = newRow.insertCell(7);
	let cel9 = newRow.insertCell(8);
	let cel10 = newRow.insertCell(9);
	let cel11 = newRow.insertCell(10);
	let cel12 = newRow.insertCell(11);

	cel1.innerHTML = lista1[x]
	cel2.innerHTML = lista2[x]
	cel3.innerHTML = lista3[x]
	cel4.innerHTML = lista4[x]
	cel5.innerHTML = lista5[x]
	cel6.innerHTML = lista6[x]
	cel7.innerHTML = lista7[x]
	cel8.innerHTML = lista8[x]
	cel9.innerHTML = (lista9[x]  + ' metros' )
	cel10.innerHTML = lista10[x]

	 if (trabajoCheck.checked === true) {
			cel11.innerHTML = lista11[x]
			cel12.innerHTML =  `$ ${lista12[x]}`;

		 } 
	
	n++;
	x++;


	//Suma de personas registradas	
	let mensajeTabla = document.getElementById('mensajeTabla');		
		mensajeTabla.innerHTML = conteoPersonas;
		conteoPersonas++;	
	

	if (generoValor === "Mujer") {
	   sumaMujeres = parseInt(edad.innerHTML); 
		sumaTotalMujeres += sumaMujeres; 
	} else if (generoValor === "Hombre") {
		sumaHombres = parseInt(edad.innerHTML); 
		sumaTotalHombres += sumaHombres; 
	}


})


// Limpiar tabla de registros y suma de personas

 function borrarFilas() {
	window.location.reload();
    }


//Calculo de edad
const fechaNacimiento = document.getElementById("fechaNacimiento");
const edad = document.getElementById("edad");

const calcularEdad = (fechaNacimiento) => {
const fechaActual = new Date();
const anoActual = parseInt(fechaActual.getFullYear());
const mesActual = parseInt(fechaActual.getMonth()) + 1;
const diaActual = parseInt(fechaActual.getDate());

// Formato año, primer substring obtiene las posiciones del año, el segundo del mes y el tercero del día
const anoNacimiento = parseInt(String(fechaNacimiento).substring(0, 4));
const mesNacimiento = parseInt(String(fechaNacimiento).substring(5, 7));
const diaNacimiento = parseInt(String(fechaNacimiento).substring(8, 10));

let edad = anoActual - anoNacimiento;
if (mesActual < mesNacimiento) {
	edad--;
} else if (mesActual === mesNacimiento) {
	if (diaActual < diaNacimiento) {
		edad--;
	}
}
return edad;
};

fechaNacimiento.addEventListener('change', function () {
		edad.innerHTML = calcularEdad(this.value) ;
});


// calculo de datos
const mensajeDatos = document.getElementById("mensajeDatos");
calculoDatos.addEventListener("click", function(){


	if (mensajeTabla.innerHTML != '0')   {
	
			let sM = lista8.filter ( i => i === "Mujer");
			let sH = lista8.filter ( i => i === "Hombre");

			let sumM = 0;
			for (let index = 0; index < lista7.length; index++) {
			sumM += lista7[index];
			}
			
			let sumaBasica = lista10.filter (i =>i.length > 8);
			let sumOctavo = lista10.filter (i =>i === '8° Básico');
			let sinBasica = sumaBasica.length - sumOctavo.length;

			let vacio = document.getElementById("nivelEducacional").value.length;

			let sumMedia = lista10.filter (i =>i.length <= 8);
			let sumCuarto = lista10.filter (i =>i === '4° Medio');
			let sinMedia = (sumaBasica.length + sumMedia.length) - sumCuarto.length;


			//REVISAR
			if (vacio === 0 ) {
				sinMedia = ((sumaBasica.length + sumMedia.length) - sumCuarto.length) -1;
			}


			//Promedio sueldo
			let sumPromedio = 0;
			for (let i = 0; i < lista12.length; i++) {
				sumPromedio += lista12[i];
				
			}


			mensajeDatos.innerHTML = 
			`Total de mujeres ingresadas: ${sM.length} 
			<br> Total de hombres ingresado: ${sH.length}
			<br> El promedio de edad de mujeres es: ${(sumaTotalMujeres/sM.length).toFixed(0)} años
			<br> El promedio de edad de hombres es: ${(sumaTotalHombres/sH.length).toFixed(0)} años
			<br> El total de personas que no completaron la enseñanza básica es: ${sinBasica}
			<br> El total de personas que no completaron la enseñanza media es: ${sinMedia}
			<br> Renta más baja ingresada es de: $ ${Math.max(...lista12)}
			<br> Renta más alta ingresada es de: $ ${Math.min(...lista12)}
			<br> El promedio de renta es: $ ${(sumPromedio/lista12.length).toFixed(0)}
			`;

} else {
	mensajeDatos.innerHTML = 'Primero debe ingresar valores en la ficha'
}
})

