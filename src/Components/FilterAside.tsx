import { useContext, useEffect, useState } from "react";
import SelectInput from "./SelectInput";
import BookContext from "../Context/BookContext";
import { Author, Book, bookContextType } from "../typeInterface/BookTypes";
import Button from 'react-bootstrap/Button';


type filterAsideProps = {
    setSelectedValue: (value: undefined) => void;
}

const FilterAside = ({ setSelectedValue }: filterAsideProps) => {
    const { bookList } = useContext(BookContext) as bookContextType;
    const [genreOptions, setGenreOptions] = useState<string[]>([]);
    const [yearOptions, setYearOptions] = useState<string[]>([]);
    const [authorOptions, setAuthorOptions] = useState<Author[]>([]);



    useEffect(() => {


        if (!bookList) return; // Validar que `bookList` no sea undefined

        // Obtener géneros únicos
        itemOptions("genre", setGenreOptions, false);

        // Obtener años únicos
        itemOptions("year", setYearOptions, false);

        itemOptions("author", setAuthorOptions, true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [bookList]);

    const itemOptions = <K extends keyof Book>(option: K, setState: React.Dispatch<React.SetStateAction<Book[K][]>>, isAuthorOption: boolean) => {
        if (isAuthorOption && option === "author") {
            const optionResult = bookList
                .map(element => {
                    const value = element[option];
                    return typeof value === "object" && value !== null && "name" in value
                        ? (value as Author).name
                        : null;
                })
                .filter((val): val is Book[K] => val !== null); // Asegura que sea del tipo correcto
            setState(prev => Array.from(new Set([...prev, ...optionResult])));
        } else {
            const optionResult = bookList
                .map(element => element[option])
                .filter((val): val is Book[K] => val !== undefined); // Filtra valores indefinidos
            setState(prev => Array.from(new Set([...prev, ...optionResult])));
        }
    };



    return (
        <div className="filterAsideContainer">
            <h3 className="genreStyle-h3">Filter</h3>
            <SelectInput selectItem={genreOptions} optionName={'Genre'} setSelectedValue={setSelectedValue} />
            <SelectInput selectItem={yearOptions} optionName={'Year'} setSelectedValue={setSelectedValue} />
            <SelectInput selectItem={authorOptions} optionName={'Author'} setSelectedValue={setSelectedValue} />
            <Button variant="primary" onClick={() => { setSelectedValue(undefined) }}>Clear</Button>
        </div>
    );
};

export default FilterAside;
