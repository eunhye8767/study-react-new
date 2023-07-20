import useBeforeLeave from "../hooks/useBeforeLeave";

const PageBeforeLeave = () => {
  const begForLife = () => console.log("Pls  dont leave");
  useBeforeLeave(begForLife);
  return <div style={{ background: "red" }}>PageBeforeLeave</div>;
};

export default PageBeforeLeave;
