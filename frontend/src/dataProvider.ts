import fakeRestDataProvider from 'ra-data-fakerest';
// import data from './data.json';
import jsonServerProvider from 'ra-data-json-server';

// export const dataProvider = fakeRestDataProvider(data, true);

export const dataProvider = jsonServerProvider(
    // import.meta.env.VITE_JSON_SERVER_URL
    // process.env.VITE_JSON_SERVER_URL
    // 'https://jsonplaceholder.typicode.com'
    'http://localhost:3001'
);
