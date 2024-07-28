import { PiMonitorBold } from "react-icons/pi";

function FrontendSkills() {
  return (
    <div className="flex items-center flex-col w-1/3">
      <PiMonitorBold className="bg-green-300 h-24 w-24 p-5 rounded-full px-6" />
      <h1 className="font-bold text-4xl mt-8">Frontend</h1>
      <p className="mt-4 text-center px-6">
        I value simple UI and shareable URLs
      </p>
      <p className="mt-6 text-purple-600">Things I enjoy in frontend:</p>
      <p className="mt-2">React, State Management</p>
      <p className="mt-6 text-purple-600">Expertise:</p>
      <p className="mt-2">React</p>
      <p>HTML & CSS</p>
      <p>Javascript & Typescript</p>
    </div>
  );
}

export default FrontendSkills;
