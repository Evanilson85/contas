import { useState } from "react";

export const FinanceForm = () => {
  const [value, setValue] = useState("");
  const [type, setType] = useState("expense");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Aqui você pode enviar os dados para um servidor ou executar qualquer outra lógica de manipulação dos dados
    console.log("Value:", value);
    console.log("Type:", type);
    // Resetar os campos do formulário
    setValue("");
    setType("expense");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4 bg-white rounded shadow"
    >
      <h2 className="text-xl font-semibold mb-4">Cadastro de Finanças</h2>
      <div className="mb-4">
        <label htmlFor="value" className="block text-gray-700">
          Valor:
        </label>
        <input
          type="number"
          id="value"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="type" className="block text-gray-700">
          Tipo:
        </label>
        <select
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded"
          required
        >
          <option value="expense">Gasto</option>
          <option value="income">Saldo</option>
        </select>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Cadastrar
      </button>
    </form>
  );
};
