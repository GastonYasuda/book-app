import { Dispatch, SetStateAction, useContext, useEffect } from "react";
import BookContext from "../Context/BookContext";
import { Author, Book, bookContextType } from "../typeInterface/BookTypes";
import EachBook from "./EachBook";
import Button from 'react-bootstrap/Button';

type bookResult = {
    // selectedValue: Book[];
    result: Book[];
    setResult: Dispatch<SetStateAction<Book[]>>;
    favorites: Book[];
    setFavorites: Dispatch<SetStateAction<Book[]>>;
    setSelectedValue: Dispatch<SetStateAction<selectedValueProp | undefined>>; // Ahora acepta un objeto o undefined
    selectedValue: selectedValueProp;
}

type selectedValueProp = {
    OptionName: string;
    Selected: string | number | Author;
}

const BookResult = ({ selectedValue, result, setResult, favorites, setFavorites, setSelectedValue }: bookResult) => {
    const { bookList } = useContext(BookContext) as bookContextType

    useEffect(() => {
        const filter = bookList.filter(item => item.year === selectedValue.Selected || item.author.name === selectedValue.Selected || item.genre === selectedValue.Selected)

        setResult(filter);

    }, [bookList, selectedValue.Selected, setResult])

    return (
        <div className="bookResult_container">

            {selectedValue !== undefined &&
                <h3 className="genreStyle-h3">{`${selectedValue.OptionName}: ${selectedValue.Selected}`}</h3>
            }

            <div className="bookList_container-book">
                {result.map((boo, index) => {
                    return (
                        <EachBook key={index} boo={boo} favorites={favorites}
                            setFavorites={setFavorites} setSelectedValue={setSelectedValue} />);
                })}
            </div>

            <Button variant="primary" className="detailCard_container-button" onClick={() => { setSelectedValue(undefined) }}>Back</Button>
        </div>
    )
};

export default BookResult;
