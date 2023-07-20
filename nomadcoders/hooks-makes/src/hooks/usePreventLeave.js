const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = "";
  };

  const enablePrevent = () => {
    // beforeunload => window가 닫히기 전에 실행.
    window.addEventListener("beforeunload", listener);
  };

  const disablePrevent = () => {
    window.removeEventListener("beforeunload", listener);
  };

  return { enablePrevent, disablePrevent };
};

export default usePreventLeave;
