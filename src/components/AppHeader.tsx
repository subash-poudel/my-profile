function AppHeader() {
  return (
    <div className="h-36 flex items-center justify-between">
      <img src="logo.png" className="h-24 w-24 cursor-pointer" />
      <div className="flex flex-row p-2 gap-2 items-center">
        <a className="hover:text-purple-600 cursor-pointer">Mentorship</a>
        <button className="w-40 h-12 border-4 border-purple-600 rounded-full font-bold hover:bg-purple-600 hover:text-white">Say Hello</button>
      </div>
    </div>
  );
}

export default AppHeader;
