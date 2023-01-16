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
        const allComics = await MarvelApi.get(`comics?orderBy=-onsaleDate&limit=${limit}&offset=${offset}`)
        setDataComics(allComics.data)
    }

    return(
        <>
            <button onClick={() => { setPage(p => p-1 > 0 ? p - 1 : 1 )}}>&lt;- Anterior</button>
            <strong> Página atual: {page} </strong>
            <button onClick={() => { setPage(p => p + 1)}}>Próximo -&gt;</button>
            <br />
            <br />
            <div style={{
                alignSelf: "stretch",
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "row",
                justifyContent: "center",
                paddingBottom: "24px",
            }}>
                { dataComics?.data.results.map(comic =>
                    <ComicCardMini key={comic.id} ComicDetails={comic} />
                )}
            </div>
        </>
    )
}

export default ComicList