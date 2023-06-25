import { useState } from "react";

import { CardValueAll } from "../../components/Cards/cardValueAll";
import eye from "../../assets/icons/eye.svg";
import hideEye from "../../assets/icons/hideEye.svg";
import { Balances } from "../../components/balances";
import { ContainerMain } from "../../components/container";
import { CardCredit } from "../../components/Cards/cardCredit";
import { History } from "../../components/History";

export const Home = () => {
  const [eyeShow, setEyeShow] = useState(false);

  const handleHideValueBalances = () => {
    setEyeShow((state) => !state);
  };

  return (
    <>
      <ContainerMain>
        <div className="flex items-center justify-between">
          <CardValueAll />
          <div className="w-9">
            <img
              src={eyeShow ? eye : hideEye}
              alt="eye"
              className={`w-full`}
              onClick={handleHideValueBalances}
            />
          </div>
        </div>
        <Balances />
      </ContainerMain>
      <ContainerMain>
        <h1 className="text-black font-Nunito text-base font-extrabold mt-3">
          Cartões de crédito
        </h1>
        <CardCredit />
      </ContainerMain>

      <ContainerMain padd>
        <h1 className="text-black font-Nunito text-base font-extrabold mt-3">
          Historico do mês
        </h1>
        <History
          name="Alimetação"
          date="25 jun"
          category="entrada"
          value="200,00"
        />
        <History
          name="Pagamento"
          date="25 jun"
          category="entrada"
          value="200,00"
        />
        <History
          name="Alimetação"
          date="25 jun"
          category="despesa"
          value="200,00"
        />
      </ContainerMain>
    </>
  );
};
