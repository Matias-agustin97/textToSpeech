const btn= document.getElementById('start-btn')
const text= document.getElementById('text')
const descargar= document.getElementById('descarga-btn')
if(text.textContent=""){
    descargar.classList.toggle('is-disable')
}

const speechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new speechRecognition()

recognition.onstart=()=>{

}




recognition.onresult=(event)=>{
    const current=event.resultIndex

    const transcript=event.results[current][0].transcript
    text.value=transcript
}

btn.addEventListener('click',()=>{
    recognition.start()
})