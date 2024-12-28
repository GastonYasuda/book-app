/* eslint-disable react-hooks/exhaustive-deps */

import { Dispatch, SetStateAction, useEffect } from 'react';
import logo from '../assets/logoTanuki.png';
import Hamburger from 'hamburger-react'
import CountCards from './CountCards';
import { Book } from '../typeInterface/BookTypes';


type AppHeaderProps = {
    favorites: Book[];
    recommendsCount: Book[];
    setShowRecommendedPopUp: Dispatch<SetStateAction<boolean>>;
    setSelectedValue: (value: undefined) => void;
    isOpen: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    setShowMobileFavs: Dispatch<SetStateAction<boolean>>
};

const AppHeader = ({ favorites, recommendsCount, setShowRecommendedPopUp, setSelectedValue, isOpen, setOpen, setShowMobileFavs }: AppHeaderProps) => {


    useEffect(() => {
        if (isOpen) {
            setShowMobileFavs(false)
        }
    }, [isOpen])


    return (
        <div className="header_logo" onClick={() => { setSelectedValue(undefined) }}>

            <div className="logo_hamburguer">
                <img src={logo} alt="logo" />
                <Hamburger toggled={isOpen} toggle={setOpen} color="#FFFF" />
            </div>

            <CountCards favorites={favorites} recommendsCount={recommendsCount} setShowRecommendedPopUp={setShowRecommendedPopUp} setShowMobileFavs={setShowMobileFavs} />



        </div>
    );
};

export default AppHeader;
