import { Dispatch, SetStateAction, } from "react";
import { Book } from "../typeInterface/BookTypes";
import ShowFavorite from "./ShowFavorite";
import closeButton from '../assets/close-button.png';
import Button from 'react-bootstrap/Button';

interface EachBookProps {
    favorites: Book[];
    setFavorites: Dispatch<SetStateAction<Book[]>>;
    showMobileFavs: boolean;
    setShowMobileFavs: Dispatch<SetStateAction<boolean>>;
    setShowBookDetail: Dispatch<SetStateAction<boolean | undefined>>;

}
const FavoriteBooks = ({ favorites, setFavorites, showMobileFavs, setShowMobileFavs, setShowBookDetail }: EachBookProps) => {

    return (
        <div className={`bookList_container-favorites ${showMobileFavs ? 'showFav' : ''}`}>
            <div className="favoritesBookHeader">
                <h3>Favorites Book</h3>
                <Button variant="primary" onClick={() => { setShowMobileFavs(false) }} className="closeButtonStyle">
                    <img src={closeButton} alt="" />
                </Button>
            </div>
            {favorites.length === 0 ?
                <h4>You don't have favorite books</h4>
                : <ShowFavorite favorites={favorites} setFavorites={setFavorites} setShowMobileFavs={setShowMobileFavs} wichComponent={''} setShowBookDetail={setShowBookDetail} />
            }
        </div>
    );
};

export default FavoriteBooks;
