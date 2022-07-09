import React from "react";

export default function VoiceRecorder(){

  const MicRecorder = require('mic-recorder-to-mp3');
  const recorder = new MicRecorder({bitRate: 256});
  var fileToReturn = new File([""], "filename");

  return (
    <div class="container text-center">

     <button onClick={e => startRecording(recorder)}>start</button>
     <button onClick={e => fileToReturn  = stopRecording(recorder)}>stop</button>
     <button onClick = {e => submitAudio(fileToReturn)}>Submit Audio?</button>
     <button onClick = {e => playAudio(fileToReturn)}> Play Previous Audio</button>
     <button onClick = {e => playAudio(fileToReturn)}> Play Audio</button>

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

  console.log("submitted");
  file.then(value => console.log(value));

  file.then(value => console.log(JSON.stringify({

    parameterOne: value[0],
    parameterTwo: value[1]

  })));
}

function playAudio(file){
  console.log("played");
  var audio = new Audio(file.webkitRelativePath);
  audio.play();
}

function startRecording(recorder){
    recorder.start();
}

function stopRecording(recorder){
  return recorder.stop().getMp3();
}
