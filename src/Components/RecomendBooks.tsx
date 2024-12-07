
//TENGO QUE TRAER LOS FAVS DE LOCALHOST Y BURCAR LOS GENS, Y CREAR UN ARRAY CON LOS QUE MAS TENGAN

import { useEffect } from "react";

const RecommendBooks = () => {
    useEffect(() => {

        const BookFavArray = localStorage.getItem('BookFavArray');

        console.log(BookFavArray);
        console.log(typeof (BookFavArray));


    }, [])
    return (
        <div>
            Recommend
        </div>
    );
};

export default RecommendBooks;
