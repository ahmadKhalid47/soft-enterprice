import svg1 from '@public/assets/LastPageImgs/last page-01.svg'
import svg2 from '@public/assets/LastPageImgs/last page-02.svg'
import svg3 from '@public/assets/LastPageImgs/last page-03.svg'
import svg4 from '@public/assets/LastPageImgs/last page-04.svg'
import bgImg from '@public/assets/LastPageImgs/Untitled-3-01.png'
import logo from '@public/assets/LastPageImgs/logo.png'

const LastPage = () => {
    return (
    <>
            <div class="offer flex w-[8.27in] h-[11.6876in] bg-white shadow-lg print:shadow-none">



                <div class=" w-100vw">

                    <div class="w-[100%] print:h-[7.3rem] ">
                        <div class="">
                            <img class="w-[200px] ml-10 " src={logo.src} alt=""/>
                            <img class="mt-[-70px]" src={bgImg.src} alt=""/>
                                </div>

                                <div class=" mx-10 mt-[-70px] ">
                                    <h1 class="font-[700]  text-[25pt] text-[#00A2FF] leading-10" style={{fontFamily: "'Montserrat', sans-serif"}}>CONTACT <br/>US </h1>
                                    <div class=" mt-1 w-[95px]  h-2 bg-[#ffd600] "></div>
                                </div>
                                <div class="flex justify-between w-[90%] mx-auto ">
                                    <div class="w-fit">
                                <img class="w-[110px] mt-4 " src={svg1.src} alt=""/>
                                    </div>
                                    <div class="flex gap-16  mt-7 ">




                                        <div class="  flex flex-col items-center justify-center">
                                            <div class="w-8 h-8 bg-[#00A2FF] rounded-full flex items-center justify-center">

                                        <img class="w-4" src={svg2.src} alt=""/>


                                            </div>
                                            <p class=" font-[500] text-[6pt] mt-2">+92 (333) 765 2182</p>
                                            <p class=" font-[500] text-[6pt] ">+92 (42) 3781 5508</p>

                                        </div>


                                        <div class="mt-3 flex flex-col  items-center justify-center">
                                            <div class="w-8 h-8 bg-[#00A2FF] rounded-full flex items-center justify-center">

                                        <img class="w-4" src={svg3.src} alt=""/>


                                            </div>
                                            <p class=" font-[500] text-[6pt] mt-2">info@soft-enterprise.com</p>
                                            <p class=" font-[500] text-[6pt] ">project@soft-enterprise.com</p>
                                            <p class=" font-[500] text-[6pt] ">ﬁnance@soft-enterprise.com</p>

                                        </div>


                                        <div class=" mt-3 flex flex-col items-center justify-center">
                                    <div class="w-8 h-8 bg-[#00A2FF] rounded-full flex items-center justify-center">

                                        <img class="w-3" src={svg4.src} alt=""/>


                                            </div>
                                            <p class=" font-[500] text-[6pt] mt-2">53 Hamza Heights, Quaid</p>
                                            <p class=" font-[500] text-[6pt]">Block Near Eiﬀel Towel,</p>

                                            <p class=" font-[500] text-[6pt]"> Bahria Town, Lahore</p>

                                        </div>

                                    </div>
                                </div>


                        </div>
                    </div>
                </div>
            </>
            )
}

            export default LastPage