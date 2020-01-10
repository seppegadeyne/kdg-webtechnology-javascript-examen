//  OPMERKING:  EERST WORDT DE CODE IN EXAMEN_INIT_NIET_WIJZIGEN (APART BESTAND) UITGEVOERD...

// INDEX.HTML
function init_index() {
    document.querySelector("#user").addEventListener("blur", validateUsername, false);
    document.querySelector("#test").addEventListener("click", validateUsername, false);
    document.querySelector("form").addEventListener("submit", validateForm, false);
}
function validateUsername() {
    // Gebruik de variabelen om de kleur en tekst in de html te zetten.
    let fout = "ongeldige username";
    let goed = "geldige username";
    let kleurfout = "red";
    let kleurgoed = "green";
    let node = document.getElementsByClassName("portfout")[0];
    if (isValidUsername(document.querySelector("#user").value)) {
        node.innerHTML = goed;
        node.style.color = kleurgoed;
        return true;
    } else {
        node.innerHTML = fout;
        node.style.color = kleurfout;
        return false;
    }

}
function isValidUsername(username) {
    console.log(username);
    const regExp = /^[A-Z](?=.*?[a-z])(?=.*?[0-9])/;
    return regExp.test(username);
}
function validateForm(event) {
    if(!validateUsername()) event.preventDefault();
}

// PORTFOLIO.HTML
function getParam(name) { /*2.1*/
    let queryString = decodeURIComponent(location.search.replace(/\+/g, " "));
    const regEx = new RegExp(name + "=([^&*]+)");
    let result = regEx.exec(queryString);
    if (result) {
        return result[1];
    } else {
        return false;
    }
}

function showName(nickname) { /*2.2*/
    let tekst = `Portfolio van ${getParam("username")}`;
    document.querySelector("header:nth-of-type(1)").innerHTML = tekst;
}

function showPicsHorizontal() { /*2.3*/
    let nodes = document.querySelectorAll("main > section > figure");
    for (let node of nodes) {
        node.style.display = "inline-block";
    }
}

function getPhotoNumbers() { /*2.4*/
    let nodes = document.querySelectorAll("main > section > figure > figcaption");
    for (let node of nodes) {
        numbers.push(node.innerHTML);
    }
    return numbers;
}

class Photo { /*3.1*/
    constructor(nr,iso,shutter,diaphragm) {
        this.nr = nr;
        this.iso = iso;
        this.shutter = shutter;
        this.diaphragm = diaphragm;
    }

    toText() {
        return `${this.nr} - iso:${this.iso} - shutter: ${this.shutter} - diaphragm: ${this.diaphragm}`;
    }
}

function createObjectsAndShowData() { /*3.2*/
    let photos = [];
    for (let i = 0; i < numbers.length; i++) {
        photos[i] = new Photo(numbers[i], data[i][0], data[i][1], data[i][2]);
    }
    for (let photo of photos) {
        document.querySelector("#check").innerHTML += photo.toText() + "<br>";
    }
}

function createTable() { /*3.3*/
    // get the reference for the body
    let body = document.querySelector("#table");
    let tbl = document.createElement("table");
    let tblBody = document.createElement("tbody");
    let titles = ["nr", "iso", "shutter", "diaphragm"];

    // creating all title cells
    for (let i = 0; i < 1; i++) {
        // creates a table row
        let row = document.createElement("tr");

        for (let j = 0; j < titles.length; j++) {
            let cell = document.createElement("td");
            let cellText = document.createTextNode(titles[j]);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }

        tblBody.appendChild(row);
        row.style.textTransform = "uppercase";
        row.style.fontWeight = "bold";
    }

    // creating all data cells
    for (let i = 0; i < data.length; i++) {
        // creates a table row
        let row = document.createElement("tr");

        for (let j = 0; j < 4; j++) {
            let cell = document.createElement("td");
            let inhoud;
            if(j === 0) {
                inhoud = numbers[i];
            } else {
                inhoud = data[i][j-1];
            }
            let cellText = document.createTextNode(inhoud);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }

        tblBody.appendChild(row);
    }

    tbl.appendChild(tblBody);
    body.appendChild(tbl);
    tbl.setAttribute("border", "1");
}
