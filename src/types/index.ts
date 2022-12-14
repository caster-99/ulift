export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  gender: string;
  photo: string;
  trips: number;
  rating: number;
  emergencyContact: string;
  emergencyName: string;
  vehicles: Vehicle[];
  destinations: Destination[];
  routes: Route[];
}

export interface Vehicle {
  driverID: string;
  plate: string;
  color: string;
  model: string;
  seats: number;
}

export interface Route {
  driverID: string;
  rNumber: string;
  path: [];
  name: string;
  active: boolean;
}

export interface Destination {
  name: string;
  lat: string;
  lng: string;
}
