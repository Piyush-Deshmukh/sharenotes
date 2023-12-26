import styled from "styled-components";

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    border-radius: 37px;
    width: 100%;
    background: #131315;
    padding: 3rem 2rem 4rem;
    .note-img {
        justify-self: center;
        align-self: center;
    }
    .note-img img {    
        width: auto;
        height: 23rem;
        max-width: 16rem;
        object-fit: cover;
        border-radius: 15px;
    }
    .note-info {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }
    header {
        h1 {
            font-size: 2rem;
            margin-bottom: .5rem;
            line-height: 40px;
        }
        p {
            color: #8a8a93;
            letter-spacing: 2px;
            line-height: 30px;
        }
    }
    .content {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1rem;
    }
    .btn {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 30px;
        width: 12rem;
        font-size: 1rem;
        border-radius: 8px;
        padding: 1rem;
        background-color: #ff5e1a;
        color: white;
        font-weight: 600;
        letter-spacing: .5px;
        cursor: pointer;
    }

    @media (min-width: 992px) {
        grid-template-columns: 1fr 1fr;
        .note-img img {    
            height: 26rem;
            max-width: 36rem;
        }
        .note-info {
            gap: 2rem;
        }
        .content {
            grid-template-columns: 1fr 1fr;
        }
    }
    @media (min-width: 1120px) {
        .note-img img {
            height: 32rem;
            max-width: 40rem;
        }
    }
`

export default Wrapper;