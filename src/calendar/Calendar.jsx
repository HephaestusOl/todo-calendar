import React, { useState } from 'react'
import Calendar from 'react-calendar';
import "./Calendar.css"
import { CustomModal } from '../modal/CustomModal';

function CalendarTodo () {
  const [date, setDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
	const [tasks, setTasks] = useState(() => {
		const savedTasks = localStorage.getItem('tasks')
		return savedTasks ? JSON.parse(savedTasks) : {}
	})
	const [newTask, setNewTask] = useState('');
	const [selectedDay, setSelectedDay] = useState(null);

	const handleInputChange = (event) => {
		setNewTask(event.target.value)
	}

	const handleAddTask = () => {
		if(newTask.trim() !== '' && selectedDay !== null) {
			const updatedTasks = {...tasks,
				[selectedDay] : [...(tasks[selectedDay] || []), newTask]
			};
			setTasks(updatedTasks)
			localStorage.setItem('tasks', JSON.stringify(updatedTasks))
			setNewTask('')
		}
	}

	const handleDeleteTask = (day, index) => {
		const newTasks = {...tasks}
		newTasks[day].splice(index, 1)
		setTasks(newTasks)
		localStorage.setItem('tasks', JSON.stringify(newTasks))
	}

  const handleDateClick = (date) => {
    setDate(date)
    setIsOpen(!isOpen)
		setSelectedDay(date.getDate())
  }

  return (
		<>
			<h1 className='title'>ToDo - Calendar</h1>
			<Calendar onChange={handleDateClick} date={date} />
			<CustomModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
				<h2>Задачи для {date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' })}</h2>
				<input type='text' value={newTask} onChange={handleInputChange} />
				<button onClick={handleAddTask}>Добавить задачу</button>
				<ul>
					{tasks[selectedDay]?.map((task, index) => (
						<li key={index}>
							{task}
							<button onClick={() => handleDeleteTask(selectedDay, index)}>
								{' '}
								Удалить задачу{' '}
							</button>
						</li>
					))}
				</ul>
			</CustomModal>
		</>
	)
}

export default CalendarTodo;