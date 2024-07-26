function AppHeader() {
  return (
    <div className="bg-red-200 h-36 flex items-center justify-between">
      <img src="logo.png" className="h-24 w-24" />
      <div className="flex flex-row p-2 gap-2 items-center">
        <a className="font-roboto hover:text-purple-600">Mentorship</a>
        <button className="w-40 h-12 bg-yellow-400 border-4 border-purple-600 rounded-full font-bold hover:bg-purple-600">Say Hello</button>
      </div>
    </div>
  );
}

export default AppHeader;
