import { API } from './src/index';

const test = async () => {
    try {
        const user = await API.fetchUser('iFraan_', 'G4G');
        const unratedStats = user.unrated();
        console.log('Unrated stats:', unratedStats);
    } catch (e) {
        console.log(e);
    }
};

test();