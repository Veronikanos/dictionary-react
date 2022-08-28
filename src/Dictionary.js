import axios from "axios";
import React, {useState} from "react";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(){
	let [keyword, setKeyword] = useState("");
	let [response, setResponse] = useState(null);

	function handleResponse(response){
		setResponse(response.data[0]);
	}

	function search(event){
		event.preventDefault();
		const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
		axios.get(apiUrl).then(handleResponse);
		axios.get(apiUrl).catch(function (error) {
			alert(`Sorry, I don't know word "${keyword}". Try another one :)`);
		});
	}

	function handleSubmit(event){
	setKeyword(event.target.value);
	}

	return (
		<div className="Dictionary col-11 col-md-6 mx-auto">
			<section>
				<form onSubmit={search} >
					<input type="search" className="form-control" autoFocus={true} onChange={handleSubmit} placeholder="Enter your word here..."/>
				</form>
				<div className="hint">
					suggested word: sunrise, love, inspiration, tea...
				</div>
			</section>
				<Results result={response}/>
		</div>
	);
}