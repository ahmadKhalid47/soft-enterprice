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
import { create, local } from "d3";
import { getCookies, verifyToken } from "./auth";
import axios from "axios";

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
  const treeWidth = 800; // Set the desired width
  const [tokenVerifierTrigger, setTokenVerifierTrigger] = useState(0);
  const [userId, setUserId] = useState(null);
  const [isVerified, setIsVerified] = useState();
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

  useEffect(() => {
    let tokenFromCookie = getCookies();
    setIsVerified(verifyToken(tokenFromCookie));
    async function postToken() {
      axios.post(
        `https://soft-enterprice-jfac.vercel.app/api/storeTokenToDb`,
        {
          tokenFromCookie,
          userId,
        }
      );
    }
    if (tokenFromCookie) {
      postToken();
    }
  }, [tokenVerifierTrigger]);

  return (
    <StoreProvider>
      {/* {message && <Popup message={message.message} type={'success'} onHide={hidePopup} />} */}
      {isVerified ? (
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
      ) : (
        <>
          <Registration
            tokenVerifierTrigger={tokenVerifierTrigger}
            setTokenVerifierTrigger={setTokenVerifierTrigger}
            setUserId={setUserId}
          />
        </>
      )}
    </StoreProvider>
  );
};

export default Home;
