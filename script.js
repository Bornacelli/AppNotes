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
let cat2 = "Trabajo";
let cat3 = "Estudios";

const date = new Date();

const day = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();
console.log(day);

const monthNames = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ag", "Sept", "Oct", "Nov", "Dic"]
const d = new Date();
let fullMonth = monthNames[d.getMonth()];
console.log(fullMonth + ' ' + year)

var days = ["lun", "mar", "mie", "jue", "vie", "sab", "dom"];
var day2 = days[date.getDay()];
console.log(day2);

// window.onbeforeunload = function() {
//     return true;
// };

let tdoo = {
    "Header" : textarea.value, 
    "Body" : input.value , 
    "category": input2.value, 
    "Dates": day2+ ' ' + fullMonth + ' ' + year,
}
// obtiene toda la informacion 

save_btn.addEventListener("click", () => {
    let tdoo = {
        "Header" : textarea.value, 
        "Body" : input.value , 
        "category": input2.value, 
        "Dates": day2+ ' ' + fullMonth + ' ' + year,
    }
    // obtiene toda la informacion 
    let appendNote = document.createElement("div");
    notepad.appendChild(appendNote);
    console.log(message_text);
    setTimeout (() =>{
        console.clear();
    },1000);
    setTimeout (()=> {
        localStorage.setItem("storage", JSON.stringify(tdoo));
        var retrieveData= JSON.parse(localStorage.getItem("storage"));
        console.log(retrieveData);
        appendNote.innerHTML=`<div class="note-content">
                    <div class="notes">
                        <div class="note-title" id="ntx">${tdoo.Body}</div>
                        <div class="note-pfx">
                            <p class="note-sub">${tdoo.Header}</p>
                        </div>
                        <div class="c5">
                            <div class="category">
                                <div class="cat" id="category">${tdoo.category}</div>
                            </div>
                            <div class="date-created">
                                <div class="date" id="date">${tdoo.Dates}</div>
                            </div>
                        </div>
                    </div>
                </div>`
    },2000)
});

window.addEventListener("load", () => {
    let tdoo = {
        "Header" : textarea.value, 
        "Body" : input.value , 
        "category": input2.value, 
        "Dates": day2+ ' ' + fullMonth + ' ' + year,
    }
    appendNote.innerHTML =`<div class="note-content h">
        <div class="notes ">
            <div class="note-title" id="ntx">Crea tu Nota</div>
            <div class="note-pfx">
                <p class="note-sub">Escribe aqui....</p>
            </div>
            <div class="c5">
                <div class="category">
                    <div class="cat" id="category">Categ...</div>
                </div>
                <div class="date-created">
                    <div class="date" id="date">${tdoo.Dates}</div>
                </div>
            </div>
               
        </div>
    </div>`
});

const add_color = (cname) => {
    const colors = ["blue", "red", "green", "purple"];
    colors.filter(c => c !== cname).map(c => textarea.classList.remove(c));
    textarea.classList.add(cname);
  };
  color_red.addEventListener("click", function(event) {
      console.log(event.target);
      add_color("red");
  })
  color_blue.addEventListener("click", function(event) {
      console.log(event.target);
      add_color("blue");
  })
  color_green.addEventListener("click", function(event) {
      console.log(event.target);
      add_color("green");
  })
  color_purple.addEventListener("click", function(event) {
      console.log(event.target);
      add_color("purple");
  })


category1.addEventListener("click", (e) => {
    console.log(e.target);
    document.getElementById("category").innerHTML = `${cat1}`
    input2.value = `${cat1}`;
});
category2.addEventListener("click", (e) => {
    console.log(e.target);
    document.getElementById("category").innerHTML = `${cat2}`
    input2.value = `${cat2}`;
});
category3.addEventListener("click", (e) => {
    console.log(e.target);
    document.getElementById("category").innerHTML = `${cat3}`
    input2.value = `${cat3}`;
});

add_btn.addEventListener("click", (e) => {
    document.querySelector(".container").style.display = "block";
    document.querySelector(".wrapper").style.display = "none"; 
});
document.getElementById("return").addEventListener("click", function(event) {
    document.querySelector(".container").style.display = "none";
    document.querySelector(".wrapper").style.display = "block"; 
});