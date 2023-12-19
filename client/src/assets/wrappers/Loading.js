import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  background: #131315;
  border-radius: 37px;
  .card {
    padding-bottom: 4.3rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
    display: grid;

    .card__name {
      margin: 50px 30px 20px;
      width: 11rem;
      padding: 5px 10px;
    }
    .content {
      padding: 30px;
      margin-bottom: 10px;
      display: grid;
      gap: 2.5rem;
    }
  }

  @keyframes shine {
    to {
      background-position-x: -200%;
    }
  }

  .card.is-loading {
    .card__name,
    h2 {
      background: rgb(19,19,21);
      background: linear-gradient(110deg, rgba(19,19,21,1) 50%, rgba(36,36,38,1) 85%, rgba(45,45,48,1) 100%); 
      border-radius: 7px;
      height: 30px;
      background-size: 200% 100%;
      animation: 1.5s shine linear infinite;
    }
    .card__name {
      height: 3rem;
    }
  }

  @media (min-width: 992px) {
    .content {
       grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1120px) {
    .content {
       grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export default Wrapper;
