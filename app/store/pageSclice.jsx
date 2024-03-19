import { createSlice } from '@reduxjs/toolkit';

const initialState = {formId: 1};

export const pageSclice = createSlice({
    name: 'page',
    initialState,
    reducers: {
        setPage: (state, action) => {
            return action.payload;
        },
        deletePage: (state, action) => {
            const userId = action.payload;
            return state.filter(user => user._id !== userId);
        },
        updatePage: (state, action) => {
            const updatedFormId = action.payload;
            return { ...state, formId: updatedFormId };
        },

        resetPage: () => initialState
    }
});

export const { setPage, deletePage, appendPage, resetPage, updatePage } = pageSclice.actions;

export default pageSclice.reducer;
