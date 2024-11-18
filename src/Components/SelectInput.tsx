import { useContext, useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import BookContext from '../Context/BookContext';
import { bookContextType } from '../typeInterface/BookTypes';

type selectItemProps = {
    selectItem: string[] | number[] | undefined;
    optionName: string;
};

const SelectInput = ({ selectItem, optionName }: selectItemProps) => {
    const { setSelectedValue } = useContext(BookContext) as bookContextType

    // useEffect(() => {
    //     console.log(selectedValue);

    // }, [selectedValue])


    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setSelectedValue(selectItem[value]);
    };


    return (
        <Form.Select aria-label="Default select example" onChange={handleChange} defaultValue={optionName} >
            <option disabled>
                {optionName}
            </option>
            {selectItem?.map((item, i) => {
                return (
                    <option key={i} value={i}>{item}</option>

                )
            })}
        </Form.Select>
    );
};

export default SelectInput;
