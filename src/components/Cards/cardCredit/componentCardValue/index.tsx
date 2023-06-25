interface TYPEPROPS {
  title: string;
  value: number;
  negative?: boolean;
}

export const ComponentCardValue = ({ title, value, negative }: TYPEPROPS) => {
  return (
    <>
      <div className="mt-5 pl-1">
        <h2>{title}</h2>
        {negative ? (
          <h3
            className={`text-black font-Nunito text-1xl font-extrabold ${
              value > 0 ? "text-red-500" : "text-blue-500"
            }`}
          >
            -R$ {value}
          </h3>
        ) : (
          <h3 className={`text-black font-Nunito text-1xl font-extrabold`}>
            R$ {value}
          </h3>
        )}
      </div>
    </>
  );
};
