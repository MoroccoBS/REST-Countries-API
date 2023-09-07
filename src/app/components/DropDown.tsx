"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
interface DropDownProps {
  setRegion: (string: string) => void;
  regions: string[];
}
function DropDown({ regions, setRegion }: DropDownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [regionActive, setRegionActive] = useState("");
  return (
    <div className="relative font-light shadow-2xl">
      <div className="gap-10 py-4 px-6 flex justify-between items-center bg-Blue rounded-md">
        <div className="flex gap-2 items-center">
          <h1>Filter by region </h1>
          {regionActive !== "" && (
            <div className="flex gap-2">
              <span>:</span>
              <h1
                onClick={() => {
                  setRegion("");
                  setRegionActive("");
                }}
                className="font-semibold text-xl cursor-pointer"
              >
                {regionActive}
              </h1>
            </div>
          )}
        </div>
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          animate={{ rotate: isOpen ? 180 : 0 }}
        >
          <IoIosArrowDown size={20} />
        </motion.button>
      </div>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 120,
              mass: 0.5,
              damping: 10,
            }}
            className="overflow-hidden shadow-2xl absolute bottom-0 left-0 w-full h-max z-10 translate-y-[101%] rounded-md flex flex-col bg-Blue"
          >
            {regions.map((region) => (
              <h1
                className="hover:bg-BlueHover cursor-pointer bg-Blue transition-all w-full p-4 h-full underline-offset-2 hover:underline"
                key={region}
                onClick={() => {
                  setRegion(region);
                  setRegionActive(region);
                  setIsOpen(false);
                }}
              >
                {region}
              </h1>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default DropDown;
