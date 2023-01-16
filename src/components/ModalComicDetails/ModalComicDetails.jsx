import { CoverComic, Modal } from "./ModalComicDetails.styles"

function ModalComicDetails({ comic }) {

    const stopPropagationClick = function (ev) {
        ev.stopPropagation()
        console.log("cliclou no card")
    }

    return(
        <Modal open onClick={stopPropagationClick} >
            <div className="center">
                <CoverComic>
                    <img src={`${comic?.thumbnail?.path}.${comic?.thumbnail?.extension}` || "/images/image-not-found.jpg" }/>
                </CoverComic>
            </div>
        </Modal>
    )
}

export default ModalComicDetails