import { useState } from "react";

import { CardValueAll } from "../../components/Cards/cardValueAll";
import eye from "../../assets/icons/eye.svg";
import hideEye from "../../assets/icons/hideEye.svg";
import { Balances } from "../../components/balances";

export const Home = () => {
  const [eyeShow, setEyeShow] = useState(false);

  const handleHideValueBalances = () => {
    setEyeShow((state) => !state);
  };

  return (
    <>
      <div className="bg-white w-95 min-h-120 mx-auto rounded relative bottom-10 pt-1 px-4 shadow-lg">
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
      </div>
    </>
  );
};
