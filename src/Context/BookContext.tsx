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
    const [recomemendedBookCount, setRecommendedBookCount] = useState<number>(0)
    const [genreCount, setGenreCount] = useState<string[]>([]);

    const [favorites, setFavorites] = useState<Book[]>(() => {
        // Recuperar favoritos del localStorage al cargar la página
        const storedFavs = JSON.parse(localStorage.getItem('BookFavArray') || '[]');
        return storedFavs;
    });

    const [recommendBooksArray, setRecommendBooksArray] = useState<Book[]>([]);





    const { library } = bookJson;

    useEffect(() => {
        const books = library.map((item) => item.book); // Extrae todos los libros del JSON
        setBookList(books); // Actualiza el estado con los libros

        localStorage.setItem("BookFavArray", JSON.stringify(favorites));


    }, []);

    useEffect(() => {
        console.log(favorites);

        setGenreCount(getMostRepeatedGenres(favorites) || [])
    }, [favorites])


    function getMostRepeatedGenres(books: Book[]): string[] | null {

        if (books.length === 0) return null; // Manejo de array vacío

        // Contar ocurrencias de géneros usando reduce
        const genreCount = books.reduce<Record<string, number>>((acc, book) => {
            acc[book.genre] = (acc[book.genre] || 0) + 1;
            return acc;
        }, {});

        // Encontrar la cantidad máxima de repeticiones
        const maxCount = Math.max(...Object.values(genreCount));

        // Filtrar géneros que tienen la cantidad máxima
        const mostRepeatedGenres = Object.entries(genreCount)
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            .filter(([_, count]) => count === maxCount)
            .map(([genre]) => genre);
        console.log(mostRepeatedGenres);


        return mostRepeatedGenres.length > 0 ? mostRepeatedGenres : null;
    }



    useEffect(() => {

        setRecommendBooksArray([])

        // Primero separamos los libros que no están en 'favorites'
        const notFavBooks = bookList.filter((book) =>
            !favorites.some((fav) => fav.title === book.title)
        );

        // Filtrar y agregar solo los libros que no están en 'recommendBooksArray' y coinciden con los géneros más repetidos
        genreCount.forEach((mostGenre) => {
            notFavBooks.forEach((notFav) => {

                if (notFav.genre === mostGenre) {
                    // Verificar si el libro ya está en el array

                    //ME ESTA AGREGANDO LOS QUE YA NO SON FAVS TAMBIEN
                    setRecommendBooksArray((prev) => {
                        if (!prev.some((book) => book.title === notFav.title)) {

                            return [...prev, notFav]; // Solo agregar si no está presente
                        }

                        return prev; // Si ya está, no agregar
                    });

                }
            });
        });

    }, [genreCount, bookList, favorites]); // Asegúrate de que las dependencias sean correctas

    // if (recommendBooksArray !== undefined && recommendBooksArray.length !== 0) {
    //     setRecommendedBookCount(recommendBooksArray.length)
    // }



    return (
        <BookContext.Provider value={{ bookList, setBookList, favArray, setFavArray, forBookDetail, setForBookDetail, recomemendedBookCount, setRecommendedBookCount, genreCount, setGenreCount, favorites, setFavorites, recommendBooksArray }}>
            {children}
        </BookContext.Provider>
    );
}

export default BookContext;
