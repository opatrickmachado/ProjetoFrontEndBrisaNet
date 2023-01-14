import styled from "styled-components"

const CardContainer = styled.div`
    box-sizing: border-box;
    margin: 8px;
    width: 250px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-self: stretch;
    border: thin solid #333;
    background: #333;

    transform:scale(1);
    transition: .2s ease-out;
    z-index: 10;
    position: relative;

    &:hover {
        transform:scale(1.1);
        transform-style:preserve-3d;
        transition:.4s ease-in;
        z-index: 11;
        box-shadow: 0 2px 12px 0 rgb(0 0 0 / 75%);

        .card-footer {
            color: #fff;
        } 
    }
`

const ComicCard = styled.div`
    box-sizing: border-box;
    position: relative;
`

const CardContentFrame = styled.div`
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    margin: 0 0 20px 0;
    font-size: 0;
    transform-origin: 0 0;
    overflow: hidden;
    align-self: flex-end;
    height: 280px;

    &:hover {
        transition: all 0.3s cubic-bezier(.25,.8,.25,1);

        img {
            transform: scale(1.2);
            transition: transform 1.2s cubic-bezier(.25,.8,.25,1);
        }
    }

    img {
        max-height: 280px;
        height: 100%; 
        width: 100%; 
        object-fit: contain;
        transition: transform 0.6s cubic-bezier(.25,.8,.25,1);
    }
`

const CardBody = styled.div`
    padding: 2px 0 8px;
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    height: 100px;

    .card-body-headline {
        font-weight: 700;
        color: #fff;
        font-size: 18px;
    }
    .card-footer {
        padding-top: 8px;
        font-weight: 300;
        color: #999;
        font-size: 12px;
        text-transform: uppercase;
    }
`

export { CardContainer, ComicCard, CardContentFrame, CardBody }