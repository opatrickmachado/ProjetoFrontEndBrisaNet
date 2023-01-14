import * as React from "react"
import { ComicCardMini } from "./components"
import { HomePage, ComicPage } from "./pages"
import GlobalStyle from './theme/globalStyle'
import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <div className="App">
      <>

        <GlobalStyle />

        <Routes>
          <Route path="/" element={<HomePage /> }>
            <Route index element={<ComicCardMini />} />
            <Route path="/comic/:id" element={<ComicPage />} />
          </Route>
        </Routes>

      </>
    </div>
  )
}

export default App
