const nameInput = document.getElementById("name");
const dateInput = document.getElementById("date");
const amountInput = document.getElementById("amount");
const btn = document.querySelector("button");

const createRowElement = () => {
    const row = document.createElement("tr");
    const tbody = document.getElementsByTagName("tbody")[0];
    tbody.appendChild(row);
    let nameElement = document.createElement("td");
    let dateElement = document.createElement("td");
    let amountElement = document.createElement("td");
    nameElement.appendChild(document.createTextNode(nameInput.value));
    dateElement.appendChild(document.createTextNode(dateInput.value));
    amountElement.appendChild(document.createTextNode(amountInput.value));
    row.appendChild(nameElement);
    row.appendChild(dateElement);
    row.appendChild(amountElement);
    nameInput.value = "";
    dateInput.value = "";
    amountInput.value = "";
}
const addListAfterClick = () => {
    if (nameInput.value.length > 0 && amountInput.value.length > 0){
        createRowElement();
    }
}

btn.addEventListener("click", addListAfterClick);