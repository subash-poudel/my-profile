import MobileSkills from "./MobileSkills";
import FrontendSkills from "./FrontendSkills";
import BackendSkills from "./BackendSkills";

function Skills() {
  return (
    <div className="flex space-x-4 divide-x divide-gray-200">
      <MobileSkills />
      <FrontendSkills />
      <BackendSkills />
    </div>
  );
}

export default Skills;
