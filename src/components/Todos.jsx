import React from "react";
// import Todo from "./Todo";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import CheckBox from "./CheckBox";
import deleteCross from "../assets/icon-cross.svg";
import { Draggable } from "react-beautiful-dnd";

const Todos = ({ todos, setActive, deleteTodo, setNewOrder }) => {
	// const checkedStyle = {
	// 	textDecoration: isActive && "line-through",
	// 	color: isActive && "hsl(233, 14%, 35%)",
	// };
	const onDragEnd = (result) => {
		// dropped outside the list
		const { destination, source } = result;
		if (!destination) {
			return;
		}
		const tods = Array.from(todos);
		const [dragedTodo] = tods.splice(source.index, 1);
		tods.splice(destination.index, 0, dragedTodo);
		setNewOrder(tods);
	};
	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<Droppable droppableId="todos">
				{(provided) => (
					<div
						className="todos"
						{...provided.droppableProps}
						ref={provided.innerRef}>
						{todos.map(({ id, text, isActive }, index) => (
							<Draggable key={id} draggableId={id.toString()} index={index}>
								{(provided) => (
									<div
										ref={provided.innerRef}
										{...provided.draggableProps}
										{...provided.dragHandleProps}
										className="todo">
										<CheckBox id={id} setActive={setActive} />
										<p>{text}</p>
										<img
											onClick={() => deleteTodo(id)}
											className="delete"
											src={deleteCross}
										/>
									</div>
								)}
							</Draggable>
						))}
						{provided.placeholder}
					</div>
				)}
			</Droppable>
		</DragDropContext>
	);
	// <Todo
	// 	index={index}
	// 	deleteTodo={deleteTodo}
	// 	setActive={setActive}
	// 	text={text}
	// 	id={id}
	// 	isActive={isActive}
	// />
};

export default Todos;
