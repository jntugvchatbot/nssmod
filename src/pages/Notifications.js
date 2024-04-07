import React from 'react';
// import './notifi2.css'
import './Notifications.css'
const Notifications = () => {
  const notifications = [
    {
      date: '2024-01-20',
      title: 'J. - N. - T. -U Gurajada - NSS - Cell - Deputation - of NCC - Volunteers.pdf',
    },
    {
      date: '2024-01-03',
      title: 'JNTUGV - Vizianagaram - NSS Cell - Circular',
    },
  ];

  return (
    <div className="notifications">
      <h2>Notifications</h2>
      <ul>
        {notifications.map(({ date, title }) => (
          <li key={date}>
            <span>{date}</span>
            <span>{title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;