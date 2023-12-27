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
    .review-section {
        justify-self: center;
        margin-top: 2.5rem;
    }
    .form-title {
        font-size: 2rem;
        font-weight: 600;
        text-decoration: underline 2px #ff5e1a;
        margin-bottom: 3rem;
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
    .form-select,
    .form-textarea {
        height: 40px;
        width: 100%;
        padding: 0.375rem 0.75rem;
        background: #333;
        border-radius: 7px;
        border: none;
        color: white;
    }
    .form-textarea {
        height: auto;
        padding: 1rem;
    }
    .form-textarea:focus {
        outline: none;
    }
    .form-btn {
        text-transform: capitalize;
        border: none;
        width: 10rem;
        font-size: 1.3rem;
        font-weight: 600;
    }
    .all-reviews {
        margin-top: 3rem;
    }
    .all-reviews h4 {
        font-size: 2rem;
        font-weight: 600;
        text-decoration: underline 2px #ff5e1a;
        margin-bottom: 3rem;
    }
    .review-container {
        display: flex;
        flex-direction: column;
    }
    .single-review {
        margin-bottom: 2rem;
        background-color: #17171a;
        padding: 1rem;
        border-radius: 12px;
    }
    strong {
        margin-bottom: 1rem;
        font-size: 1.2rem;
    }
    .rating-info {
        display: flex;
        align-items: center;
        column-gap: .2rem;
        margin: 1rem 0;
    }
    .rating-info p {
        color: #8a8a93;
    }
    .rating {
        display: flex;
        flex-direction: row;
    }
    .rating span {
        margin: 0.1rem;
    }
    .rating-text {
        margin-left: 1rem;
        color: #8a8a93;
    }
    .rating svg {
        font-size: 1.2rem;
        color: #ff5e1a;
    }
    .comment {
        font-size: 1rem;
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