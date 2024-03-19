import React from 'react'
import FamilyTree from '@components/FamilyTree';

const ProposedSiteMap = ({ pageNumber }) => {
    return (
        <>


            <div class="offer flex w-[8.27in] h-[11.6876in] bg-white shadow-lg">



                <div class="flex w-full">

                    <div class="w-[90%]  mx-auto ">
                        <div className="h-fit">

                            <div class="flex">
                                <div class="mt-[50px]  flex relative  ">
                                    <svg class="transform rotate-90 relative ml-[-5px]  top-0 " width="64" height="64"
                                        viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="#0ea5e9"
                                            d="m221.76 69.66l-88-48.18a12 12 0 0 0-11.52 0l-88 48.18A12 12 0 0 0 28 80.18v95.64a12 12 0 0 0 6.24 10.52l88 48.18a11.95 11.95 0 0 0 11.52 0l88-48.18a12 12 0 0 0 6.24-10.52V80.18a12 12 0 0 0-6.24-10.52ZM220 175.82a4 4 0 0 1-2.08 3.5l-88 48.18a4 4 0 0 1-3.84 0l-88-48.18a4 4 0 0 1-2.08-3.5V80.18a4 4 0 0 1 2.08-3.5l88-48.18a3.94 3.94 0 0 1 3.84 0l88 48.18a4 4 0 0 1 2.08 3.5Z" />
                                    </svg>
                                    <h6 class="absolute ml-5 top-5 text-[#00A2FF]  text-[12pt]">{pageNumber}</h6>

                                </div>
                                <div class="mt-[65px]">
                                    <h3 class="font-[700]   text-[9pt] text-[#00A2FF]">Soft
                                        Enterprise
                                    </h3>

                                    <h3 class=" font-[700]  text-[9pt] text-[#00A2FF]">Business
                                        Proposal
                                    </h3>

                                    <div class=" mt-1  w-[6.85in] h-0.5 bg-[#00A2FF] "></div>
                                </div>

                            </div>





                            <div class="mt-[25px] ">
                                <h1 class="font-[700]  text-[25pt] text-[#00A2FF] leading-10" style={{ fontFamily: "'Montserrat', sans-serif" }}>PROPOSED<br />SITEMAP
                                </h1>
                                <div class=" mt-1 w-[89px]  h-2 bg-[#ffd600] "></div>
                            </div>

                            <div class=" relative z-10  mt-2 mb-4 font-[400] text-[12pt]">
                                <div class="Part-one " style={{ wordWrap: "4px" }}>
                                    <p>
                                        The website's sitemap, consisting of its pages, is provided below. Should you wish to
                                        make any modifications, kindly contact the project department to request amendments to
                                        the sitemap prior to the commencement of the project. Please note that the addition of
                                        any new page beyond those outlined below will incur an additional cost, determined based
                                        on the functions and layout requirements of the requested pages.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div class="mt-[25px] ">
                                    <h1 class="font-[700]  text-[14pt] text-[#00A2FF] leading-10 font-sans" >1. MAIN PAGES</h1>
                                </div>
                                <FamilyTree proposedSitemap={1} />
                            </div>


                        </div>
                        <div className='h-auto'>
                            <div class="mt-[25px] ">
                                <h1 class="font-[700]  text-[14pt] text-[#00A2FF] leading-10 font-sans" >2. ADDON PAGES</h1>
                            </div>
                            <FamilyTree proposedSitemap={2} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProposedSiteMap