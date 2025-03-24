import { API } from './src/index';

const test = async () => {
    try {
        const user = await API.fetchUser('iFraan_', 'G4G');
        console.log('Unrated: ', user.unrated());

        const matches = await user.fetchMatches();
        console.log('Matches:', matches.data.matches);

        matches.data.matches.forEach((match, index) => {
            console.log(`Match ${index + 1}:`, match);
        });
    } catch (e) {
        console.log(e);
    }
};

test();