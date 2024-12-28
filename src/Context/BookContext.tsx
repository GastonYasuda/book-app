/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, ReactNode, useEffect, useState } from "react";
import { Book } from "../typeInterface/BookTypes";
import bookJson from '../Data/books.json';

const BookContext = createContext({});

interface Props {
    children: ReactNode;
}

export function BookContexProvider({ children }: Props) {

    const [bookList, setBookList] = useState<Book[]>([]);
    const [forBookDetail, setForBookDetail] = useState<Book[]>();
    const [recomemendedBookCount, setRecommendedBookCount] = useState<number>(0)
    const [genreCount, setGenreCount] = useState<string[]>([]);
    const [favorites, setFavorites] = useState<Book[]>(() => {
        const storedFavs = JSON.parse(localStorage.getItem('BookFavArray') || '[]');
        return storedFavs;
    });
    const [recommendBooksArray, setRecommendBooksArray] = useState<Book[]>([]);


    const { library } = bookJson;

    useEffect(() => {
        const books = library.map((item) => item.book);
        setBookList(books);

        localStorage.setItem("BookFavArray", JSON.stringify(favorites));
        setGenreCount(getMostRepeatedGenres(favorites) || [])

    }, [favorites]);

    useEffect(() => {
        setRecommendBooksArray([])

        // Separate not fav books
        const notFavBooks = bookList.filter((book) =>
            !favorites.some((fav) => fav.title === book.title)
        );

        // Filter and add only books that not in 'recommendBooksArray' and is most repeat gendle
        genreCount.forEach((mostGenre) => {
            notFavBooks.forEach((notFav) => {

                if (notFav.genre === mostGenre) {
                    //Check if the book is in 'recommendBooksArray'

                    setRecommendBooksArray((prev) => {
                        if (!prev.some((book) => book.title === notFav.title)) {

                            return [...prev, notFav]; // Only add if not in array 'recommendBooksArray'
                        }
                        return prev; // If is in, dont add
                    });
                }
            });
        });
    }, [genreCount, bookList, favorites]);


    function getMostRepeatedGenres(books: Book[]): string[] | null {

        if (books.length === 0) return null;

        const genreCount = books.reduce<Record<string, number>>((acc, book) => {
            acc[book.genre] = (acc[book.genre] || 0) + 1;
            return acc;
        }, {});

        const maxCount = Math.max(...Object.values(genreCount));

        const mostRepeatedGenres = Object.entries(genreCount)
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            .filter(([_, count]) => count === maxCount)
            .map(([genre]) => genre);

        return mostRepeatedGenres.length > 0 ? mostRepeatedGenres : null;
    }

    return (
        <BookContext.Provider value={{ bookList, setBookList, forBookDetail, setForBookDetail, recomemendedBookCount, setRecommendedBookCount, genreCount, setGenreCount, favorites, setFavorites, recommendBooksArray }}>
            {children}
        </BookContext.Provider>
    );
}

export default BookContext;
