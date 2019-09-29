let equation = "";
const answerBox = document.getElementById("answer");
const equal = document.getElementById("equal");
const clear = document.getElementById("clear");
const startingText = "Calculate Me, Daddy";

window.onload = function() {
	answerBox.innerText = startingText;
}

const calc = {
	zero: "0",
	one: "1",
	two: "2",
	three: "3",
	four: "4",
	five: "5",
	six: "6",
	seven: "7",
	eight: "8",
	nine: "9",
	plus: "+",
	minus: "-",
	times: "*",
	divide: "/",
	decimal: "."
};

function printAnswer() {
	let answer = eval(equation);
	answerBox.innerText = `${equation} = ${answer}`;
}

function valueChecker(number) {
	equation = equation.concat(number); 
	answerBox.innerText = equation;
}

function clearAnswerBox() {
	equation = "";
	answerBox.innerText = startingText;
}

equal.addEventListener("click", printAnswer);
clear.addEventListener("click", clearAnswerBox);