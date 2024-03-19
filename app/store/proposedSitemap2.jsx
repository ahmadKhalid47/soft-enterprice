import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    rootName2: '',
    sitemap2: []
}


export const sitemap2 = createSlice({
    name: 'proposedSitemap2',
    initialState,
    reducers: {
        setSiteMap2: (state, action) => {
            state.sitemap2 = action.payload
        },
        setRootName2: (state, action) => {
            state.rootName2 = action.payload
        },
        deleteSiteMap2: (state, action) => {
            const userId = action.payload;
            return state.filter(user => user._id !== userId);
        },
        updateSiteMap2: (state, action) => {
            const updatedFormId = action.payload;
            return { ...state, formId: updatedFormId };
        },

        resetSiteMap: () => initialState
    }
});

export const { setSiteMap2, deleteSiteMap2, setRootName2, updateSiteMap2, resetSiteMap2 } = sitemap2.actions;

export default sitemap2.reducer;
