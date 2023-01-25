export interface User {
  id: string;
  name: string;
  email: string;
  lastname: string;
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
  userID: string;
  dNumber: number;
  name: string;
  lat: string;
  lng: string;
}

export interface Lift {
  driverID: string;
  passengerID: string;
  plate: string;
  liftID: string;
  dateL: Date;
  timeL: Date;
  seats: number;
  rdNumber: string;
  rdName: string;
  waitTime: number;
  path: string;
}

export interface Colas {
  color: string;
  date: string;
  email: string;
  lastname: string;
  liftID: number;
  model: string;
  name: string;
  path: string;
  photo: string;
  plate: string;
  rate: number;
  routename: string;
  seats: number;
  time: string;
  waitingTime: number;
}
