import { Suspense, lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

// import BaseLayout from './layouts/BaseLayout';
import SuspenseLoader from '../../components/SuspenseLoader';
import DashboardLayout from '../../layouts/DashboardLayout';
import AuthLayout from '../../layouts/AuthLayout';
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
const Signin = Loader(lazy(() => import('src/pages/Signin')));

// Dashboard
const Dashboard = Loader(lazy(() => import('src/pages/Dashboard')));

const Orders = Loader(lazy(() => import('src/pages/Orders')));

const Signup=Loader(lazy(()=> import('src/pages/sign_up')))

const routes = [
  {
    path: '/',
    children: [
      {
        path: '',
        element: <Navigate to="/sign_in" replace />
      },
      {
        path: 'Sign_in',
        element: (
          <AuthLayout>
            <Signin />
          </AuthLayout>
        )
      },
      {
        path: 'Signup',
        element: (
          <AuthLayout>
            <Signup />
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
      },
      {
        path: 'orders',
        element: <Orders/>
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
