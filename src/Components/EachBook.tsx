import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Book } from '../typeInterface/BookTypes';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import favImg from '../assets/fav.png';
import notFavImg from '../assets/notFav.png';

interface EachBookProps {
    boo: Book;
    favorites: Book[];
    setFavorites: Dispatch<SetStateAction<Book[]>>;
}


const EachBook = ({ boo, favorites, setFavorites }: EachBookProps) => {
    const [fav, setFav] = useState<boolean>(false);

    // Revisar si el libro ya es favorito al cargar el componente
    useEffect(() => {
        const isFavorite = favorites.some((book) => book.ISBN === boo.ISBN);
        setFav(isFavorite);

    }, [boo.ISBN, favorites]);

    const AddFav = (bookClick: Book) => {
        if (fav) {
            // Si ya es favorito, quitarlo del array
            setFavorites((prev) => prev.filter((book) => book.ISBN !== bookClick.ISBN));
            setFav(false);
        } else {
            // Si no es favorito, agregarlo al array
            setFavorites((prev) => [...prev, bookClick]);
            setFav(true);
        }
    };

    return (
        <div className="eachBookButton">
            <button onClick={() => AddFav(boo)} className="favButton">
                {fav ? <img src={favImg} alt="fav" /> : <img src={notFavImg} alt="not fav" />}
            </button>

            <Link to={`/${boo.ISBN}`}>
                <Card style={{ width: '11rem' }}>
                    <Card.Img variant="top" src={boo.cover} className="cardImg" />
                    <Card.Body>
                        <Card.Title className='card-title-h5'>{boo.title}</Card.Title>
                        <Card.Text>{boo.author.name}</Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </div>
    );
};

export default EachBook;
