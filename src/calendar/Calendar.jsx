import React, { useState } from 'react'
import Calendar from 'react-calendar';
import "./Calendar.css"
import { CustomModal } from '../modal/CustomModal';

function CalendarTodo () {
  const [date, setDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  const handleDateClick = (date) => {
    setDate(date)
    setIsOpen(!isOpen)
  }

  return (
		<>
			<h1 className='title'>ToDo - Calendar</h1>
			<Calendar onChange={handleDateClick} date={date} />
      <CustomModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2>{date.toLocaleDateString()}</h2>
        <p>Hello, World!</p>
      </CustomModal>
		</>
	)
}

export default CalendarTodo;