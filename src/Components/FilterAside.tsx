import { Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import SelectInput from "./SelectInput";
import BookContext from "../Context/BookContext";
import { Author, bookContextType } from "../typeInterface/BookTypes";
import Button from 'react-bootstrap/Button';
import closeButton from '../assets/close-button.png';


type filterAsideProps = {
    setSelectedValue: (value: SelectedValueProp | undefined) => void; // Ahora acepta un objeto o undefined
    isOpen: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    setShowMobileFavs: Dispatch<SetStateAction<boolean>>;
}

type SelectedValueProp = {
    OptionName: string;
    Selected: string | Author | number;
};


const FilterAside = ({ setSelectedValue, isOpen, setOpen, setShowMobileFavs }: filterAsideProps) => {
    const { bookList } = useContext(BookContext) as bookContextType;
    const [genreOptions, setGenreOptions] = useState<string[]>([]);
    const [yearOptions, setYearOptions] = useState<number[]>([]);
    const [authorOptions, setAuthorOptions] = useState<Author[]>([]);


    useEffect(() => {
        if (!bookList) return; // Validar que `bookList` no sea undefined
        itemOptionsRyo<string>("genre", setGenreOptions); // Actualiza opciones de géneros
        itemOptionsRyo<number>("year", setYearOptions);  // Actualiza opciones de años
        itemOptionsRyo<Author>("author", setAuthorOptions);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [bookList]);


    const itemOptionsRyo = <T extends string | number | Author>(
        option: "genre" | "year" | "author",
        state: Dispatch<SetStateAction<T[]>>
    ) => {
        if (option === "author") {
            const authors = bookList.map(eachBook => eachBook.author.name); // `authors` es de tipo `Author[]`.
            state(authors as T[]);
        } else if (option === "year") {
            const years = bookList.map(eachBook => eachBook.year); // `years` es de tipo `number[]`.
            state(years as T[]);
        } else if (option === "genre") {
            const genres = [...new Set(bookList.map(eachBook => eachBook.genre))]; // `genres` es de tipo `string[]`.
            state(genres as T[]);
        }
    };

    const filterClearButton = () => {
        setSelectedValue(undefined)
    }

    const showFavsButton = () => {
        setShowMobileFavs(true)
        setOpen(false)

    }


    return (

        < div className={`filterAsideContainer ${isOpen ? 'showFilter' : ''}`}>
            <div className="filterHeader">
                <Button variant="primary" onClick={() => { setOpen(false) }} className="closeButtonStyle">
                    <img src={closeButton} alt="" />
                </Button>
                <h3 className="genreStyle-h3">Filter</h3>

            </div>
            <SelectInput selectItem={genreOptions} optionName={'Genre'} setSelectedValue={setSelectedValue} setOpen={setOpen} />
            <SelectInput selectItem={yearOptions} optionName={'Year'} setSelectedValue={setSelectedValue} setOpen={setOpen} />
            <SelectInput selectItem={authorOptions} optionName={'Author'} setSelectedValue={setSelectedValue} setOpen={setOpen} />
            {!isOpen ?
                <Button variant="primary" onClick={filterClearButton}>Clear</Button>
                :
                < Button variant="primary" onClick={showFavsButton}>Show Favs</Button>

            }
        </div >

    );
};

export default FilterAside;
