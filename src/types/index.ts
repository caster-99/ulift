export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  genre: string;
  photo: File;
  rides: number;
  rating: number;
  emergencyContact: string;
  emergencyName: string;
}
