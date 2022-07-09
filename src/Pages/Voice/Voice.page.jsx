import React from "react";
import VoicePlayback from "../../Components/VoicePlayback/VoicePlayback.component";
import VoiceRecorder from "../../Components/VoiceRecorder/VoiceRecorder.component";

export default function VoicePage(){

    return(

        <div>
        <VoiceRecorder />
        <VoicePlayback />
        </div>
    );
}
