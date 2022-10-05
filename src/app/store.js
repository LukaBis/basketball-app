import { configureStore } from '@reduxjs/toolkit';
import { basketballApi } from '../services/basketballAPI';

export default configureStore({
    reducer: {
        [basketballApi.reducerPath]: basketballApi.reducer
    }
});