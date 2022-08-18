import React, {useState} from "react";

export default function Dictionary(){
	let [keyword, setKeyword] = useState("");

	function search(event){
		event.preventDefault();
		alert(`Searching for ${keyword}`);
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