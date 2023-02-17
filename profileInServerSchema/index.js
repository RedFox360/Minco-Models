import { Schema } from "mongoose";
const validOptions = (...options) => {
    return v => {
        if (options.includes(v))
            return v;
        else
            return options[0];
    };
};
const marketSchema = new Schema({
    price: Number,
    name: String,
    desc: String,
});
const logSchema = new Schema({
    type: {
        type: String,
        set: validOptions("Warn", "Timeout", "End Timeout", "Kick", "Ban"),
    },
    time: Number,
    case: Number,
    date: Date,
    reason: String,
    moderator: String,
});
const profileInServerSchema = new Schema({
    userID: { type: String, require: true },
    serverID: { type: String, require: true },
    market: [marketSchema],
    isShadowBanned: { type: Boolean, default: false },
    bannedFromCommands: { type: Boolean, default: false },
    bannedFromConfessions: { type: Boolean, default: false },
    logs: [logSchema],
    xp: {
        type: Number,
        default: 0,
    },
    level: {
        type: Number,
        default: 0,
    },
});
export default profileInServerSchema;
