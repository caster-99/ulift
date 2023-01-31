import React, { Component } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const loader = new Loader({
  apiKey: "",
  version: "weekly",
  libraries: ["places", "drawing"],
});

const rendererOptions: object = {
  suppressMarkers: true,
};

const ucab: object = { lat: 8.296677954778339, lng: -62.71350327511522 };

export default class RutaUsuario extends Component<
  {},
  { google: any; map: any; markers: Array<{ lat: number; lng: number }>; finalMarker: any }
> {
  googleMapDiv!: HTMLElement | any;

  constructor(props: any) {
    super(props);
    this.state = {
      google: null,
      map: null,
      markers: [],
      finalMarker: null,
    };
    this.handleMapClick = this.handleMapClick.bind(this);
    this.calculateAndDisplayRoute = this.calculateAndDisplayRoute.bind(this);
  }

  componentDidMount() {
    let self = this;
    const defaultMapOptions = {
      center: {
        lat: 8.296423157514385,
        lng: -62.71283272286731,
      },
      zoom: 15,
    };
    loader.load().then((google) => {
      const map = new google.maps.Map(self.googleMapDiv, defaultMapOptions);

      const directionsService = new google.maps.DirectionsService();
      const directionsRenderer = new google.maps.DirectionsRenderer(rendererOptions);

      this.setState({
        google: google,
        map: map,
        markers: [],
        finalMarker: null,
      });

      //add a marker to the map using on click event
      google.maps.event.addListener(map, "click", function (e: any) {
        let latLng = { lat: e.latLng.lat(), lng: e.latLng.lng() };

        console.log(latLng);

        self.setState({
          markers: [...self.state.markers, latLng],
        });

        self.handleMapClick(e, directionsService, directionsRenderer, latLng);
      });
    });
  }

  handleMapClick(e: any, directionsService: any, directionsRenderer: any, latLng: any) {
    console.log(e);

    console.log(directionsService);
    console.log(directionsRenderer);

    console.log(this.state.markers);

    directionsRenderer.setMap(this.state.map);
    this.calculateAndDisplayRoute(directionsService, directionsRenderer, latLng);
  }

  calculateAndDisplayRoute(directionsService: any, directionsRenderer: any, latLng: any) {
    const waypts = [];

    const { markers } = this.state;

    markers.push(latLng);

    for (let i = 0; i < markers.length - 1; i++) {
      waypts.push({
        location: markers[i],
        stopover: true,
      });
    }

    const destiny: google.maps.LatLngLiteral = latLng;

    console.log("//////////////////////////");
    console.log(destiny);

    directionsService
      .route({
        origin: ucab,
        destination: destiny,
        travelMode: google.maps.TravelMode.DRIVING,
        waypoints: waypts,
      })
      .then((response: any) => {
        if (this.state.finalMarker != null) {
          this.state.finalMarker.setMap(null);
        }

        const latlng: google.maps.LatLngLiteral = this.state.markers[this.state.markers.length - 1];

        const mark = new google.maps.Marker({
          position: latlng,
          map: this.state.map,
        });

        this.setState({
          finalMarker: mark,
        });

        directionsRenderer.setDirections(response);
      })
      .catch((e: any) => console.log(e));
  }

  render() {
    return (
      <div
        ref={(ref) => {
          this.googleMapDiv = ref;
        }}
        style={{ height: "100vh", width: "100%" }}
      ></div>
    );
  }
}
