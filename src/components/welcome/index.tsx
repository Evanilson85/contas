import { User } from "../user";
export const Welcome = () => {
  return (
    <>
      <div className="bg-transparent rounded-person w-16">
        <User />
      </div>
      <div className="flex-col my-5 mx-3">
        <h2 className="text-cyan-50 font-Nunito text-sm font-medium">
          Bom dia
        </h2>
        <h2 className="text-cyan-50 font-Nunito text-2xl font-extrabold">
          Evanilson!
        </h2>
      </div>
    </>
  );
};
