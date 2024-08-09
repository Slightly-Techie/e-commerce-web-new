import { MapContainer, TileLayer } from "react-leaflet";

import useLatLng from "@/hooks/useLatLng";
import "leaflet/dist/leaflet.css";

const Map = () => {
  const { latitude, longitude } = useLatLng();

  if (!latitude && !longitude) return;

  return (
    <div className="h-[201px] w-full overflow-hidden rounded-2xl border">
      <MapContainer
        center={[latitude!, longitude!]}
        zoom={13}
        scrollWheelZoom={false}
        className="h-[201px]"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <Marker position={[latitude!, longitude!]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker> */}
      </MapContainer>
    </div>
  );
};

export default Map;
