import axios from "axios";
import React, {useState} from "react";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(){
	let [keyword, setKeyword] = useState("");
	let [response, setResponse] = useState(null);
	let [photos, setPhotos] = useState(null);

	function handleDictionaryResponse(response){
		setResponse(response.data[0]);
	}

	function handlePexelsResponse(response) {
		setPhotos(response.data.photos);
	}

	function search(event){
		event.preventDefault();
		const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
		axios.get(apiUrl).then(handleDictionaryResponse);
		axios.get(apiUrl).catch(function (error) {
			alert(`Sorry, I don't know word "${keyword}". Try another one :)`);
		});

		const pexelsApiKey = "563492ad6f91700001000001ccca6060857e44a185e239db2c405c8e";
		let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
		let headers = { "Authorization" : `Bearer ${pexelsApiKey}` };
		axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
	}

	function handleSubmit(event){
	setKeyword(event.target.value);
	}

	return (
		<div className="Dictionary col-11 col-md-7 mx-auto">
			<section>
				<form onSubmit={search} >
					<input type="search" className="form-control" autoFocus={true} onChange={handleSubmit} placeholder="Enter your word here..."/>
				</form>
				<div className="hint">
					suggested word: sunrise, love, inspiration, tea...
				</div>
			</section>
				<Photos photos={photos}/>
				<Results result={response}/>
		</div>
	);
}