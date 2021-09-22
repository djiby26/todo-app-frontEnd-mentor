import './App.css';
import Header from './components/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import { useState } from 'react';
import Footer from './components/Footer';
import ThemeContext from './context/ThemeContext';

function App() {
	const [globalTheme, setGlobalTheme] = useState('light');

	const [id, setId] = useState(6);

	const [todos, setTodos] = useState([
		{
			id: 0,
			text: 'Complete online JavaScript course',
			isInActive: false,
		},
		{
			id: 1,
			text: 'Jog around the park 3x',
			isInActive: false,
		},
		{
			id: 2,
			text: '10 minutes meditation',
			isInActive: false,
		},
		{
			id: 3,
			text: 'Read for 1 hour',
			isInActive: false,
		},
		{
			id: 4,
			text: 'Pick up groceries',
			isInActive: false,
		},
		{
			id: 5,
			text: 'Complete Todo App on Frontend Mentor',
			isInActive: false,
		},
	]);

	const [filterTargetClassName, setFilterTargetClassName] = useState('');

	const updateFilter = (targetClassName) => {
		setFilterTargetClassName(targetClassName);
	};

	const setActive = (id) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, isInActive: !todo.isInActive } : todo
			)
		);
	};

	const deleteTodo = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	const filterTodos = () => {
		let filteredTodos = [];

		switch (filterTargetClassName) {
			case 'all':
				filteredTodos = todos;
				break;
			case 'active':
				filteredTodos = todos.filter((todo) => todo.isInActive === false);
				break;
			case 'completed':
				filteredTodos = todos.filter((todo) => todo.isInActive === true);
				break;
			case 'clear-completed':
				setTodos((prevTodos) =>
					prevTodos.filter((todo) => todo.isInActive === false)
				);
				// filteredTodos = todos.filter((todo) => todo.isInActive === false);
				break;
			default:
		}
		console.table(filteredTodos);
		return filteredTodos;
	};

	const setNewOrder = (newOrder) => {
		setTodos(newOrder);
	};

	const addTodo = (check, newTodo) => {
		setId(id + 1);
		console.log(check, newTodo);
		setTodos([...todos, { id: id, text: newTodo, isInActive: check }]);
	};

	const getTheme = (theme) => {
		setGlobalTheme(theme);
		theme === 'light'
			? document.body.classList.remove('dark-body')
			: document.body.classList.add('dark-body');
	};

	return (
		<div className='App'>
			<Header getTheme={getTheme} />

			<ThemeContext.Provider value={globalTheme}>
				<AddTodo addTodo={addTodo} />

				<Todos
					setNewOrder={setNewOrder}
					deleteTodo={deleteTodo}
					setActive={setActive}
					todos={filterTodos().length === 0 ? todos : filterTodos()}
				/>

				<Footer filterTodos={updateFilter} numberOfTodos={todos.length} />
			</ThemeContext.Provider>
		</div>
	);
}

export default App;
