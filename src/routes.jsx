import { Suspense, lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

// import BaseLayout from './layouts/BaseLayout';
import SuspenseLoader from './components/SuspenseLoader';
import DashboardLayout from './layouts/DashboardLayout';
import AuthLayout from './layouts/AuthLayout';

// eslint-disable-next-line react/display-name
export const Loader = (Component) => (props) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

// Status
const Status404 = Loader(lazy(() => import('src/pages/Status404')));

// Auth
const Login = Loader(lazy(() => import('src/pages/Login')));

// Dashboard
const Dashboard = Loader(lazy(() => import('src/pages/Dashboard')));

const routes = [
  {
    path: '/',
    children: [
      {
        path: '',
        element: <Navigate to="/login" replace />
      },
      {
        path: 'login',
        element: (
          <AuthLayout>
            <Login />
          </AuthLayout>
        )
      },
    ]
  },
  {
    path: '/dashboard',
    element: (
        <DashboardLayout />
    ),
    children: [
      {
        path: '',
        element: <Dashboard />
      }
    ]
  },
  {
    path: '*',
    element: <Status404 />
  },
];

const Routes = () => {
  const routing = useRoutes(routes);
  return (
    <>
      {routing}
    </>
  );
}

export default Routes;
