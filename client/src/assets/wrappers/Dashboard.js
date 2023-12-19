import styled from 'styled-components';

const Wrapper = styled.section`
  overflow-x: hidden;
  .dashboard {
    display: grid;
    grid-template-columns: 1fr;
  }
  .dashboard-page {
    width: 90vw;
    margin: 0 auto;
    padding: .5rem 0 2rem;
  }
  @media (min-width: 992px) {
    .dashboard-page {
      width: 90%;
    }
  }
`;
export default Wrapper;
