"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const profileSchema_1 = __importDefault(require("./profileSchema"));
const serverSchema_1 = __importDefault(require("./serverSchema"));
const profileInServerSchema_1 = __importDefault(require("./profileInServerSchema"));
class ModelClient {
    connection;
    profileModel;
    serverModel;
    profileInServerModel;
    constructor(connection) {
        this.connection = connection;
        this.profileModel = connection.model('ProfileModels', profileSchema_1.default);
        this.serverModel = connection.model('SeverModels', serverSchema_1.default);
        this.profileInServerModel = connection.model('guildProfileModel', profileInServerSchema_1.default);
    }
}
exports.default = ModelClient;
