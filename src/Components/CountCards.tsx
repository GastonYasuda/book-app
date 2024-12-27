import Card from 'react-bootstrap/Card';
import { Book, bookContextType } from '../typeInterface/BookTypes';
import { Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import BookContext from '../Context/BookContext';

interface EachBookProps {
    favorites: Book[];
    setFavorites: Dispatch<SetStateAction<Book[]>>;
    setShowMobileFavs: Dispatch<SetStateAction<boolean>>
    setShowRecommendedPopUp: Dispatch<SetStateAction<boolean>>
    recomemendedBookCount: number;
}

const CountCards = ({ favorites, setShowMobileFavs, setShowRecommendedPopUp }: EachBookProps) => {

    const { bookList, recomemendedBookCount, recommendBooksArray } = useContext(BookContext) as bookContextType

    useEffect(() => {
        console.log(recomemendedBookCount);

    }, [favorites, recomemendedBookCount])

    return (
        <div className="bookList_container-countCards">
            <Card style={{ width: '11rem' }}>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted tituloCount">Books</Card.Subtitle>
                    <Card.Text className='countCard-p'>{bookList.length}</Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '11rem' }} onClick={() => { setShowRecommendedPopUp(true) }}>
                <Card.Body >
                    <Card.Subtitle className="mb-2 text-muted tituloCount">Reco Books</Card.Subtitle>
                    <Card.Text className='countCard-p'>{recommendBooksArray.length}</Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '11rem' }} onClick={() => { setShowMobileFavs(true) }}>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted tituloCount">Favs</Card.Subtitle>
                    <Card.Text className='countCard-p'>{favorites?.length}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CountCards;
