import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import favImg from '../assets/fav.png';
import notFavImg from '../assets/notFav.png';
import { Book } from '../typeInterface/BookTypes';

type FavMarkProps = {
    boo: Book;
    favorites: Book[];
    setFavorites: Dispatch<SetStateAction<Book[]>>;
};

const FavMark = ({ boo, favorites, setFavorites }: FavMarkProps) => {

    const [fav, setFav] = useState<boolean>(false);

    useEffect(() => {
        const isFavorite = favorites.some((book) => book.ISBN === boo.ISBN);
        setFav(isFavorite);

    }, [boo.ISBN, favorites]);

    const AddFav = (bookClick: Book) => {

        if (fav) {
            // Si ya es favorito, quitarlo del array
            setFavorites((prev) => prev.filter((book) => book.ISBN !== bookClick.ISBN));
            setFav(false);
        } else {
            // Si no es favorito, agregarlo al array
            setFavorites((prev) => [...prev, bookClick]);
            setFav(true);
        }
    };


    return (
        <button onClick={() => AddFav(boo)} className="favButton">
            {fav ? <img src={favImg} alt="fav" /> : <img src={notFavImg} alt="not fav" />}
        </button>
    );
};

export default FavMark;
