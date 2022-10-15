import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Chat from "./pages/Chat";
import Favoritos from "./pages/Favoritos";
import HistorialColas from "./pages/HistorialColas";
import Inicio from "./pages/Inicio";
import InicioSesion from "./pages/InicioSesion";
import ListaEspera from "./pages/ListaEspera";
import PerfilUsuario from "./pages/PerfilUsuario";
import Registro from "./pages/Registro";
import RegistroVehiculo from "./pages/RegistroVehiculo";
import InicioSesionLayout from "./components/InicioSesionLayout";

const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="login" replace />} />
      <Route element={<InicioSesionLayout />}>
        <Route path="login" element={<InicioSesion />} />
        <Route path="register" element={<Registro />} />
      </Route>
      <Route path="inicio" element={<Inicio />} />
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
