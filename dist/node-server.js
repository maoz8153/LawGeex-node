"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const express_1 = __importStar(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const config_service_core_1 = require("./core/config.service.core");
const movie_route_1 = require("./routes/movie.route");
class NodeServer {
    constructor() {
        this.initEnvSettings();
        this.createApp();
        this.createServer();
        this.initExpressMiddleWare();
        this.initRoutes();
        this.listen();
    }
    createApp() {
        this.app = express_1.default();
    }
    initEnvSettings() {
        this.config = new config_service_core_1.ConfigService().environment;
    }
    initExpressMiddleWare() {
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
        this.app.use(cors_1.default());
        this.app.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header('Content-Type', 'application/x-www-form-urlencoded');
            res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
            res.header("Access-Control-Allow-Headers", "X-Requested-With");
            next();
        });
    }
    createServer() {
        this.server = http_1.createServer(this.app);
    }
    initRoutes() {
        this.router = express_1.Router();
        new movie_route_1.MovieRoute(this.router);
        this.app.use(this.router);
    }
    listen() {
        this.server.listen(this.config.NODE_PORT, () => {
            console.log('Running server on port %s', this.config.NODE_PORT);
        });
    }
    getApp() {
        return this.app;
    }
}
exports.NodeServer = NodeServer;
//# sourceMappingURL=node-server.js.map