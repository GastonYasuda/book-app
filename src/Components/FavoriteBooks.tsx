import { Dispatch, SetStateAction, useEffect } from "react";
import { Book } from "../typeInterface/BookTypes";
import closeButton from '../assets/close-button.png';
import Button from 'react-bootstrap/Button';
import ShowMiniBook from "./ShowMiniBook";

interface EachBookProps {
    favorites: Book[];
    showMobileFavs: boolean;
    setShowMobileFavs: Dispatch<SetStateAction<boolean>>;
    setShowBookDetail: Dispatch<SetStateAction<boolean | undefined>>;
    setFavorites: Dispatch<SetStateAction<Book[] | undefined>>;
}

const FavoriteBooks = ({ favorites, showMobileFavs, setShowMobileFavs, setShowBookDetail, setFavorites }: EachBookProps) => {

    useEffect(() => {
        console.log('favoriteBooks', favorites);


    }, [favorites])

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
                : <ShowMiniBook
                    favorites={favorites}
                    setShowBookDetail={setShowBookDetail}
                    showFrom={'favorites'}
                    setFavorites={setFavorites} />
            }
        </div>
    );
};

export default FavoriteBooks;
