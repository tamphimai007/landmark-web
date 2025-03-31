// rafce

import { MapContainer, useMap } from "react-leaflet";
import Layers from "./Layers";
import useCampingStore from "@/store/camping-store";

const MyCenter = () => {
  const center = useCampingStore((state) => state.center);
  // console.log(center)
  const map = useMap();

  if (!center) {
    return null;
  }

  map.flyTo(center, 7);

  return null;
};

const MapHome = () => {
  return (
    <div>
      <MapContainer
        className="h-[50vh] rounded-md z-0"
        center={[13, 100]}
        zoom={7}
        scrollWheelZoom={true}
      >
        <Layers />
        <MyCenter />
      </MapContainer>
    </div>
  );
};
export default MapHome;
