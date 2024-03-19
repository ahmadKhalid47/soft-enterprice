import React from 'react';
// import jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';
// import html2pdf from 'html2pdf.js'
// var wkhtmltopdf = require('wkhtmltopdf');

import { useDispatch, useSelector } from 'react-redux';
import { updatePage } from '@app/store/pageSclice';
import CoverPage from './Proposal Pages/CoverPage';
import TableOfContent from './Proposal Pages/TableOfContent';
import AboutUs from './Proposal Pages/AboutUs';
import OurProcess from './Proposal Pages/OurProcess';
import WhyUs from './Proposal Pages/WhyUs';
import Terms from './Proposal Pages/Terms';
import LastPage from './Proposal Pages/LastPage';
import CoverLetter from './Proposal Pages/CoverLetter';
import AboutYourProjects from './Proposal Pages/AboutYourProjects';
import ProposedSiteMap from './Proposal Pages/ProposedSiteMap';
import Budget from './Proposal Pages/Budget';

const FullProposal = () => {
  const dispatch = useDispatch();
  const pageSequence = useSelector((state) => state.pageSequence).pageSequence;

  const generatePdf = () => {
        // wkhtmltopdf('http://google.com/', { pageSize: 'letter' })
        //   .pipe(fs.createWriteStream('out.pdf'));

  };
  let pageNumber = 1;

  return (
    <div className='w-screen h-full' >
      <button
        type="button"
        onClick={() => dispatch(updatePage('1'))}
        className='print:hidden w-16 h-16 left-2 top-[48vh] bg-white border flex justify-center items-center rounded-full fixed'>
        <svg width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path fill="#000000" d="M20 11H7.83l5.59-5.59L12 4l-8 8l8 8l1.41-1.41L7.83 13H20v-2z" />
        </svg>
      </button>
      <div  className='print:bg-white  flex justify-center items-center gap-3 print:gap-0 flex-col hideInPrint'>
        
        {pageSequence.map((page, index) => {
          const id = page.id;
          switch (id) {
            case '1':
              return page.checked && <CoverPage key={index} />;
            case '2':
              return page.checked && <TableOfContent key={index} />;
            case '3':
              return page.checked && <CoverLetter key={index} pageNumber={pageNumber++} />;
            case '4':
              return page.checked && <AboutYourProjects key={index} pageNumber={pageNumber++} />;
            case '5':
              return page.checked && <ProposedSiteMap key={index} pageNumber={pageNumber++} />;
            case '6':
              return page.checked && <AboutUs key={index} pageNumber={pageNumber++} />;
            case '7':
              return page.checked && <OurProcess key={index} pageNumber={pageNumber++} />;
            case '8':
              return page.checked && <WhyUs key={index} pageNumber={pageNumber++} />;
            case '9':
              return page.checked && <Terms key={index} pageNumber={pageNumber++} />;
            case '10':
              return page.checked && <Budget key={index} pageNumber={pageNumber++} />;
            case '11':
              return page.checked && <LastPage key={index} />;
          }
        })}
        {/* <button type="button" onClick={generatePdf}>
          Download PDF
        </button> */}
      </div>
    </div>
  );
};

export default FullProposal;
