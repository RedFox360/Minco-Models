import { Schema, model } from 'mongoose';
import { rodArray } from './types';
import type { Profile, ZooSchema } from './types';

const validOptions = (...options: any[]) => {
	return v => {
		if (options.includes(v)) return v;
		else return options[0];
	};
};

const zooSchema = new Schema<ZooSchema>({
	name: String,
	emoji: String
});

const profileSchema = new Schema<Profile>({
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
			set: validOptions(...rodArray)
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
			set: validOptions(
				'warrior',
				'magician',
				'medic',
				'ninja',
				'archer'
			)
		},
		battleShield: {
			type: Boolean,
			default: true
		},
		penguinName: String,
		xp: { type: Number, default: 0 }
	}
});

const profileModel = model<Profile>('ProfileModels', profileSchema);

export default profileModel;
