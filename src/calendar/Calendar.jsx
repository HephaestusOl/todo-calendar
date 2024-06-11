import React, { useState } from 'react'
import Calendar from 'react-calendar'
import './Calendar.css'

function CalendarToDo() {
	const [value, onChange] = useState(new Date())

	return (
		<div>
			<h1 className='title'>ToDo - Calendar</h1>
			<Calendar onChange={onChange} value={value} />
		</div>
	)
}

export default CalendarToDo;
