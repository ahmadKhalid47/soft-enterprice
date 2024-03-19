'use client';

import CoverPageForm from "./Forms/CoverPageForm"
import ConverLetterForm from "./Forms/ConverLetterForm"
import { useSelector } from 'react-redux'
import AboutYourProject from "./Forms/AboutYourProject";
import ProposedSiteMap from "./Proposal Pages/ProposedSiteMap";
import ProposedSiteMapForm from "./Forms/ProposedSiteMapForm";
import BudgetForm from "./Forms/BudgetForm";

const Form = () => {
  const page = useSelector((state) => state.page)
  return (
    <div className="flex items-center flex-col w-full border rounded-3xl custom-bg p-5 shadow-lg">
      <h1 className='head_text !m-0 whitespace-nowrap'>
        {page.formId == '1' ?
          'Cover Page'
          :
          page.formId == '3' ?
            'Cover Letter'
            :
            page.formId == '4' ?
              'About Your Project'
              : page.formId == '5' ?
                'Proposed Sitemap'
                : page.formId == '9' ?
                  "Estimate Budget"
                  : "No Form Available"
        }
      </h1>
      <div className="w-full overflow-y-visible custom-scroll mt-5 h-fit ">
        {page.formId == '1' ?
          <CoverPageForm />
          :
          page.formId == '3' ?
            <ConverLetterForm />
            : page.formId == '4' ?
              <AboutYourProject />
              : page.formId == '5' ?
                <ProposedSiteMapForm />
                : page.formId == '9' ?
                  <BudgetForm />
                  : null
        }
      </div>
    </div>
  )
}

export default Form