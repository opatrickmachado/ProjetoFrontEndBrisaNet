import styled from "styled-components"

const HeaderHome = styled.header`
    padding: 8px;
    text-align: center;
    border-bottom: thin solid #333;
    margin-bottom: 16px;
`

const MainHome = styled.main`
    padding: 8px;
    text-align: center;
    color: #fff;
    font-weight: 300;
`

const Logo = styled.img`
    width: 250px;
    max-width: 90%;
    height: auto;
    fill-object: content;
`

export { Logo, HeaderHome, MainHome }