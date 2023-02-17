import profileSchema from "./profileSchema/index.js";
import serverSchema from "./serverSchema/index.js";
import profileInServerSchema from "./profileInServerSchema/index.js";
import mongoose from "mongoose";
import { Profile } from "./profileSchema/types.js";
import { ServerData } from "./serverSchema/types.js";
import { ProfileInServer } from "./profileInServerSchema/types.js";
export default class ModelClient {
	public profileModel: mongoose.Model<Profile, {}, {}, {}, any>;
	public serverModel: mongoose.Model<ServerData, {}, {}, {}, any>;
	public profileInServerModel: mongoose.Model<
		ProfileInServer,
		{},
		{},
		{},
		any
	>;

	constructor(public connection: mongoose.Connection) {
		this.profileModel = connection.model(
			"ProfileModels",
			profileSchema
		);
		this.serverModel = connection.model(
			"SeverModels",
			serverSchema
		);
		this.profileInServerModel = connection.model(
			"guildProfileModel",
			profileInServerSchema
		);
	}
}
