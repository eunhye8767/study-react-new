import useTabs from "../hooks/useTabs";
import useTitle from "../hooks/useTitle";

const content = [
  {
    tab: "Section 1",
    content: "I'm the content of the Section 1",
  },
  {
    tab: "Section 2",
    content: "I'm the content of the Section 2",
  },
];

const Tabs = () => {
  const pageTitle = useTitle("Tabs page")

  const { currentItem, changeItem } = useTabs(0, content);

  return (
    <>
      <div className="tab">
        <div className="tab-menu">
          {content.map((section, index) => (
            <button onClick={() => changeItem(index)} key={section.tab}>{section.tab}</button>
          ))}
        </div>
        <div className="tab-panel">{currentItem.content}</div>
      </div>
    </>
  );
};

export default Tabs;
