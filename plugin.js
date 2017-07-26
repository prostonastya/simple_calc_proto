
// // Процедурный подход

// function calc(){
// 	this.firstVal = +prompt('введите первое число', 0);
// 	this.secondVal = +prompt('введите второе число', 0);
// 	this.op = prompt('введите оператор', '+');
// 	switch (this.op){
// 		case '+': return (this.firstVal + this.secondVal); break;
// 		case '-': return(this.firstVal - this.secondVal); break;		
// 	}
// }

// function calcMore(){
// 	calc.call(this)
// 	switch (this.op){
// 		case '*': return(this.firstVal * this.secondVal); break;
// 		case '/': return(this.firstVal / this.secondVal); break;
// 	}
// }
// // -------------------------------------------------------------


// // ООП простое,неправильное, расширить имеющийся класс

// function Calculator(){
	
// }

// Calculator.prototype.read = function(){
// 	this.a = +prompt('введите число а', 0);
// 	this.b = +prompt('введите число b', 0);
// 	this.op = prompt('введите оператор', '+');
// 	this.result = 0;
// }
	
// Calculator.prototype.methods = {
// 	'-': function(arg1,arg2){return arg1 - arg2},
// 	'+': function(arg1,arg2){return arg1 + arg2},
// };

// Calculator.prototype.calculate = function(){
// 	if (this.methods[this.op]){

// 		this.result = this.methods[this.op](this.a, this.b);
// 		alert(`Your result is: ${this.result}`);
// 	} else {
// 		alert('You chose undefined operator!!!')
// 	}
// 	return this.result
// };

// var calc = new Calculator();


// Calculator.prototype.addNewMethods = function(name, func){
	
// 	this.methods[name] = func;
	
// };

// function mul(arg1,arg2){
// 	return arg1 * arg2
// };

// function div(arg1,arg2){
// 	return arg1 / arg2
// };

// calc.addNewMethods('*',mul);
// calc.addNewMethods('/',div);

// // ----------------------------------------------------------------

// // Попытка-2, ООП , создание наследуемого класса 

function Calculator(){

}

Calculator.prototype.setValue1 = function(value){
	this._value1 = value;
}
Calculator.prototype.setValue2 = function(value){
	this._value2 = value;
}

Calculator.prototype.setOp = function(op){
	this.op = op;
}
Calculator.prototype.getValue = function(){
	this._result = this.methods[this.op](this._value1, this._value2);
	return this._result;
}

Calculator.prototype.methods = {
	'-': function(arg1,arg2){return arg1 - arg2},
	'+': function(arg1,arg2){return arg1 + arg2},
};

var calc1 = new Calculator();


function CalcMore(){
	
}

CalcMore.prototype = Object.create(Calculator.prototype);
CalcMore.prototype.constructor = CalcMore;


CalcMore.prototype.methods = {
	'-': function(arg1,arg2){return arg1 - arg2},
	'+': function(arg1,arg2){return arg1 + arg2},	
	'*': function(arg1,arg2){return arg1 * arg2},
	'/': function(arg1,arg2){return arg1 / arg2},
};

var calc2 = new CalcMore();

// -------------------------------------------------------------------

