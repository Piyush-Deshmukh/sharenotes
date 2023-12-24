import Wrapper from '../assets/wrappers/Navbar';
import Logo from './Logo';
import { useDashboardContext } from '../pages/DashboardLayout';
import NavLinks from './NavLinks';
import { FaBars } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';

const Navbar = ({ landing }) => {
  const navigate = useNavigate();

  const loginDemoUser = async () => {
    const data = {
      email: 'test@test.com',
      password: 'secret123',
    };
    try {
      await customFetch.post('/auth/login', data);
      toast.success('take a test drive');
      navigate('/dashboard');
    } catch (error) {
      toast.error(error?.response?.data?.msg);
    }
  };
  
  if(landing){
    return (
      <Wrapper>
        <div className='nav-center'>
          <Logo landing />
          <button type='button' className='take-tour' onClick={loginDemoUser}>
            take a tour <p>.</p>
          </button>
        </div>
      </Wrapper>
    );
  };
  
  const { toggleSidebar } = useDashboardContext();

  return (
    <Wrapper>
      <div className='nav-center'>
        <Logo />
        <NavLinks />
        <button type='button' className='toggle-btn' onClick={toggleSidebar}>
          <FaBars />
        </button>
      </div>
    </Wrapper>
  );
};

export default Navbar;