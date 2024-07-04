import { useEffect, useState } from "react";
import MainContent from "../../pages/index.astro";
import { motion } from "framer-motion";
import Gif from "../../assets/gifs/giphy.gif";
import "../../styles/global.css";
export default function Loading() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 10);
  }, []);

  return (
    <div className="loading">
      {isLoading ? (
        <div className="flex flex-col">
          <img src={Gif.src} className="w-28" />
        </div>
      ) : (
        <div className="bg-pink-soft-color">
          {" "}
          <MainContent />
        </div>
      )}
    </div>
  );
}
