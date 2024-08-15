// CurrentLocationFinder.jsx
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const CurrentLocationFinder = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
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

  return (
    <div>
      {location ? (
        <>
          <h1>
            Current Location: Latitude {location.latitude.toFixed(4)}, Longitude {location.longitude.toFixed(4)}
          </h1>
          <MapContainer
            center={[location.latitude, location.longitude]}
            zoom={13}
            style={{ height: '500px', width: '100%' }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker
              position={[location.latitude, location.longitude]}
              icon={L.icon({
                iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
                shadowSize: [41, 41]
              })}
            >
              <Popup>
                You are here.
              </Popup>
            </Marker>
          </MapContainer>
        </>
      ) : (
        <p>Loading your location...</p>
      )}
    </div>
  );
};

export default CurrentLocationFinder;
