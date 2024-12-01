import { Dispatch, SetStateAction, } from "react";
import { Book } from "../typeInterface/BookTypes";
import ShowFavorite from "./ShowFavorite";


interface EachBookProps {
    favorites: Book[];
    setFavorites: Dispatch<SetStateAction<Book[]>>;
    showMobileFavs: boolean;
    setShowMobileFavs: Dispatch<SetStateAction<boolean>>;

}
const FavoriteBooks = ({ favorites, setFavorites, showMobileFavs, setShowMobileFavs }: EachBookProps) => {


    return (
        <div className={`bookList_container-favorites ${showMobileFavs ? 'showFav' : ''}`}>
            <h3>Favorites Book</h3>
            {favorites.length === 0 ?
                <h4>You don't have favorite books</h4>
                : <ShowFavorite favorites={favorites} setFavorites={setFavorites} setShowMobileFavs={setShowMobileFavs} />
            }
        </div>
    );
};

export default FavoriteBooks;
