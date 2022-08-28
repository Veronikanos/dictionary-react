import React from "react";
import Meanings from "./Meanings";
import "./Results.css";
// import Synonyms from "./Synonyms";

export default function Results(props){
	console.log(props.result);
	if (props.result){
		return (
		<div className="Results">
			<section>
				<h2>{props.result.word}</h2>
			</section>
			{props.result.meanings.map(function (res, index) {
				return (
					<section key={index}>
						<Meanings meaning={res}/>
						{/* <Synonyms synonyms={res.synonyms} /> */}
					</section>
				)
				
			})}
		</div>
		);
	} else {
		return null;
	}
}