import styled from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: .5rem;
  display: grid;
  gap: .5rem;
  .logout-container,
  .notes-info {
    border-radius: 37px;
    background: #131315;
    padding: 3rem 2rem 4rem;
  }
  .logout-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .user-info {
    text-align: center;
    margin: 1rem;
  }
  .user-info h2 {
    margin-bottom: 1rem;
    text-transform: capitalize;
  }
  .logout-btn {
    height: 40px;
    margin-top: 1rem;
    background-color: #ff5e1a;
    font-size: 1.4rem;
    font-weight: 500;
    border-radius: 7px;
    color: white;
    border: none;
    text-transform: capitalize;
    cursor: pointer;
  }
  .avatar {
    width: auto;
    height: 15rem;
    max-width: 15rem;
    object-fit: cover;
    border-radius: 50%;
    border: 3px solid #ff5e1a;
    object-fit: fill;
    margin-left: 1.3rem;
  }
  .notes-info h1 {
    font-size: 33px;
    font-weight: 500;
    line-height: 54px;
  }
  .span-gray {
    color: #8a8a93;
  }

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    .avatar {
      height: 20rem;
      max-width: 20rem;
      margin-left: 3rem;
    }
    .notes-info h1 {
      font-size: 55px;
      line-height: 72px;
    }
  }
  @media (min-width: 1120px) {
    .avatar {
      margin-left: 9rem;
    }
    .notes-info h1 {
      font-size: 64px;
    }
  }
`;

export default Wrapper;
