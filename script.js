const nameInput = document.getElementById("name");
const dateInput = document.getElementById("date");
const amountInput = document.getElementById("amount");
const btn = document.querySelector("button");

// TD NAME ELEMENT 
const createNameElement = () => {
    const infoName2 = document.getElementsByClassName("infoName")[0];
    const y = infoName2.childNodes[0];
    infoName2.removeChild(y);
    infoName2.appendChild(document.createTextNode(nameInput.value));

    nameInput.value = "";
}

// TD DATE INPUT 
const createDateElement = () => {
    const infoDate2 = document.getElementsByClassName("infoDate")[0];
    infoDate2.appendChild(document.createTextNode(dateInput.value));

    dateInput.value = "";
}

// TD AMOUNT INPUT 
const createAmountElement = () => {
    const infoAmount2 = document.getElementsByClassName("infoAmount")[0];
    infoAmount2.appendChild(document.createTextNode(amountInput.value));

    amountInput.value = "";
}

//  NAME INPUT LENGTH CHECKER
const nameLength = () => nameInput.value.length;

const checkNameLength = () => {
    if (nameLength() > 0){
        createNameElement();
    }
}



// AMOUNT INPUT LENGTH CHECKER
const amountLength = () => amountInput.value.length; 

const checkAmountLength = () => {
    if (amountLength() > 0){
        createAmountElement();
    }
}


// ADDING EVENT LISTENERS TO THE BUTTON 
btn.addEventListener("click", checkNameLength);
btn.addEventListener("click", checkAmountLength);
btn.addEventListener("click", createDateElement);



