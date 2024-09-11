import { Outlet } from 'react-router-dom';
import LogoGreen from '@/components/logo/Logo';

const PublicRoute = () => {
  return (
    <div className="min-h-screen flex flex-col items-center gap-5 justify-center bg-white">
      {/* Renderiza el logo en la parte superior */}
      <LogoGreen />
      <div className="w-80 mx-2 max-w-md">
        {/* Aquí se renderizan los componentes hijos según la ruta actual */}
        <Outlet />
      </div>
    </div>
  );
};

export default PublicRoute;
