import { useParams } from "react-router-dom";

function ComicPage(props) {

    let { id } = useParams(); 

    return (
        <>
            Mostrar detalhes aqui da comic #{id}
        </>
    )
}

export default ComicPage