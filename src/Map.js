import { useMemo, useRef } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";

const Map = () => {
  const center = useMemo(
    () => ({
      lat: 34.0522,
      lng: -118.2437,
    }),
    []
  );

  const mapContainer = {
    width: "30rem",
    height: "35rem",
  };

  const options = useMemo(() => ({}), []);

  const mapRef = useRef();

  return (
    <div className="flex ">
      <GoogleMap
        zoom={10}
        center={center}
        mapContainerStyle={mapContainer}
        options={{ clickableIcons: false, disableDefaultUI: true }}
      ></GoogleMap>
    </div>
  );
};

export default Map;
