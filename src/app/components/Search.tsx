"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdCancel } from "react-icons/md";

interface SearchProps {
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}
function Search({ value, onSearch }: SearchProps) {
  // const [value, setValue] = useState("");
  // const isTyping = value !== "";
  return (
    <div className="max-w-xs w-full relative flex px-6 py-4 bg-Blue shadow-xl rounded-md items-center gap-6">
      {/* {isTyping ? (
        <AnimatePresence mode="wait">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.15,
              type: "spring",
              stiffness: 120,
              mass: 0.5,
              damping: 10,
            }}
            onClick={() => {
              setValue("");
            }}
          >
            <MdCancel size={25} />
          </motion.button>
        </AnimatePresence>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <AiOutlineSearch className={``} size={25} />
        </motion.div>
      )} */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <AiOutlineSearch className={``} size={25} />
      </motion.div>
      <input
        onChange={(e) => {
          onSearch(e);
        }}
        value={value}
        type="text"
        placeholder="Search"
        className="w-full h-full bg-transparent outline-none"
      />
    </div>
  );
}

export default Search;
