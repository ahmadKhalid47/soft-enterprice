
import CoverLetter from './Proposal Pages/CoverLetter'
import ConverPage from './Proposal Pages/CoverPage'
import { useSelector } from 'react-redux'
import AboutYourProjects from './Proposal Pages/AboutYourProjects'
import FamilyTree from './FamilyTree'
import ProposedSiteMap from './Proposal Pages/ProposedSiteMap'
import Budget from './Proposal Pages/Budget'
import TableOfContent from './Proposal Pages/TableOfContent'
import OurProcess from './Proposal Pages/OurProcess'
import AboutUs from './Proposal Pages/AboutUs'
import WhyUs from './Proposal Pages/WhyUs'
import Terms from './Proposal Pages/Terms'
import LastPage from './Proposal Pages/LastPage'



const LivePreview = () => {
    const page = useSelector((state) => state.page)


    return (
        <div className="flex items-center flex-col w-[calc(100vw-20vw)] float-right h-fit border rounded-3xl custom-bg p-5 mr-0 right-0 shadow-lg" >
            <h1 className='head_text !m-0 pb-3 whitespace-nowrap'>Live preview</h1>
            <div className='flex-1 bg-white w-fit h-full rounded-3xl mt-3'>
                {page.formId == '1' ?
                    <ConverPage />
                    :
                    page.formId == '3' ?
                        <CoverLetter />
                        :
                        page.formId == '4' ?
                            <AboutYourProjects />
                            :
                            page.formId == '5' ?
                                <ProposedSiteMap />
                                :
                                page.formId == '9' ?
                                    <Budget />
                                    :
                                    page.formId == '2' ?
                                        <TableOfContent/>
                                        :
                                        page.formId == '7' ?
                                            <OurProcess/>
                                            :
                                            page.formId == '6' ?
                                                <AboutUs/>
                                                :
                                                page.formId == '8' ?
                                                    <WhyUs/>
                                                    :
                                                    page.formId == '10' ?
                                                        <Terms/>
                                                        :
                                                        page.formId == '11' ?
                                                            <LastPage/>
                                                            :
                                                            <div className="offer flex w-[8.27in] h-[11.6876in] bg-white shadow-lg justify-center items-center text-4xl text-red-400 font-semibold"> Nothing to preview</div>
                }
            </div>

        </div>
    )
}

export default LivePreview