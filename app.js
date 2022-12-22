var txtInput= document.querySelector("#input");
var txtOutput= document.querySelector("output");
var btnTranslator= document.querySelector("#btn-trns");


var serverURL="https://api.funtranslations.com/translate/";

function gettranslate(text){
    return serverURL + "?" + "text=" + text ;
}

function errorHandeler(error){
    alert("your server is not working")
}




function clickHandeler(click){
    var inputText=txtInput.value; //takeing input

    fetch(gettranslate(inputText))
    .then(response => response.json())
    .then( json=>console.log(json)
        //txtOutput.innerText=translatedText;
    )
    .catch(errorHandeler);
    
}

btnTranslator.addEventListener("click",clickHandeler);