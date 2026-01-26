import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollDownIndicator() {
  const [visible, setVisible] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasScrolled) setVisible(true);
    }, 5000);

    const handleScroll = () => {
      setHasScrolled(true);
      setVisible(false);
    };

    window.addEventListener("scroll", handleScroll, { once: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasScrolled]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="fixed bottom-7 right-25 -translate-x-1/2 hidden md:flex flex-col items-center pointer-events-none"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 1.6,
              ease: "easeInOut",
              repeat: Infinity,
            }}
            className="flex flex-col items-center gap-1 text-[#E4204E]"
          >
            <span className="text-4xl">⌄</span>
            <span className="text-4xl">⌄</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
