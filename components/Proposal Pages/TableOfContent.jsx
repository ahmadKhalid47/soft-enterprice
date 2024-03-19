import img from "@public/assets/table of content's image.png";
import { useSelector } from "react-redux";

const TableOfContent = () => {

    const pageSequence = useSelector((state) => state.pageSequence).pageSequence;


    let number = 0;

    return (
        <>
            <div class=" full-proposal flex justify-center items-center">
                <div style={{ fontFamily: "Open sans" }} class="flex justify-between w-[210mm] h-[297mm] mx-auto bg-white pl-14 ">

                    <section class="w-[calc(100%-59px)]">
                        <div class="text-[25pt] font-[700] text-[#00A2FF] mt-[131px] w-[305px] ">
                            <div>
                                <h1 style={{ lineHeight: "1", fontFamily: "Montserrat" }} class="pl-1 ">
                                    <p>TABLE OF
                                        CONTENT</p>
                                </h1>
                            </div>

                            <div>
                                <div class="w-[90px] bg-[#FED500] h-[6px]  "></div>
                            </div>

                        </div>
                        <div style={{ paddingRight: "44px" }} class="whitespace-nowrap">
                            {pageSequence.map((page, index) => {
                                const id = page.id;
                                if (id == "1") return

                                if (page.checked) {
                                    number++
                                }
                                else {
                                    return
                                }

                                switch (id) {

                                    case "2":
                                        return (
                                            page.checked && <div class={`${index == "0" ? "mt-[55px]" : "mt-[17px]"}`}>
                                                <div class="flex justify-between items-center text-[14pt] ">
                                                    <div class="w-[10rem] font-[400]">
                                                        <p>Cover Letter</p>
                                                    </div>
                                                    <div class="ml-[14px] text-gray-400" style={{ fontFamily: "Open sans" }}>
                                                        <p class="flex items-center justify-center">
                                                            ....................................................................................
                                                        </p>
                                                    </div>
                                                    <div class="ml-[20px] flex items-center font-[400]" style={{ fontFamily: "'Lato', sans-serif" }}>
                                                        <p>{number < 10 ? "0" + number : number}</p>
                                                    </div>
                                                </div>
                                            </div>

                                        );
                                    case "3":
                                        return (
                                            page.checked && <div class={`${index == "0" ? "mt-[55px]" : "mt-[17px]"}`}>
                                                <div class="flex justify-between items-center text-[14pt] ">
                                                    <div class="w-[10rem] font-[400]">
                                                        <p>About your Project</p>
                                                    </div>
                                                    <div class="ml-[14px] text-gray-400" style={{ fontFamily: "Open sans" }}>
                                                        <p class="flex items-center justify-center">
                                                            ....................................................................................
                                                        </p>
                                                    </div>
                                                    <div class="ml-[20px] flex items-center font-[400]" style={{ fontFamily: "'Lato', sans-serif" }}>
                                                        <p>{number < 10 ? "0" + number : number}</p>
                                                    </div>
                                                </div>
                                            </div>

                                        );
                                    case "4":
                                        return (

                                            page.checked && <div class={`${index == "0" ? "mt-[55px]" : "mt-[17px]"}`}>
                                                <div class="flex justify-between items-center text-[14pt] ">
                                                    <div class="w-[10rem] font-[400]">
                                                        <p>Proposed Sitemap</p>
                                                    </div>
                                                    <div class="ml-[14px] text-gray-400" style={{ fontFamily: "Open sans" }}>
                                                        <p class="flex items-center justify-center">
                                                            ....................................................................................
                                                        </p>
                                                    </div>
                                                    <div class="ml-[20px] flex items-center font-[400]" style={{ fontFamily: "'Lato', sans-serif" }}>
                                                        <p>{number < 10 ? "0" + number : number}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    case "5":
                                        return (
                                            page.checked && <div class={`${index == "0" ? "mt-[55px]" : "mt-[17px]"}`}>
                                                <div class="flex justify-between items-center text-[14pt] ">
                                                    <div class="w-[10rem] font-[400]">
                                                        <p>About Us</p>
                                                    </div>
                                                    <div class="ml-[14px] text-gray-400" style={{ fontFamily: "Open sans" }}>
                                                        <p class="flex items-center justify-center">
                                                            ....................................................................................
                                                        </p>
                                                    </div>
                                                    <div class="ml-[20px] flex items-center font-[400]" style={{ fontFamily: "'Lato', sans-serif" }}>
                                                        <p>{number < 10 ? "0" + number : number}</p>
                                                    </div>
                                                </div>
                                            </div>

                                        );
                                    case "6":
                                        return (

                                            page.checked && <div class={`${index == "0" ? "mt-[55px]" : "mt-[17px]"}`}>
                                                <div class="flex justify-between items-center text-[14pt] ">
                                                    <div class="w-[10rem] font-[400]">
                                                        <p>Our Process</p>
                                                    </div>
                                                    <div class="ml-[14px] text-gray-400" style={{ fontFamily: "Open sans" }}>
                                                        <p class="flex items-center justify-center">
                                                            ....................................................................................
                                                        </p>
                                                    </div>
                                                    <div class="ml-[20px] flex items-center font-[400]" style={{ fontFamily: "'Lato', sans-serif" }}>
                                                        <p>{number < 10 ? "0" + number : number}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    case "7":
                                        return (

                                            page.checked && <div class={`${index == "0" ? "mt-[55px]" : "mt-[17px]"}`}>
                                                <div class="flex justify-between items-center text-[14pt] ">
                                                    <div class="w-[10rem] font-[400]">
                                                        <p>Why Soft Enterprise</p>
                                                    </div>
                                                    <div class="ml-[14px] text-gray-400" style={{ fontFamily: "Open sans" }}>
                                                        <p class="flex items-center justify-center">
                                                            ....................................................................................
                                                        </p>
                                                    </div>
                                                    <div class="ml-[20px] flex items-center font-[400]" style={{ fontFamily: "'Lato', sans-serif" }}>
                                                        <p>{number < 10 ? "0" + number : number}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    case "8":
                                        return (
                                            page.checked && <div class={`${index == "0" ? "mt-[55px]" : "mt-[17px]"}`}>
                                                <div class="flex justify-between items-center text-[14pt] ">
                                                    <div class="w-[10rem] font-[400]">
                                                        <p>Invoice</p>
                                                    </div>
                                                    <div class="ml-[14px] text-gray-400" style={{ fontFamily: "Open sans" }}>
                                                        <p class="flex items-center justify-center">
                                                            ....................................................................................
                                                        </p>
                                                    </div>
                                                    <div class="ml-[20px] flex items-center font-[400]" style={{ fontFamily: "'Lato', sans-serif" }}>
                                                        <p>{number < 10 ? "0" + number : number}</p>
                                                    </div>
                                                </div>
                                            </div>

                                        );
                                    case "9":
                                        return (
                                            page.checked && <div class={`${index == "0" ? "mt-[55px]" : "mt-[17px]"}`}>
                                                <div class="flex justify-between items-center text-[14pt] ">
                                                    <div class="w-[10rem] font-[400]">
                                                        <p>Terms & conditions</p>
                                                    </div>
                                                    <div class="ml-[14px] text-gray-400" style={{ fontFamily: "Open sans" }}>
                                                        <p class="flex items-center justify-center">
                                                            ....................................................................................
                                                        </p>
                                                    </div>
                                                    <div class="ml-[20px] flex items-center font-[400]" style={{ fontFamily: "'Lato', sans-serif" }}>
                                                        <p>{number < 10 ? "0" + number : number}</p>
                                                    </div>
                                                </div>
                                            </div>

                                        );

                                }

                            })}

                        </div>


                        <div class="mt-[3.5rem]">
                            <div>
                                <img src={img.src} alt="" width=" 674px" />
                            </div>
                        </div>
                    </section>

                    <section>
                        <div class="flex flex-col justify-end items-end ">
                            <div class="w-[59px] h-[297mm] bg-[#FED500]"></div>
                        </div>

                    </section>
                </div>
            </div>
        </>
        
    )
}

export default TableOfContent