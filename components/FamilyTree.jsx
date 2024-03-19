
import React from 'react';
import { useSelector } from 'react-redux';




const transformData = (inputData) => {
    const result = {
        text: useSelector((state) => state.proposedSitemap.rootName),
        children: inputData
    }
    return result;
};
// Define a recursive function to render the family tree
const renderFamilyTree = (data, level) => {
    if (!data) {
        return null;
    }
    // Determine background color based on the level
    return (
        <div className={`${level != 0 ? "p-2": ""}  bg-white rounded-xl border-2 ${level == 0 ? "border-white" : " border-gray-400"}` }>
            <div className={`font-bold capitalize ${level == 0? "text-2xl": level == 1? "text-xl": "text-lg"} ${level == 0? "mb-3": ''}`}>{data.text}</div>
            <div className="flex flex-wrap gap-4 justify-start rounded-2xl ">
                {data.children &&
                    data.children.map((child, index) => (
                        <div key={index}>{renderFamilyTree(child, level + 1)}</div>
                    ))}
            </div>
        </div>
    );
};

export default function FamilyTree({ proposedSitemap }) {
    const familyData = transformData(useSelector((state) => proposedSitemap == 1 ? state.proposedSitemap.sitemap : state.proposedSitemap2?.sitemap2));
    console.log(familyData)


    return (
        <div className="relative flex justify-center items-start h-fit w-full">

            <div className="w-full rounded-2xl bg-white  z-10 backdrop-blur-md">
                {renderFamilyTree(familyData, 0)} {/* Start at level 0 for the root node */}
            </div>
        </div>
    );
}
