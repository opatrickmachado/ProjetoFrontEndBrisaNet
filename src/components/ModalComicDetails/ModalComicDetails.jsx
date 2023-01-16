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

    const showGrouped = (obj, prop) => {
        let grouped = obj.reduce(function (acc, item) {
            let key = item[prop]
            if (!acc[key]) {
                acc[key] = []
            }

            acc[key].push(item)
            return acc

        }, [])

        grouped = Object.entries(grouped)

        return grouped.map((el) => (
            <section key={Math.random()} className="half-line">
                <h2>{el[0]}</h2>
                <p>{el[1].map(v => v.name).join(", ")}</p>
            </section>
        ))
    }

    return (
        <Modal open onClick={stopPropagationClick} >
            <div className="center">
                <CloseButton type="button" data-action="close">X</CloseButton>
                <CoverComic>
                    {comic?.thumbnail?.path ?
                        <img src={`${comic?.thumbnail?.path}.${comic?.thumbnail?.extension}`} />
                        : <img src={nocover} />}
                </CoverComic>
                <div className="details">
                    <section>
                        <h1>{comic?.title || "Título HQ #000"}</h1>
                    </section>
                    {comic?.creators?.items && showGrouped(comic?.creators?.items, "role")}
                    {comic?.events?.items && showGrouped(comic?.events?.items, "role")}
                    {comic?.description && (
                        <section>
                            <p>{comic?.description || "Descrição HQ"}</p>
                        </section>
                    )}
                </div>
                <div className="delivery-container">
                    <AddressMap setAddress={setDeliveryAddress} />
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