import { useEffect, useState } from "react"
import MarvelApi from "../../services/marvelApi"
import { ComicCardMini } from "../../components"

function ComicList(props) {
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(20)
    const [offset, setOffset] = useState(0)
    const [dataComics, setDataComics] = useState(null)

    useEffect(() => {
        setOffset(off => off + limit)
        getComicsFromApi()
    }, [page])

    const getComicsFromApi = async () => {
        console.log("Offset: " + offset)
        console.log("Page: " + page)
        const allComics = await MarvelApi.get(`comics?limit=${limit}&offset=${offset}`)
        setDataComics(allComics.data)
    }

    return(
        <>
            <button onClick={() => { setPage(p => p-1 > 0 ? p - 1 : 1 )}}>&lt;- Anterior</button>
            <strong> Página atual: {page} </strong>
            <button onClick={() => { setPage(p => p + 1)}}>Próximo -&gt;</button>
            <br />
            <br />
            { console.log(dataComics?.data.results )}
            { dataComics?.data.results.map(comic =>
                <ComicCardMini key={comic.id} ComicDetails={comic} />
            )}
        </>
    )
}

export default ComicList