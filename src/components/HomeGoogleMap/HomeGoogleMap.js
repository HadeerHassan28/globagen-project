import React from "react";
//import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

import { Map, Marker } from "@googlemaps/react-wrapper";
const HomeGoogleMap = () => {
  // const center = [{ lat: 44, lng: -80 }];
  //const center = useMemo(() => ({ lat: 44, lng: -80 }), []);
  //   const { isLoaded } = useLoadScript({
  //     googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  //      googleMapsApiKey: "AIzaSyD0ObDD1_qe4RuAlhc-sX_NoDK77x2OQnE",
  //   });
  //   if (!isLoaded)
  //     return (
  //       <div
  //         className="container d-flex justify-content-center align-items-center"
  //         style={{ color: isTheme === true ? "white" : "#071848" }}
  //       >
  //         Loading...
  //       </div>
  //     );
  const customMapStyles = [
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#C9D6DF" }],
    },
    {
      // featureType: "landscape",
      // elementType: "geometry",
      // stylers: [{ color: "#F3F4F6" }],
    },
  ];
  return (
    //  <GoogleMap zoom={10} center={center} mapContainerClassName="mapContanier">
    //    <Marker position={center} />
    //  </GoogleMap>
    <Map
      apiKey="AIzaSyD0ObDD1_qe4RuAlhc-sX_NoDK77x2OQnE"
      defaultZoom={8}
      defaultCenter={{ lat: 37.7749, lng: -122.4194 }}
      defaultOptions={{ styles: customMapStyles, disableDefaultUI: true }}
    >
      <Marker position={{ lat: 37.7749, lng: -122.4194 }} />
    </Map>
  );
};

export default HomeGoogleMap;
