"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Photo() {
  return (
    <div className="w-full h-full relative">
      <motion.div>
        <motion.div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten">
          <Image src="/asset/profile-picture.png" priority quality={100} fill alt="" className="object-contain"></Image>
        </motion.div>
      </motion.div>
    </div>
  );
}
