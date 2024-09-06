const textarea = document.getElementById("text-field");
const input = document.getElementById("title");
const input2= document.getElementById("input2");
const save_btn= document.getElementById("submit");
const color_red=document.getElementById("red");
const color_blue=document.getElementById("blue");
const color_green=document.getElementById("green");
const color_purple=document.getElementById("purple");
const category1=document.getElementById("s1");
const category2=document.getElementById("s2");
const category3=document.getElementById("s3");
const notepad=document.querySelector("notepad");
const add_btn=document.getElementById("add_note");

let message_text= "Noted Saved Sucessfully";
let appendNote= document.createElement("div");
notepad.appendChild(appendNote);

let cat1= "Diseño";
let cat2= "Networking";
let cat3="Student";

const date= new Date();

const day= date.getDate();
const month= date.getMonth();
const year= date.getFullYear();
console.log(day);

const montNames= ["Enero", "Febrero", "Marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
const d = new Date();
let fullmonth = montNamesd[d.getMonth()]
console.log(fullmonth + '' + year);

var days=["lunes", "martes", "mmiercoles", "jueves", "viernes", "sabado", "domingo"];
var day2= days[date.getDay()];
console.log(day2);

window.onbeforeunload = function() {
    return true;
}