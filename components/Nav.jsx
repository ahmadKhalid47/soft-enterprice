"use client";
import { useSelector } from "react-redux";

const Nav = () => {

  const pageNo = useSelector((state) => state.page.formId)
  return (

    pageNo != 100 && <>
        <div className='flex justify-center items-center w-full h-[10vh] rounded-b-3xl custom-bg shadow-lg'>
        <h1 className='orange_gradient text-3xl font-bold p-5'>Proposal Manager</h1>
      </div>
    </>
  )
}

export default Nav