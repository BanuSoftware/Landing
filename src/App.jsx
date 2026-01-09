import React from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

function App() {

  const boxRef = useRef(null)

  useGSAP(()=>{
    gsap.to(boxRef.current, {x: 200})
  }, {})



    return (
      <>
        <motion.div style={{
            color: 'green',
            fontSize: 20,
            width: '300px',
            height: '30px',
            textAlign: 'center',
            border: '2px solid green',
            margin: '40px'
        }}

            whileHover={{ scale: 0.5 }}
        >
            test
        </motion.div>

        <div ref={boxRef} className="w-50 h-50 bg-blue-500 flex justify-center items-center text-4xl">
          box
        </div>
      
      
      </>
        
        
    );
}

export default App;