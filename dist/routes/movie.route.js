"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const movie_controller_1 = require("../controllers/movie.controller");
class MovieRoute {
    constructor(router) {
        this.movieController = new movie_controller_1.MovieController();
        this.createRoutes(router);
    }
    createRoutes(router) {
        router.get('/api/movies', this.movieController.searchMovies.bind(this.movieController));
        router.get('/api/movies/:id', this.movieController.getMovieInfo.bind(this.movieController));
    }
}
exports.MovieRoute = MovieRoute;
//# sourceMappingURL=movie.route.js.map