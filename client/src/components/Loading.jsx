import Wrapper from "../assets/wrappers/Loading";

const Loading = () => {
  return (
    <Wrapper>
      <div className="card is-loading">
        <div className="card__name"></div>
        <div className="content">
          <h2></h2>
          <h2></h2>
          <h2></h2>
          <h2></h2>
          <h2></h2>
          <h2></h2>
        </div>
      </div>
    </Wrapper>
  );
};

export default Loading;