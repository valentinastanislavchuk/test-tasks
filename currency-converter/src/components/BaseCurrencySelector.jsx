export default function BaseCurrencySelector({ base, setBase }) {
  return (
    <div className="mt-4">
      <label className="font-medium">Базовая валюта: </label>
      <select
        value={base}
        onChange={(e) => {
          const newBase = e.target.value;
          setBase(newBase);
          localStorage.setItem("baseCurrency", newBase);
        }}
        className="border p-2 rounded ml-2"
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="RUB">RUB</option>
        <option value="GBP">GBP</option>
        <option value="JPY">JPY</option>
      </select>
    </div>
  );
}
