export interface IContent {
    html: string;
}

export interface IAvatar {
    url: string;
}

export interface IAuthor {
    name: string;
    avatar: IAvatar;
}

export interface ICoverPhoto {
    url: string;
}

export interface IPost {
    id: string;
    title: string;
    datePublished: string;
    slug: string;
    content: IContent;
    author: IAuthor;
    coverPhoto: ICoverPhoto;
}

export interface IData {
    posts: IPost[];
}
