// coverPageSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    subHeading: '',
    projectTitle: '',
    companyPhoneNumber: '',
    companyAddress: '',
    companyName: '',
    issueDate: '',
    validDate: '',
    companyLogo : '',
};

const coverPageSlice = createSlice({
    name: 'cover_page',
    initialState,
    reducers: {
        setSubHeading: (state, action) => {
            state.subHeading = action.payload;
        },
        setProjectTitle: (state, action) => {
            state.projectTitle = action.payload;
        },
        setCompanyPhoneNumber: (state, action) => {
            state.companyPhoneNumber = action.payload;
        },
        setCompanyAddress: (state, action) => {
            state.companyAddress = action.payload;
        },
        setCompanyName: (state, action) => {
            state.companyName = action.payload;
        },
        setIssueDate: (state, action) => {
            state.issueDate = action.payload;
        },
        setValidDate: (state, action) => {
            state.validDate = action.payload;
        },
        setCompanyLogo: (state, action) => {
            state.companyLogo = action.payload;
        }
    },
});

export const {
    setSubHeading,
    setProjectTitle,
    setCompanyPhoneNumber,
    setCompanyAddress,
    setCompanyName,
    setIssueDate,
    setValidDate,
    setCompanyLogo
} = coverPageSlice.actions;

export default coverPageSlice.reducer;
