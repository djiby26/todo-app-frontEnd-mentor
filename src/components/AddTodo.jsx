import React from "react";
import AddTodoCheckBox from "./AddTodoCheckBox";

const AddTodo = ({ addTodo }) => {
	const getCheckState = (checkState) => checkState;
	const handleSubmit = (e) => {
		// addTodo(e.target.value)
		console.log(e.target.value);
	};
	return (
		<div onClick={handleSubmit} className="add-todo">
			<AddTodoCheckBox getCheckState={getCheckState} />
			<form>
				<input placeholder="Create a new todo..." type="text" />
			</form>
		</div>
	);
};

export default AddTodo;
