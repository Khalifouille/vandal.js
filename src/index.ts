import { exec } from 'child_process';
import { BaseOptions, SegmentSeasonStats, TrackerResponse, MatchesResponse } from './types/tracker';
import { AgentStats, GamemodesStats, SeasonStats, UserInfo } from './types/internal';

const BASE_URL = `https://api.tracker.gg/api/v2/valorant/standard/profile/riot/{USERNAME}%23{TAG}`;
const MATCHES_URL = `https://api.tracker.gg/api/v2/valorant/standard/matches/riot/{USERNAME}%23{TAG}?type=competitive&season=16118998-4705-5813-86dd-0292a2439d90&agent=all&map=all`;
const MATCHES_URL_UNRATED = `https://api.tracker.gg/api/v2/valorant/standard/matches/riot/{USERNAME}%23{TAG}?type=unrated&season=16118998-4705-5813-86dd-0292a2439d90&agent=all&map=all`;

const fetchData = (url: string) =>
    new Promise((resolve, reject) => {
        const escapedUrl = `"${url}"`; 
        exec(`curl --max-time 10 --user-agent 'Chrome/121' --url ${escapedUrl}`, (err, result) => {
            if (err) {
                console.error(`Error fetching data from ${url}:`, err);
                return reject(err);
            }
            if (!result) {
                console.error(`No result returned from ${url}`);
                return reject(new Error('No result returned'));
            }
            try {
                const parsedResult = JSON.parse(result);
                resolve(parsedResult);
            } catch (parseError) {
                console.error(`Error parsing JSON from ${url}:`, parseError);
                reject(parseError);
            }
        });
    });

class API {
    username: string;
    tag: string;
    _raw: TrackerResponse;

    constructor(username: string, tag: string) {
        this.username = username;
        this.tag = tag;
    }

    static async fetchUser(username: string, tag: string) {
        const api = new API(username, tag);
        api._raw = (await fetchData(BASE_URL.replace('{TAG}', tag).replace('{USERNAME}', username))) as TrackerResponse;
        if (api._raw.errors) throw new Error(api._raw.errors[0].message);
        return api;
    }

    async fetchUnratedMatches(): Promise<MatchesResponse> {
        const matchesUrl = MATCHES_URL_UNRATED.replace('{TAG}', this.tag).replace('{USERNAME}', this.username);
        const matches = await fetchData(matchesUrl) as MatchesResponse;
        return matches;
    }

    async fetchMatches(): Promise<MatchesResponse> {
        const matchesUrl = MATCHES_URL.replace('{TAG}', this.tag).replace('{USERNAME}', this.username);
        const matches = await fetchData(matchesUrl) as MatchesResponse;
        return matches;
    }

    ranked(options: BaseOptions = {}) {
        const result = {} as SeasonStats;
        const raw = options.raw ?? false;
        const data = this._raw.data.segments.find((x) => x.attributes?.playlist == 'competitive');
        if (raw) {
            result._raw = data;
        }
        if (data?.stats) {
            for (const key in data.stats) {
                result[key] = data.stats[key].value;
            }
        }
        return result;
    }

    unrated(options: BaseOptions = {}) {
        const result = {} as SeasonStats;
        const raw = options.raw ?? false;

        const data = this._raw.data.segments.find((x) => x.attributes?.playlist === 'normal' || x.metadata?.name === 'Normal');

        if (!data) {
            console.error('Aucune donnée pour les matchs non classés');
            return result;
        }
        if (raw) {
            result._raw = data;
        }
        if (data?.stats) {
            for (const key in data.stats) {
                const stat = data.stats[key];
                if (stat && stat.value !== undefined) {
                    result[key] = stat.value;  
                }
            }
        }
        if (data?.attributes) {
            const attributes = data.attributes as any;
            if (attributes.metadata) {
                result.mapName = attributes.metadata.mapName;  
                result.modeName = attributes.metadata.modeName;  
                result.modeImageUrl = attributes.metadata.modeImageUrl;  
                result.mapImageUrl = attributes.metadata.mapImageUrl;  
            }
            result.result = attributes.result;  
            result.seasonName = attributes.seasonName;  
        }

        return result;
    }

    gamemodes() {
        const result = {} as GamemodesStats;
        const playlists = this._raw.data.segments.filter((x) => x.type === 'season');

        for (const playlist of playlists) {
            const playlistName = playlist.metadata.playlistName;
            result[playlistName] = {} as SeasonStats;
            if (playlist) {
                for (const key in playlist.stats) {
                    result[playlistName][key] = playlist.stats[key].value;
                }
            }
        }

        return result;
    }

    agents() {
        const result = {} as AgentStats;
        const agents = this._raw.data.segments.filter((x) => x.type === 'agent');

        for (const playlist of agents) {
            result[playlist.metadata.name] = {};
            if (playlist) {
                for (const key in playlist.stats) {
                    result[playlist.metadata.name][key] = playlist.stats[key].value;
                }
            }
        }

        return result;
    }

    info() {
        const platform = this._raw.data.platformInfo;
        const info = this._raw.data.userInfo;
        const data = this._raw.data.segments.find((x) => x.attributes?.playlist == 'competitive');
        const stats = data.stats as SegmentSeasonStats;

        const result: UserInfo = {
            platform: platform.platformSlug,
            uuid: platform.platformUserId,
            name: platform.platformUserHandle,
            userid: platform.platformUserIdentifier,
            avatar: platform.avatarUrl,
            pageViews: info.pageviews,
            rank: stats?.rank.metadata.tierName,
            peakRank: stats?.peakRank.metadata.tierName,
        };

        return result;
    }

    raw() {
        return this._raw;
    }
}

export {
    API as VAPI, // compatibility
    API,
};