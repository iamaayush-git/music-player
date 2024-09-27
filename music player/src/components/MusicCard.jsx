import React, { useState } from "react";
import { motion } from "framer-motion";
const MusicCard = ({ image, name, artist }) => {
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  return (
    <div className="h-60 w-52 border-2 border-slate-500 text-center mt-14 cursor-pointer flex flex-col items-center justify-start gap-5 pb-5 overflow-hidden">
      <img src={image} alt="" className="w-full h-[60%] object-cover" />
      <div className="w-full">
        <motion.p
          initial={{ x: 0 }} // Initial position
          animate={{ x: isMouseEntered ? [-100, 200] : -100 }}
          transition={{
            duration: isMouseEntered ? 5 : 0.5,
            repeat: Infinity, // Loop indefinitely
            repeatType: isMouseEntered ? "loop" : "" // Can be "loop", "mirror", or "reverse"
          }}
          onMouseEnter={() => setIsMouseEntered(true)}
          onMouseLeave={() => setIsMouseEntered(false)}
          className="w-full font-semibold text-lg px-2 text-nowrap"
        >
          {name}
        </motion.p>

        <p className="text-sm">{artist}</p>
      </div>
    </div>
  );
};

export default MusicCard;
