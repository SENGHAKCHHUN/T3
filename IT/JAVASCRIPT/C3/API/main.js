const textArea = document.querySelector('textarea');
const btn = document.querySelector('button');
var isSpeaking = false;
const startSpeaking = () => {
    const synth = window.speechSynthesis;
    const text = textArea.value;
    // const uttternace = new SpeechSynthesisUtterance(text);
    // synth.speak(uttternace);
    if (!synth.speaking && text) {
        const uttternace = new SpeechSynthesisUtterance(text);
        synth.speak(uttternace);
    }
    if (text.length > 0) {
        if (synth.speaking && isSpeaking) {
            btn.innerText = "Resume";
            synth.pause();
            isSpeaking = false;
        }
        else {
            btn.innerText = "Pause";
            synth.resume();
            isSpeaking = true;
        }
    } else {
        isSpeaking = false;
        btn.innerText = "Speak";
    }
    
    setInterval(() => {
        if (!synth.speaking && isSpeaking) {
            isSpeaking = true;
            btn.innerText = 'Convert to Speech';
        }
    }
    )
}
btn.addEventListener('click', startSpeaking);