import { CardContainer, ComicCard, CardComicLink, CardContentFrame, CardBody } from "./ComicCardMini.styles"

function ComicCardMini({ ComicDetails }) {
    return (
        <CardContainer>
            <ComicCard>
                <CardComicLink href="comic-url">
                    <CardContentFrame>
                        <img src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/antmanandthewaspquantumania_lob_crd_03.jpg" className="card-thumb-frame-thumbnail" />
                    </CardContentFrame>
                    <CardBody>
                        <p className="card-body-headline">Titulo Comic (#174)</p>
                        <p className="card-footer">Data Publicação</p>
                    </CardBody>
                </CardComicLink>
            </ComicCard>
        </CardContainer>
    )
}

export default ComicCardMini