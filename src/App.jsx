import { HomePage, ComicPage } from "./pages"
import GlobalStyle from './theme/globalStyle'
import { Routes, Route, Link } from "react-router-dom"
import { AddressMap } from "./components"

function App() {

  return (
    <div className="App">
      <>

        <GlobalStyle />
        <Routes>
          <Route path="/" element={<HomePage /> }>
            <Route path="/comic/:id" element={<ComicPage />} />
          </Route>
        </Routes>

      </>
    </div>
  )
}

export default App
