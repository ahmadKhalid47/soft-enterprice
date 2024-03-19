import React from 'react'
import { useSelector } from 'react-redux'
import tick from "@public/assets/TICK-01.svg"


const AboutYourProjects = ({ pageNumber }) => {
    let onceBr = false;
    const aboutYourProject = useSelector((state) => state.aboutYourProject)
    const contentWithImages = aboutYourProject.functionality
        .split("<p class = 'py-1'></p>")
        .map((line) => {
            
            if (line.trim().startsWith('>')) {

                const ticked = `<div class="flex">
                    
                    <div class="flex items-center justify-center">

                        <img src="${tick.src}" alt="" width="10px" /> 
                    </div>
                    <div class="px-2" >
                        <p> 
                            ${line.substring(line.indexOf('>') + 1)}
                        </p>
                    </div>
                </div>`;
                
                return ticked
            }
            line = line + "<p class = 'py-1'></p>"
            return line;
        })
        .join('')

    return (
        <>
            <div class="offer w-[8.27in] h-[11.6876in] bg-white shadow-lg">
                <div class="w-100%">
                    <div class="w-[90%] mx-auto">
                        <div class="flex">
                            <div class="mt-[50px]  flex relative  ">
                                <svg class="transform rotate-90 relative ml-[-5px]  top-0 " width="64" height="64"
                                    viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#0ea5e9"
                                        d="m221.76 69.66l-88-48.18a12 12 0 0 0-11.52 0l-88 48.18A12 12 0 0 0 28 80.18v95.64a12 12 0 0 0 6.24 10.52l88 48.18a11.95 11.95 0 0 0 11.52 0l88-48.18a12 12 0 0 0 6.24-10.52V80.18a12 12 0 0 0-6.24-10.52ZM220 175.82a4 4 0 0 1-2.08 3.5l-88 48.18a4 4 0 0 1-3.84 0l-88-48.18a4 4 0 0 1-2.08-3.5V80.18a4 4 0 0 1 2.08-3.5l88-48.18a3.94 3.94 0 0 1 3.84 0l88 48.18a4 4 0 0 1 2.08 3.5Z" />
                                </svg>
                                <h6 class="absolute ml-[1.4rem] top-5 text-[#00A2FF]  text-[12pt]">{pageNumber}</h6>

                            </div>
                            <div class="mt-[65px]">
                                <h3 class="font-[700] text-[9pt] text-[#00A2FF]">Soft
                                    Enterprise
                                </h3>

                                <h3 class=" font-[700]  text-[9pt] text-[#00A2FF]">Business
                                    Proposal
                                </h3>

                                <div class=" mt-1  w-[6.8in] h-0.5 bg-[#00A2FF] "></div>
                            </div>

                        </div>

                        <div class="pt-[34px] mb-2">
                            <h1 class="font-[700] text-[25pt] text-[#00A2FF] leading-9"
                                style={{ fontFamily: "'Montserrat', sans-serif" }}>ABOUT YOUR
                                <br /> PROJECT
                            </h1>
                            <div class="bline w-[90px] h-2 bg-[#ffd600]"></div>
                        </div>
                        <section class="pt-2">
                            <div class="flex">
                                <div class="text-[16pt] text-[#00A2FF] font-[700] ">
                                    <p>1.</p>
                                </div>
                                <div class="text-[16pt] text-[#00A2FF] px-3 font-[700]">
                                    <p>Overview & Goals</p>
                                </div>

                            </div>
                            <div >

                                <p class="pt-2 text-[12pt]" dangerouslySetInnerHTML={{ __html: aboutYourProject.overview }} ></p>
                            </div>
                            {/* 

                                <p class="py-3 text-[12pt]">They connect businesses and investments through a range of
                                    services and events, believing in
                                    the importance of a responsible and profitable private sector in Pakistan's development
                                </p>

                                <p class="text-[12pt]">The purpose of Client Coverage team serves as a single point of
                                    contact, understanding your
                                    company's unique trade promotion needs and sector requirements.</p> */}
                        </section>
                        <section>
                            <div class="flex pt-10">
                                <div class="text-[16pt] text-[#00A2FF]  font-[700]">
                                    <p>2.</p>
                                </div>
                                <div class="text-[16pt] text-[#00A2FF] px-3 font-[700]">
                                    <p>Key Features and Functionality</p>
                                </div>

                            </div>
                            <div>
                                <p class="pt-2 text-[12pt]" dangerouslySetInnerHTML={{ __html: contentWithImages }} ></p>
                            </div>

                            
                        </section>
                        <section>

                            <div class="flex pt-10">
                                <div class="text-[16pt] text-[#00A2FF] font-[700]">
                                    <p>3.</p>
                                </div>
                                <div class="text-[16pt] text-[#00A2FF] px-3 font-[700]">
                                    <p>Website CMS</p>
                                </div>

                            </div>
                            <div>
                                <p class="pt-2 text-[12pt]" dangerouslySetInnerHTML={{ __html: aboutYourProject.websiteCMS }}></p>
                            </div>


                        </section>


                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutYourProjects