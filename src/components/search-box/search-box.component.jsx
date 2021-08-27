import React from "react";

import "./search-box.styles.css";

//functional components can not set state or have lifecycle method. Used for getting props and rendering html

export const SearchBox = ({ placeholder, handleChange }) => (
	<input
    className = "search"
		type="search"
		placeholder={placeholder}
		onChange={handleChange}
	/>
);
