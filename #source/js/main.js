let name = document.querySelector(".main__name");
let year = document.querySelector(".main__year");
let price = document.querySelector(".main__price");
let descp = document.querySelector(".main__descp");
let color = document.querySelector(".color");
let stat = document.querySelector(".status");

function clr1() {color.setAttribute("value", "white");}
function clr2() {color.setAttribute("value", "black");}
function clr3() {color.setAttribute("value", "#C4C4C4");}
function clr4() {color.setAttribute("value", "#DD1C10");}
function clr5() {color.setAttribute("value", "#77CF61");}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
console.log(getRandomInt(999));

function add() {
	if (name.value != "", year.value != "", price.value != "", color.value != "", stat.value != "") {
		table.innerHTML += 
		"<tr id=" + getRandomInt(999) + "><td style='width:454px'>" + name.value + 
		"<br><span>" + descp.value + "</span></td><td style='padding-left:15px'>" 
		+ year.value +
		"</td><td><div style='background:" + color.value + "'></div>" +
		"</td><td>" + stat.value +
		"</td><td>" + price.value + " руб." +
		"</td><td><button class='remove' type='button' onclick='this.parentNode.parentNode.remove()'>Удалить</button></td></tr>";
	}
}