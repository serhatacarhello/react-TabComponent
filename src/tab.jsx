import { useState } from "react";

const Tab = ({ children }) => {
  const [active, setActive] = useState(0);
  const contents = children.filter((c) => c.type.name === "Content");

  const activeContent = contents[active];

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
      <div style={activeContent.props.style} className="content-text">
        {activeContent}
      </div>
    </div>
  );
};
export default Tab;
