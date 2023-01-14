import styled from "styled-components"

const CardContainer = styled.div`
    box-sizing: border-box;
    margin: 4px;
    width: 250px;
    padding: 16px;
    display: inline-block;
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

const CardComicLink = styled.a`
    display: block;
`

const CardContentFrame = styled.div`
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 40%);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    margin: 0 0 20px 0;
    font-size: 0;
    transform-origin: 0 0;
    overflow: hidden;

    &:hover {
        box-shadow: 0 2px 12px 0 rgb(0 0 0 / 40%);
        transition: all 0.3s cubic-bezier(.25,.8,.25,1);

        img {
            transform: scale(1.2);
            transition: transform 1.2s cubic-bezier(.25,.8,.25,1);
        }
    }

    img {
        height: 100%; 
        width: 100%; 
        object-fit: cover;
        transition: transform 0.6s cubic-bezier(.25,.8,.25,1);
    }
`

const CardBody = styled.div`
    padding: 2px 0 8px;

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

export { CardContainer, ComicCard, CardComicLink, CardContentFrame, CardBody }