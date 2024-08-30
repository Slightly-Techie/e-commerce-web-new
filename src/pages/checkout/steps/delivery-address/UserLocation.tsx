import mapToggle from "@/assets/icons/checkout/maps -toggle.svg";
import mapToggleHidden from "@/assets/icons/checkout/maps Toggle-hidden.svg";
import Input from "@/components/Input";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { UseFormRegister } from "react-hook-form";
import { FormValues } from "../CheckoutSteps";
import Map from "./Map";

export type LatLngTuple = [number, number];

interface UserLocationProps {
  register: UseFormRegister<FormValues>;
  userLocation: string;
  setUserLocation: Dispatch<SetStateAction<string>>;
}

const defaultCoordinates: LatLngTuple = [5.5571096, -0.2012376];

const UserLocation = ({
  register,
  userLocation,
  setUserLocation,
}: UserLocationProps) => {
  const [isHidden, setIsHidden] = useState(false);
  // const [inputValue, setInputValue] = useState("");
  const [coordinates, setCoordinates] =
    useState<LatLngTuple>(defaultCoordinates);

  console.log(userLocation);

  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${userLocation}`,
        );
        if (!response.ok) throw new Error();

        const data = await response.json();

        if (data.length > 0 && userLocation.trim() !== "") {
          setCoordinates([parseFloat(data[0].lat), parseFloat(data[0].lon)]);
        } else {
          setCoordinates(defaultCoordinates);
        }
      } catch (error) {
        console.error("Error fetching coordinates:", error);
      }
    };

    fetchCoordinates();
  }, [userLocation]);

  return (
    <>
      <div className="mb-6 flex items-end gap-4">
        <Input
          register={register}
          id="location"
          label="Where are you located?"
          placeholder="Eg Accra"
          setInputValue={setUserLocation}
        />
        <img
          src={!isHidden ? mapToggle : mapToggleHidden}
          alt=""
          className="h-[53px] w-[53px] cursor-pointer hover:opacity-85"
          onClick={() => setIsHidden((prev) => !prev)}
        />
      </div>

      {!isHidden && <Map coordinates={coordinates} />}
    </>
  );
};

export default UserLocation;
