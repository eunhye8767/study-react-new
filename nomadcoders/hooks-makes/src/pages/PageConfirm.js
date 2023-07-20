import React from "react";
import useConfirm from "../hooks/useConfirm";

const PageConfirm = () => {
  const deleteWorld = () => console.log("Deleting the world...");
  const abort = () => console.log("Aborted");

  const confirmDelete = useConfirm("Are you sure", deleteWorld, abort);

  return <button onClick={confirmDelete}>Delete the world</button>;
};

export default PageConfirm;
