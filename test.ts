import { API } from './src/index';

async function main() {
    try {
        const api = await API.fetchUser('khalifouille', 'MAR');
        const matches = await api.fetchMatches();
        console.log(matches);
    } catch (err) {
        console.error(err);
    }
}

main();
