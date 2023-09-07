"use client";
import { motion } from "framer-motion";

function loading() {
  return (
    <motion.div
      className="w-full h-full flex justify-center items-center flex-col mt-24"
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1, repeat: Infinity }}
    >
      <h1 className="m-auto text-3xl font-bold">Loading...</h1>
    </motion.div>
  );
}

export default loading;
