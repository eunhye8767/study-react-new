import useFadeIn from "../hooks/useFadeIn";

const PageFadeIn = () => {
  const fadeIn1 = useFadeIn(1, 3);
  const fadeIn2 = useFadeIn(3, 1);

  return (
    <>
      <div {...fadeIn1}>PageFadeIn1</div>
      <div {...fadeIn2}>PageFadeIn2</div>
    </>
  );
};

export default PageFadeIn;
