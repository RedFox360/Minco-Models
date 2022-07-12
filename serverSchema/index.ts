import { Schema, model } from 'mongoose';
import { AutoWarn, ServerData } from './types';

const AutoWarn = new Schema<AutoWarn>({
	warnAmount: Number,
	divisible: Boolean,
	punishment: String,
	time: Number // for timeout only
});
const serverSchema = new Schema<ServerData>({
	serverID: { type: String, require: true, unique: true },
	bannedPeople: [String],
	blacklist: [String],
	welcomeChannel: String,
	welcomeMessage: {
		type: String,
		default:
			'Welcome to {server}, {mention}!\nYou are the {ord_member_count} member!'
	},
	leaveMessage: {
		type: String,
		default:
			'It seems {user_tag} has left us. We now have {member_count} members.'
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
		time: Number // for timeout
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
	starboard: {
		channelID: String,
		starAmount: { type: Number, default: 1 },
		messages: { type: Map, of: String, default: {} }
	},
	currentCaseNo: { type: Number, default: 0 },
	clean: { type: Boolean, default: false },
	timezone: {
		type: String,
		default: 'America/Los_Angeles'
	}
});

// typo I just realized this :(
const serverModel = model<ServerData>('SeverModels', serverSchema);

export default serverModel;
