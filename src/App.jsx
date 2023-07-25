import Content from "./content";
import Tab from "./tab";

function App() {
  return (
    <>
      <Tab>
        <Content
          tab="Tab 1"
          style={{ backgroundColor: "green", color: "white" }}
        >
          <p>This is the content of Tab 1.</p>
        </Content>
        <Content
          tab="Tab 2"
          style={{ backgroundColor: "blue", color: "white" }}
        >
          <p>This is the content of Tab 2.</p>
        </Content>
        <Content
          tab="Tab 3"
          style={{ backgroundColor: "purple", color: "white" }}
        >
          <p>This is the content of Tab 3.</p>
        </Content>
        <Content
          tab="Tab 4"
          style={{ backgroundColor: "white", color: "black" }}
        >
          <p>This is the content of Tab 4.</p>
        </Content>
        <Content
          tab="Tab 5"
          style={{ backgroundColor: "orange", color: "blue" }}
        >
          <p>This is the content of Tab 5.</p>
        </Content>
      </Tab>
    </>
  );
}

export default App;
