import AppHeader from "./components/AppHeader";
import "./index.css"

function App() {
  return (
    <div className="p-6">
      <AppHeader />
      <div className="flex justify-center pt-20">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg">
          <a href="https://tailwindcss.com/">
            <img
              className="rounded-t-lg w-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyOJKdBGCpTCfxJGAaZHhwqN5k0jD1jvHOzWE6kq84ksnVgQbpqF2G3IO7NLZrJL9lp2I&usqp=CAU"
              alt="tailwind image"
            />
          </a>
          <div className="p-5">
            <p className="mb-3 font-normal text-gray-700">
              Rapidly build modern websites without ever leaving your HTML.
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
