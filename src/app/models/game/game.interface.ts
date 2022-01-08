import { Trailer } from './../trailer/trailer.interface';
import { Screenshots } from './../screenshots/screenshots.interface';
import { Rating } from './../rating/rating.interface';
import { Publishers } from './../publishers/publishers.interface';
import { ParentPlataform } from '../parent-plataform/parent-plataform.interface';
import { Genre } from './../genre/genre.interface';

export interface Game {
    id: string,
    background_image: string;
    name: string;
    released: string;
    metacritic_url: string;
    website: string;
    description: string;
    metacritic: number;
    genres: Array<Genre>;
    parent_platforms: Array<ParentPlataform>;
    publishers: Array<Publishers>;
    ratings: Array<Rating>;
    screenshots: Array<Screenshots>;
    trailers: Array<Trailer>;
}
