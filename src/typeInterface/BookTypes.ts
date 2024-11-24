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
    year: string;
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
    setFavArray: Dispatch<SetStateAction<Book[]>> ,
    AddFav:(value:string | Book[])=>void,
    fav:boolean,
    booky:Book[],
    favStorage:Book[],
    storedBook:Book[],
    selectedValue?:Book[],
    setSelectedValue?:()=>void;
    forBookDetail:string;
    setForBookDetail:(value:Book['ISBN'])=>void;
}

