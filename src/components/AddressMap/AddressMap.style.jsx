import styled from "styled-components"

const MapNotLoad = styled.div`
    width: 400px;
    height: 400px;
    background: url("images/404.png") center center no-repeat;
`

const InputAddress = styled.input`
    width: 400px;
    height: 40px;
    box-sizing: border-box;
    border: 1px solid transparent;
    padding: 0 12px;
    border-radius: 1px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    font-size: 14px;
    outline: none;
    text-overflow: ellipsis;
    position: relative;
`

const InputAddressBar = styled.div`
    padding-top: 8px;
    background: #151515;
    width: 400px;
    height: 56px;
    position: absolute;
    left: 0;
    top: 0;
`

export { MapNotLoad, InputAddress, InputAddressBar }