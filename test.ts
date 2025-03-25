import { API } from './src/index';

const test = async () => {
    try {
        const api = await API.fetchUser('Khalifouille', 'MAR');
        const unratedStats = await api.unrated();
        console.log('Unrated: ', unratedStats);

        const kills = Number(unratedStats.kills) ?? 0;
        const deaths = Number(unratedStats.deaths) ?? 0;
        const assists = Number(unratedStats.assists) ?? 0;
        const kda = deaths > 0 ? ((kills + assists) / deaths).toFixed(2) : 'Infinity';

        console.log(`Kills: ${kills}`);
        console.log(`Deaths: ${deaths}`);
        console.log(`Assists: ${assists}`);
        console.log(`KDA: ${kda}`);
    } catch (e) {
        console.error('Test failed:', e);
    }
};

test();