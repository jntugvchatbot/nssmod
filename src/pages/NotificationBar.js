import React from 'react';
// import './flashnot.css';

function NotificationBar({ message }) {
  return (
    <div className="notification-bar">
      <div className="flash-highlight">Flash</div>
      <div className="notification-text">{message}</div>
    </div>
  );
}

export default NotificationBar;