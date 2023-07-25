import { useState } from "react";
import Content from "./content";

const Tab = ({ children }) => {
  const [active, setActive] = useState(0);

  // console.log("children", children);
  const contents = children.filter((c) => c.type === Content);
  //   console.log("contents", contents);

  const activeContent = contents[active];
  console.log(activeContent);

  return (
    <div className="contents">
      {contents.map((c, i) => (
        <button
          style={{ background: active === i ? "red" : "blue" }}
          key={i}
          onClick={() => setActive(i)}
        >
          {c.props.tab}
        </button>
      ))}
      <div style={activeContent.props.style} className="active-content">
        {activeContent}
      </div>
    </div>
  );
};
export default Tab;
