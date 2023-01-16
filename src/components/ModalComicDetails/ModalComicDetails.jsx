import { useState } from "react"
import { AddressMap } from "../../components"
import { CoverComic, Modal, ButtonSendComic, ShowAddress } from "./ModalComicDetails.styles"

function ModalComicDetails({ comic }) {

    const [deliberyAddress, setDeliberyAddress] = useState("Pesquise seu endereço no mapa")

    const stopPropagationClick = function (ev) {
        ev.stopPropagation()
        console.log("cliclou no card")
    }

    return (
        <Modal open onClick={stopPropagationClick} >
            <div className="center">
                <CoverComic>
                    <img src={`${comic?.thumbnail?.path}.${comic?.thumbnail?.extension}` || "/images/image-not-found.jpg"} />
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
                    <AddressMap />
                    <div className="delivery-address">
                        <ShowAddress>
                            <strong>Endereço para entrega da revista</strong>
                            <span>Rua Pedro Pereira Chaves, 48. Fomento. Iguatu - CE.</span>
                            <small>Para mudar de endereço, pesquise no mapa.</small>
                        </ShowAddress>
                        <ButtonSendComic className="active">
                            Enviar Revista
                        </ButtonSendComic>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default ModalComicDetails