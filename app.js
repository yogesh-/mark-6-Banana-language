var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var divBox = document.querySelector("#output");

// var liveUrl = "	https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var liveUrl = "https://api.funtranslations.com/translate/minion.json"

function constructUrl(text){
    return liveUrl + "?" + "text=" + text
}

function errorHandler(error){
    console.log("error occured",error)
    alert("Error occured, please try after sometime")
}

function clickHandler(){
        var inputText = txtInput.value;
        fetch(constructUrl(inputText))
        .then(response => response.json())
        .then(json =>
            {var transalatedText = json.contents.translated;
            divBox.innerText = transalatedText;
            })
        .catch(errorHandler) 
    };
btnTranslate.addEventListener("click",clickHandler);