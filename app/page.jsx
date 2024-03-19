"use client";
import { useEffect, useState } from "react";
import Sidebar from "@components/Sidebar";
import Form from "@components/Form";
import LivePreview from "@components/LivePreview";
import StoreProvider from "./store/StoreProvider";
import Popup from "@components/Popup";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setPopup } from "./store/popup";
import FullProposal from "@components/FullProposal";
import MyFamilyTree from "@components/FamilyTree";
import Nav from "@components/Nav";
import Login from "@components/Login";
import SignUp from "@components/SignUp";
import Registration from "@components/Registration/page";
import { local } from "d3";
import { verifyToken } from "./auth";

const familyData = {
  name: "John",
  spouse: "Jane",
  children: [
    {
      name: "Alice",
      spouse: "Bob",
      children: [
        {
          name: "Eve",
          spouse: "Charlie",
        },
        {
          name: "David",
        },
      ],
    },
    {
      name: "Carol",
      spouse: "Daniel",
    },
  ],
};

const Home = () => {
  const dispatch = useDispatch();
  const hidePopup = () => {
    dispatch(setPopup(null));
  };
  const message = useSelector((state) => state.popup);
  const pageNo = useSelector((state) => state.page.formId);
  // const pageNo = 10;
  const treeWidth = 800; // Set the desired width
  const [token, setToken] = useState(null);
  // const [verified, setVerified] = useState(false);
  // useEffect(
  //   () => () => {
  //     verifyToken(token) ? setVerified(true) : setVerified(false);
  //     // console.log(verifyToken(token));
  //   },
  //   token
  // );
  // console.log(verified);
  const defaultFamilyTreeData = [
    { key: "root", name: "Root", marriage: "Spouse" },
    { key: "father", name: "Father", parent: "root" },
    { key: "mother", name: "Mother", parent: "root" },
    { key: "child1", name: "Child 1", parent: "father" },
    { key: "child2", name: "Child 2", parent: "father" },
    { key: "spouse", name: "Spouse", marriage: "Root" },
    { key: "child3", name: "Child 3", parent: "mother" },
    { key: "child4", name: "Child 4", parent: "mother" },
  ];

  return (
    <StoreProvider>
      {/* {message && <Popup message={message.message} type={'success'} onHide={hidePopup} />} */}
      {token ? (
        // verified ? (
          <>
            {pageNo != 100 ? (
              <>
                <Nav />
                <div className="flex justify-between items-start pt-10 gap-8 h-fit mb-10">
                  <Sidebar />
                  <div className="flex flex-col gap-5">
                    <Form />
                    <LivePreview />
                  </div>
                </div>
              </>
            ) : (
              <FullProposal />
            )}
          </>
        // ) : (
        //   <Registration setToken={setToken} />
        // )
      ) : (
        <Registration setToken={setToken} />
      )}
    </StoreProvider>
  );
};

export default Home;
