//var num1=prompt("Number 1"); // Toma datos;
//var Celcius= parseInt(prompt("Digite los grados Celcius"));
//var dolares= parseInt(prompt("Digite los dolares"));

var bubbles = [];
var direccion= false;

function setup() {



	createCanvas(windowWidth,window.innerHeight);
	for (var i = 0; i < 10; i++) {
		bubbles[i]= new Bubble();
	}

}

function draw() {

	//console.log(grados(Pesos));
	//console.log(conversor(dolares));
	// var resultado= conversor(dolares);
	background(255);

	for (var i = 0; i < 10; i++) {
			bubbles[i].move();
			bubbles[i].display();


	}


}

/*
function calcular(num1){

	var cubo = (num1*num1*num1);
	return cubo;


}

function grados(Celcius){

		var Fahrenheit= (((Celcius*9)/5)+32).toFixed(0);
		return Fahrenheit;
}

function conversor(dolares){

	var pesos= (dolares*2948);
	return pesos;

}*/

function Bubble(){
	this.x= random(0,width);
	this.y= random(0,height);
	this.r= random(10,20);
	this.speedX= random(-2,2);
	this.speedY= random(-2,2);


	this.display = function(){
		fill(100);
		ellipse(this.x,this.y,this.size,this.size*2);


		if (this.x>width && this.y>height) {

			this.x= -random(0,width);
			this.y= -random(0,height);



		}
	}

	this.move= function(){

		//cambio de direccion multiplicar la velocidad por -1 para que no se salga de la pantalla
		this.x= this.x+this.speedX;
		this.y= this.y+this.speedY;

		if (this.x >width || this.x<0) {
			this.speedX= this.speedX*-1;


		}if (this.y>height || this.y<0) {
			this.speedY= this.speedY*-1;


		}/*
		for (var i = 0; i < bubbles.length; i++) {

			for (var j = 0; j < bubbles.length; j++) {
				if (i != j && bubbles[i].col(bubbles[j])) {
					bubbles[i].speedX= bubbles[i].speedX*-1;
					bubbles[i].speedY= bubbles[i].speedY*-1;



				}
			}
		}*/

	}
/*
	this.col= function(other){

		var d= dist(this.x, this.y, other.x, other.y);
		if (d< this.r + other.r) {
			return true;


		}else {
			return false;
		}

	}*/


}
