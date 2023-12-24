import styled from "styled-components";

const Wrapper = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 8px;
    gap: .5rem;
    
    .all-notes {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #8a8a93;
        font-size: 1rem;
        height: 50px;
        width: 100%;
        border-radius: 2rem;
        background-color: #131315;
    }
    .active {
        color: white;
    }
`

export default Wrapper;