import { CardContainer, ComicCard, CardComicLink, CardContentFrame, CardBody } from "./ComicCardMini.styles"

function ComicCardMini({ ComicDetails }) {
    const stringDate = ComicDetails?.dates?.filter(d=> d.type === "onsaleDate").at(0)?.date.split("T").at(0)
    const dataConvertida = (stringDate && stringDate[0] !== "-") ? new Date(stringDate) : false
    const dataFormatada = dataConvertida ? new Date(dataConvertida).toLocaleDateString("pt-BR", {year: 'numeric', month: 'long'}) : "Data não informada"

    return (
        <CardContainer>
            <ComicCard>
                <CardComicLink href="comic-url">
                    <CardContentFrame>
                        <img src={ComicDetails?.thumbnail?.path || "/images/image-not-found.jpg" } className="card-thumb-frame-thumbnail" />
                    </CardContentFrame>
                    <CardBody>
                        <p className="card-body-headline">{ComicDetails?.title || "Titulo Comic (#000)" }</p>
                        <p className="card-footer">{ dataFormatada }</p>
                    </CardBody>
                </CardComicLink>
            </ComicCard>
        </CardContainer>
    )
}

export default ComicCardMini