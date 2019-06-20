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
const imdb_api_1 = require("imdb-api");
class ImdbSearchService {
    constructor() {
        this.apiKey = 'ad5f7740';
        this.imdb = new imdb_api_1.Client({ apiKey: this.apiKey });
        ;
    }
    searchMovies(quary) {
        return __awaiter(this, void 0, void 0, function* () {
            let search = {
                name: quary.title,
                year: quary.year.length > 0 ? parseInt(quary.year) : null
            };
            return yield this.imdb.search(search, parseInt(quary.page) || 1);
        });
    }
    getMovieById(movieId) {
        return __awaiter(this, void 0, void 0, function* () {
            let movieById = {
                id: movieId
            };
            return yield this.imdb.get(movieById);
        });
    }
}
exports.ImdbSearchService = ImdbSearchService;
//# sourceMappingURL=imdb.search.service.js.map