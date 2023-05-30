const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

const display = new Display(displayValorAnterior, displayValorActual);

botonesNumeros.forEach(boton => {
	boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});

const botonBorrar = document.getElementById('erase');

botonBorrar.addEventListener('click', () => display.borrar());

const botonLimpiar = document.getElementById('clear');

botonLimpiar.addEventListener('click', () => display.limpiar());

botonesOperadores.forEach(boton => {
	boton.addEventListener('click', () => display.computar(boton.value));
});