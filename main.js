import profileSchema from "./profileSchema/index.js";
import serverSchema from "./serverSchema/index.js";
import profileInServerSchema from "./profileInServerSchema/index.js";
export default class ModelClient {
    connection;
    profileModel;
    serverModel;
    profileInServerModel;
    constructor(connection) {
        this.connection = connection;
        this.profileModel = connection.model("ProfileModels", profileSchema);
        this.serverModel = connection.model("SeverModels", serverSchema);
        this.profileInServerModel = connection.model("guildProfileModel", profileInServerSchema);
    }
}
