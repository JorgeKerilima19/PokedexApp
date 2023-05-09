import { useEffect, useState, useContext } from "react";
import { HiArrowCircleUp } from "react-icons/hi";
import { PokedexContext } from "../context/PokedexContext";

const BackToTop = () => {
  const [backToTop, setBackToTop] = useState(false);
  const { scrollUp } = useContext(PokedexContext);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  return (
    <div>
      {backToTop && (
        <HiArrowCircleUp onClick={scrollUp} className="back-to-top" />
      )}
    </div>
  );
};

export default BackToTop;
