// rafce
import { listCamping } from "@/api/camping";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
const MapHome = () => {
  const [landmarks, setLandmarks] = useState([]);

  useEffect(() => {
    // code first time render
    hdlGetLandmark();
  }, []);

  const hdlGetLandmark = () => {
    // code
    listCamping()
      .then((res) => setLandmarks(res.data.result))
      .catch((err) => console.log(err));
  };

  // console.log(landmarks)

  return (
    <div>
      <MapContainer
        className="h-[50vh] rounded-md z-0"
        center={[13, 100]}
        zoom={7}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {landmarks.map((item) => {
          return (
            <Marker position={[item.lat, item.lng]}>
              <Popup>
                {item.title}
                <br /> {item.description}
              </Popup>
            </Marker>
          );
        })}
        
      </MapContainer>
    </div>
  );
};
export default MapHome;
