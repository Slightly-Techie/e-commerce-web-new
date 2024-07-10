import { useEffect, useState } from "react";
import locationIcon from "../../assets/icons/navbar/location.svg";

const Location = () => {
  const [latitude, setLatitude] = useState<number | null>();
  const [longitude, setLongitude] = useState<number | null>();
  const [location, setLocation] = useState<any>();

  const successCallback = (position: GeolocationPosition) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  };

  const errorCallback = (error: GeolocationPositionError) => {
    setLatitude(null);
    setLongitude(null);
  };

  navigator.geolocation.watchPosition(successCallback, errorCallback);

  useEffect(() => {
    if (!latitude && !longitude) return;

    const getLocationData = async () => {
      try {
        const res = await fetch(
          `https://us1.locationiq.com/v1/reverse?key=pk.fd80d16f37a4abd1f0c95a022752918b&lat=${latitude}&lon=${longitude}&format=json&`,
        );

        if (!res.ok) {
          throw new Error();
        }

        const data = await res.json();
        setLocation(data.address);
      } catch (error) {}
    };

    getLocationData();
  }, [latitude, longitude]);

  return (
    <div className="flex w-full items-center gap-2.5 px-2 md:px-3">
      <img src={locationIcon} alt="" />
      <span className="font-medium text-gray600">
        {!location ? "N/A" : location.country}
      </span>
    </div>
  );
};

export default Location;
