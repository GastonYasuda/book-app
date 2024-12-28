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
    setFavorites: Dispatch<SetStateAction<Book[]>>;
}

const ShowMiniBook = ({ recommendBooksArray, setShowBookDetail, favorites, setFavorites, showFrom }: EachBookProps) => {

    const { setForBookDetail } = useContext(BookContext) as bookContextType

    const [showStateFrom, setshowStateFrom] = useState<Book[] | undefined>([]);

    useEffect(() => {

        if (showFrom === 'favorites') {
            setshowStateFrom(favorites)
        } else if (recommendBooksArray && showFrom === 'recommended') {
            setshowStateFrom(recommendBooksArray)
        }

    }, [recommendBooksArray, favorites, showFrom, showStateFrom])


    const removeNotify = (title: string) => {
        toast.warn(`${title} Removed from Favs!`, {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    };

    const remove = (title: string) => {
        if (!favorites) return; // No need to proceed if favorites is undefined.
        const removed = favorites.filter((fav) => fav.title !== title);
        setFavorites(removed);
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
