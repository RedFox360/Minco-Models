import profileSchema from "./profileSchema/index.js";
import serverSchema from "./serverSchema/index.js";
import profileInServerSchema from "./profileInServerSchema/index.js";
import { Connection, Model } from "mongoose";
import { Profile } from "./profileSchema/types.js";
import { ServerData } from "./serverSchema/types.js";
import { ProfileInServer } from "./profileInServerSchema/types.js";
export default class ModelClient {
	public profileModel: Model<Profile, {}, {}, {}, any>;
	public serverModel: Model<ServerData, {}, {}, {}, any>;
	public profileInServerModel: Model<
		ProfileInServer,
		{},
		{},
		{},
		any
	>;

	constructor(public connection: Connection) {
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
