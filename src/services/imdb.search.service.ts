import { Client, SearchRequest, SearchResult, MovieRequest } from 'imdb-api'
import { MovieQuary } from '../models/movie.quary.model';

export class ImdbSearchService {

    private apiKey: string = 'ad5f7740';
    imdb: Client;
    constructor() {
        this.imdb = new Client({ apiKey: this.apiKey });;
    }


    public async searchMovies(quary: MovieQuary) {
        let search: SearchRequest = {
            name: quary.title,
            year: quary.year.length > 0 ? parseInt(quary.year) : null
        };
        return await this.imdb.search(search, parseInt(quary.page) || 1);

    }

    public async getMovieById(movieId: string) {
        let movieById: MovieRequest = {
            id: movieId
        };
        return await this.imdb.get(movieById);

    }


}


