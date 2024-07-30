// src/components/Others/Loading.jsx

import Gif from "../../../assets/gifs/giphy.gif";
const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center w-20 sm:w-40 h-screen m-auto">
      <img
        src={Gif.src}
        alt="loading"
        className="max-w-full h-auto flex m-auto bg-pink-soft-color rounded-full p-2 border-beige-light-color border-8"
      />
    </div>
  );
};

export default Loading;
