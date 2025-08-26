import React, { useState } from 'react';
import { toast } from 'react-toastify';

// TODO: Bonus - Implement birthdays type interface - done
interface birthday {
  name: string;
  date: string; // in yyyy-mm-dd format
}
interface BirthdayCalendarProps {
  birthdays: birthday[];
  onDeleteBirthday: (name: string, date: string) => void;
}

const BirthdayCalendar: React.FC<BirthdayCalendarProps> = ({birthdays, onDeleteBirthday}) => {
  const [confirmDelete, setConfirmDelete] = useState<null | { name: string; date: string }>(null);
  const today = new Date();
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [selectedDate, setSelectedDate] = useState<string>(today.toISOString().slice(0, 10));

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  // Helper to format date as yyyy-mm-dd
  const formatDate = (d: number) => {
    const mm = (currentMonth + 1).toString().padStart(2, '0');
    const dd = d.toString().padStart(2, '0');
    return `${currentYear}-${mm}-${dd}`;
  };

  const hasBirthday = (dateStr: string) => {
    const target = dateStr.slice(5);
    return birthdays.some(b => b.date.slice(5) === target);
  };

  const mntBirthday = birthdays
  .filter(b => b.date.slice(5) === selectedDate.slice(5))
  .sort((a, b) => a.name.localeCompare(b.name));
  
  const monthsBirthdays = birthdays
  .filter(b => new Date(b.date).getMonth() === currentMonth)
  .sort((a, b) => a.name.localeCompare(b.name));

  //const selected = new Date(selectedDate);
  //const selectedMonth = selected.getMonth() + 1;
  //const selectedDay = selected.getDate();

  // Month navigation handlers
  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(y => y - 1);
    } else {
      setCurrentMonth(m => m - 1);
    }
    setSelectedDate(`${currentYear}-${(currentMonth === 0 ? 12 : currentMonth).toString().padStart(2, '0')}-01`);
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(y => y + 1);
    } else {
      setCurrentMonth(m => m + 1);
    }
    setSelectedDate(`${currentYear}-${(currentMonth === 11 ? 1 : currentMonth + 2).toString().padStart(2, '0')}-01`);
  };

  // Month names
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return (
    <div className="birthday-calendar">
      <h2>Birthday Calendar</h2>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
        <button onClick={handlePrevMonth}>&lt;</button>
        <span style={{ margin: '0 12px' }}>{monthNames[currentMonth]} {currentYear}</span>
        <button onClick={handleNextMonth}>&gt;</button>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 2, marginBottom: 32 }}>
        {[...Array(daysInMonth)].map((_, i) => {
          const day = i + 1;
          const dateStr = formatDate(day);
          const isSelected = selectedDate === dateStr;
          //const isBirthday = hasBirthday(dateStr);
          return (
            <button
              key={dateStr}
              style={{
                padding: 8,
                background: isSelected ? '#0DB14B' : '#fff',
                border: '1px solid #ccc',
                borderRadius: 4,
                cursor: 'pointer',
                color: isSelected ? '#fff' : '#000'
              }}
              onClick={() => setSelectedDate(dateStr)}
            >
              {day}
              
            </button>
          );
        })}
      </div>
      <div style={{textAlign: "left"}}>
        <strong>{selectedDate && new Date(selectedDate).toLocaleDateString()}</strong>
        {/* TODO: Show birthdays for this date that was added from the BirthdayForm component. */}
        {selectedDate && (
          <div>
              <h4>Birthdays for date selected below :</h4>
              {mntBirthday.length === 0 ? (
                <p>No birthdays</p>
              )
            :
            (
              <ul>
                {mntBirthday.map((b, index) =>(
                  <li key={index}>
                    {b.name}
                    <button
                    className="delete-btn"
                    onClick={() => setConfirmDelete({ name: b.name, date: b.date })}
                  >
                    ❌
                  </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
        {!confirmDelete && selectedDate && monthsBirthdays.length > 0 && (
          <div>
            <h4>Birthdays this month:</h4>
            <ul>
              {monthsBirthdays.map((b, index) => (
                <li key={index}>
                  {b.name} ({new Date(b.date).getDate()})
                  <button
                    className="delete-btn"
                    onClick={() => setConfirmDelete({ name: b.name, date: b.date })}
                  >
                    ❌
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
        {confirmDelete && (
          <div className="modal-backdrop">
            <div className="modal">
              <p>Delete birthday for {confirmDelete.name}?</p>
              <button
                onClick={() => {
                  onDeleteBirthday(confirmDelete.name, confirmDelete.date);
                  toast.success(`Deleted birthday for ${confirmDelete.name}`);
                  setConfirmDelete(null); // Close modal
                }}
                style={{ marginRight: '10px' }}
              >
                Yes
              </button>
              <button onClick={() => setConfirmDelete(null)}>Cancel</button>
            </div>
          </div>
        )}
      </div>    
    </div>
    
  );
};

export default BirthdayCalendar;
