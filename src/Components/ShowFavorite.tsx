import { Book } from "../typeInterface/BookTypes";
import favImg from '../assets/fav.png';
import { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";



interface EachBookProps {
    favorites: Book[];
    setFavorites: Dispatch<SetStateAction<Book[]>>;
}

const ShowFavorite = ({ favorites, setFavorites }: EachBookProps) => {

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
        console.log('quit');
        const removed = favorites?.filter((fav) => fav.title !== title);
        setFavorites(removed);
        removeNotify(title)
    }

    return (
        <div >
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
