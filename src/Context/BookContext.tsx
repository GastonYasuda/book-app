/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, ReactNode, useEffect, useState } from "react";
import { Book } from "../typeInterface/BookTypes";
import bookJson from '../Data/books.json';

const BookContext = createContext({});

interface Props {
    children: ReactNode;
}

export function BookContexProvider({ children }: Props) {
    // Cambia el tipo de estado a Book[]
    const [bookList, setBookList] = useState<Book[]>([]);
    const [favArray, setFavArray] = useState<string[]>([]);
    const [forBookDetail, setForBookDetail] = useState<Book[]>();




    const { library } = bookJson;

    useEffect(() => {
        const books = library.map((item) => item.book); // Extrae todos los libros del JSON
        setBookList(books); // Actualiza el estado con los libros

    }, []);


    return (
        <BookContext.Provider value={{ bookList, setBookList, favArray, setFavArray, forBookDetail, setForBookDetail }}>
            {children}
        </BookContext.Provider>
    );
}

export default BookContext;
