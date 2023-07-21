import useFullScreen from "../hooks/useFullScreen";

const PageFullScreen = () => {
  const { element, triggerFull, exitFull } = useFullScreen();

  const onFullS = (isFull) => {
    console.log(isFull ? "full" : "small");
  };

  return (
    <>
      <div ref={element}>
        <img src="https://placehold.co/600x400/000000/FFF" alt="temp" />
        <button type="button" onClick={exitFull}>
          Exit FullScreen
        </button>
      </div>

      <div>
        <button type="button" onClick={triggerFull}>
          Make FullScreen
        </button>
      </div>
    </>
  );
};

export default PageFullScreen;
