let name_div = document.getElementById("name");
let age_div = document.getElementById("age");
let class_div = document.getElementById("class");
let image_div = document.getElementById("image");
let score1_div = document.getElementById("score1");
let score2_div = document.getElementById("score2");
let score3_div = document.getElementById("score3");
let table_body = document.getElementById("table-body");

let button = document.getElementById("add-btn");

function add_student(event) {
    event.preventDefault(); // Prevent form from reloading the page

    
    let name = name_div.value.trim();
    let age = age_div.value.trim();
    let class_text = class_div.value.trim();
    let image = image_div.value.trim();
    let score1 = score1_div.value.trim();
    let score2 = score2_div.value.trim();
    let score3 = score3_div.value.trim();

    if (name !== "" && age !== "" && class_text !== "" && image !== "" && score1 !== "" && score2 !== "" && score3 !== "") {
        let table_row = document.createElement("tr");

        let nameCell = document.createElement("td");
        nameCell.textContent = name;

        let ageCell = document.createElement("td");
        ageCell.textContent = age;

        let classCell = document.createElement("td");
        classCell.textContent = class_text;

        let imageCell = document.createElement("td");
        let img = document.createElement("img");
        img.src = image;
        img.alt = "student image";
        img.style.width = "50px";
        imageCell.appendChild(img);

        let score1Cell = document.createElement("td");
        score1Cell.textContent = score1;

        let score2Cell = document.createElement("td");
        score2Cell.textContent = score2;

        let score3Cell = document.createElement("td");
        score3Cell.textContent = score3;

        table_row.appendChild(nameCell);
        table_row.appendChild(ageCell);
        table_row.appendChild(classCell);
        table_row.appendChild(imageCell);
        table_row.appendChild(score1Cell);
        table_row.appendChild(score2Cell);
        table_row.appendChild(score3Cell);

        table_body.appendChild(table_row);
    }

    
}

button.addEventListener("click", add_student);
