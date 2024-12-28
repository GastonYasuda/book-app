import BookContext, { BookContexProvider } from "../Context/BookContext";
import { useContext, useEffect, useState } from "react";
import { Author, Book, bookContextType } from "../typeInterface/BookTypes";
import EachBook from "./EachBook";
import FavoriteBooks from "./FavoriteBooks";
import AppHeader from "./AppHeader";
import FilterAside from "./FilterAside";
import BookResult from "./BookResult";
import BookDetail from "./BookDetail";
import { ToastContainer } from "react-toastify";
import Footer from "./Footer";
import goTop from '../assets/subir.svg';
import bgImg from '../assets/paralax_flechas.svg';
import bgImg2 from '../assets/paralax_cuadrados.svg';
import RecommendBookModal from "./RecommendBookModal";

type SelectedValueProp = {
    OptionName: string;
    Selected: string | number | Author;
}

const BookList = () => {

    const { bookList, favorites, setFavorites, recommendBooksArray } = useContext(BookContext) as bookContextType

    const [isOpen, setOpen] = useState(false)
    const [showMobileFavs, setShowMobileFavs] = useState(false)
    const [result, setResult] = useState<Book[]>([]);
    const [selectedValue, setSelectedValue] = useState<SelectedValueProp | undefined>();
    const [showBookDetail, setShowBookDetail] = useState<boolean>()
    const [showRecommendedModal, setShowRecommendedPopUp] = useState<boolean>(false);

    return (
        <BookContexProvider>
            {showRecommendedModal &&
                <RecommendBookModal
                    recommendBooksArray={recommendBooksArray}
                    setShowBookDetail={setShowBookDetail}
                    setShowRecommendedPopUp={setShowRecommendedPopUp}
                    onHide={() => setShowRecommendedPopUp(false)} />}

            <div className="main" id="top">
                <AppHeader
                    favorites={favorites}
                    recommendsCount={recommendBooksArray}
                    setShowRecommendedPopUp={setShowRecommendedPopUp}
                    setSelectedValue={setSelectedValue}
                    isOpen={isOpen}
                    setOpen={setOpen}
                    setShowMobileFavs={setShowMobileFavs} />

                <div className="main_container">
                    <FilterAside
                        setSelectedValue={setSelectedValue}
                        isOpen={isOpen}
                        setOpen={setOpen}
                        setShowMobileFavs={setShowMobileFavs} />

                    <div className="bookList_container">
                        <div className="bookList_container-counterBooks">
                            <div className="backgroundImg"><img src={bgImg} alt="Bg Image" /></div>
                            <div className="bookList_container-counterBooks-body">
                                {selectedValue?.OptionName !== undefined ?
                                    <BookResult
                                        selectedValue={selectedValue}
                                        result={result}
                                        setResult={setResult}
                                        favorites={favorites}
                                        setFavorites={setFavorites}
                                        setSelectedValue={setSelectedValue}
                                        setShowBookDetail={setShowBookDetail} />
                                    :
                                    <>
                                        {showBookDetail ?
                                            <BookDetail
                                                favorites={favorites}
                                                setFavorites={setFavorites}
                                                setShowBookDetail={setShowBookDetail} />
                                            :
                                            <div className="bookList_container-book">
                                                {bookList.map((boo, index) => {
                                                    return (
                                                        <EachBook
                                                            key={index}
                                                            boo={boo}
                                                            favorites={favorites}
                                                            setFavorites={setFavorites}
                                                            setSelectedValue={setSelectedValue}
                                                            setShowBookDetail={setShowBookDetail} />);
                                                })}
                                            </div>
                                        }
                                    </>
                                }
                            </div>
                            <div className="backgroundImg2"><img src={bgImg2} alt="Bg Image2" /></div>
                        </div>

                        <FavoriteBooks
                            favorites={favorites}
                            showMobileFavs={showMobileFavs}
                            setShowMobileFavs={setShowMobileFavs}
                            setShowBookDetail={setShowBookDetail}
                            setFavorites={setFavorites} />
                    </div>
                </div>
                <div className="gotTopArrow">
                    <a href="#top">
                        <img src={goTop} alt="Top Arrow" />
                    </a>
                </div>
            </div>
            <Footer />
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
