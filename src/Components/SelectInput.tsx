import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { Author } from "../typeInterface/BookTypes";

type filterAsideProps = {
    selectItem: string[] | number[] | Author[];
    optionName: string;
    setSelectedValue: (value: SelectedValueProp | undefined) => void; // Ahora acepta un objeto o undefined
    setOpen: Dispatch<SetStateAction<boolean>>;
};

type SelectedValueProp = {
    OptionName: string;
    Selected: string | Author | number;
};


const SelectInput = ({ selectItem, optionName, setSelectedValue, setOpen }: filterAsideProps) => {
    const [selectedOption, setSelectedOption] = useState<string>("");

    useEffect(() => {
        setSelectedValue(undefined);
    }, [setSelectedValue, selectItem]);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const eventTarget = event.target.value;

        setSelectedValue({
            OptionName: optionName,
            Selected: selectItem[parseInt(eventTarget, 10)]
        });

        setSelectedOption("");
        setOpen(false)
    };

    return (
        <div>
            <Form.Select
                aria-label="Default select example"
                onChange={handleChange}
                value={selectedOption}
            >
                <option value="" disabled>
                    {optionName}
                </option>

                {selectItem.length !== 0 && selectItem.map((item, i) => (
                    <option key={i} value={i}>
                        {typeof item === "string" ? item : item.toString()}
                    </option>
                ))}

            </Form.Select>
        </div>
    );
};

export default SelectInput;
