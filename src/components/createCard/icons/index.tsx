import { useState } from "react";
import nubank from "@bank/nubank.svg";
import mercado from "@bank/mercado-pago-logo.svg";
import digio from "@bank/digio-logo.svg";
import ame from "@bank/ame-logo.svg";
import inter from "@bank/banco-inter.svg";
// import digio from "@bank/digio-logo.svg";

interface TYPEPROPS {
  bank?: string;
}

export const IconsComponents = (bank: TYPEPROPS) => {
  const [img, setImg] = useState("nubank");

  const ReturnImgIcons = () => {
    const json: any = {
      nubank: nubank,
      mercado: mercado,
      digio: digio
    };

    // setImg(json[bank]);
  };

  const icon = [
    {
      id: 1,
      logo: nubank,
      name: "nubank"
    },
    {
      id: 2,
      logo: mercado,
      name: "mercado pago"
    },
    {
      id: 3,
      logo: digio,
      name: "digio"
    },
    {
      id: 4,
      logo: ame,
      name: "ame"
    },
    {
      id: 5,
      logo: inter,
      name: "inter"
    }
  ];

  return (
    <div className="flex my-2">
      {icon.map(({ logo }) => (
        <div className="bg-input rounded-person h-[52px] w-[52px] flex items-center justify-center mr-3">
          <img src={logo} alt="" />
        </div>
      ))}
    </div>
  );
};
