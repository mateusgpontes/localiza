import React, { useState, useEffect } from 'react';

function App() {
  const [location, setLocation] = useState({});

  useEffect(() => {
    navigator.geolocation.watchPosition(handlePositionReceived);
  }, []);

  function handlePositionReceived({coords}){
    const { latitude, longitude} = coords;

    setLocation({ latitude, longitude });  
  }

  return (
    <>
      <p>Latitude: {location.latitude}</p>
      <p>Longitude: {location.longitude}</p>
    </>
  );
}

export default App;
