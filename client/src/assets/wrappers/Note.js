import styled from 'styled-components';

const Wrapper = styled.article`
  background: #17171a;
  border-radius: 37px;
  display: grid;
  grid-template-rows: 1fr auto;
  header {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid #8a8a93;
    display: flex;
    align-items: center;
    flex-direction: column;    
  }
  header img {
    margin-top: 1rem;
    width: auto;
    height: 15rem;
    max-width: 13rem;
    object-fit: cover;
    border-radius: 15px;
  }
  .info {
    align-self: flex-start;
    margin-left: .2rem;
    h5 {
      margin-bottom: 0.5rem;
      line-height: 30px;
    }
    p {
      margin-left: .1rem;
      text-transform: capitalize;
      letter-spacing: 2px;
      color: #8a8a93;
    }
  }
  .content {
    padding: 1rem 1.5rem;
  }
  .content-center {
    display: grid;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
    grid-template-columns: 1fr;
    row-gap: 1.5rem;
    align-items: center;
    @media (min-width: 576px) {
      grid-template-columns: 1fr 1fr;
    }
  }
  .user-info {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .user-info img {
    border: 3px solid #ff5e1a;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #131315;
  }
  .actions {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 2rem 2rem;
  }
  .edit-btn,
  .delete-btn {
    height: 30px;
    font-size: 1rem;
    display: flex;
    align-items: center;
    border-radius: 8px;
    padding: 1rem;
    background-color: #ff5e1a;
    color: white;
    font-weight: 600;
    letter-spacing: .5px;
    cursor: pointer;
  }
  .edit-btn {
    margin-right: 0.5rem;
  }
  .delete-btn {
    border: none;
  }

  @media (min-width: 992px) {
    header img {
      height: 20rem;
      max-width: 20rem;
    }
    .info {
      margin-left: 2.5rem;
    }
  }
  @media (min-width: 1120px) {
    .info {
      margin-left: 1.8rem;
    }
  }
`;

export default Wrapper;
