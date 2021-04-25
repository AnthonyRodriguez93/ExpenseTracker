const nameInput = document.getElementById("name");
const dateInput = document.getElementById("date");
const amountInput = document.getElementById("amount");
const btn = document.querySelector("button");

const createRowElement = () => {
    document.getElementsByClassName("infoRow")[0].remove();
    const row = document.createElement("tr");
    const tbody = document.getElementsByTagName("tbody")[0];
    tbody.appendChild(row);
    let nameElement = document.createElement("td");
    let dateElement = document.createElement("td");
    let amountElement = document.createElement("td");
    let delbtn = document.createElement("button");
    nameElement.appendChild(document.createTextNode(nameInput.value));
    dateElement.appendChild(document.createTextNode(dateInput.value));
    amountElement.appendChild(document.createTextNode(amountInput.value));
    delbtn.appendChild(document.createTextNode("X"));
    row.appendChild(nameElement);
    row.appendChild(dateElement);
    row.appendChild(amountElement);
    row.appendChild(delbtn);
    nameInput.value = "";
    dateInput.value = "";
    amountInput.value = "";
    addListToBtns(delbtn);

}
const addListAfterClick = () => {
    if (nameInput.value.length > 0 && amountInput.value.length > 0){
        createRowElement();
    }
}

const addListToBtns = (k) => {
    k.addEventListener("click", GetDeleted);
}

const GetDeleted = () => {
    let del = document.querySelectorAll("tr");
    let n = del.length;
    let makeHandler = function(num){
        return function(){
            this.closest("tr").remove();
        };
    };

    for (let i = 0; i < n; i++) {
        del[i].onclick = makeHandler();
    }
}

btn.addEventListener("click", addListAfterClick);