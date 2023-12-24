import styled from 'styled-components';

const Wrapper = styled.section`
  border-radius: 37px;
  width: 100%;
  background: #131315;
  padding: 3rem 2rem 4rem;
  .form-title {
    margin-bottom: 2rem;
    text-transform: capitalize;
    font-size: 2rem;
    font-weight: 600;
  }
  .form {
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    max-width: 100%;
    width: 100%;
  }
  .form-label {
    display: block;
    font-size: .875rem;
    margin-bottom: 0.75rem;
    text-transform: capitalize;
    letter-spacing: 1px;
    line-height: 1.5;
  }
  .form-center {
    display: grid;
    row-gap: 1rem;
  }
  .form-input,
  .form-select {
    height: 40px;
    width: 100%;
    padding: 0.375rem 0.75rem;
    background: #333;
    border-radius: 7px;
    border: none;
    color: white;
  }
  .form-input:focus {
    outline: none;
  }
  .form-btn {
    display: grid;
    place-items: center;
    align-self: end;
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
  .notes-link {
    position: relative;
    display: flex;
    justify-content: space-between;
    top: 100px;
    left: -2%;
    width: 105%;

  }
  .all_notes {
    color: white;
    width: 100%;
    padding: 3px 6px;
    margin-right: 10px;
    border-radius: 4px;
    background-color: #131315;
  }
  .active {
    background-color: var(--primary-400);
  }
  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      column-gap: 1rem;
    }
  }
  @media (min-width: 1120px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;

export default Wrapper;
