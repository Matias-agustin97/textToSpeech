const btn= document.getElementById('start-btn')
const text= document.getElementById('text')
const descargar= document.getElementById('descarga-btn')

const greetings='Hola anto bomboncito, entregame el rosquete querida dale no te hagas la dificl'

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
    readingThisShit(transcript)
}

btn.addEventListener('click',()=>{
    recognition.start()
})

const readingThisShit=(message)=>{
    const speech= new SpeechSynthesisUtterance()
    speech.text='sacate la papa de la boca'
    if(message.includes('hola soy anto')){
        speech.text=greetings
    }
    
    speech.volume=1
    speech.rate=1
    speech.pitch=1

    window.speechSynthesis.speak(speech)
}