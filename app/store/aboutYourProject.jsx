// coverLetterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    overview: '',
    functionality: '',
    websiteCMS: '',

};

const aboutYourProjectSlice = createSlice({
    name: 'aboutYourProject',
    initialState,
    reducers: {
        setOverviews: (state, action) => {
            state.overview = action.payload;
        },
        setFunctionalities: (state, action) => {
            state.functionality = action.payload;
        },
        setWebsiteCMSs: (state, action) => {
            state.websiteCMS = action.payload;
        },
    },
});

export const {
    setOverviews,
    setFunctionalities,
    setWebsiteCMSs
} = aboutYourProjectSlice.actions;

export default aboutYourProjectSlice.reducer;
