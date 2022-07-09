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

function submitAudio(data){

  if(data.size === 0){return;}

  data.then(([buffer, blob]) => {

    const file = new File(buffer, 'me-at-thevoice.mp3', {
      type: blob.type,
      lastModified: Date.now()
    });
  
    new Promise((resolve, reject) => {
      let reader = new FileReader();
      reader.onerror = reject;
      reader.onload = (e) => resolve(e.target.result);
      reader.readAsDataURL(file);
    })
    .then(value => 
      console.log(JSON.stringify({song: value}))
    );

  });
}

function playAudio(file){
  
  file.then(([buffer, blob]) => {
    
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
