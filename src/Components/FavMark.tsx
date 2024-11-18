import { useEffect, useState } from "react";
import { Book } from "../typeInterface/BookTypes";


interface EachBookProps {
    settingFavs: Book;
}

const FavMark = ({ settingFavs }: EachBookProps) => {

    const [favoriteArray, setFavoriteArray] = useState<Book[]>([])

    useEffect(() => {
        //   if (favoriteArray.length !== 0) console.log(favoriteArray);

    }, [favoriteArray]);



    const AddFav = (bookClick: Book) => {

        // console.log(bookClick);

        setFavoriteArray((prevList) => {
            const updatedList = [...prevList, bookClick];
            console.log(updatedList);

            return updatedList; // Devuelve el nuevo estado
        });


    };

    return (
        <button onClick={() => AddFav(settingFavs)} className='favButton'>
            {settingFavs.fav ? <img src={favImg} alt="fav" /> : <img src={notFavImg} alt="not fav" />}
        </button>
    );
};

export default FavMark;
