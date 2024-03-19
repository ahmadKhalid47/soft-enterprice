import svg1 from "@public/assets/our process-01.svg"
import svg2 from "@public/assets/our process-02.svg"
import svg3 from "@public/assets/our process-03.svg"
import svg4 from "@public/assets/our process-04.svg"
import svg5 from "@public/assets/our process-05.svg"
import svg6 from "@public/assets/our process-06.svg"

const OurProcess = ({ pageNumber }) => {
    return (
        <>

            <div class="offer w-[8.27in] h-[11.6876in] bg-white shadow-lg print:shadow-none">
                <div class="w-100%">
                    <div class="w-[90%] mx-auto">
                        <div class="flex  print:h-[7.3rem]">
                            <div class="mt-[50px] flex relative  pb-0">
                                <svg class="transform rotate-90 relative ml-[-5px]  top-0 " width="64" height="64" viewBox="0 0 256 256"
                                    xmlns="http://www.w3.org/2000/svg">
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

                                <div class=" mt-1  w-[6.5in] h-0.5 bg-[#00A2FF] "></div>
                            </div>

                        </div>

                        <div class="mt-[40px]">
                            <h1 class="font-[700] text-[25pt] text-[#00A2FF] leading-9" style={{ fontFamily: "'Montserrat', sans-serif" }}>OUR<br />PROCESS
                            </h1>
                            <div class="bline w-[90px] h-2 mt-1 mb-3 bg-[#ffd600]"></div>
                        </div>
                        <div class="text-[11pt] flex text-justify" >
                            <p>Our web development service follows a comprehensive process to ensure that we deliver high quality,
                                responsive, and optimized websites that meet the unique needs of our clients. We are committed to
                                providing exceptional service and support throughout the entire process, to ensure that you are completely
                                satisﬁed and happy with the ﬁnal product.</p>
                        </div>
                        <div>
                            <section>
                                <div class="flex gap-3 my-3">
                                    <div class="w-1/2  border-2 border-[#00A2FF] rounded-tr-2xl rounded-bl-2xl flex">
                                        <div>
                                            <div>
                                                <div>
                                                    <p class="text-[#00A2FF] text-[30pt] font-[700] flex justify-end items-end mr-4 "
                                                        style={{ fontFamily: "open sans" }}>1</p>
                                                </div>
                                            </div>
                                            <div class="flex items-center mt-[-3rem]">
                                                <div class="ml-7">
                                                    <img src={svg1.src} alt="" width="70px" />
                                                </div>
                                                <div class="text-[18pt] font-[600] px-5 pt-4">
                                                    <p>Planning</p>
                                                </div>
                                            </div>
                                            <div class=" w-[90%] mx-auto pb-4 font-[400] text-[10pt] text-justify pt-1 ">
                                                <p>
                                                    The first step in thweb development process is planning. This involves gathering requirements,
                                                    understanding the client's business goals, and creating a project plan that includes the
                                                    timeline,
                                                    budget, and resources needed. Our team of experts will make sure to plan the required project in
                                                    a
                                                    more efficient way.
                                                </p>
                                            </div>
                                        </div>


                                    </div>
                                    <div class="w-1/2  border-2 border-[#00A2FF] rounded-tr-2xl rounded-bl-2xl flex">
                                        <div>
                                            <div>
                                                <div>
                                                    <p class="text-[#00A2FF] text-[30pt] font-[700] flex justify-end items-end mr-4 "
                                                        style={{ fontFamily: "open sans" }}>2</p>
                                                </div>
                                            </div>
                                            <div class="flex items-center mt-[-3rem]">
                                                <div class="ml-7">
                                                    <img src={svg2.src} alt="" width="70px" />
                                                </div>
                                                <div class="text-[18pt] font-[600] px-5 pt-4">
                                                    <p>Design</p>
                                                </div>
                                            </div>
                                            <div class="w-[90%] mx-auto pb-4 font-[400] text-[10pt] text-justify pt-1" >
                                                <p>
                                                    During this phase, our Designing team will work closely work with the client to create wire
                                                    frames
                                                    and mock-ups of the website's layout, design elements, and user interface. The team will often
                                                    begin by gathering information about the client's brand and target audience, as well as any
                                                    specific goals.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section>
                                <div class="flex gap-3 my-3">
                                    <div class="w-1/2  border-2 border-[#00A2FF] rounded-tr-2xl rounded-bl-2xl flex">
                                        <div>
                                            <div>
                                                <div>
                                                    <p class="text-[#00A2FF] text-[30pt] font-[700] flex justify-end items-end mr-4 "
                                                        style={{ fontFamily: "open sans" }}>3</p>
                                                </div>
                                            </div>
                                            <div class="flex items-center mt-[-3rem]">
                                                <div class="ml-7">
                                                    <img src={svg3.src} alt="" width="70px" />
                                                </div>
                                                <div class="text-[18pt] font-[600] px-5 pt-4">
                                                    <p>Implementation</p>
                                                </div>
                                            </div>
                                            <div class=" mx-3 pb-4 font-[400] text-[10pt] text-justify pt-1">
                                                <p>
                                                    In this stage, the web development team begins to code the website. They start with the back-end
                                                    development, which involves creating the server-side logic and database structure. They then
                                                    move
                                                    on to front-end development, which involves creating the user interface and integrating the
                                                    back-end functionality.
                                                </p>
                                            </div>
                                        </div>


                                    </div>
                                    <div class="w-1/2  border-2 border-[#00A2FF] rounded-tr-2xl rounded-bl-2xl flex">
                                        <div>
                                            <div>
                                                <div>
                                                    <p class="text-[#00A2FF] text-[30pt] font-[700] flex justify-end items-end mr-4 "
                                                        style={{ fontFamily: "open sans" }}>4</p>
                                                </div>
                                            </div>
                                            <div class="flex items-center mt-[-3rem]">
                                                <div class="ml-7">
                                                    <img src={svg4.src} alt="" width="70px" />
                                                </div>
                                                <div class="text-[18pt] font-[600] px-5 pt-4">
                                                    <p>Testing</p>
                                                </div>
                                            </div>
                                            <div class=" mx-3 pb-4 font-[400] text-[10pt] text-justify pt-1">
                                                <p>
                                                    Once the development stage is complete, the development team tests the website to ensure that it
                                                    works as expected. They test for functionality, compatibility, performance, and make any
                                                    necessary
                                                    adjustments. This includes testing forms, buttons,links, and any other interactive elements
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section>
                                <div class="flex gap-3 my-3">
                                    <div class="w-1/2  border-2 border-[#00A2FF] rounded-tr-2xl rounded-bl-2xl flex">
                                        <div>
                                            <div>
                                                <div>
                                                    <p class="text-[#00A2FF] text-[30pt] font-[700] flex justify-end items-end mr-4 "
                                                        style={{ fontFamily: "open sans" }}>5</p>
                                                </div>
                                            </div>
                                            <div class="flex items-center mt-[-3rem]">
                                                <div class="ml-7">
                                                    <img src={svg5.src} alt="" width="70px" />
                                                </div>
                                                <div class="text-[18pt] font-[600] px-5 pt-4">
                                                    <p>Deployment</p>
                                                </div>
                                            </div>
                                            <div class=" mx-3 pb-4 font-[400] text-[10pt] text-justify pt-1">
                                                <p>
                                                    The web development team must ensure that the server environment is set up correctly and that
                                                    all
                                                    necessary software and dependencies are installed. They must also configure the web server to
                                                    handle incoming requests and route them to the appropriate resources on the server making it
                                                    available to the public
                                                </p>
                                            </div>
                                        </div>


                                    </div>
                                    <div class="w-1/2 border-2 border-[#00A2FF] rounded-tr-2xl rounded-bl-2xl flex">
                                        <div>
                                            <div>
                                                <div>
                                                    <p class="text-[#00A2FF] text-[30pt] font-[700] flex justify-end items-end mr-4 "
                                                        style={{ fontFamily: "open sans" }}>6</p>
                                                </div>
                                            </div>
                                            <div class="flex items-center mt-[-3rem]">
                                                <div class="ml-7">
                                                    <img src={svg6.src} alt="" width="70px" />
                                                </div>
                                                <div class="text-[18pt] font-[600] px-5 pt-4">
                                                    <p>Maintenance</p>
                                                </div>
                                            </div>
                                            <div class=" mx-3 pb-4 font-[400] text-[10pt] text-justify pt-1" >
                                                <p>
                                                    After the website is deployed, the web development team continues to monitor it for issues and
                                                    makes any necessary updates or fixes. They may also provide ongoing support and maintenance to
                                                    ensure that the website remains up-to-date and secure as per client demand on a
                                                    monthly/quarterly/annual maintenance plan.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurProcess