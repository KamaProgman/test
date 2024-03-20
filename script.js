let temperature = prompt("температура");

// string => number

if (temperature > 30) {
	alert("жарко");
} else if (temperature > 15 && temperature <= 30) {
	alert("тепло");
} else if (temperature > 0 && temperature <= 15) {
	alert("прохладно");
} else {
	alert("холодно");
}

// && - оператор И
// || - оператор ИЛИ
// != - не строгая отрицательная проверка
// !== - строгая отрицательная проверка

let time = prompt("время года");

if (10 > 5) {
	console.log(true);
} else {
	console.log(false);
}
