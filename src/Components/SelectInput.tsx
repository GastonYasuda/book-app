import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";

interface SelectInputProps {
    selectItem: string[]; // Opciones del select
    optionName: string;   // Texto inicial (opción predeterminada)
    setSelectedValue: (value: string) => void; // Función para enviar el valor seleccionado
}

type selectedValueProp = {
    OptionName: string;
    Selected: string;
}

const SelectInput: React.FC<SelectInputProps> = ({ selectItem, optionName, setSelectedValue }) => {
    const [selectedOption, setSelectedOption] = useState<string>("");

    useEffect(() => {
        setSelectedValue({}); // Resetea el valor inicial al montar el componente
    }, [setSelectedValue]);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const eventTarget = event.target.value;

        // Envía el valor seleccionado
        setSelectedValue<selectedValueProp>({
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
                {selectItem?.map((item, i) => (
                    <option key={i} value={i}>
                        {item}
                    </option>
                ))}
            </Form.Select>
        </div>
    );
};

export default SelectInput;
