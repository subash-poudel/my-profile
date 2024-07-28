import { GrCloudComputer } from "react-icons/gr";

function BackendSkills() {
  return (

      <div className="flex items-center flex-col w-1/3">
        <GrCloudComputer className="bg-green-300 h-24 w-24 p-5 rounded-full px-6" />
        <h1 className="font-bold text-4xl mt-8">Backend</h1>
        <p className="mt-4  text-center px-6">
          I value simple performant api's and database structure
        </p>
        <p className="mt-6 text-purple-600">Things I enjoy in backend:</p>
        <p className="mt-2">Working and learning devops tasks</p>
        <p className="mt-6 text-purple-600">Expertise:</p>
        <p className="mt-2">NodeJS</p>
        <p>NestJS & Express</p>
        <p>SQL & NoSQL</p>
      </div>
  );
}

export default BackendSkills;
