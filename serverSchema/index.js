import mongoose from "mongoose";
const { Schema } = mongoose;
const AutoWarn = new Schema({
    warnAmount: Number,
    divisible: Boolean,
    punishment: String,
    time: Number, // for timeout only
});
const serverSchema = new Schema({
    serverID: { type: String, require: true, unique: true },
    bannedPeople: [String],
    blacklist: [String],
    welcomeChannel: String,
    welcomeMessage: {
        type: String,
        default: "Welcome to {server}, {mention}!\nYou are the {ord_member_count} member!",
    },
    leaveMessage: {
        type: String,
        default: "It seems {user_tag} has left us. We now have {member_count} members.",
    },
    sendBirthdays: { type: Boolean, default: true },
    birthdayChannel: String,
    welcomeDM: String,
    memberCount: Number,
    silenceJoins: { type: Boolean, default: false },
    silenceBans: { type: Boolean, default: false },
    autowarns: [AutoWarn],
    profanityPunishment: {
        punishment: String,
        time: Number, // for timeout
    },
    muteRole: String,
    mainRole: String,
    modRole: String,
    botRole: String,
    joinRole: String,
    messageLogChannelId: String,
    mainLogChannelId: String,
    messageLogChannelWebhookId: String,
    mainLogChannelWebhookId: String,
    globalXpMultipler: {
        type: Number,
        default: 0.65,
    },
    levelRoles: { type: Map, of: String },
    levelingOn: { type: Boolean, default: false },
    starboard: {
        channelID: String,
        starAmount: { type: Number, default: 1 },
        messages: { type: Map, of: String, default: {} },
    },
    currentCaseNo: { type: Number, default: 0 },
    clean: { type: Boolean, default: false },
    timezone: {
        type: String,
        default: "America/Los_Angeles",
    },
});
export default serverSchema;
