import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Book } from '../typeInterface/BookTypes';
import RecommendBooks_detail from './RecommendBooks_detail';

type RecomendBooksProp = {
    favorites: Book[];
    showBookDetail: boolean | undefined;
    setShowBookDetail: Dispatch<SetStateAction<boolean | undefined>>;
    show: true; onHide: () => void;
    setShowRecommendedPopUp: Dispatch<SetStateAction<boolean>>;

}

const RecommendBookModal = ({ favorites, setShowBookDetail, onHide, setShowRecommendedPopUp }: RecomendBooksProp) => {


    // const [genreCount, setGenreCount] = useState<string[]>([]);


    // useEffect(() => {
    //     setGenreCount(getMostRepeatedGenres(favorites) || [])
    // }, [favorites])

    // function getMostRepeatedGenres(books: Book[]): string[] | null {
    //     if (books.length === 0) return null; // Manejo de array vacío

    //     // Contar ocurrencias de géneros usando reduce
    //     const genreCount = books.reduce<Record<string, number>>((acc, book) => {
    //         acc[book.genre] = (acc[book.genre] || 0) + 1;
    //         return acc;
    //     }, {});

    //     // Encontrar la cantidad máxima de repeticiones
    //     const maxCount = Math.max(...Object.values(genreCount));

    //     // Filtrar géneros que tienen la cantidad máxima
    //     const mostRepeatedGenres = Object.entries(genreCount)
    //         // eslint-disable-next-line @typescript-eslint/no-unused-vars
    //         .filter(([_, count]) => count === maxCount)
    //         .map(([genre]) => genre);

    //     return mostRepeatedGenres.length > 0 ? mostRepeatedGenres : null;
    // }



    return (
        <Modal
            show
            onHide={() => setShowRecommendedPopUp(false)}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                </Modal.Title>
            </Modal.Header>
            <Modal.Body onClick={onHide}>
                <RecommendBooks_detail genreCount={genreCount} favorites={favorites} setShowBookDetail={setShowBookDetail} />
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
};

export default RecommendBookModal;
