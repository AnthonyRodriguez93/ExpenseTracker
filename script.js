


const createTdElement = () => {
    const infoName2 = document.getElementsByClassName("infoName")[0];
    
    infoName2.appendChild(document.createTextNode("Hi"));
}

document.querySelector("button").addEventListener("click", createTdElement);








