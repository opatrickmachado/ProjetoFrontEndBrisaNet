import { useState } from "react"
import { AddressMap } from "../../components"
import { CoverComic, Modal, ButtonSendComic, ShowAddress, CloseButton } from "./ModalComicDetails.styles"
import nocover from "../../assets/nocover.jpg"

function ModalComicDetails({ comic }) {

    const [deliveryAddress, setDeliveryAddress] = useState({
        valid: false,
        text: "Endereço não informado"
    })

    const stopPropagationClick = function (ev) {
        if (ev.target.dataset.action !== "close")
            ev.stopPropagation()
    }

    return (
        <Modal open onClick={stopPropagationClick} >
            <div className="center">
                <CloseButton type="button" data-action="close">X</CloseButton>
                <CoverComic>
                    {comic?.thumbnail?.path ?
                        <img src={`${comic?.thumbnail?.path}.${comic?.thumbnail?.extension}`} />
                    :   <img src={nocover} />}
                </CoverComic>
                <div className="details">
                    <section>
                        <h1>Avengers: War Across Time (2023) #1</h1>
                    </section>
                    <section className="half-line">
                        <h2>Published:</h2>
                        <p>January 11, 2023</p>
                    </section>
                    <section className="half-line">
                        <h2>Writer:</h2>
                        <p>Paul Levitz</p>
                    </section>
                    <section className="half-line">
                        <h2>Penciler:</h2>
                        <p>Alan Davis</p>
                    </section>
                    <section className="half-line">
                        <h2>Cover Artist:</h2>
                        <p>Alan Davis</p>
                    </section>
                    <section>
                        <p>Thor! Iron Man! Captain America! Giant-Man & the Wasp! The classic Avengers against the Hulk on the streets of New York! It’s the beginning of a showdown with Kang the Conqueror that will span the centuries! Eisner Hall of Famer Paul Levitz makes his Marvel debut (unless you count a letter in Amazing Adventures #5) teamed with acclaimed artist Alan Davis!</p>
                    </section>
                </div>
                <div className="delivery-container">
                    <AddressMap setAddress={setDeliveryAddress} />
                    {console.log(deliveryAddress)}
                    <div className="delivery-address">
                        <ShowAddress>
                            <strong>Endereço para entrega da revista</strong>
                            <span className={deliveryAddress?.valid ? "active" : ""}>{deliveryAddress?.text}</span>
                            <small>Para mudar de endereço, pesquise no mapa.<br /> Envio totalmente gratis.</small>
                        </ShowAddress>
                        <ButtonSendComic className={deliveryAddress?.valid ? "active" : ""}>
                            Enviar Revista
                        </ButtonSendComic>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default ModalComicDetails