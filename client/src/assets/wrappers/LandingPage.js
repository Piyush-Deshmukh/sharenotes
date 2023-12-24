import styled from 'styled-components';

const Wrapper = styled.section`
  .page {
    display: grid;
    gap: .5rem;
    margin: 8px 5% 0;
  }
  .app-head {
    border-radius: 37px;
    background: #131315;
    padding: 3rem 2rem 4rem;
  }
  .app-info {
    display: none;
  }
  .app-head h1 {
    font-size: 3.75rem;
    line-height: 70px;
    margin: 1.3rem 0 8rem;
  }
  .app-head h1 p {
    font-size: 4.75rem;
    letter-spacing: 4px;
    line-height: 80px;
    text-decoration: underline 3px #ff5e1a;
  }
  p span {
    color: #ff5e1a;
    line-height: 0;
    font-size: 5rem;
    text-decoration: none;
  }
  .btn {
    display: inline-block;
    text-align: center;
    background-color: #ff5e1a;
    border-radius: 7px;
    padding: 0.7rem 1rem;
    font-size: 1.5rem;
    width: 120px;
  }
  .register-link {
    margin-right: .5rem;
    width: 130px;
  }
  footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
    background: #131315;
    margin: 8px 5% 15px;
    border-radius: 999px;
    padding: 16px 32px;
    color: #8a8a93;
    font-size: .8rem;
    font-weight: 600;
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
    }
    .app-head h1 {
      font-size: 5rem;
    }
    .app-head h1 p {
      font-size: 6rem;
    }
    .app-info {
      display: block;
      border-radius: 37px;
      background: #131315;
      padding: 3rem 2rem 4rem;
    }
    .app-info h1 {
      margin-top: 2.75rem;
      font-size: 2.75rem;
      line-height: 70px;
    }
    .app-info h1 p {
      color: #8a8a93;
    }
    .btn {
      width: 150px;
    }
    .register-link {
      margin-right: 1rem;
      width: 170px;
    }
    footer {
      font-size: 1rem;
    }
  }
`;
export default Wrapper;
