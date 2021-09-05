import "./App.css";
import Header from "./components/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import { useState } from "react";
import Footer from "./components/Footer";

function App() {
	const [todos, setTodos] = useState([
		{
			id: 0,
			text: "Complete online JavaScript course",
			isActive: false,
		},
		{
			id: 1,
			text: "Jog around the park 3x",
			isActive: false,
		},
		{
			id: 2,
			text: "10 minutes meditation",
			isActive: false,
		},
		{
			id: 3,
			text: "Read for 1 hour",
			isActive: false,
		},
		{
			id: 4,
			text: "Pick up groceries",
			isActive: false,
		},
		{
			id: 5,
			text: "Complete Todo App on Frontend Mentor",
			isActive: false,
		},
	]);
	const [filterTargetClassName, setFilterTargetClassName] = useState("");

	const updateFilter = (targetClassName) => {
		setFilterTargetClassName(targetClassName);
	};

	const setActive = (id) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, isActive: !todo.isActive } : todo
			)
		);
	};

	const deleteTodo = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	const filterTodos = () => {
		let filteredTodos = [];

		switch (filterTargetClassName) {
			case "all":
				filteredTodos = todos;
				break;
			case "active":
				filteredTodos = todos.filter((todo) => todo.isActive === false);
				break;
			case "completed":
				filteredTodos = todos.filter((todo) => todo.isActive === true);
				break;
			default:
		}
		return filteredTodos;
	};

	const setNewOrder = (newOrder) => {
		setTodos(newOrder);
	};

	return (
		<div className="App">
			<Header />
			<AddTodo />

			<Todos
				setNewOrder={setNewOrder}
				deleteTodo={deleteTodo}
				setActive={setActive}
				todos={filterTodos().length === 0 ? todos : filterTodos()}
			/>

			<Footer filterTodos={updateFilter} numberOfTodos={todos.length} />
		</div>
	);
}

export default App;
