import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { Author } from "../typeInterface/BookTypes";

type filterAsideProps = {
    setSelectedValue: (value: SelectedValueProp | undefined) => void; // Ahora acepta un objeto o undefined
    selectItem: string[] | number[] | Author[];
    optionName: string;
};

type SelectedValueProp = {
    OptionName: string;
    Selected: string | Author | number;
};



const SelectInput = ({ selectItem, optionName, setSelectedValue }: filterAsideProps) => {
    const [selectedOption, setSelectedOption] = useState<string>("");

    useEffect(() => {
        setSelectedValue(undefined); // Resetea el valor inicial al montar el componente
    }, [setSelectedValue]);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const eventTarget = event.target.value;

        // Envía el valor seleccionado
        setSelectedValue({
            OptionName: optionName,
            Selected: selectItem[parseInt(eventTarget, 10)]
        });

        // Resetea el valor del select a su opción inicial
        setSelectedOption(""); // Vuelve a mostrar la opción predeterminada
    };

    return (
        <div>
            <Form.Select
                aria-label="Default select example"
                onChange={handleChange}
                value={selectedOption} // Conectamos el estado local al valor del select
            >
                <option value="" disabled>
                    {optionName} {/* Opción predeterminada */}
                </option>
                {selectItem.map((item, i) => (
                    <option key={i} value={i}>
                        {typeof item === "string" ? item : item.toString()} {/* Asegura que sea string */}
                    </option>
                ))}
            </Form.Select>
        </div>
    );
};

export default SelectInput;
