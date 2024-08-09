import mapToggle from "@/assets/icons/checkout/maps -toggle.svg";
import mapToggleHidden from "@/assets/icons/checkout/maps Toggle-hidden.svg";
import Location from "@/components/navbar/Location";
import { useState } from "react";
import Map from "./Map";

const UserLocation = () => {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <>
      <p className="mb-1 block text-sm font-semibold">Where you're located</p>
      <div className="mb-6 flex gap-4">
        <div className="w-full max-w-[361px] rounded-lg border border-gray300 px-4 py-3 text-gray400">
          <Location noPadding />
        </div>
        <img
          src={!isHidden ? mapToggle : mapToggleHidden}
          alt=""
          className="cursor-pointer hover:opacity-85"
          onClick={() => setIsHidden(prev => !prev)}
        />
      </div>

      {!isHidden && <Map />}
    </>
  );
};

export default UserLocation;
