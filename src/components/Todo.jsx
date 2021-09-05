/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import CheckBox from "./CheckBox";
import deleteCross from "../assets/icon-cross.svg";
import { Draggable } from "react-beautiful-dnd";

const Todo = ({ id, text, isActive, setActive, deleteTodo }, index) => {
	const checkedStyle = {
		textDecoration: isActive && "line-through",
		color: isActive && "hsl(233, 14%, 35%)",
	};
	return (
		<Draggable key={id} draggableId={id.toString()} index={index}>
			{(provided) => (
				<div
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					className="todo">
					<CheckBox id={id} setActive={setActive} />
					<p style={checkedStyle}>{text}</p>
					<img
						onClick={() => deleteTodo(id)}
						className="delete"
						src={deleteCross}
					/>
				</div>
			)}
		</Draggable>
	);
};

export default Todo;
