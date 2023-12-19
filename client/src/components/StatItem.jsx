import Wrapper from '../assets/wrappers/StatItem';

const StatItem = ({ title, span, count }) => {
  return (
    <Wrapper>
      <header>
        <span className='count'>{count}</span>
      </header>
      <h5 className='title'>
        {title}
        <br />
        <span className="span-gray">{span}</span>
      </h5>
    </Wrapper>
  );
};

export default StatItem;