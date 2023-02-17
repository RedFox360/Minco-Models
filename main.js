import profileSchema from './profileSchema';
import serverSchema from './serverSchema';
import profileInServerSchema from './profileInServerSchema';
export default class ModelClient {
    connection;
    profileModel;
    serverModel;
    profileInServerModel;
    constructor(connection) {
        this.connection = connection;
        this.profileModel = connection.model('ProfileModels', profileSchema);
        this.serverModel = connection.model('SeverModels', serverSchema);
        this.profileInServerModel = connection.model('guildProfileModel', profileInServerSchema);
    }
}
