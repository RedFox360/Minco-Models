"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const validOptions = (...options) => {
    return v => {
        if (options.includes(v))
            return v;
        else
            return options[0];
    };
};
const marketSchema = new mongoose_1.Schema({
    price: Number,
    name: String,
    desc: String
});
const logSchema = new mongoose_1.Schema({
    type: {
        type: String,
        set: validOptions('Warn', 'Timeout', 'End Timeout', 'Kick', 'Ban')
    },
    time: Number,
    case: Number,
    date: Date,
    reason: String,
    moderator: String
});
const profileInServerSchema = new mongoose_1.Schema({
    userID: { type: String, require: true },
    serverID: { type: String, require: true },
    market: [marketSchema],
    isShadowBanned: { type: Boolean, default: false },
    bannedFromCommands: { type: Boolean, default: false },
    bannedFromConfessions: { type: Boolean, default: false },
    logs: [logSchema]
});
const profileInServerModel = (0, mongoose_1.model)('guildProfileModel', profileInServerSchema);
exports.default = profileInServerModel;
