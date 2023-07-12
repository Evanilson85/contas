// import { SubHeader } from "./subHeader";
// import { Accounnts } from "./accounts";
// import { CardInputAndOutput } from "./cardInputandOutput";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";
import { useParams, useLocation } from "react-router-dom";
import { Welcome } from "../welcome";
export const Header = () => {
  const { pathname } = useLocation();
  // const { pathname } = useParams();
  console.log(location);
  return (
    <>
      <header className="bg-gradient-to-r from-violet-600 to-violet-900 min-h-120 w-full flex justify-start items-center p-2 pb-16">
        {/* <SubHeader /> */}
        {/* <Accounnts /> */}
        {pathname === "/" ? (
          <Welcome />
        ) : (
          <button className="text-white w-8">
            <BsArrowLeft size={24} />
          </button>
        )}

        <div></div>
      </header>
      {/* <div className="flex justify-between my-4 mx-2">
        <CardInputAndOutput valueInput title="" value={"2.000,00"} />
        <CardInputAndOutput valueInput={false} title="" value={"100,00"} />
      </div> */}
    </>
  );
};
