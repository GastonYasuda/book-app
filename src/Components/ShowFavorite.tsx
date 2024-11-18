import { Book } from "../typeInterface/BookTypes";
import favImg from '../assets/fav.png';
import { Dispatch, SetStateAction } from "react";


interface EachBookProps {
    favorites: Book[];
    setFavorites: Dispatch<SetStateAction<Book[]>>;
}

const ShowFavorite = ({ favorites, setFavorites }: EachBookProps) => {

    const remove = (title: string) => {
        const remove = favorites?.filter((fav) => fav.title !== title);
        setFavorites(remove);
    }

    return (
        <div>
            {Array.isArray(favorites) && favorites.map((favBook, i) => (
                <div key={i}>
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
