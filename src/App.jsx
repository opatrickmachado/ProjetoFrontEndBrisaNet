import { ComicCardMini } from "./components"
import GlobalStyle from './theme/globalStyle';

function App() {

  return (
    <div className="App">
      <>
        <GlobalStyle />
        <ComicCardMini 
          ComicDetails={
            {
              title: "Thor",
              dates: [
                {
                  type: "onsaleDate",
                  date: "1983-07-01T00:00:00-0400"
                },
                {
                  type: "focDate",
                  date: "-0001-11-30T00:00:00-0500"
                },
                {
                  type: "unlimitedDate",
                  date: "2013-04-29T00:00:00-0400"
                },
                {
                  type: "digitalPurchaseDate",
                  date: "2014-08-12T00:00:00-0400"
                }
              ]
            }
          }
          ></ComicCardMini>
        <ComicCardMini></ComicCardMini>
      </>
    </div>
  )
}

export default App
