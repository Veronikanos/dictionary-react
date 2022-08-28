import React from "react";

export default function Synonyms(props){
	if (props.synonyms) {
		return (
			<div className="Synonyms">
				{props.synonyms.map(function(synonym, index) {
					return (
					<div key={index}>
						`Synonym is {synonym}`
					</div>
					)
				})}
			</div>
		);
	} else {
		return null;
	}
}