// addition 
{
let a =10;
let b =20;
console.log(a+b)
}


// subtraction
{
let a = 30;
let b = 20;
console.log(a-b)
}

// multiplication
{
	let a = 2;
	let b = 5;
	console.log(a*b)
}

//division
{
	let a = 50;
	let b = 10;
	console.log(a/b)
}

// square a of number
{
	let a = Math.pow(2,2)
	console.log(a)
}

// cube of a number
{
	let a= Math.pow(3,3);
	console.log(a)
}

// even or odd
{
	let num=7;
	if(num%2 ==0){
		console.log("given number is even");
	}else{
		console.log("given num is odd");
	}
}

// num is gereater than 10
{
	let num=77;
	if(num>10){
		console.log("num is greater than 10");
	}else{
		console.log("num is lesser than 10")
	}
}

//num is divisible by 5
{
	let num=10;
	if(num/5){
		console.log("num is divisible by 5")
	}else{
		console.log("num is not divisible by 5")
	}
}

//assendind and desending order of 3
{
	let a=1;
	while(a<=3){
		console.log(a);
		a++;
	}
}
{
	let a=3;
	while(a>=1){
		console.log(a);
		a--;
	}
}

// marriage eligibility
let age=25;
if(age>=21){
	console.log("eligible");
}else{
	console.log("not eligible");
}

// print grade based on mark
{
	let mark=300;
	if(mark>=150 && mark<=250){
		console.log("poor");
	}else if(mark>=250 && mark<=400){
		console.log("good");
	}else{
		console.log("excelent")
	}
}

// task-1
{
	var a=5;
	var b=1;
	while(b<=10){
		console.log(a*b);
		b++;
	}
}

// cube of the num
{
	let a=2;
	do{
		if(a<=10){
			console.log(a*a*a)
		}
	}while(a++)
}

// function
{
	function add(no1,no2){
		let x =no1+no2;
			}
	add(50,50)
}

let no1=50;
let no2=50;
const add=function add(){
	let x = no1+no2;
}add()
