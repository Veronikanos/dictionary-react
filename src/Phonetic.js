import React from "react";
import ReactAudioPlayer from 'react-audio-player';
import "./Phonetic.css";

export default function Phonetic(props) {
	return (
		<div className="Phonetic align-middle">
					<ReactAudioPlayer className="audi"
					src={props.phonetic.audio}
					controls
					controlsList={false}
					autoPlay={false}
			/>
				<p><em>{props.phonetic.text}</em></p>
		</div>
	);
}