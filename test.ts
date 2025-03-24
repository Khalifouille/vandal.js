import { API } from './src/index';

const test = async () => {
    try {
        const api = await API.fetchUser('Khalifouille', 'MAR');
        const unratedMatches = await api.fetchUnratedMatches();
        console.log(JSON.stringify(unratedMatches, null, 2));  
    } catch (e) {
        console.error('Test failed:', e);
    }
};

test();