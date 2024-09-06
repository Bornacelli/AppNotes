const textarea = document.getElementById("text-field");
const input = document.getElementById("title");
const input2 = document.getElementById("input2");
const save_btn = document.getElementById("submit");
const color_red = document.getElementById("red");
const color_blue = document.getElementById("blue");
const color_green = document.getElementById("green");
const color_purple = document.getElementById("purple");
const category1 = document.getElementById("s1");
const category2 = document.getElementById("s2");
const category3 = document.getElementById("s3");
const notepad = document.querySelector(".notepad");
const add_btn = document.getElementById("add_note");

let message_text = "Note Saved Successfully";
let appendNote = document.createElement("div");
notepad.appendChild(appendNote);

let cat1 = "Diseño";
let cat2 = "Networking";
let cat3 = "Student";

const date = new Date();

const day = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();
console.log(day);

const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
let fullMonth = monthNames[date.getMonth()];
console.log(fullMonth + ' ' + year);

var days = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"];
var day2 = days[date.getDay()];
console.log(day2);

// window.onbeforeunload = function() {
//     return true;
// };

let tdoo = {"header" : textarea.value, "body" : input.value , "category": input2.value, "Dates": day2+ '' + fullMonth + '' + year}

save_btn.addEventListener("click", () =>{
    let tdoo = {"header" : textarea.value, "body" : input.value , "category": input2.value, "Dates": day2+ '' + fullMonth + '' + year}
    let appendNote = document.createElement("div");
    notepad.appendChild(appendNote);
    console.log(message_text);
    setTimeout (() =>{
        console.clear();
    },1000)
    setTimeout (()=> {
        localStorage.setTimeout("storage", JSON.stringify(tdoo))
        var retrieveData= JSON.parse(localStorage.getItem("storage"));
        console.log(retrieveData);
        appendNote.innerHTML =  <div class="note-content">
        <div class="notes">
            <div class="note-title" id="ntx">${tdoo.body}</div>
            <div class="note-pfx">
                <p class="note-sub">${tdoo.header}</p>
            </div>
            <div class="c5">
                <div class="category">
                    <div class="cat" id="category">${tdoo.category}</div>
                </div>
                <div class="date-created">
                    <div class="date" id="date">{tdoo.Dates}</div>
                </div>
            </div>
            
        </div>
    </div>
    },2000)
    
})
paula 
