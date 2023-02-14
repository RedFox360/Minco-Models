export interface ServerData {
	serverID: string;
	prefixes?: string[];
	bannedPeople?: string[];
	blacklist?: string[];
	welcomeChannel: string;
	welcomeMessage: string;
	leaveMessage?: string;
	welcomeDM?: string;
	memberCount?: number;
	silenceJoins: boolean;
	silenceBans: boolean;
	autowarns?: AutoWarn[];
	profanityPunishment?: {
		punishment: "warn" | "timeout" | "ban" | "kick";
		time?: number;
	};
	muteRole?: string;
	mainRole?: string;
	modRole?: string;
	botRole?: string;
	joinRole?: string;
	messageLogChannelId?: string;
	mainLogChannelId?: string;
	messageLogChannelWebhookId?: string;
	mainLogChannelWebhookId?: string;
	sendBirthdays: boolean;
	birthdayChannel?: string;
	currentCaseNo: number;
	clean: boolean;
	timezone: string;
	globalXpMultipler: number;
	levelRoles?: Map<string, string>;
	levelingOn: boolean;
	starboard?: {
		channelID?: string;
		starAmount: number;
		messages?: Map<string, string>;
	};
}

export interface AutoWarn {
	warnAmount: number;
	divisible: boolean;
	punishment: AutoWarnPunishment;
	time?: number; // for timeout only
}

export type AutoWarnPunishment = "timeout" | "kick" | "ban";
