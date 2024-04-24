
const searchConsole = document.getElementById("search_text");

function availabilityFunc(){
    recognition = new webkitSpeechRecognition() || new SpeechRecognition();
    recognition.lang = "ko";
    recognition.maxAlternativecs =5;

    if (!recognition){
        alert("현재 브라우저는 불가능");
    }
}

function readText(){
    const searchText = document.getElementById("search_text").value;

    if(!searchText) return;
    
    const utter = new SpeechSynthesisUtterance(searchText);

    const lang = document.getElementById("lang").value;
    
    utter.lang = lang;

    window.speechSynthesis.speak(utter);
}

window.addEventListener("load",availabilityFunc);