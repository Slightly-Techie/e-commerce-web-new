import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import { LatLngTuple } from "./UserLocation";

interface MapProps {
  coordinates: LatLngTuple;
}

const UpdateMapView = ({ coordinates }: { coordinates: LatLngTuple }) => {
  const map = useMap();
  useEffect(() => {
    if (coordinates) {
      map.setView(coordinates, map.getZoom(), {
        animate: true,
      });
    }
  }, [coordinates, map]);

  return null;
};

const Map = ({ coordinates }: MapProps) => {
  return (
    <div className="h-[201px] w-full overflow-hidden rounded-2xl border">
      <MapContainer
        center={coordinates}
        zoom={13}
        scrollWheelZoom={false}
        className="h-[201px]"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <UpdateMapView coordinates={coordinates} />
        <Marker position={coordinates} />
      </MapContainer>
    </div>
  );
};

export default Map;
