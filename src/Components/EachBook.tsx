import Card from 'react-bootstrap/Card';
import { Book, bookContextType } from '../typeInterface/BookTypes';
import { Dispatch, SetStateAction, useContext } from 'react';
import BookContext from '../Context/BookContext';
import FavMark from './FavMark';

interface EachBookProps {
    boo: Book;
    favorites: Book[];
    setFavorites: Dispatch<SetStateAction<Book[]>>;
    setShowBookDetail: (value: boolean) => void;
    setSelectedValue: (value: undefined) => void;

}


const EachBook = ({ boo, favorites, setFavorites, setShowBookDetail, setSelectedValue }: EachBookProps) => {
    const { setForBookDetail } = useContext(BookContext) as bookContextType


    const test = () => {
        setSelectedValue(undefined)

        setShowBookDetail(true)
        setForBookDetail(boo.ISBN)
    }

    return (
        <div className="eachBookButton">

            <FavMark boo={boo} favorites={favorites} setFavorites={setFavorites} />

            <div onClick={test}>
                <Card style={{ width: '11rem' }}>
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
