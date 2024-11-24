import BookList from "./Components/BookList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BookContexProvider } from './Context/BookContext'


function App() {

  return (
    <BookContexProvider>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BookList />} />
        </Routes>
      </BrowserRouter>
    </BookContexProvider>

  )
}

export default App
