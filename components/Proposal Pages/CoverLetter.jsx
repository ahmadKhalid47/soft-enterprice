
import sign from '@public/assets/sign.jpg'
import { useSelector } from 'react-redux'
import tick from "@public/assets/TICK-01.svg"



const CoverLetter = ({ pageNumber }) => {
    const cover_letter = useSelector((state) => state.cover_letter)
    const content = cover_letter.letterText
        .split("<p class = 'py-1'></p>")
        .map((line) => {
            console.log(line)

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
            console.log(line)
            line = line + "<p class = 'py-1'></p>"
            return line;
        })
        .join('')

    return (
        <div className="offer flex w-[8.27in] min-h-[29.7cm] bg-white shadow-lg">
            <div className=" flex w-full">
                <div className="flex">
                    <div className="ml-3 w-[3px] h-full bg-[#00A2FF] "></div>
                    <div className="line ml-3 mr-1 h-full w-[3px]  bg-[#FED500] "></div>
                    <div className="mt-[50px] h-[90%] relative w-full ">
                        <svg className="transform rotate-90 relative  top-0 " width="64" height="64" viewBox="0 0 256 256"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill="#0ea5e9"
                                d="m221.76 69.66l-88-48.18a12 12 0 0 0-11.52 0l-88 48.18A12 12 0 0 0 28 80.18v95.64a12 12 0 0 0 6.24 10.52l88 48.18a11.95 11.95 0 0 0 11.52 0l88-48.18a12 12 0 0 0 6.24-10.52V80.18a12 12 0 0 0-6.24-10.52ZM220 175.82a4 4 0 0 1-2.08 3.5l-88 48.18a4 4 0 0 1-3.84 0l-88-48.18a4 4 0 0 1-2.08-3.5V80.18a4 4 0 0 1 2.08-3.5l88-48.18a3.94 3.94 0 0 1 3.84 0l88 48.18a4 4 0 0 1 2.08 3.5Z" />
                        </svg>
                        <h6 className="absolute ml-7 top-5 text-[#00A2FF] text-[12pt]">{pageNumber}</h6>

                    </div>
                </div>

                <div className=" w-[85%] ">
                    <h3 className="mt-[60px] font-[700] text-[9pt] text-[#00A2FF]">Soft
                        Enterprise
                    </h3>

                    <h3 className=" font-[700] text-[9pt] text-[#00A2FF]" >Business
                        Proposal
                    </h3>

                    <div className=" mt-2 w-[6.7in] h-0.5 bg-[#00A2FF] "></div>

                    <div className="mt-[70px]">
                        <h1 className="font-[700] text-[25pt] text-[#00A2FF] leading-9" style={{ fontFamily: "'Montserrat', sans-serif" }}>COVER <br />LETTER </h1>
                        <div className="bline mt-1 w-[90px] h-2 bg-[#FED500] "></div>
                    </div>
                    <div className="name underline  mt-14 font-[700]  text-[17.5pt]" >
                        <p>
                            Dear <span id="name" className="capitalize">{cover_letter.clientName}</span>
                        </p>

                    </div>
                    <div className=" font-[400] text-[12pt] leading-5" >
                        {/* {cover_letter.letterType === 'web_dev' ?
                            <>
                                <div className="Part-one  mt-7 mr-2 ">
                                    <p>
                                        We are writing to express our interest in your web development project. As a company
                                        with extensive experience in web development and a track record of delivering
                                        exceptional results for our clients, we are confident that we would be the ideal partner
                                        for your project.
                                    </p>

                                </div>
                                <div className="part-two mt-4  mr-6 ">

                                    <p>
                                        At Soft Enterprise, we understand that your website is often the first point of contact
                                        between your business and your customers. As such, we are committed to migrate
                                        your website to the sharepoint.
                                    </p>
                                </div>
                                <div className="part-three mt-4 mr-8">

                                    <p>
                                        Our team of experienced web developers, designers, and project manager work
                                        closely with clients to understand their specific needs and requirements. We have
                                        expertise in a wide range of technologies including Wordpress, Laravel, Angular, PHP,
                                        Share Point, Vue.Js, React, Shopify, Python and more. We are always exploring new
                                        and innovative approaches to web development.
                                    </p>
                                </div>
                                <div className="part-four mt-4 mr-6 ">

                                    <p>
                                        At every stage of the project, we prioritize communication and collaboration to ensure
                                        that you are fully involved in the process and the final product meets your
                                        expectations. We are dedicated to delivering projects on time and within budget, and
                                        we offer going support and maintenance to ensure that your website continues to
                                        perform at its best.
                                    </p>
                                </div>
                                <div className="part-five mt-4 ">

                                    <p>
                                        Thank you for considering Soft Enterprise for your web development needs. We are
                                        excited at the prospect of working with you and creating a website that will help your
                                        business succeed.
                                    </p>
                                </div>
                                <div className="part-six mt-4 ">

                                    <p>
                                        Sincerely,
                                    </p>
                                </div>
                            </>
                            :
                            cover_letter.letterType === 'web_design' ?
                                <>
                                    
                                </>
                                : null} */}
                        <div class="Part-one font-[400] text-[12pt] leading-6 pt-2" dangerouslySetInnerHTML={{ __html: content }} ></div>
                        <div>
                            <img className="h-[50px] w-[150px] mt-4 ml-[-11px]" src={sign.src} alt="" />
                        </div>


                        <div className="end mt-2 ;">
                            <p>Project Manager</p>
                            <p>Soft Enterprise</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default CoverLetter