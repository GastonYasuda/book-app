import { Dispatch, SetStateAction } from "react";

export type Author = {
    name: string;
    otherBooks: string[];
};

export type Book ={
    title: string;
    pages: number;
    genre: string;
    cover: string;
    synopsis: string;
    year: number;
    ISBN: string;
    author: Author;
};

export interface LibraryEntry {
    book: Book;
};

export type Library = {
    library: LibraryEntry[];
};

export type bookContextType={
    bookList: Book[],
    setBookList:(value:Book[])=>void,
    favArray:Book[],
    forBookDetail:string;
    setForBookDetail:(value:Book['ISBN'])=>void;
    recomemendedBookCount:number;
    setRecommendedBookCount:(value:number)=>void;  
    favorites:Book[];
    setFavorites:Dispatch<SetStateAction<Book[]>>
    recommendBooksArray:Book[];
}

