import React from "react";
import logo from './logo1.svg';
import TodoApp from "./TodoApp";

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-pink-100 p-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-sm sm:max-w-md lg:max-w-lg text-center transition-all duration-300">
        <img src={logo} alt="logo" className="w-24 h-24 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-pink-600 mb-6">
          🌸 My To-Do List
        </h1>
        <TodoApp />
      </div>
    </div>
  );
}

export default App;
