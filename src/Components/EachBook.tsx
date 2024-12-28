import Card from 'react-bootstrap/Card';
import { Book, bookContextType } from '../typeInterface/BookTypes';
import { Dispatch, SetStateAction, useContext } from 'react';
import BookContext from '../Context/BookContext';
import FavMark from './FavMark';

interface EachBookProps {
    boo: Book;
    favorites: Book[];
    setFavorites: Dispatch<SetStateAction<Book[]>>;
    setSelectedValue: (value: undefined) => void;
    setShowBookDetail: (value: boolean) => void;
}

const EachBook = ({ boo, favorites, setFavorites, setSelectedValue, setShowBookDetail }: EachBookProps) => {
    const { setForBookDetail } = useContext(BookContext) as bookContextType

    const showEachBook = () => {
        setSelectedValue(undefined)
        setShowBookDetail(true)
        setForBookDetail(boo.ISBN)
    }

    return (
        <div className="eachBookButton">
            <FavMark boo={boo} favorites={favorites} setFavorites={setFavorites} />
            <div onClick={showEachBook}>
                <Card>
                    <Card.Img variant="top" src={boo.cover} className="cardImg" />
                    <Card.Body>
                        <Card.Title className='card-title-h5'>{boo.title}</Card.Title>
                        <Card.Text>{boo.author.name}</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default EachBook;
