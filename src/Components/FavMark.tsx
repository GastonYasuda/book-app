import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import favImg from '../assets/fav.png';
import notFavImg from '../assets/notFav.png';
import { Book } from '../typeInterface/BookTypes';
import { toast } from "react-toastify";


type FavMarkProps = {
    boo: Book;
    favorites: Book[];
    setFavorites: Dispatch<SetStateAction<Book[]>>; // Ajustado aquí
};

const FavMark = ({ boo, favorites, setFavorites }: FavMarkProps) => {

    const [fav, setFav] = useState<boolean>(false);

    useEffect(() => {
        const isFavorite = favorites.some((book) => book.ISBN === boo.ISBN);
        setFav(isFavorite);
    }, [boo.ISBN, favorites]);

    const addNotify = () => {
        toast.success(`${boo.title} Added to Favs!`, {
            position: "top-right",
            theme: "light",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
        });
    };
    const removeNotify = () => {
        toast.warn(`${boo.title} Removed from Favs!`, {
            position: "top-right",
            theme: "light",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
        });
    };

    const AddFav = (bookClick: Book) => {
        if (fav) {
            // If is Fav, remove from array
            setFavorites((prev) => prev.filter((book) => book.ISBN !== bookClick.ISBN));
            setFav(false);
            removeNotify()
        } else {
            setFavorites((prev) => [...prev, bookClick]);
            setFav(true);
            addNotify()
        }
    };

    return (
        <>
            <button onClick={() => AddFav(boo)} className="favButton">
                {fav ? <img src={favImg} alt="fav" /> : <img src={notFavImg} alt="not fav" />}
            </button>

        </>

    );
};

export default FavMark;
