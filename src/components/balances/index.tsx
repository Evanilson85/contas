import nubank from "../../assets/bank/nubank.svg";
import mercado from "../../assets/bank/mercado-pago-logo.svg";
import digio from "../../assets/bank/digio-logo.svg";

interface TYPEBANKS {
  id: number;
  logo: string;
  name: string;
  value: string | number;
}

export const Balances = () => {
  const banks: Array<TYPEBANKS> = [
    {
      id: 1,
      logo: mercado,
      name: "Mercado Pago",
      value: "2.000,00"
    },
    {
      id: 2,
      logo: nubank,
      name: "Nubank",
      value: "1.000,00"
    },
    {
      id: 3,
      logo: digio,
      name: "Digio",
      value: "3.000,00"
    }
  ];

  return (
    <div className="border-t-2 border-gray-100 py-3 my-4">
      <h1 className="text-black font-Nunito text-base font-extrabold">
        Meus Saldos
      </h1>
      {banks.length > 0 ? (
        banks.map(({ id, name, logo, value }: TYPEBANKS) => {
          return (
            <div
              key={id}
              className="flex justify-between items-center border-b-2 border-gray-100 pb-3 mt-2 py-5"
            >
              <div className="flex items-center">
                <div
                  className={`${"bg-input rounded-person p-2 h-[52px] w-[52px] flex items-center justify-center"}`}
                >
                  <img className="w-9" src={logo} alt="" />
                </div>
                <div className="flex flex-col mx-2">
                  <h2>{name}</h2>
                  {/* <p>Conta Corrente</p> */}
                  <p>Cartão de Credito</p>
                </div>
              </div>
              <h3 className="text-black font-Nunito text-1xl font-extrabold">
                R$ {value}
              </h3>
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
        Adicionar saldo
      </button>
    </div>
  );
};
