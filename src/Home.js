import { useLoadScript } from "@react-google-maps/api";
import { RotatingLines } from "react-loader-spinner";
import Map from "./Map";

const Home = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });
  return (
    <div className="hero min-h-[55vh] bg-base-200">
      {!isLoaded ? (
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      ) : (
        <Map />
      )}
    </div>
  );
};

export default Home;
