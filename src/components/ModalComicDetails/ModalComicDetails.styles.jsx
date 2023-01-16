import styled from "styled-components"

const CoverComic = styled.div`
    margin: 8px;
    width: 250px;
    max-height: 378px;
    display: flex;
    flex-direction: column;
    align-self: stretch;
    border: thin solid #333;
    background: #333;

    img {
      width: 249px;
      aspect-ratio: auto 550 / 845;
    }
`

const Modal = styled.dialog`
    margin: 16px auto;
    width: 960px;
    max-width: 90%;
    height: 680px;
    max-height: 90vh;
    background: #151515;
    border: thin solid #333;
    overflow: auto;
    padding-bottom: 36px;

    .center {
      display: flex;
      align-items: center;
      flex-wrap: wrap;

      .details {
        width: calc(100% - 295px);
        padding: 16px 24px;
        color: #fff;
  
        section {
          margin-bottom: 16px;
        }
  
        .half-line {
          width: 50%;
          display: inline-block;
        }
  
        h1 {
          font-size: 24px;
          margin-bottom: 8px;
        }
    
        h2 {
          font-size: 18px;
          margin-bottom: 8px;
        }
    
        p {
          font-size: 16px;
          font-weight: 100;
          line-height: 1.5;
        }
      }

      .delivery-container {
        margin: 0;
        padding: 16px 10px 0;
        display: flex;

        .delivery-address {
          width: 250px;
          padding-left: 16px;
          color: #fff;
        }
      }
    }
`

const ShowAddress = styled.div`
    background: #2c2a2a;
    border: thin solid #333;
    height: 305px;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    line-height: 1.5;
    font-size: 1.2rem;
    color: #eee;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    span, small, strong {
      display: block;
    }
    strong {
      font-size: 0.8rem;
      background: #fef200;
      padding: 8px;
      color: #151515;
    }
    small {
      font-size: 0.6rem;
      padding: 16px;
      color: #fff;
      letter-spacing: 0.3;
    }
`

const ButtonSendComic = styled.button`
  background: transparent;
  font-size: 1.2rem;
  border-radius: 1px;
  border: 2px solid #666;
  color: #333;
  padding: 24px 36px;
  width: 100%;

  &.active {
    background: #f23c27;
    border: 2px solid #f23c27;
    color: #fff;
    cursor: pointer;
  }
`

export { CoverComic, Modal, ButtonSendComic, ShowAddress }