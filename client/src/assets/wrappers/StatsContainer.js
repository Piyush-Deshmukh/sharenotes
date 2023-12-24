import styled from 'styled-components';

const Wrapper = styled.section`
  display: grid;
  gap: .5rem;
  grid-template-columns: 1fr;
  .users-list {  
    background-color: #131315;
    padding: 16px 32px 44px;
    border-radius: 37px;
  }
  .col-head {
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
    padding: 2rem;
    border-bottom: 2px solid #8a8a93;
    color: #8a8a93;
    font-size: 1.2rem;
  }
  .single-user {
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
    padding: 2rem;
    border-bottom: 2px solid #8a8a93;
  }
  .single-user h1 {
    text-transform: capitalize;
  }
  .col-head :nth-child(2) {
    display: none;
  }
  .single-user :nth-child(2) {
    display: none;
    text-transform: none;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    .users-list {
      grid-column: 1 / 3;
    }
    .col-head {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .single-user {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .col-head :nth-child(2) {
      display: block;
    }
    .single-user :nth-child(2) {
      display: block;
    }
  }
`;
export default Wrapper;
