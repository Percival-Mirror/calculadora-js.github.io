class Display{
	constructor(displayValorAnterior, displayValorActual){
		this.displayValorAnterior = displayValorAnterior;
		this.displayValorActual = displayValorActual;
		this.calculador = new Calculadora();
		this.tipoOperacion = undefined;
		this.valorAnterior = '';
		this.valorActual = '';
		this.signos = {
			sumar: '+' ,
			restar: '-' ,
			dividir: '/' ,
			multiplicar: 'x' ,
		}
	}

	agregarNumero(numero){
		if (numero === '.' && this.valorActual.includes('.')) {return}
		this.valorActual = this.valorActual.toString() + numero.toString();
		this.printValores();
	}

	borrar(){
		this.valorActual = this.valorActual.toString().slice(0,-1);
		this.printValores();
	}

	limpiar(){
		this.valorActual = '';
		this.valorAnterior = '';
		this.tipoOperacion = undefined;
		this.printValores();
	}

	computar(tipo){
		this.tipoOperacion !== 'igual' && this.calcular();
		this.tipoOperacion = tipo;
		this.valorAnterior = this.valorActual || this.valorAnterior;
		this.valorActual = '';
		this.printValores();
	}

	printValores(){
		this.displayValorActual.textContent = this.valorActual;
		this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`; 
	}

	calcular(){
		const valorAnterior = parseFloat(this.valorAnterior);
		const valorActual = parseFloat(this.valorActual);

		if(isNaN(valorActual) || isNaN(valorAnterior)){return};
		this.valorActual = this.calculador[this.tipoOperacion](valorAnterior, valorActual);
	}
}