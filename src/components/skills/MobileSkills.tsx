import { FaMobileAlt } from "react-icons/fa";

function MobileSkills() {
  return (
    <div className="flex items-center flex-col px-6 w-1/3">
      <FaMobileAlt className="bg-green-300 h-24 w-24 p-5 rounded-full" />
      <h1 className="font-bold text-4xl mt-8">Mobile</h1>
      <p className="mt-4 text-center px-6">
        I value simple UI with beautiful interactions according to the design guidelines.
      </p>
      <p className="mt-6 text-purple-600">Things I enjoy in mobile:</p>
      <p className="mt-2">UX, UI, Testing, Development, Swift</p>
      <p className="mt-6 text-purple-600">Expertise:</p>
      <p className="mt-2">Native Android & iOS</p>
      <p>React Native</p>
      <p>Kotlin & Java</p>
      <p>Objective-C & Swift</p>
    </div>
  );
}

export default MobileSkills;
