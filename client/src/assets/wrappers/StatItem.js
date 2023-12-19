import styled from 'styled-components';

const Wrapper = styled.article`
  border-radius: 37px;
  background: #131315;
  padding: 3rem 2rem 4rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .count {
    display: block;
    font-weight: 700;
    font-size: 8rem;
    color: white;
    filter: drop-shadow(1px 1px 5px #ff5e1a);
    line-height: 1.5;
  }
  .title {
    text-align: left;
    margin-top: 0.5rem;
    font-size: 2rem;
    line-height: 50px;
  }
  .span-gray {
    color: #8a8a93;
  }
`;

export default Wrapper;
