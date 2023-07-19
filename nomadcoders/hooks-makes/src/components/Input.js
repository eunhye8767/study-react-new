import React, { useEffect } from "react";
import { useInput } from "../hooks/useInput";
import useTitle from "../hooks/useTitle";

const Input = () => {
  const pageTitle = useTitle("Input page")

  const maxLen = (value) => value.length < 10;
  // @포함되어 있지 않아야 한다.
  // const checkIncludes = (value) => !value.includes("@");

  const text = useInput("Mr.", maxLen);

  useEffect(() => {
    console.log(text);
  }, [text]);

  return (
    <>
      <input type="text" placeholder="text..." {...text} />
    </>
  );
};

export default Input;

/**
 * useInput
 *
 *  ㄴ input 관련 hooks 만들어서 활용이 가능.
 *  ㄴ type: text, search, number, tel, email, radio, checkbox 등
 */
