import React from "react";
import Button from "react-bootstrap/Button";


export default function VoiceRecorder(){

  const MicRecorder = require('mic-recorder-to-mp3');
  const recorder = new MicRecorder({bitRate: 256});
  var fileToReturn = new File([""], "filename");

  return (
    <div class="container text-center">

     <Button variant="success" onClick={e => startRecording(recorder)}>Start Recording</Button>
     <Button variant="danger" onClick={e => fileToReturn  = stopRecording(recorder)}>Stop Recording</Button>
     <Button variant="info" onClick = {e => submitAudio(fileToReturn)}>Submit Audio</Button>
     <Button variant="primary" onClick = {e => playAudio(fileToReturn)}> Playback</Button>

    </div>
    );
}

function postAudio(data){
    fetch('https://samplewebsite.com/API/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        parameterOne: data[0],
        parameterTwo: data[1]
      })
    });
}

function submitAudio(file){

  if(file.size === 0){return;}

  
}

function playAudio(file){
  
  file.then(([buffer, blob]) => {
    // do what ever you want with buffer and blob
    // Example: Create a mp3 file and play
    const file = new File(buffer, 'me-at-thevoice.mp3', {
      type: blob.type,
      lastModified: Date.now()
    });
  
    const player = new Audio(URL.createObjectURL(file));
    player.play();
  
  }).catch((e) => {
    alert('We could not retrieve your message');
    console.log(e);
  });
  
}

function startRecording(recorder){
    recorder.start();
}

function stopRecording(recorder){
  return recorder.stop().getMp3();
}
