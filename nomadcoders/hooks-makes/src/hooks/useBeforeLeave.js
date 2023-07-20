// 페이지 탭을 닫을 때

import { useEffect } from "react";

const useBeforeLeave = (onBefore) => {
  const handle = (event) => {
    const { clientY } = event;
    onBefore();
    
    // if (clientY <= 0) {
    //   onBefore();
    // }
  };

  useEffect(() => {
    // 현 영역에서 떠날 때 => (mouseleave)
    document.addEventListener("mousemove", handle);

    return () => document.removeEventListener("mousemove", handle);
  }, []);

  if(typeof onBefore !== "function") return
};

export default useBeforeLeave;
