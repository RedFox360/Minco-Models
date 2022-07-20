"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const types_1 = require("./types");
const validOptions = (...options) => {
    return v => {
        if (options.includes(v))
            return v;
        else
            return options[0];
    };
};
const zooSchema = new mongoose_1.Schema({
    name: String,
    emoji: String
});
const profileSchema = new mongoose_1.Schema({
    userID: { type: String, require: true, unique: true },
    mincoDollars: { type: Number, default: 100 },
    bank: { type: Number, default: 0 },
    birthday: String,
    spouse: String,
    favs: {
        food: String,
        color: String,
        animal: String
    },
    inventory: [String],
    gems: [String],
    fish: {
        rod: {
            type: String,
            set: validOptions(...types_1.rodArray)
        },
        fishInventory: { type: Map, of: Number, default: {} },
        biome: { type: String, default: 'ocean' },
        xp: { type: Number, default: 0 }
    },
    candyAmount: Number,
    zoo: [zooSchema],
    lastUsedDaily: Number,
    lastUsedWeekly: Number,
    timezone: {
        type: String,
        default: 'America/Los_Angeles'
    },
    battleSystem: {
        emeralds: { type: Number, default: 10 },
        penguin: {
            type: String,
            set: validOptions('warrior', 'magician', 'medic', 'ninja', 'archer')
        },
        battleShield: {
            type: Boolean,
            default: true
        },
        penguinName: String,
        xp: { type: Number, default: 0 }
    }
});
exports.default = profileSchema;
