import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import Chat from "./pages/Chat";
import Favoritos from "./pages/Favoritos";
import HistorialColas from "./pages/HistorialColas";
import Inicio from "./pages/Inicio";
import InicioSesionLayout from "./components/InicioSesionLayout";
import InicioSesion from "./pages/InicioSesion";
import ListaEspera from "./pages/ListaEspera";
import PerfilUsuario from "./pages/PerfilUsuario";
import Registro from "./pages/Registro";
import RegistroVehiculo from "./pages/RegistroVehiculo";
import Auth from "./components/Auth";
import UnAuth from "./components/UnAuth";

const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="login" element={<InicioSesion />} />
      <Route path="registro" element={<Registro />} />

      <Route path="/" element={<Inicio />} />
      <Route path="perfil" element={<PerfilUsuario />} />
      <Route path="historial" element={<HistorialColas />} />
      <Route path="favoritos" element={<Favoritos />} />
      <Route path="chat" element={<Chat />} />
      <Route path="registroVehiculo" element={<RegistroVehiculo />} />
      <Route path="listaEspera" element={<ListaEspera />} />
    </Routes>
  );
};

export default App;
//  <Route path="/" element={<Navigate to="login" replace />} />
//     <Route
//       element={
//         <UnAuth>
//           <InicioSesionLayout />
//         </UnAuth>
//       }
//     >
//       <Route path="login" element={<InicioSesion />} />
//       <Route path="registro" element={<Registro />} />
//     </Route>
//     <Route
//       element={
//         <Auth>
//           <Outlet />
//         </Auth>
//       }
//     ></Route>
