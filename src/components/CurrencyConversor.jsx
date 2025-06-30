import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('ARS');
  const [converted, setConverted] = useState(null);

  const API_KEY = 'a3af9b949915129b4c6fcdc8'; // 👈 Reemplazá con tu clave
  const url = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${fromCurrency}/${toCurrency}/${amount}`;

  useEffect(() => {
    const convert = async () => {
      try {
        const res = await axios.get(url);
        if(res.result === null){
          setConverted(res.data)
        }
        if (res.data && res.data.result === 'success') {
          setConverted(res.data.conversion_result.toFixed(2));
        } else {
          setConverted('Error');
        }
      } catch (error) {
        console.error('Error al convertir divisas:', error);
        setConverted('Error');
      }
    };

    convert();
  }, [amount, fromCurrency, toCurrency]);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-lg mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-center text-gray-800">Convertí tu moneda</h2>
      <div className="flex flex-wrap gap-3 justify-center items-center mb-4">
        <input
          type="number"
          value={amount}
          min='0'
          onChange={e => setAmount(e.target.value)}
          className="border px-3 py-2 w-24 rounded"
        />
        <select value={fromCurrency} onChange={e => setFromCurrency(e.target.value)} className="border px-3 py-2 rounded">
          <option>USD</option>
          <option>ARS</option>
          <option>EUR</option>
        </select>
        <span className="text-gray-600">→</span>
        <select value={toCurrency} onChange={e => setToCurrency(e.target.value)} className="border px-3 py-2 rounded">
          <option>ARS</option>
          <option>USD</option>
          <option>EUR</option>
        </select>
      </div>
      {converted && (
        <p className="text-center text-lg text-green-600 font-semibold">
          {amount} {fromCurrency} = {converted} {toCurrency}
        </p>
      )}
    </div>
  );
}

export default CurrencyConverter;
