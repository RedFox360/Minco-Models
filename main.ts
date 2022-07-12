import profileSchema from './profileSchema';
import serverSchema from './serverSchema';
import profileInServerSchema from './profileInServerSchema';
import { Connection, Model } from 'mongoose';
import { Profile } from './profileSchema/types';
import { ServerData } from './serverSchema/types';
import { ProfileInServer } from './profileInServerSchema/types';
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
			'ProfileModels',
			profileSchema
		);
		this.serverModel = connection.model(
			'SeverModels',
			serverSchema
		);
		this.profileInServerModel = connection.model(
			'guildProfileModel',
			profileInServerSchema
		);
	}
}
