import { Request, Response } from 'express'
import { ImdbSearchService } from '../services/imdb.search.service';

export class MovieController {

    imdbSearchService: ImdbSearchService;

    constructor() {
        this.imdbSearchService = new ImdbSearchService();
    }


    public async searchMovies(request: Request, responce: Response) {
        try {
            const result = await this.imdbSearchService.searchMovies(request.query);
            responce.send(result.results);
        } catch (error) {
            responce.status(500).send(error);
        }
    }

    public async getMovieInfo(request: Request, responce: Response) {
        try {
            const result = await this.imdbSearchService.getMovieById(request.params.id);
            responce.send(result);
        } catch (error) {
            responce.status(500).send(error);
        }
    }



}