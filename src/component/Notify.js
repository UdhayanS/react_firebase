import React from 'react';
import logo from './images/udhayan.jpg'

function Notify() {
  // Function to request permission for notifications
  const requestNotificationPermission = () => {
    if (window.Notification && Notification.permission !== 'granted') {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          console.log('Notification permission granted.');
        } else {
          console.log('Notification permission denied.');
        }
      });
    }
  };

  // Function to show notification
  const showNotification = () => {
    if (window.Notification && Notification.permission === 'granted') {
      new Notification('Udhayan messaged', {
        body: 'What happend to hackathon.',
        icon: logo, // Optional icon
      });
    } else {
      console.log('Notification permission not granted.');
    }
  };

  // Request permission when the component mounts
  React.useEffect(() => {
    requestNotificationPermission();
  }, []);

  return (
    <div>
      <button onClick={showNotification}>Show Notification</button>
    </div>
  );
}

export default Notify;
