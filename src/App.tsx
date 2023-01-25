import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import Chat from "./pages/Chats";
import ChatLayout from "./pages/ChatPrivado";
import ColaProceso from "./pages/ColaProceso";
import Favoritos from "./pages/Favoritos";
import Faq from "./pages/Faq";
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
import PerfilExterno from "./pages/PerfilExterno";
import RegistroRuta from "./pages/RegistroRuta";
import RegistroDestino from "./pages/RegistroDestino";
import WrapperPerfilExterno from "./pages/WrapperPerfilExterno";
import io from "socket.io-client";
import axios from "axios";

//const socket = io("http://localhost:3001");

interface ColasDisponibles {
  id: string;
  email: string;
  nameU: string;
  lastname: string;
  liftID: string;
  photo: string;
  role: string;
}
const App = (): JSX.Element => {
  // var numeroEmergencia = "";
  // var tipoUsuario: string;
  // const token = localStorage.getItem("token");
  // var numEmer = {
  //   method: "get",
  //   url: "https://ulift-backend.up.railway.app/api/user/profile",
  //   headers: { Authorization: `Bearer ${token}` },
  // };

  // var config = {
  //   method: "get",
  //   url: "https://ulift-backend.up.railway.app/api/user/status",
  //   headers: { Authorization: `Bearer ${token}` },
  // };

  // var requestAConductores = {
  //   method: "get",
  //   url: "https://ulift-backend.up.railway.app/api/lift/requests",
  //   headers: { Authorization: `Bearer ${token}` },
  // };

  // var getMode = {
  //   method: "get",
  //   url: "https://ulift-backend.up.railway.app/api/user/mode",
  //   headers: { Authorization: `Bearer ${token}` },
  // };

  // axios(getMode)
  //   .then(function (response) {
  //     localStorage.setItem("mode", JSON.stringify(response.data.mode));
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });

  // axios(config).then(function (response) {
  //   tipoUsuario = response.data.status;
  // });

  // axios(numEmer).then(function (response) {
  //   numeroEmergencia = response.data.user.emergencyContact;
  //   console.log(numeroEmergencia);
  // });

  // axios(requestAConductores).then(function (response) {
  //   var requests: ColasDisponibles[] = response.data.requests;
  //   localStorage.setItem("requests", JSON.stringify(requests));
  // });

  return (
    <>
      <Routes>
        <Route element={<InicioSesionLayout />}>
          <Route element={<Outlet />}></Route>
          <Route path="login" element={<InicioSesion />} />
          <Route path="signup" element={<Registro />} />
        </Route>
        <Route path="/" element={<Inicio />} />
        <Route path="perfil" element={<PerfilUsuario />} />
        <Route path="historial" element={<HistorialColas />} />
        <Route path="favoritos" element={<Favoritos />} />
        <Route path="colaEnProceso/:tipo" element={<ColaProceso />} />
        <Route path="chats" element={<Chat />} />
        <Route path="registroVehiculo" element={<RegistroVehiculo />} />
        <Route path="listaEspera/:tipo" element={<ListaEspera />} />
        <Route path="faq" element={<Faq />} />
        <Route path="chatPrivado/:userId" element={<ChatLayout />} />
        <Route path="perfilExterno/:userId" element={<WrapperPerfilExterno />} />
        <Route path="registroRuta" element={<RegistroRuta />} />
        <Route path="registroDestino" element={<RegistroDestino />} />
      </Routes>
    </>
  );
};

export default App;
