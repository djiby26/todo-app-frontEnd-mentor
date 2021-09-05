import React from "react";

const Footer = ({ numberOfTodos, filterTodos }) => {
	const handleClick = (e) => {
		filterTodos(e.target.className);
	};
	return (
		<div className="footer">
			<p className="one">{numberOfTodos} items left</p>
			<div>
				<p className="all" onClick={handleClick}>
					All
				</p>
				<p className="active" onClick={handleClick}>
					Active
				</p>
				<p className="completed" onClick={handleClick}>
					Completed
				</p>
			</div>
			<p>Clear Completed</p>
		</div>
	);
};

export default Footer;
