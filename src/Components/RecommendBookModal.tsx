import { Dispatch, SetStateAction } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Book } from '../typeInterface/BookTypes';
import ShowMiniBook from './ShowMiniBook';

type RecomendBooksProp = {
    recommendBooksArray: Book[];
    setShowBookDetail: Dispatch<SetStateAction<boolean | undefined>>;
    setShowRecommendedPopUp: Dispatch<SetStateAction<boolean>>;
    onHide: () => void;
}

const RecommendBookModal = ({ recommendBooksArray, setShowBookDetail, setShowRecommendedPopUp, onHide }: RecomendBooksProp) => {


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
                    <ShowMiniBook
                        recommendBooksArray={recommendBooksArray}
                        setShowBookDetail={setShowBookDetail}
                        showFrom={'recommended'} />
                    : <h4>Without recommended book</h4>}

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
};

export default RecommendBookModal;
