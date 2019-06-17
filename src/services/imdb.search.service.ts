import imdb, { SearchRequest } from 'imdb-api'
import { MovieQuary } from '../models/movie.quary.model';

export class ImdbSearchService {

    private apiKey: string = 'ad5f7740';
    imdb: imdb.Client;
    constructor() {
        this.imdb = new imdb.Client({ apiKey: this.apiKey });;
    }


    public async searchMovies(quary: MovieQuary) {
        let search: SearchRequest;
        search.name = quary.title;
        return await this.imdb.search(search, quary.page || 1);

    }


}


