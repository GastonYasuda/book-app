import BookDetail from "./Components/BookDetail";
import BookList from "./Components/BookList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BookContexProvider } from './Context/BookContext'
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <BookContexProvider>

      <BrowserRouter>
        <Routes>

          <Route path="/" element={<BookList />} />
          <Route path="/:bookId" element={<BookDetail />} />

        </Routes>
      </BrowserRouter>
    </BookContexProvider>

  )
}

export default App
