import React from "react";
import "./searchField.css";
const SearchField = ({ placeholder, handleChange }) => {
	return (
		<input
			type="search"
			className="search"
			placeholder={placeholder}
			onChange={handleChange}
		/>
	);
};

export default SearchField;
