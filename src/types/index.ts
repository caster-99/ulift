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
  path:string;
}

export interface Message {
  senderID: string,
  receiverID: string,
  dateMessage: Date,
  messageID: string,
  statusMessage: boolean,
  room: string
}

export interface OptionMessage {
  messageID: string,
  description: string
}
