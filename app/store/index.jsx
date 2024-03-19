import { configureStore } from '@reduxjs/toolkit';
import page from './pageSclice'
import cover_page from './coverPageSlice'
import popup from './popup';
import cover_letter from './coverLetterSlice';
import aboutYourProject from './aboutYourProject';
import proposedSitemap from './proposedSitemap';
import proposedSitemap2 from './proposedSitemap2';
import budget from './budget';
import pageSequence from './pageSequence';



const store = configureStore({
    reducer: {
        page,
        cover_page,
        popup,
        cover_letter,
        aboutYourProject,
        proposedSitemap,
        budget,
        pageSequence,
        proposedSitemap2
    }
});

export default store;
