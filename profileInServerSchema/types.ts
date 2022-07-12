export interface ProfileInServer {
	userID: string;
	serverID: string;
	market?: MarketItem[];
	isShadowBanned: boolean;
	bannedFromCommands: boolean;
	bannedFromConfessions: boolean;
	logs?: Log[];
}

export interface Log {
	type: LogType;
	case: number;
	time?: number;
	date: Date;
	reason?: string;
	moderator: string;
}

export interface MarketItem {
	price: number;
	name: string;
	desc?: string;
}

export type LogType =
	| 'Warn'
	| 'Timeout'
	| 'End Timeout'
	| 'Kick'
	| 'Ban';
