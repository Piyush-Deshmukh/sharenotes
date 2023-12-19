import appHeadIMG from '../assets/images/app-head.svg';
import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/LandingPage'
import { Navbar } from '../components';

const Landing = () => {
  return (
    <Wrapper>
      <div>
        <Navbar landing />
        <div className="page">
          <div className="app-head">
            <img src={appHeadIMG} alt='app head image' />
            <h1>
              share 
              <br /> 
              <p>notes<span>.</span></p>
            </h1>
            <Link to='/register' className='btn register-link'>
              Register
            </Link>
            <Link to='/login' className='btn'>
              Login
            </Link>
          </div>
          <div className="app-info">
            <h1>
              Take notes, make connections, ace your studies with sharenotes. 
              <p className='span-gray'>
                A smarter way to learn, connect and succeed.
              </p>
            </h1>
          </div>
        </div>
        <footer>
          all rights reserved. © 2023
        </footer>
      </div>
    </Wrapper>
  );
};

export default Landing;