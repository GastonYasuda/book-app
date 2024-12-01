import { Book } from "../typeInterface/BookTypes";
import favImg from '../assets/fav.png';
import { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";
import closeButton from '../assets/close-button.png';
import Button from 'react-bootstrap/Button';



interface EachBookProps {
    favorites: Book[];
    setFavorites: Dispatch<SetStateAction<Book[]>>;
    setShowMobileFavs: Dispatch<SetStateAction<boolean>>
}

const ShowFavorite = ({ favorites, setFavorites, setShowMobileFavs }: EachBookProps) => {

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

    return (
        <div >
            <Button variant="primary" onClick={() => { setShowMobileFavs(false) }} className="closeButtonStyle">
                <img src={closeButton} alt="" />
            </Button>
            {Array.isArray(favorites) && favorites.map((favBook, i) => (
                <div key={i} className="showFavorite_container">
                    <button onClick={() => remove(favBook.title)} className="favButton">
                        <img src={favImg} alt="fav" />
                    </button>
                    <div key={i} className="favBookSection" >
                        <img src={favBook.cover} className="favBookSection_img" />
                        <h5 className="favBookSection_title">{favBook.title}</h5>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ShowFavorite;
