/* eslint-disable react-hooks/exhaustive-deps */

import { Dispatch, SetStateAction, useEffect } from 'react';
import logo from '../assets/logoTanuki.png';
import Hamburger from 'hamburger-react'


type AppHeaderProps = {
    setSelectedValue: (value: undefined) => void;
    isOpen: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    setShowMobileFavs: Dispatch<SetStateAction<boolean>>
};

const AppHeader = ({ setSelectedValue, isOpen, setOpen, setShowMobileFavs }: AppHeaderProps) => {


    useEffect(() => {
        if (isOpen) {
            setShowMobileFavs(false)
        }
    }, [isOpen])


    return (
        <div className="header_logo" onClick={() => { setSelectedValue(undefined) }}>
            <img src={logo} alt="logo" />

            <Hamburger toggled={isOpen} toggle={setOpen} color="#FFFF" />

        </div>
    );
};

export default AppHeader;
