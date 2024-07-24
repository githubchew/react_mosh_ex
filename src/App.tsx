import "bootstrap/dist/css/bootstrap.css";
import Button from "./components/Buttons";

function App() {
  return (
    <div>
      <Button color="secondary" onClick={() => console.log("clicked")}>
        My button
      </Button>
      <Button onClick={() => console.log("new btn")}>new button</Button>
    </div>
  );
}

export default App;
