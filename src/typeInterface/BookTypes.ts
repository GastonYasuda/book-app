import { Dispatch, SetStateAction } from "react";

type Author = {
    name: string;
    otherBooks: string[];
};

export type Book ={
    id?:`${string}-${string}-${string}-${string}-${string}`;
    fav?:boolean;
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
    setFavArray: Dispatch<SetStateAction<Book[]>> ,
    AddFav:(value:string | Book[])=>void,
    fav:boolean,
    booky:Book[],
    favStorage:Book[],
    storedBook:Book[],
    setSelectedValue:()=>void;
}

