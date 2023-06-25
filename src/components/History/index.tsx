import { useState, useRef, useEffect } from "react";
import Lottie from "lottie-react";
import food from "../../assets/iconAnimation/17100-food.json";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

interface TYPEPROPS {
  icon?: string;
  name?: string;
  date?: string;
  value?: string;
  category?: "despesa" | "entrada";
}

const style = {
  height: "100%",
  width: "100%"
};

export const History = ({ icon, category, date, name, value }: TYPEPROPS) => {
  const [animationState, setAnimationState] = useState({
    isStopped: true,
    isPaused: false,
    direction: -1
  });

  const [reverse, setReverse] = useState(1);

  const lottieRef = useRef() as any;

  const handleAnimation = () => {
    if (reverse === 1) {
      setReverse(-1);
    } else {
      setReverse(1);
    }
    lottieRef.current.setDirection(reverse);
    lottieRef.current.play();
  };

  return (
    <>
      {/* <div>historico</div> */}
      <div className="flex justify-between items-center my-6">
        <div className="flex items-center ">
          <div className="h-[52px] w-[52px]">
            <Lottie
              className="bg-input rounded-person "
              lottieRef={lottieRef}
              animationData={food}
              onClick={handleAnimation}
              // initialSegment={initialSegment}
              style={style}
              autoplay={animationState.isStopped}
              loop={false}

              // interactivity={interactivity}
            />
          </div>
          <h2 className="mx-2">{name}</h2>
        </div>
        <div>
          <p className="text-end">{date}</p>
          <strong
            className={`flex ${
              category === "entrada" ? "text-green-500" : "text-red-500"
            }`}
          >
            {category === "entrada" ? (
              <AiOutlineArrowUp size={24} className="mx-2" />
            ) : (
              <AiOutlineArrowDown size={24} className="mx-2" />
            )}
            R$ {value}
          </strong>
        </div>
      </div>
    </>
  );
};
