import React, { useState } from 'react';

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

  return (
    <form 
      //onSubmit={} 
      className="birthday-form"
    >
      <input
        type="text"
        placeholder="Name"
        //value={}
        //onChange={}
        required
      />
      <input
        type="date"
        //value={}
        //onChange={}
        required
      />
      <button type="submit">Add Birthday</button>
    </form>
  );
};

export default BirthdayForm;
