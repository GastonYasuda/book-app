import { useContext, useEffect, useState } from "react";
import BookContext from "../Context/BookContext";
import { Book, bookContextType } from "../typeInterface/BookTypes";
import { Link } from "react-bootstrap/lib/Navbar";
import { Card } from "react-bootstrap";
import EachBook from "./EachBook";


const BookResult = () => {
    const { bookList, selectedValue } = useContext(BookContext) as bookContextType

    const [result, setResult] = useState<Book[]>([]);
    const [favorites, setFavorites] = useState<Book[]>(() => {
        // Recuperar favoritos del localStorage al cargar la página
        const storedFavs = JSON.parse(localStorage.getItem('BookFavArray') || '[]');

        return storedFavs;
    });

    useEffect(() => {
        console.log(selectedValue);
        const filter = bookList.filter(item => item.year === selectedValue || item.author.name === selectedValue || item.genre === selectedValue)

        setResult(filter);


    }, [selectedValue])

    return (
        <div>

            <div className="bookList_container-book">
                {result.map((boo, index) => {
                    return (
                        <EachBook key={index} boo={boo} favorites={favorites}
                            setFavorites={setFavorites} />);
                })}
            </div>


        </div>
    )
};

export default BookResult;
