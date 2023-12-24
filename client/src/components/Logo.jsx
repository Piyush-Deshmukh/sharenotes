import { Link } from 'react-router-dom';

const Logo = ({ landing }) => {
  return (
    <Link to={`${landing ? '/' : '/dashboard'}`} className='logo'>
      <h1>share notes<span>.</span></h1>
    </Link>
  );
};

export default Logo;