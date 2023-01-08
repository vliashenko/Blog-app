import {IAuthor, ICoverPhoto} from './home.types';

export interface IBlogCard {
    title: string | undefined
    author: IAuthor
    slug: string | undefined
    coverPhoto: ICoverPhoto
    datePublished: string | undefined
}