import { useState } from 'react'
import './App.css'
import BirthdayForm from './BirthdayForm'
import BirthdayCalendar from './BirthdayCalendar'
import { ToastContainer } from 'react-toastify'

function App() {
  // TODO: 1. Implement state management for birthdays - done
  const [birthdays, setBirthdays] = useState<{ name: string; date: string }[]>([])

  // TODO: 2. Share state with BirthdayForm and BirthdayCalendar components - done
  const addBirthday = (name: string, date: string) => {
    setBirthdays([...birthdays, { name, date }])
  }

  const removeBirthday = (name: string, date: string) => {
    setBirthdays(birthdays.filter(b => b.name !== name || b.date !== date))
  }

  // TIP: The birthday added from the BirthdayForm component should be consumed in the BirthdayCalendar component. - done
  return (
    <>
      <h1>Birthday Calendar App</h1>
      <BirthdayForm onAddBirthday={addBirthday} birthdays={birthdays}/>
      <BirthdayCalendar birthdays={birthdays} onDeleteBirthday={removeBirthday}/>
      <ToastContainer/>
    </>
  )
}

export default App
