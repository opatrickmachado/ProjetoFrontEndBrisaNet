import { useEffect, useState } from "react";
import { useParams, useLocation  } from "react-router-dom";

function ComicPage(props) {

    const { id } = useParams()
    const stateFromLocation = useLocation()
    const [comicData, setComicData] = useState()

    useEffect(() => {
        setComicData(stateFromLocation.state.comic)
    }, [stateFromLocation])

    return (
        <>
            Mostrar detalhes aqui da comic #{id}
            {JSON.stringify(comicData)}
        </>
    )
}

export default ComicPage