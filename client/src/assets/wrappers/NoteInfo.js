import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  .note-icon {
    font-size: 1rem;
    margin-right: 1rem;
    display: flex;
    align-items: center;
  }
  .note-text {
    text-transform: capitalize;
    letter-spacing: 1px;
  }
  a {
    text-decoration: underline 2px #ff5e1a;
  }
`;
export default Wrapper;
