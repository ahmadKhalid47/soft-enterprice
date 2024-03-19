import TextInput from '@components/TextInput'
import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setFunctionalities, setOverviews, setWebsiteCMSs } from '@app/store/aboutYourProject';
import { setPopup } from '@app/store/popup';

const AboutYourProject = () => {
    const overviews = useSelector((state) => state.aboutYourProject.overview)
    const functionalities = useSelector((state) => state.aboutYourProject.functionality)
    const websiteCMSs = useSelector((state) => state.aboutYourProject.websiteCMS)
    console.log(overviews)
    const [overview, setOverview] = useState(overviews == '' ? `Upon exploring your business is providing services of field marketing, trade/business development, investment platform providing unique information and exposure to business opportunities in Pakistan & the UK.

They connect businesses and investments through a range of services and events, believing in the importance of a responsible and profitable private sector in Pakistan's development

The purpose of Client Coverage team serves as a single point of contact, understanding your company's unique trade promotion needs and sector requirements.` : overviews)
    const [functionality, setFunctionality] = useState(functionalities == '' ? `In accordance with the specifications outlined in your project requirements, the prominent features incorporated into your website encompass the following major functions. With regards to functionality, emphasis has been placed on user interface and visitor engagement, as follows


> Mega Menu for services pages, listed on your website
> Membership page with international payment gateways integrated. (API's will be required)
> Careers queries handling functionality and management.
> Blog/Article section page with categorized options. (Blog/Article content will be required)` : functionalities)
    const [websiteCMS, setWebsiteCMS] = useState(websiteCMSs == '' ? `WordPress CMS has been selected for the development of this website due to its numerous benefits. WordPress is a widely recognized and highly versatile content  management system that offers a plethora of advantages for website development. the key benefits of WordPress is its user-friendly interface, which allows even non technical individuals to easily manage and update website content. With its intuitive dashboard, users can effortlessly add, edit, and delete pages, blog posts, images, and other multimedia elements.` : websiteCMSs)
   


    const dispatch = useDispatch();

    const handleSaveAboutYourProject = () => {

        dispatch(setOverviews(overview.replace(/\n/g, "<p class = 'py-1'></p>")));
        dispatch(setFunctionalities(functionality.replace(/\n/g, "<p class = 'py-1'></p>")));
        dispatch(setWebsiteCMSs(websiteCMS.replace(/\n/g, "<p class = 'py-1'></p>")));
    }
    useEffect(()=>{
        handleSaveAboutYourProject()
    }, [overview, functionality, websiteCMS])

    const textareaRef = useRef();



    return (
        <div>
            <div className="flex justify-center flex-col ">
                <label className='text-gray-900 3xl:text-2xl text-lg my-2 ' >Overview & Goals</label>
                <textarea cols={'auto'} onChange={(e) => setOverview(e.target.value)} rows="5" className='text-gray-900 3xl:text-2xl text-lg p-2 rounded-md font-normal outline-none resize-none'
                    // defaultValue={overview.trim().replace(/<p\s*[^>]*>/g, '\n').replace(/<\/p>/g, '')}
                >
                    {overview.trim().replace(/<p\s*[^>]*>/g, '\n').replace(/<\/p>/g, '')}
                </textarea>
            </div>
            <div className="flex justify-center flex-col ">
                <label className='text-gray-900 3xl:text-2xl text-lg my-2'>Key Features and Functionality</label>
                <textarea
                    placeholder='Add (>)  to add tick sign before the line'
                    onChange={(e) => setFunctionality(e.target.value)}
                    rows="5"
                    className='text-gray-900 3xl:text-2xl text-lg p-2 rounded-md font-normal outline-none resize-none'
                    // defaultValue={functionality.trim().replace(/<p\s*[^>]*>/g, '\n').replace(/<\/p>/g, '')}
                >
                    {functionality.trim().replace(/<p\s*[^>]*>/g, '\n').replace(/<\/p>/g, '')}
                </textarea>

            </div>
            <div className="flex justify-center flex-col ">
                <div className="flex justify-between items-center">

                    <label className='text-gray-900 3xl:text-2xl text-lg my-2'>Website CMS</label>
                    <div className="flex items-center gap-3">
                        <button
                            className='3xl:text-2xl text-lg p-2 rounded-md font-normal outline-none resize-none bg-gray-400 text-white my-3'
                            onClick={() => {
                                textareaRef.current.value = `WordPress CMS has been selected for the development of this website due to its numerous benefits. WordPress is a widely recognized and highly versatile content management system that offers a plethora of advantages for website development.  the key benefits of WordPress is its user-friendly interface, which allows even non technical individuals to easily manage and update website content. With its intuitive dashboard, users can effortlessly add, edit, and delete pages, blog posts, images, and other multimedia elements.`;
                                setWebsiteCMS(textareaRef.current.value)
                            }}
                        >
                            Wordpress
                        </button>
                        <button
                            className='3xl:text-2xl text-lg p-2 rounded-md font-normal outline-none resize-none bg-gray-400 text-white my-3'
                            onClick={() => { textareaRef.current.value = `Shopify CMS has been selected for the development of this website due to its numerous benefits. WordPress is a widely recognized and highly versatile content management system that offers a plethora of advantages for website development.  the key benefits of WordPress is its user-friendly interface, which allows even non technical individuals to easily manage and update website content. With its intuitive dashboard, users can effortlessly add, edit, and delete pages, blog posts, images, and other multimedia elements.`; setWebsiteCMS(textareaRef.current.value) }}
                        >
                            Shopify
                        </button>
                    </div>
                </div>
                <textarea ref={textareaRef} placeholder='Add (>)  to add tick sign before the line' onChange={(e) => setWebsiteCMS(e.target.value)} rows="5" className='text-gray-900 3xl:text-2xl text-lg p-2 rounded-md font-normal outline-none resize-none'>
                    {websiteCMS.trim().replace(/<p\s*[^>]*>/g, '\n').replace(/<\/p>/g, '')}
                </textarea>
            </div>
            {/* <div className=" flex-center m-6">

                <input type="submit" value="Save" onClick={handleSaveAboutYourProject} className="button w-32 h-10 text-center  rounded-2xl" />
            </div> */}
        </div>
    )
}

export default AboutYourProject