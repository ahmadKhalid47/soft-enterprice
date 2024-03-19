'use client';

import TextInput from "../TextInput"
import Select from 'react-select'
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useRef } from "react";
import { setLetterType, setClientName, setLetterText } from "@app/store/coverLetterSlice";
import { setPopup } from "@app/store/popup";


const ConverLetterForm = () => {

    const dispatch = useDispatch();
    const coverLetter = useSelector((state) => state.cover_letter);

    const [letterText, setletterText] = useState(coverLetter.letterText)
    const [clientName, setclientName] = useState(coverLetter.clientName)
    const [letterType, setLetterType] = useState('web_dev')
    const selectOptions = [
        { value: 'web_dev', label: 'Web Development' },
        { value: 'web_design', label: 'Web Design' },
        // ...
    ];
    const textareaRef = useRef();
    const handleSave = () => {
        dispatch(setLetterText(letterText.replace(/\n/g, "<p class = 'py-1'></p>")));

        dispatch(setClientName(clientName));
    }

    useEffect(() => {
        handleSave()
    }, [letterText, clientName])

    // useEffect(() => {
    //     if (letterType == 'web_dev') {
    //         setletterText(
    //             )
    //     }
    // }, [letterType])
    return (
        <>
            <div className="flex gap-5 justify-center items-start h-fit">
                <div className="w-[calc(50%-1.25rem/2)] flex flex-col ">
                    <label className='text-gray-900 3xl:text-2xl text-lg my-2'>
                        Proposal Letter Type
                    </label>
                    <Select
                        options={selectOptions}
                        onChange={(event) => {
                            setLetterType(event.value);
                            if (event.value == 'web_dev') {
                                textareaRef.current.value = `We are writing to express our interest in your web development project. As a company with extensive experience in web development and a track record of delivering exceptional results for our clients, we are confident that we would be the ideal partner for your project.

At Soft Enterprise, we understand that your website is often the first point of contact between your business and your customers. As such, we are committed to migrate your website to the sharepoint.

Our team of experienced web developers, designers, and project manager work closely with clients to understand their specific needs and requirements. We have expertise in a wide range of technologies including Wordpress, Laravel, Angular, PHP, Share Point, Vue.Js, React, Shopify, Python and more. We are always exploring new and innovative approaches to web development.

At every stage of the project, we prioritize communication and collaboration to ensure that you are fully involved in the process and the final product meets your expectations. We are dedicated to delivering projects on time and within budget, and we offer going support and maintenance to ensure that your website continues to perform at its best.

Thank you for considering Soft Enterprise for your web development needs. We are excited at the prospect of working with you and creating a website that will help your business succeed.

Sincerely,`;

                            }
                            if (event.value == 'web_design') {
                                textareaRef.current.value = `Testing web design template`;

                            }
                            setletterText(textareaRef.current.value)
                        }}

                        // value={letterType}
                        styles={
                            {
                                container: (base) => ({
                                    ...base,
                                    // width: '100%',

                                }),
                                control: (base) => ({
                                    ...base,
                                    height: 'auto',
                                    fontSize: '18px',
                                    padding: '2px',
                                    border: 'none',
                                    outline: 'none',



                                }),
                                option: (base) => ({
                                    ...base,
                                    fontSize: '18px',
                                    padding: '3px',
                                    transition: 'all 0.2s ease',
                                    ":hover": {
                                        background: '#60a5fa'
                                    },
                                    zIndex: 999,

                                }),

                            }
                        }
                    />
                </div>

                <TextInput
                    label="Client Name"
                    placeholder="Enter Client Name"
                    onChange={(event) => {
                        setclientName(event.target.value);
                    }}
                    value={clientName}
                    border=""
                />


            </div>
            <div className="flex justify-center flex-col ">
                <label className='text-gray-900 3xl:text-2xl text-lg my-2 ' >Letter Text</label>
                <textarea ref={textareaRef} cols={'auto'} onChange={(e) => setletterText(e.target.value)} rows="5" className='text-gray-900 3xl:text-2xl text-lg p-2 rounded-md font-normal outline-none resize-none'
                // defaultValue={overview.trim().replace(/<br\s*\/?>/g, '\n')}
                >
                    {letterText.trim().replace(/<p\s*[^>]*>/g, '\n').replace(/<\/p>/g, '')}
                </textarea>
            </div>
                 
            <div className=" flex-center m-">

                {/* <input type="submit" value="Save" onClick={handleSave} className="button w-32 h-10 text-center  rounded-2xl" /> */}
            </div>
        </>
    )
}

export default ConverLetterForm