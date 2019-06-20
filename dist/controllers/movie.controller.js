"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const imdb_search_service_1 = require("../services/imdb.search.service");
class MovieController {
    constructor() {
        this.imdbSearchService = new imdb_search_service_1.ImdbSearchService();
    }
    searchMovies(request, responce) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.imdbSearchService.searchMovies(request.query);
                responce.send(result.results);
            }
            catch (error) {
                responce.status(500).send(error);
            }
        });
    }
    getMovieInfo(request, responce) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.imdbSearchService.getMovieById(request.params.id);
                responce.send(result);
            }
            catch (error) {
                responce.status(500).send(error);
            }
        });
    }
}
exports.MovieController = MovieController;
//# sourceMappingURL=movie.controller.js.map