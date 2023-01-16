import styled from "styled-components"
import i404 from "../../assets/404.png"

const MapNotLoad = styled.div`
    width: 600px;
    height: 378px;
    background: url("${i404}") #fff center center no-repeat;
`

const InputAddress = styled.input`
    width: 600px;
    height: 46px;
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
    padding-top: 1px;
    background: #151515;
    width: 100%;
    height: 56px;
    position: absolute;
    left: 0;
    top: 0;
`

export { MapNotLoad, InputAddress, InputAddressBar }