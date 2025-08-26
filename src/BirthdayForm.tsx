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
    if (!nameRegex.test(name) || !name.trim() || !date) {
      toast.error('Please proide a valid name that only contains letters, spaces, hyphens, or apostrophes, and a valid date.');
      return;
    }

    onAddBirthday(name, date);
    //Added a toast notification on successful addition of birthday
    toast.success(`${name.trim()}'s birthday added successfully!'`);
    setName('');
    setDate('');
  }

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
        />
        <input
          type="date"
          value={date}
          onChange={e => setDate(e.target.value)}
          required
        />
        <button type="submit">Add Birthday</button>
      </form>
    </>
  );
};

export default BirthdayForm;
