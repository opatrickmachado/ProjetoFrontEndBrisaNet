import styled from "styled-components"

const CoverComic = styled.div`
    box-sizing: border-box;
    margin: 8px;
    width: 250px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-self: stretch;
    border: thin solid #333;
    background: #333;
`

const Modal = styled.dialog`
    width: 980px;
    max-width: 90%;
`

export { CoverComic, Modal }