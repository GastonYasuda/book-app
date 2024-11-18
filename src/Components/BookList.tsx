import BookContext, { BookContexProvider } from "../Context/BookContext";
import { useContext, useEffect, useState } from "react";
import { Book, bookContextType } from "../typeInterface/BookTypes";
import EachBook from "./EachBook";
import FavoriteBooks from "./FavoriteBooks";
import AppHeader from "./AppHeader";
import FilterAside from "./FilterAside";
import CountCards from "./CountCards";
import BookResult from "./BookResult";

const BookList = () => {

    const { bookList } = useContext(BookContext) as bookContextType
    const [showResult, setShowResult] = useState<boolean>(true)
    const [favorites, setFavorites] = useState<Book[]>(() => {
        // Recuperar favoritos del localStorage al cargar la página
        const storedFavs = JSON.parse(localStorage.getItem('BookFavArray') || '[]');

        return storedFavs;
    });

    useEffect(() => {
        localStorage.setItem("BookFavArray", JSON.stringify(favorites));
    }, [favorites])


    return (
        <BookContexProvider>
            <div className="main">
                <AppHeader />


                <div className="main_container">

                    <FilterAside />

                    <div className="bookList_container">

                        <div className="bookList_container-counterBooks">
                            <h1>Book App</h1>
                            <CountCards favorites={favorites} setFavorites={setFavorites} />
                            {showResult ?
                                <BookResult />
                                :
                                <div className="bookList_container-book">
                                    {bookList.map((boo, index) => {
                                        return (
                                            <EachBook key={index} boo={boo} favorites={favorites}
                                                setFavorites={setFavorites} />);
                                    })}
                                </div>
                            }
                        </div>

                        <FavoriteBooks favorites={favorites} setFavorites={setFavorites} />
                    </div>

                </div>
            </div>
        </BookContexProvider>
    );
};

export default BookList;
