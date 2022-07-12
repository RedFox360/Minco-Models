"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverModel = exports.profileInServerModel = exports.profileModel = void 0;
const profileSchema_1 = __importDefault(require("./profileSchema"));
exports.profileModel = profileSchema_1.default;
const serverSchema_1 = __importDefault(require("./serverSchema"));
exports.serverModel = serverSchema_1.default;
const profileInServerSchema_1 = __importDefault(require("./profileInServerSchema"));
exports.profileInServerModel = profileInServerSchema_1.default;
