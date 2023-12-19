import styled from 'styled-components';

const Wrapper = styled.section`
  margin-top: 8px;
  background-color: #131315;
  padding: 16px 32px 44px;
  border-radius: 37px;
  .no-notes {
    height: 30rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
  .such-empty {
    font-size: 1rem;
    color: #8a8a93;
  }
  h5 {
    font-weight: 600;
    font-size: 2rem;
    margin: 1.5rem 0 2rem;
  }
  .notes {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }
  @media (min-width: 992px) {
    .notes {
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
  }
  @media (min-width: 1120px) {
    .notes {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;
export default Wrapper;
