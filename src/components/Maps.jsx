import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import React from "react";

// const apiKey = "AIzaSyBBLceyEIM_o7hbzub4CBI4BrVifOtKmO0";

const Maps = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyAEKujCTuTej_D0WGKQ44trCouWWYROrCk",
  });
  
  const options ={streetViewControl: false, mapTypeControl:false,  fullscreenControl: false}
  const center = {
    lat: 19.1073907,
    lng: 72.8803242
  }
  const mapContainerStyle = {
    width: "100%" ,// Set the width from props
    height: "100%", // Set the height from props
  };
// console.log(isLoaded)
  return (
    <>
      {isLoaded ? (
        // <div>Map</div>
        <GoogleMap center={center} zoom={20} mapContainerStyle={mapContainerStyle}  options={options}>
          <MarkerF position={center} />
        </GoogleMap>
      ) : (
        <div>Not able to load maps</div>
      )}
    </>
  );
};

export default Maps;
