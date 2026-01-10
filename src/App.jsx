import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";

function App() {
  const boxRef = useRef(null);

  useGSAP(() => {
    gsap.to(boxRef.current, { x: 200, duration: 1 });
  }, []);

  return (
    <>
      <motion.div
        className="text-[rgb(var(--brand))] text-xl border-2 border-[rgb(var(--brand))] 
                  w-72 h-12 flex items-center justify-center m-10"
      >
        Tailwind Config OK
      </motion.div>

      <div
        ref={boxRef}
        className="w-48 h-48 bg-[rgb(var(--brand))] flex justify-center items-center 
                  text-4xl text-white"
      >
        box
      </div>
      <div className="p-10 space-y-4 font-[Indivisible]">
        <p className="font-thin">Thin</p>
        <p className="font-light">Light</p>
        <p className="font-normal">Regular</p>
        <p className="font-medium">Medium</p>
        <p className="font-semibold">Semibold</p>
        <p className="font-bold">Bold</p>
        <p className="font-black">Black</p>

        <p className="italic font-medium">
          Medium Italic
        </p>
      </div>
    </>
  );
}

export default App;
