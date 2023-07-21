import React from "react";
import useNotification from "../hooks/useNotification";

const PageNotification = () => {
  const triggerNotif = useNotification("notification !!!", {
    body: "Notification Body 영역",
  });

  return <button onClick={triggerNotif}>triggerNotif</button>;
};

export default PageNotification;
