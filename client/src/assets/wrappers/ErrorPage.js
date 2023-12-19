import styled from 'styled-components';

const Wrapper = styled.main`
  min-height: 100vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #131315;
  img {
    width: 90vw;
    max-width: 400px;
    display: block;
    margin-bottom: 2rem;
  }
  h3 {
    margin-bottom: 0.5rem;
  }
  p {
    line-height: 1.5;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    color: white;
  }
  a {
    color: white;
    text-decoration: underline #ff5e1a;
    text-transform: capitalize;
  }
`;

export default Wrapper;
