import { Router } from 'express'
import { MovieController } from '../controllers/movie.controller';

export class MovieRoute {

    private movieController: MovieController;

    constructor(router: Router) {
        this.movieController = new MovieController();
        this.createRoutes(router);
    }

    private createRoutes(router: Router) {
        router.get('/api/movies', this.movieController.searchMovies.bind(this.movieController));
        router.get('/api/movies/:id', this.movieController.getMovieInfo.bind(this.movieController));
    }

}