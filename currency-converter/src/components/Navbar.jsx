import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-3 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-semibold">💱 Currency Converter</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Конвертер</Link>
        <Link to="/rates" className="hover:underline">Курсы валют</Link>
      </div>
    </nav>
  );
}
