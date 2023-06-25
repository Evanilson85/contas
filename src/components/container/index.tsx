interface TYPECHILDREN {
  children: any;
  padd?: boolean;
}

export const ContainerMain = ({ children, padd }: TYPECHILDREN) => {
  return (
    <>
      <div
        className={`bg-white w-95 min-h-120 mx-auto rounded relative bottom-10 pt-1 px-4 shadow-lg ${
          padd ? "pb-5" : "0"
        }`}
      >
        {children}
      </div>
    </>
  );
};
