import { useEffect } from "react"
import MarvelApi from "./services/marvelApi"

function App() {

  useEffect(() => {
    detailComic()
  }, [])

  const detailComic = async () => {
    const comicDetailed = await MarvelApi.get("9408")
    console.log(comicDetailed.data)
  }

  return (
    <div className="App">
      Main app
    </div>
  )
}

export default App
