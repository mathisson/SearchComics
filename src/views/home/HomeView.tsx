import { useContext, useEffect } from "react";
import { RandomCharacter } from "../../components/RandomCharacter";
import { RandomComic } from "../../components/RandomComic";
import { RandomNumberContext } from "../../shared/provider/RandomNumberProvider";
import { RandomOffsetContext } from "../../shared/provider/RandomOffsetProvider";
import "../../styles/home.css";
export const HomeView = () => {
  const { setRandomNumber } = useContext(RandomNumberContext);
  const { setRandomOffset } = useContext(RandomOffsetContext);

  const randomNumberGen = (max: number) => {
    return setRandomNumber(Math.floor(Math.random() * max));
  };

  const randomOffset = (max: number) => {
    return setRandomOffset(Math.floor(Math.random() * max));
  };

  useEffect(() => {
    randomNumberGen(100);
    randomOffset(1400);
  }, []);
  return (
    <div className="homeWrapper">
      <div className="homeMainContainer">
        <RandomCharacter />
      </div>
      {/* <div className="homeComicsContainer">
        <RandomComic />
        <RandomComic />
        <RandomComic />
      </div> */}
    </div>
  );
};
