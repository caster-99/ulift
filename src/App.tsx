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

const App = (): JSX.Element => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route
          element={
            <UnAuth>
              <InicioSesionLayout />
            </UnAuth>
          }
        >
          <Route path="login" element={<InicioSesion />} />
        </Route>
        <Route
          element={
            <Auth>
              <Outlet />
            </Auth>
          }
        >
          <Route path="/" element={<Inicio />} />
          <Route path="signup" element={<Registro />} />
          <Route path="perfil" element={<PerfilUsuario />} />
          <Route path="historial" element={<HistorialColas />} />
          <Route path="favoritos" element={<Favoritos />} />
          <Route path="colaEnProceso" element={<ColaProceso />} />
          <Route path="chats" element={<Chat />} />
          <Route path="registroVehiculo" element={<RegistroVehiculo />} />
          <Route path="listaEspera" element={<ListaEspera />} />
          <Route path="faq" element={<Faq />} />
          <Route path="chatPrivado/:userId" element={<ChatLayout />} />
          <Route path="perfilExterno/:userId" element={<PerfilExterno />} />
          <Route path="registroRuta" element={<RegistroRuta />} />
          <Route path="registroDestino" element={<RegistroDestino />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

//    <Routes>
//   <Route path="/" element={<Navigate to="login" replace />} />
//   <Route
//     element={
//       <UnAuth>
//         <InicioSesionLayout />
//       </UnAuth>
//     }
//   >
//     <Route path="login" element={<InicioSesion />} />
//     <Route path="signup" element={<Registro />} />
//   </Route>
//   <Route
//     element={
//       <Auth>
//         <Outlet />
//       </Auth>
//     }
//   ></Route>
//   <Route path="/" element={<Inicio />} />
//   <Route path="perfil" element={<PerfilUsuario />} />
//   <Route path="historial" element={<HistorialColas />} />
//   <Route path="favoritos" element={<Favoritos />} />
//   <Route path="colaEnProceso" element={<ColaProceso />} />
//   <Route path="chats" element={<Chat />} />
//   <Route path="registroVehiculo" element={<RegistroVehiculo />} />
//   <Route path="listaEspera" element={<ListaEspera />} />
//   <Route path="faq" element={<Faq />} />
//   <Route path="chatPrivado/:userId" element={<ChatLayout />} />
//   <Route path="perfilExterno/:userId" element={<PerfilExterno />} />
// </Routes>;
