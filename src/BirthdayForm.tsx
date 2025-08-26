import React, { useState } from 'react';
import { toast } from 'react-toastify';

interface birthday {
  name: string;
  date: string; // in yyyy-mm-dd format
}

interface BirthdayFormProps {
  onAddBirthday: (name: string, date: string) => void;
  birthdays: birthday[];
}

const BirthdayForm: React.FC<BirthdayFormProps> = ({ onAddBirthday, birthdays}) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Input validation for name and date
    const nameRegex = /^[a-zA-Z\s'-]+$/;
    if (!nameRegex.test(name) || !name.trim().toLowerCase || !date) {
      toast.error('Please proide a valid name that only contains letters, spaces, hyphens, or apostrophes, and a valid date.');
      return;
    }

    //Seeing if there is an existing entry on the calender with the same name
    const existingBday = birthdays.some(
      b => b.name.trim().toLowerCase() === name.trim().toLowerCase()
    );
    if (existingBday){
      toast.error(`${name} was already added on the ${date}`)
      return;
    }


    onAddBirthday(name, date);
    //Added a toast notification on successful addition of birthday
    if(!existingBday){
      toast.success(`${name.trim()}'s birthday added successfully!'`);
    }
    setName('');
    setDate('');
  }

  console.log(birthdays)

  return (
    <>
      <form 
        onSubmit={handleSubmit} 
        className="birthday-form"
      >
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
          style={{ height: '36px', marginRight : "0.7rem" }}
        />
        <input
          type="date"
          value={date}
          onChange={e => setDate(e.target.value)}
          required
          style={{ height: '36px' }}
        />
        <button style={{marginLeft : "0.7rem"}} type="submit">Add Birthday</button>
      </form>
    </>
  );
};

export default BirthdayForm;
