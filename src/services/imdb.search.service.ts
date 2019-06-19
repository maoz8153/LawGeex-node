import { Client, SearchRequest, SearchResult } from 'imdb-api'
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
            year: quary.year
        };
        return await this.imdb.search(search, quary.page || 1);

    }


}


