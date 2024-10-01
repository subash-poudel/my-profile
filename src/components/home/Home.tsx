import Card from "../../widgets/Card";
import AppHeader from "../AppHeader";
import { Introduction } from "../Introduction";
import Skills from "../skills/Skills";

function Home() {
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

export default Home;
