function myFirstApp(name , age) {

	alert("Привет, меня зовут"  + name +"Это моя первая программа!");

	function showSkills() {

	let skils = [],
			questions = [
				"html", 
				"css", 
				"avacode"
			],
			discr = "Я владею "

	for (let i = 0; i < questions.length; i++) {
		skils[i] =(discr + questions[i] + "</br>");
}
 

document.write(skils)

}
showSkills();

function checkAge() {

let age = prompt("Сколько вам лет?");

	if (age >= 18) {
		alert("Вы можете войти!")
	} else{
			alert("Доступ запрещен!")
		}
}

checkAge();

function calcPow(){

		let num = prompt("Введите число!");
		console.log(num * num)
	}
calcPow();

}

myFirstApp(" dima , мне 32 года ")