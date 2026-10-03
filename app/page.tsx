"use client";
import { toast } from "react-toastify";

export default function Home() {


  const handleClick = () => {
    toast.success('Toast Message successfully show !',)
  };


  return (
    <div className="flex items-center justify-center h-screen  ">
      <div>
        <button onClick={handleClick} className="bg-primary text-white cursor-pointer px-6 py-3 rounded-md hover:bg-primary/90 transition-all duration-300 mb-5 mx-auto block">
          Primary Button
        </button>
        <div className="text-center text-white space-x-1">
          <span className=" bg-amber-700 p-1 rounded">Next js</span>
          <span className=" bg-blue-700 p-1 rounded">Tailwind</span>
          <span className=" bg-green-700 p-1 rounded">Typescript</span>
          <span className=" bg-red-700 p-1 rounded">Redux Toolkit</span>
          <span className=" bg-purple-700 p-1 rounded">Toastify</span>
          <span className=" bg-pink-700 p-1 rounded">Google Fonts</span>
        </div>
      </div>
    </div>
  );
}
