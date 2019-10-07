"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { Base, Client, Collection, User } from '../Structures';
const Base_1 = require("./Base");
const Collection_1 = require("./Collection");
/**
 * Represents a badge on roblox
 */
class Badge extends Base_1.Base {
    constructor(client, data) {
        super(client, data.id);
        this.name = data.name;
        this.description = data.description;
        this.displayName = data.displayName;
        this.displayDescription = data.displayDescription;
        this.achievable = data.enabled;
        this.iconImage = null; // TO-DO: make asset and assign to ImageAsset object
        this.awarder = null; // TO-DO: make place and assign to Place object
        this.statistics = {
            pastDayAwarded: data.statistics.pastDayAwardedCount,
            totalAwarded: data.statistics.awardedCount,
            winrate: data.statistics.winRatePercentage,
        };
        this.created = new Date(data.created);
        this.lastUpdated = new Date(data.updated);
        this.owners = new Collection_1.Collection(this.client);
        client.badges.set(this.id, this);
    }
    update(data) {
        this.name = data.name;
        this.description = data.description;
        this.displayName = data.displayName;
        this.displayDescription = data.displayDescription;
        this.achievable = data.enabled;
        this.iconImage = null; // TO-DO: make asset and assign to ImageAsset object
        this.statistics = {
            pastDayAwarded: data.statistics.pastDayAwardedCount,
            totalAwarded: data.statistics.awardedCount,
            winrate: data.statistics.winRatePercentage,
        };
        this.lastUpdated = new Date(data.updated);
    }
}
exports.Badge = Badge;