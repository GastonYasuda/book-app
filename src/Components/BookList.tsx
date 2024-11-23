import BookContext, { BookContexProvider } from "../Context/BookContext";
import { useContext, useEffect, useState } from "react";
import { Book, bookContextType } from "../typeInterface/BookTypes";
import EachBook from "./EachBook";
import FavoriteBooks from "./FavoriteBooks";
import AppHeader from "./AppHeader";
import FilterAside from "./FilterAside";
import CountCards from "./CountCards";
import BookResult from "./BookResult";

type selectedValueProp = {
    OptionName: string;
    Selected: string;
}

const BookList = () => {

    const { bookList } = useContext(BookContext) as bookContextType

    const [favorites, setFavorites] = useState<Book[]>(() => {
        // Recuperar favoritos del localStorage al cargar la página
        const storedFavs = JSON.parse(localStorage.getItem('BookFavArray') || '[]');
        return storedFavs;
    });
    const [result, setResult] = useState<Book[]>([]);
    const [selectedValue, setSelectedValue] = useState<selectedValueProp>();



    useEffect(() => {
        localStorage.setItem("BookFavArray", JSON.stringify(favorites));


    }, [favorites, result, selectedValue])



    return (
        <BookContexProvider>
            <div className="main">
                <AppHeader setSelectedValue={setSelectedValue} />

                <div className="main_container">

                    <FilterAside setSelectedValue={setSelectedValue} />

                    <div className="bookList_container">

                        <div className="bookList_container-counterBooks">
                            <h1>Book App</h1>
                            <CountCards favorites={favorites} setFavorites={setFavorites} />
                            {selectedValue?.OptionName !== undefined ?
                                <BookResult selectedValue={selectedValue} result={result} setResult={setResult} favorites={favorites}
                                    setFavorites={setFavorites} />
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
