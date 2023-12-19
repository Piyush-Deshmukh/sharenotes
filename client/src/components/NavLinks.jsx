import { useDashboardContext } from '../pages/DashboardLayout';
import links from '../utils/links';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
  const { user, toggleSidebar } = useDashboardContext();

  return (
    <div className='nav-links'>
      {links.map((link) => {
        const { text, path } = link;
        
        // admin user
        const { role } = user;
        if (role !== 'admin' && path === 'admin') return;
        
        return (
          <NavLink
            to={path}
            key={text}
            onClick={toggleSidebar}
            className='nav-item'
            end
          >
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;