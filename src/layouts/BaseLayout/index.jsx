import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

const BaseLayout = ({ children }) => {
  return <>{children || <Outlet />}</>;
};

BaseLayout.propTypes = {
  children: PropTypes.object
};

export default BaseLayout;
