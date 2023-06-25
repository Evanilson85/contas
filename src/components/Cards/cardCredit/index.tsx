import nubank from "../../../assets/bank/nubank.svg";
import mercado from "../../../assets/bank/mercado-pago-logo.svg";
import digio from "../../../assets/bank/digio-logo.svg";
import { ComponentCardValue } from "./componentCardValue";
import { AiOutlinePlus } from "react-icons/ai";

interface TYPEBANKS {
  id: number;
  logo: string;
  name: string;
  value: string | number;
  negative: string | number;
}

export const CardCredit = () => {
  const banks: Array<TYPEBANKS> = [
    {
      id: 1,
      logo: mercado,
      name: "Mercado Pago",
      value: "2.000,00",
      negative: 0
    },
    {
      id: 2,
      logo: nubank,
      name: "Nubank",
      value: "1.000,00",
      negative: 40
    }
    // {
    //   id: 3,
    //   logo: digio,
    //   name: "Digio",
    //   value: "3.000,00",
    //   negative: 20
    // }
  ];

  return (
    <div className="border-t-2 border-gray-100 py-3 my-4">
      {banks.length > 0 ? (
        banks.map(({ id, name, logo, value, negative }: TYPEBANKS) => {
          return (
            <div
              key={id}
              className="flex flex-col justify-between border-b-2 border-gray-100 pb-3 mt-2 py-5"
            >
              <div className="flex items-center">
                <div
                  className={`${"bg-input rounded-person p-2 h-[52px] w-[52px] flex items-center justify-center"}`}
                >
                  <img className="w-9" src={logo} alt="" />
                </div>
                <div className="flex flex-col mx-2">
                  <h2 className="text-[10px] text-slate-400 font-Nunito font-extrabold">
                    {name}
                  </h2>
                  {/* <p>Conta Corrente</p> */}
                  <p className="font-Nunito font-extrabold">{name}</p>
                </div>
              </div>
              <div className="flex justify-between">
                <ComponentCardValue title="Disponivel" value={Number(value)} />
                <ComponentCardValue
                  title="Fatura atual"
                  value={+negative}
                  negative
                />
              </div>
            </div>
          );
        })
      ) : (
        <div className="min-h-120 flex items-center justify-center ">
          <h2 className="text-violet-600 font-Nunito font-extrabold">
            NENHUM CARTÂO CADASTRADO!
          </h2>
        </div>
      )}
      <button className="w-full bg-btnLite h-12 rounded text-btnText font-Nunito font-extrabold mt-3">
        Adicionar cartão
      </button>
    </div>
  );
};
