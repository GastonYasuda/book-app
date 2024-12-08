import { Book, bookContextType } from "../typeInterface/BookTypes";
import favImg from '../assets/fav.png';
import { Dispatch, SetStateAction, useContext } from "react";
import { toast } from "react-toastify";
import BookContext from "../Context/BookContext";


interface EachBookProps {
    favorites: Book[];
    setFavorites: Dispatch<SetStateAction<Book[]>>;
    setShowMobileFavs: Dispatch<SetStateAction<boolean>>
    wichComponent: string;
    setShowBookDetail: Dispatch<SetStateAction<boolean | undefined>>;
}

const ShowFavorite = ({ favorites, setFavorites, wichComponent, setShowBookDetail }: EachBookProps) => {

    const { setForBookDetail } = useContext(BookContext) as bookContextType

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
        const removed = favorites?.filter((fav) => fav.title !== title);
        setFavorites(removed);
        removeNotify(title)
    }

    const goToDetail = (bookISBN: string) => {
        setShowBookDetail(true);
        setForBookDetail(bookISBN)
    }

    return (
        <div >
            {Array.isArray(favorites) && favorites.map((favBook, i) => (
                <div key={i} className="showFavorite_container">
                    {wichComponent === 'recommendedBooks' ? '' :
                        <button onClick={() => remove(favBook.title)} className="favButton">
                            <img src={favImg} alt="fav" />
                        </button>
                    }
                    <div key={i} className="favBookSection" onClick={() => { goToDetail(favBook.ISBN) }}>
                        <img src={favBook.cover} className="favBookSection_img" />
                        <h5 className="favBookSection_title">{favBook.title}</h5>
                        <p>{favBook.genre}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ShowFavorite;
