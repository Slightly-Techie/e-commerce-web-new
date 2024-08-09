import { useState } from "react";

const useLatLng = () => {
  const [latitude, setLatitude] = useState<number | null>();
  const [longitude, setLongitude] = useState<number | null>();

  const successCallback = (position: GeolocationPosition) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  };

  const errorCallback = (error: GeolocationPositionError) => {
    setLatitude(null);
    setLongitude(null);
  };

  navigator.geolocation.watchPosition(successCallback, errorCallback);

  return {
    latitude,
    longitude,
  };
};

export default useLatLng;
