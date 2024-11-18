import { useParams } from "react-router-dom";
import { Book, bookContextType } from "../typeInterface/BookTypes";
import { useContext, useEffect, useState } from "react";
import BookContext from "../Context/BookContext";



const BookDetail = () => {
    const { bookId } = useParams();
    const { bookList } = useContext(BookContext) as bookContextType

    const [selectBook, setSelectBook] = useState<Book[]>()

    useEffect(() => {
        const search: Book[] = bookList.filter(book => book.ISBN === bookId)
        setSelectBook(search);
    }, [bookId, bookList])

    return (
        <div>
            BookDetail
            {selectBook?.map((book, i) => (
                <div key={i}>
                    <img src={book.cover} alt={book.title} />
                    <h3>{book.title}</h3>
                    <p>{book.author.name}</p>
                    <p>{book.genre}</p>
                    <p>Number of Pages: {book.pages}</p>
                    <p>{book.synopsis}</p>
                    <p>{book.year}</p>
                </div>
            ))}
        </div>
    );
};

export default BookDetail;
