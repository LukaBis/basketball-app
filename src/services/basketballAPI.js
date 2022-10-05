import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const basketballApiHeaders = {
    'X-RapidAPI-Key': '39ba07e41amshb16248619eb9687p1f871ejsn0e262c85f89e',
    'X-RapidAPI-Host': 'api-basketball.p.rapidapi.com'
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
        baseUrl: 'https://api-basketball.p.rapidapi.com/'
    }),
    endpoints: (builder) => ({
        getGames: builder.query({
            query: () => createRequest(`/games?date=${today}`)
        })
    })
});

export const { useGetGamesQuery } = basketballApi;