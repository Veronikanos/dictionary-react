import React from "react";
import Synonyms from "./Synonyms";

export default function Meanings(props) {
	return (
		<div>
			<h4>{props.meaning.partOfSpeech}</h4>
			{props.meaning.definitions.map(function (definition, index)
			{
				return (
					<div key={index}>
						<p>{definition.definition}</p>
						<p><em>{definition.example}</em></p>
						<Synonyms synonyms={definition.synonyms} />
					</div>
				);
			})}
		</div>

	);
}