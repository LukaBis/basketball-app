import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const basketballApiHeaders = {
    'X-RapidAPI-Key': process.env.REACT_APP_BASKETBALL_API_KEY,
    'X-RapidAPI-Host': process.env.REACT_APP_BASKETBALL_API_HOST
};

const createRequest = (url) => ({ url, headers: basketballApiHeaders });

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd;

export const basketballApi = createApi({
    reducerPath: 'basketballApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_BASKETBALL_API_URL
    }),
    endpoints: (builder) => ({
        getGames: builder.query({
            query: () => createRequest(`/games?date=${today}`)
        })
    })
});

export const { useGetGamesQuery } = basketballApi;