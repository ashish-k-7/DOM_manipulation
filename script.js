const formEl = document.querySelector("form");
const tbodyEl = document.querySelector("tbody");
const tableEl = document.querySelector("table");
function onAddWebsite(e) {
  e.preventDefault();
  const Name = document.getElementById("Name").value;
  const Email = document.getElementById("Email").value;
  const Contact = document.getElementById("contact").value;
  tbodyEl.innerHTML += `
            <tr>
                <td>${Name}</td> 
               <td>${Email}</td>
                <td>${Contact}</td>
                <td><button class="deleteBtn">Delete</button></td>
            </tr>
        `;
}

function onDeleteRow(e) {
  if (!e.target.classList.contains("deleteBtn")) {
    return;
  }

  const btn = e.target;
  btn.closest("tr").remove();
}

formEl.addEventListener("submit", onAddWebsite);
tableEl.addEventListener("click", onDeleteRow);

// var background_color =document.getElementsByClassName("btn-background")
// background_color.addEventListener("click", onBackgroundColor_change);

function changeColor() {
  var container = document.querySelector(".Container");
  container.classList.toggle("background-change");
  console.log("hi");
}
var para = document.createElement("p");
function addElement() {
  para.innerHTML =
    '<h1>I am a New Paragraph</h1><button class="para-btn deleteBtn">Delete</button>';
  var div1 = document.querySelector("#new-element");
  div1.appendChild(para);
}
para.addEventListener("click", deleteElement);
function deleteElement(el) {
  if (!el.target.classList.contains("deleteBtn")) {
    return;
  }

  const btn = el.target;
  btn.closest("p").remove();
}
