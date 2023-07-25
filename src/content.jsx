export default function Content({ tab, style, children }) {
  //   console.log("tab", tab, "children", children);
  return (
    <div tab={tab} style={style}>
      {children}
    </div>
  );
}
