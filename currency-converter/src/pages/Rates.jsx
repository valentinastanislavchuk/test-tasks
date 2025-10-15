import { useEffect, useState } from "react";
import axios from "axios";
import BaseCurrencySelector from "../components/BaseCurrencySelector";

export default function Rates() {
  const [base, setBase] = useState(localStorage.getItem("baseCurrency") || "USD");
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadRates() {
      setLoading(true);
      const res = await axios.get(`https://api.exchangerate.host/latest`, { params: { base } });
      setRates(res.data.rates);
      setLoading(false);
    }
    loadRates();
  }, [base]);

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white p-6 rounded-2xl shadow">
      <h2 className="text-2xl font-semibold mb-4">Текущие курсы валют</h2>
      <BaseCurrencySelector base={base} setBase={setBase} />
      {loading ? (
        <p className="mt-4">Загрузка...</p>
      ) : (
        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-3">
          {Object.entries(rates)
            .slice(0, 30) // показываем первые 30 валют
            .map(([symbol, rate]) => (
              <div key={symbol} className="border p-3 rounded-lg bg-gray-50">
                <strong>{symbol}</strong>: {rate.toFixed(2)}
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
