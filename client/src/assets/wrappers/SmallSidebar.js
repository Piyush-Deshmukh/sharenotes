import styled from "styled-components";

const Wrapper = styled.aside`
  @media (min-width: 992px) {
    display: none;
  }
  .sidebar-container {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
    opacity: 0;
    transition: 0.3s ease-in-out all;
    visibility: hidden;
  }
  .show-sidebar {
    z-index: 99;
    opacity: 1;
    visibility: visible;
  }
  .content {
    background: black;
    width: 100%;
    height: 100%;
    padding: 4rem 2rem;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .close-btn {
    position: absolute;
    top: 15px;
    right: 20px;
    background: transparent;
    border-color: transparent;
    font-size: 2rem;
    color: white;
    cursor: pointer;
  }
  .nav-links {
    display: flex;
    flex-direction: column;
    padding-top: 5rem;
    gap: 3rem;
  }
  .nav-item {
    color: #8a8a93;
    font-size: 3rem;
  }
  .active {
    color: white;
  }
`;

export default Wrapper;