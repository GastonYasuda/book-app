import Card from 'react-bootstrap/Card';
import { Book, bookContextType } from '../typeInterface/BookTypes';
import { Dispatch, SetStateAction, useContext } from 'react';
import BookContext from '../Context/BookContext';

interface EachBookProps {
    favorites: Book[];
    recommendsCount: Book[];
    setShowMobileFavs: Dispatch<SetStateAction<boolean>>;
    setShowRecommendedPopUp: Dispatch<SetStateAction<boolean>>;
}

const CountCards = ({ favorites, recommendsCount, setShowMobileFavs, setShowRecommendedPopUp }: EachBookProps) => {

    const { bookList } = useContext(BookContext) as bookContextType


    return (
        <div className="header_countCards">
            <Card >
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted tituloCount">Books</Card.Subtitle>
                    <Card.Text className='countCard-p'>{bookList.length}</Card.Text>
                </Card.Body>
            </Card>
            <Card onClick={() => { setShowRecommendedPopUp(true) }}>
                <Card.Body >
                    <Card.Subtitle className="mb-2 text-muted tituloCount">Recommended</Card.Subtitle>
                    <Card.Text className='countCard-p'>{recommendsCount.length}</Card.Text>
                </Card.Body>
            </Card>
            <Card onClick={() => { setShowMobileFavs(true) }}>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted tituloCount">Favs</Card.Subtitle>
                    <Card.Text className='countCard-p'>{favorites?.length}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CountCards;
