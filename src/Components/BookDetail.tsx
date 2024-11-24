import { Book, bookContextType } from "../typeInterface/BookTypes";
import { Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import BookContext from "../Context/BookContext";
import Button from 'react-bootstrap/Button';
import FavMark from "./FavMark";

type BookDetailProps = {
    setShowBookDetail: (value: boolean) => void;
    favorites: Book[];
    setFavorites: Dispatch<SetStateAction<Book[]>>;
}

const BookDetail = ({ setShowBookDetail, favorites, setFavorites }: BookDetailProps) => {
    const { bookList, forBookDetail } = useContext(BookContext) as bookContextType

    const [selectBook, setSelectBook] = useState<Book[]>()

    useEffect(() => {
        const search: Book[] = bookList.filter(book => book.ISBN === forBookDetail)
        setSelectBook(search);
    }, [forBookDetail, bookList])


    return (
        <div className="detailCard_container">
            <Button variant="primary" className="detailCard_container-button" onClick={() => { setShowBookDetail(false) }}>Back</Button>
            {selectBook?.map((book, i) => (
                <div key={i} className="detailCard_container-card">
                    <FavMark boo={book} favorites={favorites} setFavorites={setFavorites} />

                    <div className="detailCard_container-card-detail">
                        <img src={book.cover} alt={book.title} className="detailCard_img" />
                        <div className="detailCard_container-detail-data">
                            <h3>{book.title}</h3>
                            <span>Author: {book.author.name}</span>
                            <span>Genre: {book.genre}</span>
                            <span>Pages: {book.pages}</span>
                            <span>Year: {book.year}</span>
                            <p>{book.synopsis}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BookDetail;
