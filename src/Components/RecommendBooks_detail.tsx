import { Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import { Book, bookContextType } from "../typeInterface/BookTypes";
import BookContext from "../Context/BookContext";
import ShowFavorite from "./ShowFavorite";

type RecommendBooks_detailProps = {
    genreCount: string[];
    favorites: Book[];
    setShowBookDetail: Dispatch<SetStateAction<boolean | undefined>>;
};
type recommendBooksArrayProps = {
    recommendBooksArray: Book[];
    setRecomendBooksArray: Dispatch<SetStateAction<Book[]>>; // Ajustado aquí
}

const RecommendBooks_detail = ({ genreCount, favorites, setShowBookDetail }: RecommendBooks_detailProps) => {
    const { bookList } = useContext(BookContext) as bookContextType


    const [recommendBooksArray, setRecommendBooksArray] = useState<recommendBooksArrayProps[]>([]);


    useEffect(() => {
        setRecommendBooksArray([])

        // Primero separamos los libros que no están en 'favorites'
        const notFavBooks = bookList.filter((book) =>
            !favorites.some((fav) => fav.title === book.title)
        );

        // Filtrar y agregar solo los libros que no están en 'recommendBooksArray' y coinciden con los géneros más repetidos
        genreCount.forEach((mostGenre) => {
            notFavBooks.forEach((notFav) => {
                if (notFav.genre === mostGenre) {
                    // Verificar si el libro ya está en el array

                    //ME ESTA AGREGANDO LOS QUE YA NO SON FAVS TAMBIEN
                    setRecommendBooksArray((prev) => {
                        if (!prev.some((book) => book.title === notFav.title)) {
                            return [...prev, notFav]; // Solo agregar si no está presente
                        }
                        return prev; // Si ya está, no agregar
                    });
                }
            });
        });

    }, [genreCount, bookList, favorites]); // Asegúrate de que las dependencias sean correctas


    return (
        <div>
            <h1>{genreCount}</h1>

            <ShowFavorite favorites={recommendBooksArray} setFavorites={setRecommendBooksArray} wichComponent={'recommendedBooks'} setShowBookDetail={setShowBookDetail} />
        </div >
    )
};

export default RecommendBooks_detail;
