import { Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import SelectInput from "./SelectInput";
import BookContext from "../Context/BookContext";
import { bookContextType } from "../typeInterface/BookTypes";
import Button from 'react-bootstrap/Button';


type filterAsideProps = {
    setSelectedValue: Dispatch<SetStateAction<string>>;
}

const FilterAside = ({ setSelectedValue }: filterAsideProps) => {
    const { bookList } = useContext(BookContext) as bookContextType;
    const [genreOptions, setGenreOptions] = useState<string[]>([]);
    const [yearOptions, setYearOptions] = useState<number[]>([]);
    const [authorOptions, setAuthorOptions] = useState<string[]>([]);



    useEffect(() => {


        if (!bookList) return; // Validar que `bookList` no sea undefined

        // Obtener géneros únicos
        itemOptions("genre", setGenreOptions, false);

        // Obtener años únicos
        itemOptions("year", setYearOptions, false);

        itemOptions("author", setAuthorOptions, true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [bookList]);

    const itemOptions = <K extends keyof typeof bookList[number]>(option: K, setState: React.Dispatch<React.SetStateAction<(typeof bookList[number][K])[]>>, isAuthor: boolean) => {
        if (isAuthor) {
            const optionResult = bookList.map(element => element[option]["name"]);
            if (optionResult) setState(prev => Array.from(new Set([...prev, ...optionResult])));
        } else {
            const optionResult = bookList.map(element => element[option]);
            setState(prev => Array.from(new Set([...prev, ...optionResult])));
        }
    };


    return (
        <div className="filterAsideContainer">
            <SelectInput selectItem={genreOptions} optionName={'Genre'} setSelectedValue={setSelectedValue} />
            <SelectInput selectItem={yearOptions} optionName={'Year'} setSelectedValue={setSelectedValue} />
            <SelectInput selectItem={authorOptions} optionName={'Author'} setSelectedValue={setSelectedValue} />
            <Button variant="primary" onClick={() => { setSelectedValue(undefined) }}>Clear</Button>
        </div>
    );
};

export default FilterAside;
