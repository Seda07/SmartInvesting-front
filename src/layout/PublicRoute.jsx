import { Outlet } from 'react-router-dom'
import LogoGreen from '@/components/logo/Logo'

const PublicRoute = () => {
  return (
    <div className="min-h-screen flex flex-col items-center gap-5 justify-center bg-white">
      <LogoGreen/>
      <div className="w-80 mx-2 max-w-md">
        <Outlet />
      </div>
    </div>
  );
};

export default PublicRoute