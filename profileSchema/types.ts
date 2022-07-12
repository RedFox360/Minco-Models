export interface Profile {
	userID: string;
	mincoDollars: number;
	bank: number;
	birthday?: string;
	spouse?: string;
	inventory?: string[];
	gems?: string[];
	candyAmount?: number;
	zoo?: ZooSchema[];
	lastUsedDaily?: number;
	lastUsedWeekly?: number;
	timezone: string;
	battleSystem?: {
		penguin?:
			| 'warrior'
			| 'magician'
			| 'medic'
			| 'ninja'
			| 'archer';
		battleShield: boolean;
		penguinName?: string;
		xp: number;
		emeralds: number;
	};
	favs?: {
		food?: string;
		color?: string;
		animal?: string;
	};
	fish?: {
		// --- NEW VERSION ---
		rod?: RodType;
		fishInventory: Map<string, number>;
		biome: Biome;
		xp: number;
	};
}

export interface ZooSchema {
	name: string;
	emoji: string;
}

export type RodType =
	| 'wooden'
	| 'bone'
	| 'candle'
	| 'copper'
	| 'steel'
	| 'heavy'
	| 'polished'
	| 'quartz'
	| 'amethyst'
	| 'blazing'
	| 'dark'
	| 'ruby'
	| 'marble'
	| 'sapphire'
	| 'gold'
	| 'eternal'
	| 'opal'
	| 'moonstone'
	| 'shining'
	| 'topaz'
	| 'silver'
	| 'jade'
	| 'floral'
	| 'diamond'
	| 'emerald'
	| 'prismarine'
	| 'pink diamond'
	| 'titanium'
	| 'black diamond'
	| 'obsidian';

export const rodArray = [
	'wooden',
	'bone',
	'candle',
	'copper',
	'steel',
	'heavy',
	'polished',
	'quartz',
	'amethyst',
	'blazing',
	'dark',
	'ruby',
	'marble',
	'sapphire',
	'gold',
	'eternal',
	'opal',
	'moonstone',
	'shining',
	'topaz',
	'silver',
	'jade',
	'floral',
	'diamond',
	'emerald',
	'prismarine',
	'pink diamond',
	'titanium',
	'black diamond',
	'obsidian'
];

export type Biome =
	| 'ocean'
	| 'river'
	| 'warm ocean'
	| 'lush cave'
	| 'pond'
	| 'beach';
