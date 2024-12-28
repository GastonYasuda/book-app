import { Dispatch, SetStateAction, useContext, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Book, bookContextType } from '../typeInterface/BookTypes';
import BookContext from '../Context/BookContext';
import ShowMiniBook from './ShowMiniBook';

type RecomendBooksProp = {
    favorites: Book[];
    showBookDetail: boolean | undefined;
    setShowBookDetail: Dispatch<SetStateAction<boolean | undefined>>;
    show: true; onHide: () => void;
    setShowRecommendedPopUp: Dispatch<SetStateAction<boolean>>;
    recommendBooksArray: Book[];
}

const RecommendBookModal = ({ recommendBooksArray, setShowBookDetail, onHide, setShowRecommendedPopUp }: RecomendBooksProp) => {


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
                    Recommended Books
                </Modal.Title>
            </Modal.Header>
            <Modal.Body onClick={onHide}>
                {recommendBooksArray.length !== 0 ?
                    <ShowMiniBook recommendBooksArray={recommendBooksArray} setShowBookDetail={setShowBookDetail} showFrom={'recommended'} />
                    : <h4>Without recommended book</h4>}

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
};

export default RecommendBookModal;
