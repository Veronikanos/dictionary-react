import React from "react";
import Meanings from "./Meanings"

export default function Results(props){
	console.log(props.result);
	if (props.result){
		return (
		<div>
			<h3>{props.result.word}</h3>
			{props.result.meanings.map(function (res, index) {
				return (
					<div key={index}>
						<Meanings meaning={res}/>
					</div>
				)
			})}
		</div>
		);
	} else {
		return null;
	}
}