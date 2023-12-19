import { Link, useRouteError } from 'react-router-dom';
import img from '../assets/images/not-found.gif';
import Wrapper from '../assets/wrappers/ErrorPage';

const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <h3>Whoops! the page ran away</h3>
          <p>We can't seem to find the page you're looking for</p>
          <img src={img} alt='not found' />
          <Link to='/dashboard'>back home</Link>
        </div>
      </Wrapper>
    );
  }
  
  return (
    <Wrapper>
      <div>
        <h3>something went wrong</h3>
      </div>
    </Wrapper>
  );
};

export default Error;