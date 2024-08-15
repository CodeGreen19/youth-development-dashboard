"use client";

import React from "react";
import { motion } from "framer-motion";

const page = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ y: 0, opacity: 1 }}>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit dicta
      ipsum doloremque esse vitae. Dolores, similique neque quidem sapiente,
      nesciunt minima expedita harum ab, fuga consequatur reprehenderit ex eos
      dolore!
    </motion.div>
  );
};

export default page;
