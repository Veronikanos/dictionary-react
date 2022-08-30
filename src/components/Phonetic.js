import React from "react";
import ReactAudioPlayer from 'react-audio-player';
import "../style/Phonetic.css";

export default function Phonetic(props) {
	if (props.phonetic.audio) {
		return (
	<div className="Phonetic align-middle">
				<ReactAudioPlayer
				src={props.phonetic.audio}
				controls
				controlsList={false}
				autoPlay={false}
		/>
			<p><em>{props.phonetic.text}</em></p>
	</div>
	);
	} else {
		return (
		<div className="Phonetic align-middle">
			<p><em>{props.phonetic.text}</em></p>
		</div>
		)
	}

}