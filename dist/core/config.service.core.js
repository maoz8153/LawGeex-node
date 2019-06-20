"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const dotenv_1 = require("dotenv");
class ConfigService {
    constructor(env) {
        this.environment = dotenv_1.config({ path: path_1.resolve(__dirname, `../../${env || '.env'}`) }).parsed;
    }
}
exports.ConfigService = ConfigService;
//# sourceMappingURL=config.service.core.js.map