// AttendanceChecker.jsx
import React, { useState, useEffect } from 'react';

const AttendanceChecker = () => {
  const [status, setStatus] = useState(null);
  const collegeLocation = { latitude: 11.0592, longitude: 76.9645 };
  const tolerance = 1; // Tolerance level in kilometers (1 km)

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const isPresent = isWithinRange(
            latitude,
            longitude,
            collegeLocation.latitude,
            collegeLocation.longitude,
            tolerance
          );
          setStatus(isPresent ? 'You are present' : 'You are absent');
        },
        (error) => {
          console.error(error);
          alert('Unable to retrieve your location.');
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }, []);

  const isWithinRange = (lat1, lon1, lat2, lon2, tolerance) => {
    // Haversine formula to calculate distance
    const toRad = (value) => (value * Math.PI) / 180;
    const R = 6371; // Radius of the Earth in kilometers

    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers

    return distance <= tolerance; // Check if within the tolerance range
  };

  return (
    <div>
      <h1>Attendance Checker</h1>
      {status !== null ? (
        <p>{status}</p>
      ) : (
        <p>Checking your location...</p>
      )}
    </div>
  );
};

export default AttendanceChecker;
