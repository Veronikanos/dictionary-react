import axios from "axios";
import React, {useState} from "react";

export default function Dictionary(){
	let [keyword, setKeyword] = useState("");

	function handleResponse(response){
		console.log(response.data);
	}

	function search(event){
		event.preventDefault();
		alert(`Searching for ${keyword}`);
		const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
		axios.get(apiUrl).then(handleResponse);
	}

	function handleSubmit(event){
	setKeyword(event.target.value);
	}

	return (
		<div>
			<form onSubmit={search}>
				<input type="search" autoFocus={true} onChange={handleSubmit}/>
			</form>
		</div>
	);
}