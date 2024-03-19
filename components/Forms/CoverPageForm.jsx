import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import {
    setSubHeading,
    setProjectTitle,
    setCompanyPhoneNumber,
    setCompanyAddress,
    setCompanyName,
    setIssueDate,
    setValidDate,
    setCompanyLogo
} from '@app/store/coverPageSlice';
import TextInput from '../TextInput';
import { setPopup } from '@app/store/popup';

const CoverPageForm = () => {
    const dispatch = useDispatch();
    const coverPage = useSelector((state) => state.cover_page);
    // Local state to track input values
    const [subHeading, setSubHeadingLocal] = useState(coverPage.subHeading == "" ? "A comprehensive website transfer proposal to enhance the professionalism of your business." : coverPage.subHeading);
    const [projectTitle, setProjectTitleLocal] = useState(coverPage.projectTitle);
    const [companyPhoneNumber, setCompanyPhoneNumberLocal] = useState(coverPage.companyPhoneNumber);
    const [companyAddress, setCompanyAddressLocal] = useState(coverPage.companyAddress);
    const [companyName, setCompanyNameLocal] = useState(coverPage.companyName);
    const [issueDate, setIssueDateLocal] = useState(coverPage.issueDate);
    const [validDate, setValidDateLocal] = useState(coverPage.validDate);
    const [companyLogo, setCompanyLogoLocal] = useState(coverPage.companyLogo || null);


    const handleSave = () => {
        // Dispatch actions to save the data
        dispatch(setSubHeading(subHeading));
        dispatch(setProjectTitle(projectTitle));
        dispatch(setCompanyPhoneNumber(companyPhoneNumber));
        dispatch(setCompanyAddress(companyAddress));
        dispatch(setCompanyName(companyName));
        dispatch(setIssueDate(issueDate));
        dispatch(setValidDate(validDate));
        // dispatch(setCompanyLogo(companyLogo));
    };
    useEffect(()=>{
        handleSave()
    }, [subHeading, projectTitle, companyPhoneNumber, companyAddress, companyName, issueDate, validDate])
    const handleLogoChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const dataURL = e.target.result;
                dispatch(setCompanyLogo({ string: dataURL, name: file.name }));
                setCompanyLogoLocal({ string: dataURL, name: file.name });
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <>
            <TextInput
                label="Sub Heading"
                placeholder="Enter Sub Heading"
                value={subHeading}
                onChange={(event) => {
                    setSubHeadingLocal(event.target.value);
                }}
            />

            <TextInput
                label="Project Title"
                placeholder="Enter Project Title"
                value={projectTitle}
                onChange={(event) => {
                    setProjectTitleLocal(event.target.value);
                }}
            />


            <div className="flex gap-5 justify-center items-center">
                <TextInput
                    label="Company Phone Number"
                    placeholder="Enter Company Phone Number"
                    value={companyPhoneNumber}
                    onChange={(event) => {
                        setCompanyPhoneNumberLocal(event.target.value);
                    }}
                />
                <TextInput
                    label="Company Address"
                    placeholder="Enter Company Address"
                    value={companyAddress}
                    onChange={(event) => {
                        setCompanyAddressLocal(event.target.value);
                    }}
                />
            </div>

            <div className="flex gap-5 justify-center items-center">
                <TextInput
                    label="Company Name"
                    placeholder="Enter Company Name"
                    value={companyName}
                    onChange={(event) => {
                        setCompanyNameLocal(event.target.value);
                    }}
                />
                <TextInput
                    label="Issue Date"
                    type="date"
                    value={issueDate}
                    onChange={(event) => {
                        setIssueDateLocal(event.target.value);
                    }}
                />
            </div>

            <TextInput
                label="Valid Date"
                type="date"
                value={validDate}
                onChange={(event) => {
                    setValidDateLocal(event.target.value);
                }}
            />
            

            <TextInput
                label="Upload Company Logo"
                type='file'
                accept="image/*"
                onChange={handleLogoChange}
                border="opacity-0 absolute mt-[44px] w-20 h-20 cursor-pointer"
            />

            {coverPage.companyLogo?.name || companyLogo?.name?
                <>
                    <img className="w-20 h-20 " src={!companyLogo.string ? coverPage.companyLogo.string : companyLogo.string} alt="" />
                    <p>Selected File: {!companyLogo.name ? coverPage.companyLogo.name : companyLogo.name}</p>
                </>
                : <div className='w-20 h-20 flex justify-center items-center text-center border border-black'>No file is Selected</div>
            }

            <button type="button" className='py-2 px-2 bg-red-600 rounded-3xl text-white mt-4' onClick={() => { dispatch(setCompanyLogo(null)); setCompanyLogoLocal(null)}}>Remove images</button>
            {/* <div className="flex-center m-6">
                <button onClick={handleSave} className="button w-32 h-10 text-center  rounded-2xl">
                    Save
                </button>
            </div> */}
        </>
    );
};

export default CoverPageForm;
