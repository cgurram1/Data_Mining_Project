import React from 'react'
import SpeechRecognition, {useSpeechRecognition} from 'react-speech-recognition'
import 'regenerator-runtime/runtime';

function Mic(){
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition()
    if(!browserSupportsSpeechRecognition){
        return <span> Your Broswer does'nt Support Speech to Text Recognition</span>
    }
    return <div>
        <p>Microphone : {listening ? "ON" : "OFF"}</p>
        <button onClick={SpeechRecognition.startListening}>Start</button>
        <button onClick={SpeechRecognition.stopListening}>Stop</button>
        <button onClick={resetTranscript}>Reset</button>
        <p>{transcript}</p>
    </div>
}

export default Mic;

