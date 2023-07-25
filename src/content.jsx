export default function Content({ tab, children }) {
  console.log("tab", tab, "children", children);
  return <div>{children}</div>;
}
