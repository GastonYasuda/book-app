import BookContext, { BookContexProvider } from "../Context/BookContext";
import { useContext, useEffect, useState } from "react";
import { Author, Book, bookContextType } from "../typeInterface/BookTypes";
import EachBook from "./EachBook";
import FavoriteBooks from "./FavoriteBooks";
import AppHeader from "./AppHeader";
import FilterAside from "./FilterAside";
import CountCards from "./CountCards";
import BookResult from "./BookResult";
import BookDetail from "./BookDetail";
import { ToastContainer } from "react-toastify";


type SelectedValueProp = {
    OptionName: string;
    Selected: string | number | Author;
}

const BookList = () => {
    const [isOpen, setOpen] = useState(false)
    const [showMobileFavs, setShowMobileFavs] = useState(false)


    const { bookList } = useContext(BookContext) as bookContextType

    const [favorites, setFavorites] = useState<Book[]>(() => {
        // Recuperar favoritos del localStorage al cargar la página
        const storedFavs = JSON.parse(localStorage.getItem('BookFavArray') || '[]');
        return storedFavs;
    });
    const [result, setResult] = useState<Book[]>([]);
    const [selectedValue, setSelectedValue] = useState<SelectedValueProp | undefined>();
    const [showBookDetail, setShowBookDetail] = useState<boolean>()



    useEffect(() => {
        localStorage.setItem("BookFavArray", JSON.stringify(favorites));
    }, [favorites, result, selectedValue])



    return (
        <BookContexProvider>
            <div className="main">
                <AppHeader setSelectedValue={setSelectedValue} isOpen={isOpen} setOpen={setOpen} setShowMobileFavs={setShowMobileFavs} />

                <div className="main_container">

                    <FilterAside setSelectedValue={setSelectedValue} isOpen={isOpen} setOpen={setOpen} setShowMobileFavs={setShowMobileFavs} />

                    <div className="bookList_container">

                        <div className="bookList_container-counterBooks">
                            <h1>Book App</h1>
                            <CountCards favorites={favorites} setFavorites={setFavorites} />


                            {selectedValue?.OptionName !== undefined ?
                                <BookResult selectedValue={selectedValue} result={result} setResult={setResult} favorites={favorites}
                                    setFavorites={setFavorites} setShowBookDetail={setShowBookDetail} setSelectedValue={setSelectedValue} />
                                :
                                <>
                                    {showBookDetail ?
                                        <BookDetail setShowBookDetail={setShowBookDetail} favorites={favorites}
                                            setFavorites={setFavorites} />
                                        :
                                        <div className="bookList_container-book">
                                            {bookList.map((boo, index) => {
                                                return (
                                                    <EachBook key={index} boo={boo} favorites={favorites}
                                                        setFavorites={setFavorites} setShowBookDetail={setShowBookDetail} setSelectedValue={setSelectedValue} />);
                                            })}
                                        </div>
                                    }
                                </>

                            }
                        </div>

                        <FavoriteBooks favorites={favorites} setFavorites={setFavorites} showMobileFavs={showMobileFavs} setShowMobileFavs={setShowMobileFavs} />
                    </div>

                </div>
            </div>
            <ToastContainer
                position="top-right"
                theme="light"
                autoClose={1500}
                hideProgressBar
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover={false}
            />
        </BookContexProvider>
    );
};

export default BookList;
