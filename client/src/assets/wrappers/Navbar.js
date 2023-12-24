import styled from 'styled-components';

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
  background: #131315;
  margin: 24px 5% 0;
  border-radius: 999px;
  z-index: 1000;
  .nav-center {
    display: flex;
    width: 90%;
    align-items: center;
    justify-content: space-between;
    padding: 16px 0px;
    margin-left: auto;
    margin-right: auto;
  }
  .take-tour {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: transparent;
    width: 125px;
    border-radius: 7px;
    font-weight: 600;
    font-size: 1rem;
    color: white;
    cursor: pointer;
  }
  .take-tour p {
    color: #ff5e1a;
    text-decoration: none;
  }
  .toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    width: 2em;
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  .logo {
    display: flex;
    align-items: center;
    justify-content: start;
    padding-left: 16px;
    width: 150px;
  }
  .logo h1 {
    font-weight: 600; 
    color: white;
    font-size: 1rem;
    text-decoration: underline 1.5px #ff5e1a;
  }
  .logo h1 span {
    color: #ff5e1a;
    text-decoration: none;
  }
  .nav-links {
    display: none;
  }
  .btn-container {
    display: flex;
    align-items: center;
  }
  @media (min-width: 992px) {
    position: sticky;
    top: 10px;
    .take-tour {
      width: 150px;
    }
    .logo {
      padding-left: 0;
    }
    .nav-links {
      display: flex;
      gap: 2rem;
    }
    .nav-item {
      color: #8a8a93;
      font-size: 1rem;
    }
    .active {
      color: white;
    }
    .pending {
      background-color: #131315;
    }
    .toggle-btn {
      display: none;
    }
  }
`;
export default Wrapper;
