export default function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-800">
      <div className="bg-gray-700 text-gray-200 p-6 border border-gray-600 rounded-2xl shadow-lg text-center">
        <h1 className="text-3xl font-bold text-gray-100">
          Bun + Vite + TypeScript + React + TailwindCSS Template
        </h1>
        <p className="mt-4 text-xl text-gray-300">
          Start customizing your project from here:{" "}
          <code className="bg-gray-600 text-gray-100 px-3 py-1 rounded">
            ./src/App.tsx
          </code>
        </p>
        <p className="mt-6 text-sm text-gray-400">
          &copy; Copyright {new Date().getFullYear()}, Pankaj Bepari. All rights reserved.
        </p>
      </div>
    </div>
  );
}
