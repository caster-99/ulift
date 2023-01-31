//Componente del mapa con las credenciales de la API de Google Maps

import { Box } from "@mui/material";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { useEffect } from "react";
const { Loader } = require("@googlemaps/js-api-loader");

declare global {
  interface Window {
    initMap: () => void;
  }
}
let map: google.maps.Map;

const Map = (): JSX.Element => {
  // objeto para cargar el api de google
  const loader = new Loader({
    apiKey: "",
    version: "weekly",
    libraries: ["places"],
  });

  const mapOptions = {
    center: {
      lat: 8.296423157514385,
      lng: -62.71283272286731,
    },
    zoom: 15,
  };

  const ucab = { lat: 8.296423157514385, lng: -62.71283272286731 };

  map = new google.maps.Map(document.getElementById("map") as HTMLElement, mapOptions);
  const marker = new google.maps.Marker({
    position: ucab,
    map: map,
  });

  // const marker= [];

  // loader
  //   .load() //cargar el api
  //   .then((google) => {
  //     //obtener el mapa

  //     // esto tienes que correrlo cuando el mapa se cargue en el front
  //     map.addListener("click", (e) => {
  //       //verifica que no existan marcadores ya creados
  //       if (marker.length == 0) {
  //         marker.push(placeMarker(e.latLng, map));
  //         map.panTo(e.latLng);
  //         //lo que vas a enviar en el registro
  //         const lat = e.latLng.lat(); //Latitud
  //         const lng = e.latLng.lng(); //Longitud
  //         //evento de si das click a un marcador lo elimina
  //         marker[0].addListener("click", (e) => {
  //           marker[0].setMap(null);
  //           marker.pop();
  //         });
  //       }
  //     });
  //   })
  //   .catch((e) => {
  //     throw e; //si se rompe no sé
  //   });

  return <div id="map">window.initMap</div>;
};

export default Map;
