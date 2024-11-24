import Card from 'react-bootstrap/Card';
import { Book, bookContextType } from '../typeInterface/BookTypes';
import { Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import BookContext from '../Context/BookContext';

interface EachBookProps {
    favorites: Book[];
    setFavorites: Dispatch<SetStateAction<Book[]>>;
}

const CountCards = ({ favorites }: EachBookProps) => {

    const { bookList } = useContext(BookContext) as bookContextType
    const [totalCount, setTotalCount] = useState<number>()

    useEffect(() => {

        if (favorites !== undefined) {
            setTotalCount(bookList.length - favorites.length)
        }

    }, [bookList.length, favorites])

    return (
        <div className="bookList_container-countCards">
            <Card style={{ width: '15rem' }}>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted tituloCount">Number of Books</Card.Subtitle>
                    <Card.Text className='countCard-p'>{bookList.length}</Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '15rem' }}>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted tituloCount">Not Favs</Card.Subtitle>
                    <Card.Text className='countCard-p'>{totalCount}</Card.Text>

                </Card.Body>
            </Card>
            <Card style={{ width: '15rem' }}>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted tituloCount">Favorites</Card.Subtitle>
                    <Card.Text className='countCard-p'>{favorites?.length}</Card.Text>
                </Card.Body>
            </Card>

        </div>
    );
};

export default CountCards;
