import { Component } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { Box, Container, Stack, Button, TextField } from "@mui/material";
import SubPaginasHeader from "../components/SubPaginasHeader";
import { LoadingButton } from "@mui/lab";
import { Field, Form, Formik, FormikHelpers } from "formik";
import * as yup from "yup";
import axios from "axios";

interface Values {
  nombreRuta: string;
  paradas: [];
}

const initialValues: Values = {
  nombreRuta: "",
  paradas: [],
};

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
  {
    google: any;
    map: any;
    markers: Array<{ lat: number; lng: number }>;
    finalMarker: any;
    path: any;
    name: string;
  }
> {
  googleMapDiv!: HTMLElement | any;

  constructor(props: any) {
    super(props);
    this.state = {
      google: null,
      map: null,
      markers: [],
      finalMarker: null,
      path: "",
      name: "",
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

        self.setState({
          markers: [...self.state.markers, latLng],
        });

        self.handleMapClick(e, directionsService, directionsRenderer, latLng);
      });
    });
  }

  handleMapClick(e: any, directionsService: any, directionsRenderer: any, latLng: any) {
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

        this.setState({ path: JSON.stringify(response.routes[0].overview_path) });

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

  retroceder(e: any, directionsService: any, directionsRenderer: any, latLng: any) {
    if (this.state.markers.length === 1) {
      directionsRenderer.setDirections({ routes: [] });

      this.state.finalMarker.setMap(null);
    }

    if (this.state.markers.length > 1) {
      this.state.markers.pop();
      directionsRenderer.setMap(this.state.map);
      this.calculateAndDisplayRoute(directionsService, directionsRenderer, latLng);
    }
  }

  render() {
    return (
      <Box>
        <SubPaginasHeader pageName="Registro de Ruta" />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Container
            maxWidth={false}
            sx={{
              maxWidth: 450,
              mb: 3,
              mt: 6,
              position: "relative",
            }}
          >
            <TextField
              id="nombreRuta"
              label="Nombre de la ruta"
              variant="outlined"
              required
              fullWidth
              onChange={(e) => this.setState({ name: e.target.value })}
            />
            <Box
              ref={(ref) => {
                this.googleMapDiv = ref;
              }}
              sx={{ height: "400px", width: "100%", mb: 3, mt: 3 }}
            ></Box>
            {/* <Button> Retroceder</Button> */}
            <Button
              type="submit"
              variant="contained"
              onClick={() => {
                var data = JSON.stringify({
                  path: this.state.path,
                  name: this.state.name,
                });

                const token = localStorage.getItem("token");

                var config = {
                  method: "post",
                  url: "https://ulift-backend.up.railway.app/api/user/route",
                  headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                  },
                  data: data,
                };

                axios(config)
                  .then(function (response) {
                    console.log(JSON.stringify(response.data));
                    alert("Ruta registrada con éxito, puedes registrar otra o ir a tu perfil.");
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
              }}
              fullWidth
            >
              Registrar ruta
            </Button>
          </Container>
        </Box>
      </Box>
    );
  }
}
