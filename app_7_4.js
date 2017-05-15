function outerFunction(e)
	{
		return function(){
			return e;
		}
	}
var outer_function = outerFunction('Hellow world from Inner Function');
console.log(outer_function());


