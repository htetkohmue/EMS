import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import TailorList from './pages/ERP/TailorList';
import Login from './pages/auth/Login';
import NotFound from './pages/common/Page404';
import DashboardApp from './pages/ERP/DashboardApp';
import TailorsRegister from './pages/ERP/TailorsRegister';


// ----------------------------------------------------------------------

export default function Router(props) {
  return useRoutes([
    {
      path: '/erp',
      element: <DashboardLayout props={props} />,
      children: [
        { path: 'dashboard/app', element: <DashboardApp /> },
        { path: 'tailor/tailors-list', element: <TailorList /> },
        { path: 'tailor/tailors-register', element: <TailorsRegister /> },
        { path: 'tailor/tailors-register/:id', element: <TailorsRegister /> },
      ],
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to="/Login" /> },
        { path: 'login', element: <Login /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
