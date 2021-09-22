import React from 'react';
// import Todo from "./Todo";
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import CheckBox from './CheckBox';
import deleteCross from '../assets/icon-cross.svg';
import { Draggable } from 'react-beautiful-dnd';
import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

const Todos = ({ todos, setActive, deleteTodo, setNewOrder }) => {
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
	const theme = useContext(ThemeContext);
	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<Droppable droppableId='todos'>
				{(provided) => (
					<div
						className='todos'
						{...provided.droppableProps}
						ref={provided.innerRef}>
						{todos.map(({ id, text, isInActive }, index) => (
							<Draggable key={id} draggableId={id.toString()} index={index}>
								{(provided) => {
									const style = {
										color:
											theme === 'dark'
												? 'hsl(234, 39%, 85%)'
												: 'hsl(235, 19%, 35%)',
										backgroundColor:
											theme === 'light'
												? 'hsl(0, 0%, 98%)'
												: 'hsl(235, 24%, 19%)',
										...provided.draggableProps.style,
									};

									return (
										<div
											ref={provided.innerRef}
											{...provided.draggableProps}
											{...provided.dragHandleProps}
											style={style}
											className='todo'>
											<CheckBox id={id} setActive={setActive} />
											<p
												style={{
													textDecoration: isInActive && 'line-through',
													color: isInActive
														? 'hsl(233, 14%, 35%)'
														: style.color,
												}}>
												{text}
											</p>
											<img
												alt=''
												onClick={() => deleteTodo(id)}
												className='delete'
												src={deleteCross}
											/>
										</div>
									);
								}}
							</Draggable>
						))}
						{provided.placeholder}
					</div>
				)}
			</Droppable>
		</DragDropContext>
	);
};

export default Todos;
