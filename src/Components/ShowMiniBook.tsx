import { Book, bookContextType } from "../typeInterface/BookTypes";
import favImg from '../assets/fav.png';
import { Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import BookContext from "../Context/BookContext";


interface EachBookProps {
    recommendBooksArray?: Book[];
    setShowBookDetail: Dispatch<SetStateAction<boolean | undefined>>;
    favorites?: Book[] | undefined;
    showFrom: string;
}

const ShowMiniBook = ({ recommendBooksArray, setShowBookDetail, favorites, showFrom }: EachBookProps) => {

    const { setForBookDetail, setFavorites } = useContext(BookContext) as bookContextType

    const [showStateFrom, setshowStateFrom] = useState<Book[] | undefined>([]);

    useEffect(() => {
        if (showFrom === 'favorites') {
            setshowStateFrom(favorites)
        } else if (recommendBooksArray && showFrom === 'recommended') {
            setshowStateFrom(recommendBooksArray)
        }

    }, [recommendBooksArray, favorites, showFrom])


    const removeNotify = (title: string) => {
        toast.warn(`${title} Removed from Favs!`, {
            position: "top-right",
            theme: "light",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
        });
    };

    const remove = (title: string) => {
        const safeSetFavorites = setFavorites || (() => { });
        const removed = favorites?.filter((fav) => fav.title !== title);
        safeSetFavorites(removed);
        removeNotify(title);
    }

    const goToDetail = (bookISBN: string) => {
        setShowBookDetail(true);
        setForBookDetail(bookISBN)
    }

    return (
        <>
            {Array.isArray(showStateFrom) && showStateFrom.map((favBook, i) => (
                <div key={i} className="ShowMiniBook_container">
                    {showFrom === 'favorites' ?
                        <button onClick={() => remove(favBook.title)} className="favButton">
                            <img src={favImg} alt="fav" />
                        </button>
                        : ''
                    }
                    <div key={i} className="favBookSection" onClick={() => { goToDetail(favBook.ISBN) }}>
                        <img src={favBook.cover} className="favBookSection_img" />
                        <h5 className="favBookSection_title">{favBook.title}</h5>
                        <p>{favBook.genre}</p>
                    </div>
                </div>
            ))}
        </>
    );
};

export default ShowMiniBook;
