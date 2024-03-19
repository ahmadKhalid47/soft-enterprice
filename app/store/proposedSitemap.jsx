import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    rootName: '',
    sitemap: []
}


export const sitemap = createSlice({
    name: 'proposedSitemap',
    initialState,
    reducers: {
        setSiteMap: (state, action) => {
            state.sitemap = action.payload
        },
        setRootName: (state, action) => {
            state.rootName = action.payload
        },
        deleteSiteMap: (state, action) => {
            const userId = action.payload;
            return state.filter(user => user._id !== userId);
        },
        updateSiteMap: (state, action) => {
            const updatedFormId = action.payload;
            return { ...state, formId: updatedFormId };
        },

        resetSiteMap: () => initialState
    }
});

export const { setSiteMap, deleteSiteMap, setRootName, updateSiteMap, resetSiteMap } = sitemap.actions;

export default sitemap.reducer;
