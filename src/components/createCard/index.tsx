import { useState, useEffect } from "react";
import { GrFormAdd } from "react-icons/gr";
import { GoCheck } from "react-icons/go";
import { NumericFormat } from "react-number-format";
import { IconsComponents } from "./icons";

export const CreateCardComponent = () => {
  const [valor, setValor] = useState(0);
  const [valueSelect, setValueSelect] = useState<number[]>([]);

  useEffect(() => {
    setValue();
  }, []);

  const handleChangeIcon = (event: any) => {
    event.preventDefault();
    alert("oi");
  };

  const setValue = () => {
    const valores: number[] = [];
    for (let i = 1; i <= 31; i++) {
      valores.push(i);
    }
    setValueSelect(valores);
  };

  return (
    <div className="pb-3">
      <form action="" className="p-2">
        <div className="flex items-center justify-center flex-col my-4 ">
          <NumericFormat
            className="bg-[#e2e8f0] flex flex-col items-center h-[40px] justify-center rounded text-center"
            value={valor}
            prefix={"R$ "}
            decimalScale={2}
            displayType={"input"}
            decimalSeparator=","
            fixedDecimalScale={true}
          />

          <label htmlFor="value">Limite do cartão</label>
        </div>
        <div className="my-4">
          <label htmlFor="name">Nome do cartão</label>
          <input
            type="text"
            name="name"
            id="name"
            className="bg-[#e2e8f0] flex flex-col items-center h-[40px] justify-center rounded w-full px-2"
          />
        </div>
        <div className="my-4">
          <label htmlFor="icon">Escolha o icone</label>
          <div className="relative flex items-center">
            <button
              onClick={handleChangeIcon}
              className="bg-[#e2e8f0] flex flex-col items-center h-[40px] w-[40px] justify-center rounded-person"
            >
              <GrFormAdd className="" size={24} />
            </button>
          </div>
          <IconsComponents />
        </div>
        <div className="my-4 flex justify-between">
          <div>
            <label htmlFor="">Fecha dia</label>
            <p className="bg-[#e2e8f0] flex flex-col items-center h-[40px] justify-center rounded">
              1
            </p>
          </div>
          <div>
            <label htmlFor="">Vence dia</label>
            <select
              name=""
              id=""
              className="bg-[#e2e8f0] flex flex-col items-center h-[40px] justify-center rounded w-full p-[11px]"
              onChange={handleChangeIcon}
            >
              {valueSelect.map((item) => {
                return (
                  <option key={item} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
            {/* <p className="bg-[#e2e8f0] flex flex-col items-center h-[40px] justify-center rounded">
              3
            </p> */}
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="h-[40px] bg-green-200 text-green-95000 w-full rounded flex items-center justify-center"
          >
            <p className="text-green-950 mx-2">Salvar</p>
            {/* <GoCheck size={24} className="text-green-950" /> */}
          </button>
        </div>
      </form>
    </div>
  );
};
