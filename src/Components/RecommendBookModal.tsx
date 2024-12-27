import { Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Book, bookContextType } from '../typeInterface/BookTypes';
import RecommendBooks_detail from './RecommendBooks_detail';
import BookContext from '../Context/BookContext';
import ShowMiniBook from './ShowMiniBook';

type RecomendBooksProp = {
    favorites: Book[];
    showBookDetail: boolean | undefined;
    setShowBookDetail: Dispatch<SetStateAction<boolean | undefined>>;
    show: true; onHide: () => void;
    setShowRecommendedPopUp: Dispatch<SetStateAction<boolean>>;

}

const RecommendBookModal = ({ recommendBooksArray, setShowBookDetail, onHide, setShowRecommendedPopUp }: RecomendBooksProp) => {

    const { favorites } = useContext(BookContext) as bookContextType

    useEffect(() => {
        console.log('reco', recommendBooksArray);

    }, [recommendBooksArray, favorites])



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
                {/* <RecommendBooks_detail genreCount={recommendBooksArray} setShowBookDetail={setShowBookDetail} /> */}
                <ShowMiniBook recommendBooksArray={recommendBooksArray} setShowBookDetail={setShowBookDetail} showFrom={'recommended'} />

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
};

export default RecommendBookModal;
