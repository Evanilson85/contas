// import { SubHeader } from "./subHeader";
// import { Accounnts } from "./accounts";
// import { CardInputAndOutput } from "./cardInputandOutput";
import { Welcome } from "../welcome";
export const Header = () => {
  return (
    <>
      <header className="bg-gradient-to-r from-violet-600 to-violet-900 min-h-120 w-full flex justify-start items-center p-2 pb-16">
        {/* <SubHeader /> */}
        {/* <Accounnts /> */}
        <Welcome />
        <div></div>
      </header>
      {/* <div className="flex justify-between my-4 mx-2">
        <CardInputAndOutput valueInput title="" value={"2.000,00"} />
        <CardInputAndOutput valueInput={false} title="" value={"100,00"} />
      </div> */}
    </>
  );
};
