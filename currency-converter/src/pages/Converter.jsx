import { useState } from "react";
import axios from "axios";

export default function Converter() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  async function handleConvert() {
    try {
      const regex = /(\d+(?:\.\d+)?)\s*([a-zA-Z]{3})\s*in\s*([a-zA-Z]{3})/i;
      const match = input.match(regex);
      if (!match) {
        setResult("Введите в формате: 15 usd in rub");
        return;
      }
      const [, amount, from, to] = match;

      const res = await axios.get(`https://api.exchangerate.host/convert`, {
        params: { from, to, amount },
      });

      setResult(`${amount} ${from.toUpperCase()} = ${res.data.result.toFixed(2)} ${to.toUpperCase()}`);
    } catch {
      setResult("Ошибка при получении данных.");
    }
  }

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded-2xl shadow">
      <h2 className="text-2xl font-semibold mb-4">Конвертер валют</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Например: 15 usd in rub"
        className="border w-full p-3 rounded mb-4"
      />
      <button
        onClick={handleConvert}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Конвертировать
      </button>
      {result && <p className="mt-4 font-medium">{result}</p>}
    </div>
  );
}
