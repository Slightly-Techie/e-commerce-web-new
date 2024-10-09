import useLatLng from "@/hooks/useLatLng";
import { cn } from "@/lib";
import { FC, useEffect, useState } from "react";
import locationIcon from "../../assets/icons/navbar/location.svg";

interface LocationProps {
  noPadding?: boolean;
}

const Location: FC<LocationProps> = ({ noPadding }) => {
  const [location, setLocation] = useState<any>();

  const { latitude, longitude } = useLatLng();

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
    <div
      className={`flex w-full items-center gap-2.5 ${cn(
        !noPadding && "px-2 md:px-3",
      )}`}
    >
      <img src={locationIcon} alt="" />
      <span className="font-medium text-gray600">
        {!location ? "N/A" : location.country}
      </span>
    </div>
  );
};

export default Location;
