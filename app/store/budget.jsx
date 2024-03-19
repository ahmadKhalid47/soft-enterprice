import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    service: '',
    discount: '',
    currency: '',
    terms: [
        "This is an estimate only, and will be provided an invoice after acceptance of this estimate.",
        "Estimate can be revise if change in work requirements",
        "Estimate is valid for 7 days only.",
        "After delivering the website , 6 months of maintenance will be there with Standard Plan.",
        "70% Payment will be in advance."
    ]
}

export const budget = createSlice({
    name: 'budget',
    initialState,
    reducers: {
        setService: (state, action) => {
            state.service = action.payload
        },
        setDiscount: (state, action) => {
            state.discount = action.payload
        },
        setCurrency: (state, action) => {
            state.currency = action.payload
        },
        setTerms: (state, action) => {
            const { index, term } = action.payload;
            if (index >= 0 && index < state.terms.length) {
                state.terms[index] = term;
            }
        },
        appendTerm:(state, action)=>{
            state.terms.push(action.payload);
        },

        resetBudget: () => initialState
    }
});

export const { setService, resetBudget, setDiscount, setCurrency, setTerms, appendTerm } = budget.actions;

export default budget.reducer;
