// coverLetterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    letterText: '',
    clientName: '',

};

const coverLetterSlice = createSlice({
    name: 'cover_letter',
    initialState,
    reducers: {
        setLetterText: (state, action) => {
            state.letterText = action.payload;
        },
        setClientName: (state, action) => {
            state.clientName = action.payload;
        },
    },
});

export const {
    setLetterText,
    setClientName,
} = coverLetterSlice.actions;

export default coverLetterSlice.reducer;
