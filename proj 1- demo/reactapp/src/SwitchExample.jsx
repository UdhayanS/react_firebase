import React, { useState } from 'react';
import { locations } from './locations'; // Import the static list of locations

const DistanceCalculator = () => {
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [distance, setDistance] = useState(null);

  const calculateDistance = () => {
    const fromCoords = locations[fromLocation];
    const toCoords = locations[toLocation];

    if (fromCoords && toCoords) {
      const distance = haversineDistance(
        fromCoords.latitude,
        fromCoords.longitude,
        toCoords.latitude,
        toCoords.longitude
      );
      setDistance(distance);
    } else {
      alert("Invalid location names. Please select valid locations.");
    }
  };

  // Haversine formula to calculate distance between two coordinates
  const haversineDistance = (lat1, lon1, lat2, lon2) => {
    const toRad = (value) => (value * Math.PI) / 180;
    const R = 6371; // Radius of the Earth in kilometers

    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in kilometers
  };

  return (
    <div>
      <h1>Distance Calculator</h1>
      <div>
        <h2>From Location</h2>
        <select value={fromLocation} onChange={(e) => setFromLocation(e.target.value)}>
          <option value="">Select a city</option>
          {Object.keys(locations).map((city) => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
      </div>
      <div>
        <h2>To Location</h2>
        <select value={toLocation} onChange={(e) => setToLocation(e.target.value)}>
          <option value="">Select a city</option>
          {Object.keys(locations).map((city) => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
      </div>
      <button onClick={calculateDistance}>Calculate Distance</button>
      {distance !== null && (
        <p>The distance between the two locations is {distance.toFixed(2)} kilometers.</p>
      )}
    </div>
  );
};

export default DistanceCalculator;
