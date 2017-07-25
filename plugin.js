function Calculator(){
	
}

Calculator.prototype.read = function(){
	this.a = +prompt('введите число а', 0);
	this.b = +prompt('введите число b', 0);
	this.op = prompt('введите оператор', '+');
	this.result = 0;
}
	
Calculator.prototype.methods = {
	'-': function(arg1,arg2){return arg1 - arg2},
	'+': function(arg1,arg2){return arg1 + arg2},
};

Calculator.prototype.calculate = function(){
	if (this.methods[this.op]){

		this.result = this.methods[this.op](this.a, this.b);
		alert(`Your result is: ${this.result}`);
	} else {
		alert('You chose undefined operator!!!')
	}
	return this.result
};

var calc1 = new Calculator();


function CalcMore(){
	
}

CalcMore.prototype = Object.create(Calculator.prototype);
CalcMore.prototype.constructor = CalcMore;

CalcMore.prototype.addNewMethods = function(name, func){
	
	this.methods[name] = func;
	
};

var calc2 = new CalcMore();

function mul(arg1,arg2){
	return arg1 * arg2
};

function div(arg1,arg2){
	return arg1 / arg2
};


calc2.addNewMethods('*',mul);
calc2.addNewMethods('/',div);