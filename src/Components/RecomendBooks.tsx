
//TENGO QUE TRAER LOS FAVS DE LOCALHOST Y BURCAR LOS GENS, Y CREAR UN ARRAY CON LOS QUE MAS TENGAN

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import RecommendBooks_detail from "./RecommendBooks_detail";

interface Book {
    title: string;
    genre: string;
}

type RecomendBooksProp = {
    favorites: Book[];
    showBookDetail: boolean | undefined;
    setShowBookDetail: Dispatch<SetStateAction<boolean | undefined>>;
}

const RecommendBooks = ({ favorites, showBookDetail, setShowBookDetail }: RecomendBooksProp) => {

    const [genreCount, setGenreCount] = useState<string[]>([]);


    useEffect(() => {
        setGenreCount(getMostRepeatedGenres(favorites) || [])


    }, [favorites])



    function getMostRepeatedGenres(books: Book[]): string[] | null {
        if (books.length === 0) return null; // Manejo de array vacío

        // Contar ocurrencias de géneros usando reduce
        const genreCount = books.reduce<Record<string, number>>((acc, book) => {
            acc[book.genre] = (acc[book.genre] || 0) + 1;
            return acc;
        }, {});

        // Encontrar la cantidad máxima de repeticiones
        const maxCount = Math.max(...Object.values(genreCount));

        // Filtrar géneros que tienen la cantidad máxima
        const mostRepeatedGenres = Object.entries(genreCount)
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            .filter(([_, count]) => count === maxCount)
            .map(([genre]) => genre);

        return mostRepeatedGenres.length > 0 ? mostRepeatedGenres : null;
    }



    return (
        <div>
            Recommend
            <RecommendBooks_detail genreCount={genreCount} favorites={favorites} showBookDetail={showBookDetail} setShowBookDetail={setShowBookDetail} />
        </div>
    );
};

export default RecommendBooks;
