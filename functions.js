
var body = document.querySelector("body");
var removeBtn = document.querySelector("#removeBtn");
var addPara = document.querySelector("#addPara");
var catchMeBtn = document.querySelector("#removeId");



function removeTextFieldFromBody(){

    textFields = document.querySelectorAll("input");

    textFields.forEach( element => {
        element.remove();
    });
}


function createAndAppendParaToBody(){
    
    paragraph = document.createElement("p");

    paragraph.innerText = "New Paragraph Added";
    paragraph.style.color = "green";
    paragraph.style.fontSize = "12px";

    body.appendChild(paragraph);
}


function removeByTagId(id){
    element = document.querySelector("#"+id);

    if(element){
        element.remove();

    }else{
        console.error("no such element exists in the DOM");
    }
}


removeBtn.addEventListener("click" , removeTextFieldFromBody);
addPara.addEventListener("click" , createAndAppendParaToBody);
catchMeBtn.addEventListener("click", () => {removeByTagId("myId")});


