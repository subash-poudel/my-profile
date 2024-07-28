import AppHeader from "./components/AppHeader";
import { Introduction } from "./components/Introduction";
import Skills from "./components/skills/Skills";
import "./index.css";
import Card from "./widgets/Card";

function App() {
  return (
    <div className="p-6">
      <AppHeader />
      <Introduction />
      <Card>
        <Skills />
      </Card>
    </div>
  );
}

export default App;
