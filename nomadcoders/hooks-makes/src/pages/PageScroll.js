import useScroll from "../hooks/useScroll";

const PageScroll = () => {
  const { y } = useScroll();

  return (
    <div style={{ height: "400vh" }}>
      <p
        style={{
          position: "fixed",
          color: y <= 100 ? "blue" : "red",
        }}
      >
        PageScroll
      </p>
    </div>
  );
};

export default PageScroll;
