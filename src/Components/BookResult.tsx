import { Dispatch, SetStateAction, useContext, useEffect } from "react";
import BookContext from "../Context/BookContext";
import { Book, bookContextType } from "../typeInterface/BookTypes";
import EachBook from "./EachBook";

type bookResult = {
    selectedValue: Book[];
    result: Book;
    setResult: () => void;
    favorites: Book[];
    setFavorites: Dispatch<SetStateAction<Book[]>>;
    setShowBookDetail: (value: boolean) => void;

}


const BookResult = ({ selectedValue, result, setResult, favorites, setFavorites, setShowBookDetail, setSelectedValue }: bookResult) => {
    const { bookList } = useContext(BookContext) as bookContextType


    useEffect(() => {
        const filter = bookList.filter(item => item.year === selectedValue.Selected || item.author.name === selectedValue.Selected || item.genre === selectedValue.Selected)

        setResult(filter);

    }, [bookList, selectedValue.Selected])

    return (
        <div>
            {selectedValue !== undefined &&
                <h3 className="genreStyle-h3">{`${selectedValue.OptionName}: ${selectedValue.Selected}`}</h3>
            }

            <div className="bookList_container-book">
                {result.map((boo, index) => {
                    return (
                        <EachBook key={index} boo={boo} favorites={favorites}
                            setFavorites={setFavorites} setShowBookDetail={setShowBookDetail} setSelectedValue={setSelectedValue} />);
                })}
            </div>


        </div>
    )
};

export default BookResult;
